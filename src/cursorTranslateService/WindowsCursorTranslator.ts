import fs from 'fs';
import path from 'path';
import { type Node as acornNode, parse as acornParse } from 'acorn';
import { simple } from 'acorn-walk';
import type { Replacement } from '../../lang/types';
import { CursorTranslator } from './CursorTranslator';

interface Edit {
  readonly start: number;
  readonly end: number;
  readonly newRaw: string;
}

interface NodeWithRange {
  readonly range?: readonly [number, number];
  readonly value?: unknown;
}

interface PackageJson {
  main?: string;
  main_original?: string;
  [key: string]: any;
}

export class WindowsCursorTranslateService extends CursorTranslator {
  private readTargetPath: string;
  private saveTranslatedFilePath: string;
  private saveInterceptorPath: string;
  private readPackageJsonPath: string;
  private backupPackageJsonPath: string;

  constructor(cursorInstallPath: string, interceptorFileContent: string) {
    super(cursorInstallPath, interceptorFileContent);

    this.readTargetPath = path.join(this.cursorIdeInstalledDirectory, 'resources/app/out/vs/workbench/workbench.desktop.main.js');
    this.saveTranslatedFilePath = path.join(this.cursorIdeInstalledDirectory, 'resources/app/out/vs/workbench/workbench.desktop.main_translated.js');
    this.saveInterceptorPath = path.join(this.cursorIdeInstalledDirectory, 'resources/app/out/vs/workbench/cursorTranslatorMain.js');
    this.readPackageJsonPath = path.join(this.cursorIdeInstalledDirectory, 'resources/app/package.json');
    this.backupPackageJsonPath = path.join(this.cursorIdeInstalledDirectory, 'resources/app/package.json.backup');
  }
  public isSupported(platform: string): boolean {
    return platform === 'win32';
  }

  public install(replacements: readonly Replacement[]): void {
    if (!fs.existsSync(this.readTargetPath)) {
      throw new Error(`Target file does not exist: ${this.readTargetPath}`);
    }
    const source = fs.readFileSync(this.readTargetPath, 'utf-8');
    const ast = acornParse(source, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ranges: true,
      allowReturnOutsideFunction: false,
    });

    const edits = this.findTranslationTargets(ast, source, replacements);
    for (const replacement of replacements) {
      if (replacement._changedCount === 0) {
        console.warn(`[WARNING] No changes applied for: '${replacement.originalText}'`);
      }
    }

    // apply edits to the source code
    const sortedEdits = [...edits].sort((a, b) => b.start - a.start);
    let output = source;
    for (const { start, end, newRaw } of sortedEdits) {
      output = output.slice(0, start) + newRaw + output.slice(end);
    }

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

  private findTranslationTargets(ast: acornNode, source: string, replacements: readonly Replacement[]): Edit[] {
    const edits: Edit[] = [];

    simple(ast, {
      Literal: (node: any) => {
      // 화살표 함수로 this 바인딩 유지
        const nodeWithRange = node as NodeWithRange;
        if (typeof nodeWithRange.value === 'string' && nodeWithRange.range) {
          this.processStringRange(nodeWithRange.range[0], nodeWithRange.range[1], source, edits, replacements);
        }
      },
      TemplateLiteral: (node: any) => {
      // 화살표 함수로 this 바인딩 유지
        const nodeWithRange = node as NodeWithRange;
        if (nodeWithRange.range) {
          this.processStringRange(nodeWithRange.range[0], nodeWithRange.range[1], source, edits, replacements);
        }
      },
    });

    return edits;
  }

  private processStringRange(start: number, end: number, sourceText: string, editsArray: Edit[], replacements: readonly Replacement[]): void {
    const raw = sourceText.slice(start, end);
    const delimiter = raw[0];  // ' or " or `

    // 구분자 유효성 검증
    if (!delimiter || !['"', "'", '`'].includes(delimiter)) {
      return; // 유효하지 않은 문자열 리터럴은 무시
    }

    const content = raw.slice(1, -1);
    let newContent = content;
    let hasChanges = false;

    // 번역 규칙 적용
    for (const replacement of replacements) {
      const { originalText, changeText, searchType } = replacement;
      if (searchType === 'exact') {
        if (newContent === originalText) {
          newContent = changeText;
          hasChanges = true;

          if (typeof replacement._changedCount === 'number') {
            replacement._changedCount += 1;
          }
          else {
            replacement._changedCount = 1;
          }
        }
      }
      else {
        if (newContent.includes(originalText)) {
          newContent = newContent.split(originalText).join(changeText);
          hasChanges = true;
          if (typeof replacement._changedCount === 'number') {
            replacement._changedCount += 1;
          }
          else {
            replacement._changedCount = 1;
          }
        }
      }
    }

    // 변경사항이 있는 경우에만 편집 목록에 추가
    if (hasChanges) {
      const newRaw = `${delimiter}${newContent}${delimiter}`;
      editsArray.push({ start, end, newRaw });
    }
  }
}
