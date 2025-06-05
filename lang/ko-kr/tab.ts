import { type Replacement } from '../types';

export default [
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: '다음 키를 통해서 제안의 다음 단어 승인',
    searchType: 'partial',
  },
  {
    originalText: 'Allow Tab to trigger while in a comment region',
    changeText: '주석 영역에서 Tab 트리거 허용',
    searchType: 'exact',
  },

  {
    originalText: 'Cursor Tab',
    changeText: '커서 탭',
    searchType: 'exact',
  },
  {
    originalText: 'Context-aware, multi-line suggestions around your cursor based on recent edits',
    changeText: '최근 편집을 기반으로 한 커서 주변의 컨텍스트 인식, 다중 라인 제안',
    searchType: 'exact',
  },
  {
    originalText: 'Partial Accepts',
    changeText: '부분 승인',
    searchType: 'exact',
  },
  {
    originalText: 'Suggestions While Commenting',
    changeText: '주석 중 제안',
    searchType: 'exact',
  },
  {
    originalText: 'Whitespace-Only Suggestions',
    changeText: '공백 전용 제안',
    searchType: 'exact',
  },
  {
    originalText: 'Suggest edits like new lines and indentation that modify whitespace only',
    changeText: '공백만 수정하는 새 줄과 들여쓰기 같은 편집 제안',
    searchType: 'exact',
  },
  {
    originalText: 'Imports',
    changeText: '가져오기',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically import necessary modules for TypeScript',
    changeText: 'TypeScript에 필요한 모듈 자동 가져오기',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Python 자동 가져오기',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: 'Python 자동 가져오기를 활성화합니다. 베타 기능입니다.',
    searchType: 'exact',
  },
] satisfies Replacement[];

