import type { Replacement } from '../../lang/types';

export abstract class CursorTranslator {
  protected cursorIdeInstalledDirectory: string;
  protected interceptorFileContent: string;

  constructor(cursorInstallPath: string, interceptorFileContent: string) {
    this.cursorIdeInstalledDirectory = cursorInstallPath;
    this.interceptorFileContent = interceptorFileContent;
  }

  abstract install(replacement: readonly Replacement[]): void;
  abstract uninstall(): void;
  abstract isSupported(platform: string): boolean;
}
