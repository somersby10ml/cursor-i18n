import { type Replacement } from '../types';

export default [
  {
    originalText: 'Project Rules',
    changeText: '프로젝트 규칙',
    searchType: 'exact',
  },
  {
    originalText: 'Help Agent understand conventions in this project directory',
    changeText: '이 프로젝트 디렉토리의 규칙을 에이전트가 이해하도록 도움',
    searchType: 'exact',
  },

  // Button texts
  {
    originalText: 'Add Rule',
    changeText: '규칙 추가',
    searchType: 'exact',
  },

  // Settings section
  {
    originalText: 'Include .cursorrules file',
    changeText: '.cursorrules 파일 포함',
    searchType: 'exact',
  },
  {
    originalText: 'If off, we will not include the .cursorrules file in your requests',
    changeText: '비활성화하면 요청에 .cursorrules 파일을 포함하지 않습니다',
    searchType: 'exact',
  },

  // Empty state section
  {
    originalText: 'No Project Rules Yet',
    changeText: '프로젝트 규칙이 아직 없음',
    searchType: 'exact',
  },
  {
    originalText: 'Create rules specific to this project',
    changeText: '이 프로젝트에 특정한 규칙 생성',
    searchType: 'exact',
  },
] satisfies Replacement[];
