import { getCursorIdeInstallPathMethod1 } from './utils/registry';
import { getFileVersion } from './utils/fileVersion';
import { createTranslatedFile } from './utils/filePatch';
import { patchPackageJson, deployInterceptor, restorePackageJson } from './utils/packageManager';
import { loadLanguagePackage } from './utils/languageManager';
import path from 'path';
import fs from 'fs';
import readline from 'readline';

const INTERCEPTOR_FILE_NAME = 'cursorTranslatorMain.js';

/**
 * 사용자 입력을 위한 readline 인터페이스 생성
 */
function createReadlineInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

/**
 * 사용자 입력 대기
 */
function askQuestion(question: string): Promise<string> {
    const rl = createReadlineInterface();
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

/**
 * 메인 메뉴 표시
 */
function showMainMenu(): void {
    console.log('');
    console.log('🌐 Cursor Language Patcher');
    console.log('=========================');
    console.log('');
    console.log('Please select an option:');
    console.log('');
    console.log('1. Apply Korean Language Patch');
    console.log('2. Restore Original & Remove All Patches');
    console.log('3. Exit');
    console.log('');
}

/**
 * 언어 패치 적용
 */
async function applyLanguagePatch(): Promise<void> {
    console.log('\n🎯 Applying Korean Language Patch...');
    console.log('=====================================');

    const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
    const cursorIdeExecutablePath = path.join(cursorIdeInstallPath, 'Cursor.exe');
    const fileVersion = getFileVersion(cursorIdeExecutablePath);

    console.log(`📍 Cursor Install Path: ${cursorIdeInstallPath}`);
    console.log(`📦 Cursor Version: ${fileVersion}`);

    const targetPath = path.join(
        cursorIdeInstallPath,
        'resources', 'app', 'out', 'vs', 'workbench', 'workbench.desktop.main.js'
    );
    const targetDir = path.dirname(targetPath);

    // 1. 기존 번역 파일 정리 (단순화된 파일명 사용)
    console.log('\n🧹 Cleaning up old translation files...');
    const translatedFileName = 'workbench.desktop.main_translated.js';
    const translatedFilePath = path.join(targetDir, translatedFileName);

    // 기존 번역 파일이 있는지 확인
    if (fs.existsSync(translatedFilePath)) {
        console.log(`✅ Translation file already exists: ${translatedFileName}`);
    } else {
        console.log(`📝 Creating Korean translation file...`);

        const languageCode = 'ko'; // 한국어로 고정
        const languagePackage = await loadLanguagePackage(languageCode);
        if (!languagePackage) {
            throw new Error('Failed to load Korean language package');
        }

        console.log(`📚 Loaded ${languagePackage.replacements.length} Korean translations`);

        const result = createTranslatedFile(targetPath, languagePackage.replacements, languageCode);

        console.log(`✅ Translation file created: ${path.basename(result.translatedFilePath)}`);
        console.log(`   Applied ${result.appliedCount} translations`);
    }

    // 2. 인터셉터 배포
    console.log('\n📁 Deploying interceptor...');
    const interceptorSource = path.join(__dirname, '..', 'interceptor', INTERCEPTOR_FILE_NAME);

    if (!fs.existsSync(interceptorSource)) {
        throw new Error(`Interceptor file not found: ${interceptorSource}`);
    }

    deployInterceptor(cursorIdeInstallPath, interceptorSource, INTERCEPTOR_FILE_NAME);
    console.log('✅ Interceptor deployed successfully');

    // 3. package.json 패치
    console.log('\n⚙️ Updating package.json...');
    patchPackageJson(cursorIdeInstallPath, INTERCEPTOR_FILE_NAME);
    console.log('✅ Package.json updated successfully');

    console.log('\n🎉 KOREAN PATCH APPLIED SUCCESSFULLY!');
    console.log('====================================');
    console.log('');
    console.log('📌 Next Steps:');
    console.log('   1. Close Cursor completely');
    console.log('   2. Restart Cursor');
    console.log('   3. Enjoy Korean interface! 🇰🇷');
    console.log('');
}

/**
 * 원본 복구 및 모든 패치 제거
 */
async function restoreAndCleanup(): Promise<void> {
    console.log('\n🔄 Restoring Original & Removing All Patches...');
    console.log('==============================================');

    const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
    const targetDir = path.join(
        cursorIdeInstallPath,
        'resources', 'app', 'out', 'vs', 'workbench'
    );

    // 1. 번역 파일 제거 (단순화된 파일명)
    console.log('🧹 Removing translation files...');
    const translatedFileName = 'workbench.desktop.main_translated.js';
    const translatedFilePath = path.join(targetDir, translatedFileName);

    let removedCount = 0;
    if (fs.existsSync(translatedFilePath)) {
        fs.unlinkSync(translatedFilePath);
        removedCount++;
        console.log(`   Removed: ${translatedFileName}`);
    }

    // 2. package.json 복구
    console.log('⚙️ Restoring package.json...');
    try {
        restorePackageJson(cursorIdeInstallPath);
        console.log('✅ Package.json restored successfully');
    } catch (error) {
        console.warn('⚠️ Could not restore package.json (may not be patched)');
    }

    console.log('\n🎉 RESTORATION COMPLETED!');
    console.log('========================');
    console.log(`📊 Removed ${removedCount} translation files`);
    console.log('');
    console.log('📌 Next Steps:');
    console.log('   1. Restart Cursor');
    console.log('   2. Interface restored to original English');
    console.log('');
}

/**
 * 메인 실행 함수
 */
async function main(): Promise<void> {
    console.log('🌐 Cursor Language Patcher v2.0.0');
    console.log('==================================');

    // Windows 플랫폼 체크
    if (process.platform !== 'win32') {
        console.error('❌ This tool currently supports Windows only.');
        return;
    }

    while (true) {
        try {
            showMainMenu();
            const choice = await askQuestion('Enter your choice (1-3): ');

            switch (choice) {
                case '1':
                    await applyLanguagePatch();
                    break;

                case '2':
                    await restoreAndCleanup();
                    break;

                case '3':
                    console.log('\nGoodbye! 👋');
                    return;

                default:
                    console.log('\n❌ Invalid choice. Please enter 1, 2, or 3.');
                    continue;
            }

            // 작업 완료 후 계속할지 묻기
            const continueChoice = await askQuestion('\nPress Enter to continue or type "exit" to quit: ');
            if (continueChoice.toLowerCase() === 'exit') {
                console.log('\nGoodbye! 👋');
                break;
            }

        } catch (error) {
            console.error('\n❌ An error occurred:', error);
            console.log('\nPlease try again or contact support.');

            const continueChoice = await askQuestion('\nPress Enter to continue or type "exit" to quit: ');
            if (continueChoice.toLowerCase() === 'exit') {
                break;
            }
        }
    }
}

// 실행
if (require.main === module) {
    main().catch(console.error);
}