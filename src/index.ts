import { getCursorIdeInstallPathMethod1 } from './utils/registry';
import { getFileVersion } from './utils/fileVersion';
import path from 'path';
import fs from 'fs';
import { patchFile } from './utils/filePatch';

async function main() {
  // Check if the script is running on Windows
  if (process.platform !== 'win32') {
    throw new Error('This script only works on Windows.');
  }

  const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
  const cursorIdeExecutablePath = path.join(cursorIdeInstallPath, 'Cursor.exe');
  const fileVersion = getFileVersion(cursorIdeExecutablePath);
  console.log('[INFO] Cursor Executable Path', cursorIdeExecutablePath);
  console.log('[INFO] File Version', fileVersion);

  // 백업파일 추가
  const targetPath = path.join(cursorIdeInstallPath, String.raw`resources\app\out\vs\workbench\workbench.desktop.main.js`);
  const backupPath = `${targetPath}.${fileVersion}.backup`;
  if(!fs.existsSync(backupPath)) {
    fs.copyFileSync(targetPath, backupPath);
    console.log('[INFO] Backup file created', backupPath);
  }
  else {
    console.log('[INFO] Backup file already exists', backupPath);
  }

  const { REPLACEMENTS } = await import('../lang/ko');

  patchFile(targetPath, REPLACEMENTS);

}

main().catch(console.error);