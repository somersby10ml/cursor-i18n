import fs from 'fs';
import path from 'path';
import { osLocale } from 'os-locale';
import { createTranslatedFile } from './utils/filePatch';
import { getFileVersion } from './utils/fileVersion';
import { loadLanguagePackage } from './utils/languageManager';
import { deployInterceptor, patchPackageJson, restorePackageJson } from './utils/packageManager';
import { getCursorIdeInstallPathMethod1 } from './utils/registry';

const INTERCEPTOR_FILE_NAME = 'cursorTranslatorMain.js';
const languageCode = 'ko-kr';

/**
 * 언어 패치 적용
 */
async function applyLanguagePatch(): Promise<void> {
  console.log('🎯 Applying localization patch...\n');

  const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
  const cursorIdeExecutablePath = path.join(cursorIdeInstallPath, 'Cursor.exe');
  const fileVersion = getFileVersion(cursorIdeExecutablePath);

  console.log(`📍 Cursor installation path: ${cursorIdeInstallPath}`);
  console.log(`📦 Cursor version: ${fileVersion}`);

  const targetPath = path.join(
    cursorIdeInstallPath,
    'resources',
    'app',
    'out',
    'vs',
    'workbench',
    'workbench.desktop.main.js'
  );
  const targetDir = path.dirname(targetPath);

  // 1. 기존 번역 파일 정리 (단순화된 파일명 사용)
  console.log('\n🧹 Cleaning up previous translation files...');
  const translatedFileName = 'workbench.desktop.main_translated.js';
  const translatedFilePath = path.join(targetDir, translatedFileName);

  // 기존 번역 파일이 있는지 확인
  console.log('📝 Creating Korean translation file...');
  const languagePackage = await loadLanguagePackage(languageCode);
  // console.log(`[INFO] ✅ Loaded ${languagePackage.REPLACEMENTS.length} translations for ${languageInfo.nativeName}`);

  console.log(`📚 ${languagePackage.replacements.length} Korean translations loaded`);
  const result = createTranslatedFile(targetPath, languagePackage.replacements, languageCode);
  console.log(`✅ Translation file created successfully: ${path.basename(result.translatedFilePath)}`);
  console.log(`   ${result.appliedCount} translations applied`);

  // 2. 인터셉터 배포
  console.log('\n📁 Deploying interceptor...');
  const interceptorSource = path.join(__dirname, '..', 'interceptor', INTERCEPTOR_FILE_NAME);
  if (!fs.existsSync(interceptorSource)) {
    throw new Error(`Interceptor file not found: ${interceptorSource}`);
  }
  deployInterceptor(cursorIdeInstallPath, interceptorSource, INTERCEPTOR_FILE_NAME);
  console.log('✅ Interceptor deployment completed');

  // 3. package.json 패치
  console.log('\n⚙️  Updating package.json...');
  patchPackageJson(cursorIdeInstallPath, INTERCEPTOR_FILE_NAME);
  console.log('✅ package.json update completed');

  console.log('\n🎉 Korean patch application completed!');
  console.log('====================================');
  console.log('');
  console.log('📌 Next steps:');
  console.log('   1. Close Cursor completely');
  console.log('   2. Restart Cursor');
  console.log('');
}

/**
 * 원본 복구 및 모든 패치 제거
 */
async function restoreAndCleanup(): Promise<void> {
  console.log('\n🔄 Restoring original files and removing patches...');
  console.log('==============================================');

  const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
  const targetDir = path.join(
    cursorIdeInstallPath,
    'resources',
    'app',
    'out',
    'vs',
    'workbench'
  );

  // 1. 번역 파일 제거
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
    console.log('✅ package.json restoration completed');
  }
  catch (error) {
    console.warn('⚠️ Unable to restore package.json (may not have been patched)');
  }

  console.log('\n🎉 Restoration completed!');
  console.log('========================');
  console.log(`📊 ${removedCount} translation files removed`);
  console.log('');
  console.log('📌 Next steps:');
  console.log('   1. Restart Cursor');
  console.log('   2. Interface restored to English');
  console.log('');
}

/**
 * 도움말 출력
 */
function printHelp(): void {
  console.log('\n🌐 Cursor Language Patcher v0.0.2');
  console.log('================================');
  console.log('\nAvailable commands:');
  console.log('  bun run patch    # Apply Korean patch');
  console.log('  bun run restore  # Restore to original');
  console.log('  bun run help     # Show this help');
}

/**
 * 메인 진입점
 */
async function main(): Promise<void> {
  // Windows 플랫폼 체크
  if (process.platform !== 'win32') {
    console.error('Platform:', process.platform);
    console.error('❌ Currently only Windows is supported.');
    return;
  }

  const locale = await osLocale();
  console.log(`🌍 Detected system locale: ${locale}`);

  const args = process.argv.slice(2);
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
        console.log(`\n❌ Unknown command: ${cmd}`);
      }
      printHelp();
      break;
  }
}

// 실행
if (require.main === module) {
  main().catch((error: unknown) => {
    console.error('\n❌ An error occurred:', error);
    console.log('\nIf you need support, please create a GitHub issue.');
    process.exit(1);
  });
}
