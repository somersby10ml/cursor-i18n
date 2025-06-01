import type { Replacement } from '../../lang/types';

/**
 * 지원되는 언어 정보
 */
export interface LanguageInfo {
  readonly code: string;
  readonly name: string;
  readonly nativeName: string;
  readonly enabled: boolean;
}

/**
 * 언어 패키지 정보
 */
export interface LanguagePackage {
  readonly info: LanguageInfo;
  readonly replacements: Replacement[];
}

/**
 * 지원되는 언어 목록 (확장 가능)
 * 새로운 언어를 추가할 때는 이 배열에 추가하고 해당 언어 파일을 lang/ 폴더에 생성
 */
const SUPPORTED_LANGUAGES: readonly LanguageInfo[] = [
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    enabled: true,
  },
  // 향후 추가 예정 언어들 (언어 파일 생성 후 enabled: true로 변경)
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    enabled: false,
  },
  {
    code: 'zh-cn',
    name: 'Chinese (Simplified)',
    nativeName: '简体中文',
    enabled: false,
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    enabled: false,
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    enabled: false,
  },
] as const;

/**
 * 사용 가능한 언어 목록을 반환
 * @returns 활성화된 언어 정보 배열
 */
export function getAvailableLanguages(): readonly LanguageInfo[] {
  return SUPPORTED_LANGUAGES.filter((lang) => lang.enabled);
}

/**
 * 특정 언어의 번역 데이터를 동적으로 로드
 * @param languageCode 언어 코드 (예: 'ko', 'ja', 'zh-cn')
 * @returns 언어 패키지
 */
export async function loadLanguagePackage(languageCode: string): Promise<LanguagePackage> {
  // 지원되는 언어인지 확인
  const languageInfo = SUPPORTED_LANGUAGES.find((lang) => lang.code === languageCode);
  if (!languageInfo) {
    throw new Error(`Unsupported language code: ${languageCode}`);
  }

  if (!languageInfo.enabled) {
    throw new Error(`Language not enabled: ${languageInfo.nativeName}`);
  }

  // 동적 import를 사용하여 언어 파일 로드

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const languageModule = await import(`../../lang/${languageCode}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!languageModule.REPLACEMENTS || !Array.isArray(languageModule.REPLACEMENTS)) {
    throw new Error(`Invalid language file structure for ${languageCode}`);
  }

  const items: LanguagePackage = {
    info: languageInfo,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    replacements: languageModule.REPLACEMENTS,
  };

  for (const replacement of items.replacements) {
    replacement._changedCount = 0;
  }
  return items;
}

/**
 * 언어별 패치 파일명 생성 (단순화된 버전)
 * @param baseName 기본 파일명 (예: workbench.desktop.main)
 * @returns 패치 파일명 (예: workbench.desktop.main_translated.js)
 */
export function generatePatchFileName(baseName: string): string {
  return `${baseName}_translated.js`;
}

/**
 * 패치 파일명인지 확인
 * @param fileName 파일명
 * @returns 패치 파일인지 여부
 */
export function isTranslatedFileName(fileName: string): boolean {
  return fileName.endsWith('_translated.js');
}

/**
 * 원본 파일명에서 번역 파일명 생성
 * @param originalFileName 원본 파일명 (예: workbench.desktop.main.js)
 * @returns 번역 파일명 (예: workbench.desktop.main_translated.js)
 */
export function getTranslatedFileName(originalFileName: string): string {
  if (originalFileName.endsWith('.js')) {
    const baseName = originalFileName.slice(0, -3); // .js 제거
    return `${baseName}_translated.js`;
  }
  return `${originalFileName}_translated`;
}

/**
 * 언어 코드의 유효성 검증
 * @param languageCode 검증할 언어 코드
 * @returns 유효하고 활성화된 언어 코드인지 여부
 */
export function isValidLanguageCode(languageCode: string): boolean {
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === languageCode && lang.enabled);
}

/**
 * 언어 정보 조회
 * @param languageCode 언어 코드
 * @returns 언어 정보 또는 null
 */
export function getLanguageInfo(languageCode: string): LanguageInfo | null {
  return SUPPORTED_LANGUAGES.find((lang) => lang.code === languageCode) ?? null;
}
