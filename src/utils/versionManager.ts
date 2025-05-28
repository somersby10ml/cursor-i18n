import fs from 'fs';
import path from 'path';

/**
 * 이전 버전의 번역 파일들을 정리하는 함수
 * 
 * @param targetDir 대상 디렉토리 (workbench.desktop.main.js가 있는 폴더)
 * @param currentVersion 현재 커서 버전 (예: "1.95.0")
 * @param baseName 기본 파일명 (예: "workbench.desktop.main")
 * @returns 정리된 파일 개수
 */
export function cleanupOldTranslationFiles(
  targetDir: string,
  currentVersion: string,
  baseName: string
): number {
  console.log(`[INFO] Cleaning up old translation files in: ${targetDir}`);

  try {
    if (!fs.existsSync(targetDir)) {
      console.warn(`[WARN] Target directory does not exist: ${targetDir}`);
      return 0;
    }

    const files = fs.readdirSync(targetDir);
    const translationFilePattern = new RegExp(`^${escapeRegex(baseName)}_v(.+)_([a-z-]+)\\.js$`);
    let cleanedCount = 0;

    files.forEach(file => {
      const match = file.match(translationFilePattern);
      if (match) {
        const [, fileVersion, languageCode] = match;

        if (!fileVersion || !languageCode) {
          return;
        }

        // 현재 버전이 아닌 파일들만 삭제 (또는 빈 버전인 경우 모든 파일 삭제)
        if (currentVersion === '' || fileVersion !== currentVersion) {
          const fullPath = path.join(targetDir, file);

          try {
            fs.unlinkSync(fullPath);
            console.log(`[INFO] Removed translation file: ${file} (${languageCode} v${fileVersion})`);
            cleanedCount++;
          } catch (error) {
            console.warn(`[WARN] Failed to remove file ${file}: ${error}`);
          }
        }
      }
    });

    console.log(`[INFO] ✅ Cleanup completed. Removed ${cleanedCount} translation files.`);
    return cleanedCount;
  } catch (error) {
    console.error(`[ERROR] Failed to cleanup translation files: ${error}`);
    return 0;
  }
}

/**
 * 특정 버전과 언어의 번역 파일이 존재하는지 확인
 * 
 * @param targetDir 대상 디렉토리
 * @param version 버전 (예: "1.95.0")
 * @param baseName 기본 파일명 (예: "workbench.desktop.main")
 * @param languageCode 언어 코드 (예: "ko")
 * @returns 번역 파일 경로 또는 null (존재하지 않는 경우)
 */
export function checkTranslationFileExists(
  targetDir: string,
  version: string,
  baseName: string,
  languageCode: string
): string | null {
  const translationFileName = `${baseName}_v${version}_${languageCode}.js`;
  const translationFilePath = path.join(targetDir, translationFileName);

  const exists = fs.existsSync(translationFilePath);

  if (exists) {
    console.log(`[INFO] Found existing translation file: ${translationFileName}`);
  }

  return exists ? translationFilePath : null;
}

/**
 * 정규식에서 특수 문자를 이스케이프하는 헬퍼 함수
 */
function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
} 