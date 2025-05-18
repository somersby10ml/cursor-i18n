import regedit from 'regedit';
import { existsSync } from 'fs';

interface RegistryValue {
  value: string | number | string[];
  type: string;
}

interface RegistryValues {
  [key: string]: RegistryValue;
}

interface RegistryKey {
  keys: string[];
  values?: RegistryValues;
}

interface RegistryResult {
  [key: string]: RegistryKey;
}

const regeditList = (paths: string[]): Promise<RegistryResult> => {
  return new Promise((resolve, reject) => {
    regedit.list(paths, (err, result) => {
      if (err) reject(err);
      else resolve(result as RegistryResult);
    });
  });
};

export async function getCursorIdeInstallPathMethod1(): Promise<string> {
  try {
    const registryPath = String.raw`HKCU\Software\Microsoft\Windows\CurrentVersion\Uninstall\{DADADADA-ADAD-ADAD-ADAD-ADADADADADAD}}_is1`;
    const result = await regeditList([registryPath]);
    
    if (!result[registryPath]?.values) {
      throw new Error('지정된 레지스트리 키를 찾을 수 없습니다');
    }

    const values = result[registryPath].values;
    const displayIcon = values?.DisplayIcon?.value as string;
    
    if (!displayIcon || !displayIcon.toLowerCase().endsWith('cursor\\cursor.exe')) {
      throw new Error('올바른 Cursor IDE의 DisplayIcon이 아닙니다');
    }

    const installLocation = values?.InstallLocation?.value as string;
    if (!installLocation) {
      throw new Error('InstallLocation을 찾을 수 없습니다');
    }

    if (!existsSync(installLocation)) {
      throw new Error('설치 경로가 실제로 존재하지 않습니다');
    }

    return installLocation;
  } catch (error) {
    console.error('Method 1 레지스트리 검색 중 오류 발생:', error);
    throw error;
  }
}


export async function getCursorIdeInstallPathMethod2(): Promise<string> {
  try {
    const uninstallPath = String.raw`HKCU\Software\Microsoft\Windows\CurrentVersion\Uninstall`;
    const result = await regeditList([uninstallPath]);
    
    if (!result[uninstallPath] || !result[uninstallPath].keys) {
      throw new Error('레지스트리 경로를 찾을 수 없습니다');
    }

    for (const key of result[uninstallPath].keys) {
      const subKeyPath = `${uninstallPath}\\${key}`;
      const subKey = await regeditList([subKeyPath]);
      
      const values = subKey[subKeyPath]?.values;
      if (values?.DisplayIcon?.value) {
        const displayIcon = values.DisplayIcon.value as string;
        if (displayIcon.toLowerCase().endsWith('cursor\\cursor.exe')) {
          return displayIcon.replace('\\Cursor.exe', '');
        }
      }
    }
    
    throw new Error('Cursor IDE 설치 경로를 찾을 수 없습니다');
  } catch (error) {
    console.error('레지스트리 검색 중 오류 발생:', error);
    throw error;
  }
}
