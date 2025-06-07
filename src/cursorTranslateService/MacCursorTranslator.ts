import fs from 'fs';
import path from 'path';
import type { Replacement } from '../../lang/types';
import cursorInjectJsFile from './cursor.inject.js.file' with { type: 'text' };
import { CursorTranslator } from './CursorTranslator';

interface PackageJson {
  main?: string;
  main_original?: string;
  [key: string]: any;
}

export class MacCursorTranslateService extends CursorTranslator {
  private readTargetPath: string;
  private saveTranslatedFilePath: string;
  private saveInterceptorPath: string;
  private readPackageJsonPath: string;
  private backupPackageJsonPath: string;

  constructor(cursorInstallPath: string, interceptorFileContent: string) {
    super(cursorInstallPath, interceptorFileContent);

    this.readTargetPath = path.join(this.cursorIdeInstalledDirectory, 'Resources/app/out/vs/workbench/workbench.desktop.main.js');
    this.saveTranslatedFilePath = path.join(this.cursorIdeInstalledDirectory, 'Resources/app/out/vs/workbench/workbench.desktop.main_translated.js');
    this.saveInterceptorPath = path.join(this.cursorIdeInstalledDirectory, 'Resources/app/out/cursorTranslatorMain.js');
    this.readPackageJsonPath = path.join(this.cursorIdeInstalledDirectory, 'Resources/app/package.json');
    this.backupPackageJsonPath = path.join(this.cursorIdeInstalledDirectory, 'Resources/app/package.json.backup');
  }
  public isSupported(platform: string): boolean {
    return platform === 'darwin';
  }

  public install(replacements: readonly Replacement[]): void {
    if (!fs.existsSync(this.readTargetPath)) {
      throw new Error(`Target file does not exist: ${this.readTargetPath}`);
    }
    const source = fs.readFileSync(this.readTargetPath, 'utf-8');

    let output = source;
    output = cursorInjectJsFile + ';' + output;
    output = output.replace('\'${replacementsArray}\'', JSON.stringify(replacements));

    // save the translated file
    const parsedPath = path.parse(this.readTargetPath);
    fs.accessSync(parsedPath.dir, fs.constants.W_OK);
    fs.writeFileSync(this.saveTranslatedFilePath, output, 'utf8');

    // copy the interceptor file
    fs.writeFileSync(this.saveInterceptorPath, this.interceptorFileContent);

    // backup the original package.json if it doesn't exist
    if (!fs.existsSync(this.backupPackageJsonPath)) {
      fs.copyFileSync(this.readPackageJsonPath, this.backupPackageJsonPath);
    }

    const packageContent = fs.readFileSync(this.readPackageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageContent) as PackageJson;

    // backup original main if not already backed up
    if (!packageJson.main_original && packageJson.main) {
      packageJson.main_original = packageJson.main;
    }

    // main을 인터셉터로 변경
    packageJson.main = './out/cursorTranslatorMain.js';
    fs.writeFileSync(this.readPackageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
  }

  public uninstall(): void {
    try {
      if (fs.existsSync(this.saveTranslatedFilePath)) {
        fs.unlinkSync(this.saveTranslatedFilePath);
      }

      if (fs.existsSync(this.backupPackageJsonPath)) {
        fs.copyFileSync(this.backupPackageJsonPath, this.readPackageJsonPath);
      }
      else {
        // 백업이 없으면 main_original 사용
        const packageContent = fs.readFileSync(this.readPackageJsonPath, 'utf-8');
        const packageJson = JSON.parse(packageContent) as PackageJson;

        if (packageJson.main_original) {
          packageJson.main = packageJson.main_original;
          delete packageJson.main_original;
          fs.writeFileSync(this.readPackageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
        }
        else {
          console.warn('[WARN] No backup or main_original found');
        }
      }
    }
    catch (error) {
      console.error(error);
    }
  }
}
