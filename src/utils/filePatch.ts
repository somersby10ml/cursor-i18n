import type { Replacement } from "../../lang/types";
import { parse } from "acorn";
import { simple } from "acorn-walk";
import fs from 'fs';
import path from 'path';
import { generatePatchFileName, getLanguageInfo } from './languageManager';

/**
 * AST 편집 정보를 저장하는 인터페이스
 */
interface Edit {
  readonly start: number;
  readonly end: number;
  readonly newRaw: string;
}

/**
 * acorn Node 타입을 확장하여 range 속성을 포함하는 인터페이스
 * 안전한 타입 체크를 위해 readonly 속성 사용
 */
interface NodeWithRange {
  readonly range?: readonly [number, number];
  readonly value?: unknown;
}

/**
 * 패치 결과 정보
 */
interface PatchResult {
  /** 생성된 번역 파일 경로 */
  readonly translatedFilePath: string;
  /** 적용된 번역 개수 */
  readonly appliedCount: number;
  /** 언어 정보 */
  readonly languageInfo: {
    readonly code: string;
    readonly name: string;
    readonly nativeName: string;
  };
}

/**
 * 파일에 언어별 번역을 적용하여 새로운 번역 파일을 생성합니다.
 * 
 * **보안 고려사항:**
 * - 입력 파일의 존재성과 읽기 권한을 검증
 * - AST 파싱을 통한 안전한 코드 분석 (임의 코드 실행 방지)
 * - 출력 파일 경로의 유효성 검증
 * - 메모리 사용량 제한을 위한 파일 크기 체크
 * 
 * @param filePath 원본 파일 경로 (보통 workbench.desktop.main.js)
 * @param replacements 번역 규칙 배열
 * @param languageCode 언어 코드 (예: "ko", "ja")
 * @returns 패치 결과 정보
 * @throws {Error} 파일 접근 오류, 파싱 오류, 또는 보안 위험이 감지된 경우
 */
export function createTranslatedFile(filePath: string, replacements: readonly Replacement[], languageCode: string): PatchResult {
  console.log(`[INFO] Creating translated file for language: ${languageCode}`);

  // 입력 유효성 검증
  validateInputs(filePath, replacements, languageCode);

  // 언어 정보 조회
  const languageInfo = getLanguageInfo(languageCode);
  if (!languageInfo) {
    throw new Error(`Unsupported language code: ${languageCode}`);
  }

  // 원본 파일 읽기 및 보안 검증
  const source = readAndValidateSourceFile(filePath);

  // AST 파싱 (안전한 코드 분석)
  const ast = parseSourceCode(source, filePath);

  // 번역 적용을 위한 편집 위치 찾기
  const edits = findTranslationTargets(ast, source, replacements);

  // 편집 적용
  const translatedContent = applyTranslations(source, edits);

  // 번역된 파일 저장
  const translatedFilePath = saveTranslatedFile(filePath, translatedContent);

  console.log(`[INFO] ✅ Translation completed: ${edits.length} strings translated`);
  console.log(`[INFO] Original file: '${filePath}'`);
  console.log(`[INFO] Translated file (${languageInfo.nativeName}): '${translatedFilePath}'`);

  return {
    translatedFilePath,
    appliedCount: edits.length,
    languageInfo: {
      code: languageInfo.code,
      name: languageInfo.name,
      nativeName: languageInfo.nativeName
    }
  };
}

/**
 * 입력 매개변수들의 유효성을 검증합니다.
 */
function validateInputs(filePath: string, replacements: readonly Replacement[], languageCode: string): void {
  if (!filePath || typeof filePath !== 'string') {
    throw new Error('Invalid file path provided');
  }

  if (!Array.isArray(replacements) || replacements.length === 0) {
    throw new Error('Invalid or empty replacements array');
  }

  if (!languageCode || typeof languageCode !== 'string' || !/^[a-z-]+$/.test(languageCode)) {
    throw new Error('Invalid language code format');
  }

  // 번역 규칙 유효성 검증
  replacements.forEach((replacement, index) => {
    if (!replacement.originalText || !replacement.changeText || !replacement.searchType) {
      throw new Error(`Invalid replacement rule at index ${index}`);
    }
    if (!['exact', 'partial'].includes(replacement.searchType)) {
      throw new Error(`Invalid search type at index ${index}: ${replacement.searchType}`);
    }
  });
}

/**
 * 원본 파일을 안전하게 읽고 검증합니다.
 */
function readAndValidateSourceFile(filePath: string): string {
  try {
    // 파일 존재성 확인
    if (!fs.existsSync(filePath)) {
      throw new Error(`Source file does not exist: ${filePath}`);
    }

    // 파일 통계 정보 확인
    const stats = fs.statSync(filePath);

    // 파일 크기 제한 (100MB) - 메모리 사용량 제어
    const MAX_FILE_SIZE = 100 * 1024 * 1024;
    if (stats.size > MAX_FILE_SIZE) {
      throw new Error(`File too large: ${stats.size} bytes (max: ${MAX_FILE_SIZE})`);
    }

    // 파일이 일반 파일인지 확인 (디렉토리나 특수 파일 방지)
    if (!stats.isFile()) {
      throw new Error(`Path is not a regular file: ${filePath}`);
    }

    // 파일 읽기
    const content = fs.readFileSync(filePath, 'utf-8');

    // 최소한의 내용 검증
    if (content.length === 0) {
      throw new Error('Source file is empty');
    }

    return content;
  } catch (error) {
    throw new Error(`Failed to read source file: ${error}`);
  }
}

/**
 * 소스 코드를 안전하게 AST로 파싱합니다.
 */
function parseSourceCode(source: string, filePath: string): any {
  try {
    return parse(source, {
      ecmaVersion: "latest",
      sourceType: "module",
      ranges: true,
      // 보안: 위험한 구문 파싱 비활성화
      allowReturnOutsideFunction: false
    });
  } catch (error) {
    throw new Error(`Failed to parse JavaScript file '${filePath}': ${error}`);
  }
}

/**
 * AST에서 번역 대상이 되는 문자열 리터럴들을 찾습니다.
 */
function findTranslationTargets(ast: any, source: string, replacements: readonly Replacement[]): Edit[] {
  const edits: Edit[] = [];

  simple(ast, {
    Literal(node: any) {
      // 일반 따옴표 문자열 리터럴 처리
      const nodeWithRange = node as NodeWithRange;
      if (typeof nodeWithRange.value === "string" && nodeWithRange.range) {
        processStringRange(nodeWithRange.range[0], nodeWithRange.range[1], source, edits, replacements);
      }
    },
    TemplateLiteral(node: any) {
      // 백틱(`) 템플릿 리터럴 처리
      const nodeWithRange = node as NodeWithRange;
      if (nodeWithRange.range) {
        processStringRange(nodeWithRange.range[0], nodeWithRange.range[1], source, edits, replacements);
      }
    }
  });

  return edits;
}

/**
 * 특정 범위의 문자열에 번역을 적용합니다.
 */
function processStringRange(
  start: number,
  end: number,
  sourceText: string,
  editsArray: Edit[],
  replacements: readonly Replacement[]
): void {
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
  for (const { originalText, changeText, searchType } of replacements) {
    if (searchType === "exact") {
      if (newContent === originalText) {
        newContent = changeText;
        hasChanges = true;
        break; // exact 매치는 하나만 적용
      }
    } else if (searchType === "partial") {
      if (newContent.includes(originalText)) {
        newContent = newContent.split(originalText).join(changeText);
        hasChanges = true;
        // partial 매치는 계속 다른 규칙도 적용
      }
    }
  }

  // 변경사항이 있는 경우에만 편집 목록에 추가
  if (hasChanges) {
    const newRaw = `${delimiter}${newContent}${delimiter}`;
    editsArray.push({ start, end, newRaw });
  }
}

/**
 * 편집 목록을 원본 텍스트에 적용합니다.
 */
function applyTranslations(source: string, edits: readonly Edit[]): string {
  // 뒤에서부터 편집을 적용하여 인덱스 변화 방지
  const sortedEdits = [...edits].sort((a, b) => b.start - a.start);

  let output = source;
  for (const { start, end, newRaw } of sortedEdits) {
    output = output.slice(0, start) + newRaw + output.slice(end);
  }

  return output;
}

/**
 * 번역된 내용을 새 파일로 저장합니다.
 */
function saveTranslatedFile(
  originalFilePath: string,
  translatedContent: string
): string {
  const parsedPath = path.parse(originalFilePath);
  const baseName = parsedPath.name; // 확장자 제외한 파일명

  // 안전한 파일명 생성
  const translatedFileName = generatePatchFileName(baseName);
  const translatedFilePath = path.join(parsedPath.dir, translatedFileName);

  try {
    // 디렉토리 쓰기 권한 확인
    fs.accessSync(parsedPath.dir, fs.constants.W_OK);

    // 번역 파일 저장
    fs.writeFileSync(translatedFilePath, translatedContent, "utf8");

    return translatedFilePath;
  } catch (error) {
    throw new Error(`Failed to save translated file: ${error}`);
  }
}
