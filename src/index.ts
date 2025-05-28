import { getCursorIdeInstallPathMethod1 } from './utils/registry';
import { getFileVersion } from './utils/fileVersion';
import { createTranslatedFile } from './utils/filePatch';
import { patchPackageJson, deployInterceptor, restorePackageJson } from './utils/packageManager';
import { loadLanguagePackage } from './utils/languageManager';
import path from 'path';
import fs from 'fs';

const INTERCEPTOR_FILE_NAME = 'cursorTranslatorMain.js';

/**
 * 언어 패치 적용
 */
async function applyLanguagePatch(): Promise<void> {
    console.log('\n🎯 한글 패치 적용 중...');
    console.log('=====================================');

    // Windows 플랫폼 체크
    if (process.platform !== 'win32') {
        console.error('❌ 현재 Windows만 지원됩니다.');
        return;
    }

    const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
    const cursorIdeExecutablePath = path.join(cursorIdeInstallPath, 'Cursor.exe');
    const fileVersion = getFileVersion(cursorIdeExecutablePath);

    console.log(`📍 Cursor 설치 경로: ${cursorIdeInstallPath}`);
    console.log(`📦 Cursor 버전: ${fileVersion}`);

    const targetPath = path.join(
        cursorIdeInstallPath,
        'resources', 'app', 'out', 'vs', 'workbench', 'workbench.desktop.main.js'
    );
    const targetDir = path.dirname(targetPath);

    // 1. 기존 번역 파일 정리 (단순화된 파일명 사용)
    console.log('\n🧹 이전 번역 파일 정리 중...');
    const translatedFileName = 'workbench.desktop.main_translated.js';
    const translatedFilePath = path.join(targetDir, translatedFileName);

    // 기존 번역 파일이 있는지 확인
    if (fs.existsSync(translatedFilePath)) {
        console.log(`✅ 번역 파일이 이미 존재합니다: ${translatedFileName}`);
    } else {
        console.log(`📝 한글 번역 파일 생성 중...`);

        const languageCode = 'ko';
        const languagePackage = await loadLanguagePackage(languageCode);
        if (!languagePackage) {
            throw new Error('한글 언어 패키지를 로드할 수 없습니다');
        }

        console.log(`📚 ${languagePackage.replacements.length}개의 한글 번역 로드됨`);

        const result = createTranslatedFile(targetPath, languagePackage.replacements, languageCode);

        console.log(`✅ 번역 파일 생성 완료: ${path.basename(result.translatedFilePath)}`);
        console.log(`   ${result.appliedCount}개의 번역 적용됨`);
    }

    // 2. 인터셉터 배포
    console.log('\n📁 인터셉터 배포 중...');
    const interceptorSource = path.join(__dirname, '..', 'interceptor', INTERCEPTOR_FILE_NAME);

    if (!fs.existsSync(interceptorSource)) {
        throw new Error(`인터셉터 파일을 찾을 수 없습니다: ${interceptorSource}`);
    }

    deployInterceptor(cursorIdeInstallPath, interceptorSource, INTERCEPTOR_FILE_NAME);
    console.log('✅ 인터셉터 배포 완료');

    // 3. package.json 패치
    console.log('\n⚙️ package.json 업데이트 중...');
    patchPackageJson(cursorIdeInstallPath, INTERCEPTOR_FILE_NAME);
    console.log('✅ package.json 업데이트 완료');

    console.log('\n🎉 한글 패치 적용 완료!');
    console.log('====================================');
    console.log('');
    console.log('📌 다음 단계:');
    console.log('   1. Cursor를 완전히 종료하세요');
    console.log('   2. Cursor를 다시 시작하세요');
    console.log('');
}

/**
 * 원본 복구 및 모든 패치 제거
 */
async function restoreAndCleanup(): Promise<void> {
    console.log('\n🔄 원본 복구 및 패치 제거 중...');
    console.log('==============================================');

    // Windows 플랫폼 체크
    if (process.platform !== 'win32') {
        console.error('❌ 현재 Windows만 지원됩니다.');
        return;
    }

    const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
    const targetDir = path.join(
        cursorIdeInstallPath,
        'resources', 'app', 'out', 'vs', 'workbench'
    );

    // 1. 번역 파일 제거
    console.log('🧹 번역 파일 제거 중...');
    const translatedFileName = 'workbench.desktop.main_translated.js';
    const translatedFilePath = path.join(targetDir, translatedFileName);

    let removedCount = 0;
    if (fs.existsSync(translatedFilePath)) {
        fs.unlinkSync(translatedFilePath);
        removedCount++;
        console.log(`   제거됨: ${translatedFileName}`);
    }

    // 2. package.json 복구
    console.log('⚙️ package.json 복구 중...');
    try {
        restorePackageJson(cursorIdeInstallPath);
        console.log('✅ package.json 복구 완료');
    } catch (error) {
        console.warn('⚠️ package.json을 복구할 수 없습니다 (패치되지 않았을 수 있음)');
    }

    console.log('\n🎉 복구 완료!');
    console.log('========================');
    console.log(`📊 ${removedCount}개의 번역 파일 제거됨`);
    console.log('');
    console.log('📌 다음 단계:');
    console.log('   1. Cursor를 다시 시작하세요');
    console.log('   2. 영문 인터페이스로 복구됨');
    console.log('');
}

/**
 * 도움말 출력
 */
function printHelp(): void {
    console.log('\n🌐 Cursor Language Patcher v2.0.0');
    console.log('================================');
    console.log('\n사용 가능한 명령어:');
    console.log('  bun run patch    # 한글 패치 적용');
    console.log('  bun run restore  # 원본으로 복구');
    console.log('  bun run help     # 이 도움말 보기');
    console.log('\n자세한 내용은 README.md를 참조하세요.');
}

/**
 * 메인 진입점
 */
async function main(): Promise<void> {
    const args = process.argv.slice(2);
    
    try {
        const cmd = args[0]?.toLowerCase();
        switch (cmd) {
            // 패치 적용
            case '--patch':
            case 'patch':
            case '-p':
                await applyLanguagePatch();
                break;

            // 복구
            case '--restore':
            case 'restore':
            case '-r':
                await restoreAndCleanup();
                break;

            // 도움말
            case '--help':
            case 'help':
            case '-h':
                printHelp();
                break;

            // 명령어가 없거나 알 수 없는 명령어
            default:
                if (cmd) {
                    console.log(`\n❌ 알 수 없는 명령어: ${cmd}`);
                }
                printHelp();
                break;
        }
    } catch (error) {
        console.error('\n❌ 오류가 발생했습니다:', error);
        console.log('\n지원이 필요하면 GitHub 이슈를 등록해주세요.');
        process.exit(1);
    }
}

// 실행
if (require.main === module) {
    main().catch(console.error);
}