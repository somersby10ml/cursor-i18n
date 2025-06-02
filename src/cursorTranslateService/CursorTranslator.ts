import type { Replacement } from '../../lang/types';

export abstract class CursorTranslator {
  protected cursorIdeInstalledDirectory: string;
  protected interceptorFilePath: string;

  constructor(cursorInstallPath: string, interceptorFilePath: string) {
    this.cursorIdeInstalledDirectory = cursorInstallPath;
    this.interceptorFilePath = interceptorFilePath;
  }

  abstract install(replacement: readonly Replacement[]): void;
  abstract uninstall(): void;
  abstract isSupported(platform: string): boolean;
}
