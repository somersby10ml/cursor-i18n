import windowVersionInfo from 'win-version-info';

export function getFileVersion(filePath: string): string {
  const versionInfo = windowVersionInfo(filePath);
  if (!versionInfo.FileVersion) {
    throw new Error('File version not found');
  }
  return versionInfo.FileVersion;
}
