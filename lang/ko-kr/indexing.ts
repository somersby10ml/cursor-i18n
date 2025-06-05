import { type Replacement } from '../types';

export default [
  {
    originalText: 'Codebase',
    changeText: '코드베이스',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: '코드베이스 인덱싱',
    searchType: 'exact',
  },
  {
    originalText: 'Embed codebase for improved contextual understanding and knowledge. Embeddings and metadata are stored in the',
    changeText: '향상된 컨텍스트 이해와 지식을 위해 코드베이스를 임베드합니다. 임베딩과 메타데이터는 다음에 저장됩니다:',
    searchType: 'exact',
  },
  {
    originalText: 'cloud',
    changeText: '클라우드',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: ', 하지만 모든 코드는 로컬에 저장됩니다.',
    searchType: 'exact',
  },
  {
    originalText: 'Loading',
    changeText: '로딩 중',
    searchType: 'exact',
  },
  {
    originalText: 'Index New Folders',
    changeText: '새 폴더 인덱싱',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically index any new folders with fewer',
    changeText: ' 파일을 가진 새 폴더를 자동으로 인덱싱',
    searchType: 'partial',
  },
  {
    originalText: 'Ignore Files in .cursorignore',
    changeText: '.cursorignore의 파일 무시',
    searchType: 'exact',
  },
  {
    originalText: 'Files to exclude from indexing in addition to .gitignore.',
    changeText: '.gitignore에 추가로 인덱싱에서 제외할 파일들입니다.',
    searchType: 'exact',
  },
  {
    originalText: 'View included files.',
    changeText: '포함된 파일 보기.',
    searchType: 'exact',
  },
  {
    originalText: 'Edit',
    changeText: '편집',
    searchType: 'exact',
  },
  {
    originalText: 'Crawl and index custom resources and developer docs',
    changeText: '사용자 정의 리소스와 개발자 문서를 크롤링하고 인덱싱',
    searchType: 'exact',
  },
  {
    originalText: 'Add Doc',
    changeText: '문서 추가',
    searchType: 'exact',
  },
  {
    originalText: 'No Docs Added',
    changeText: '추가된 문서 없음',
    searchType: 'exact',
  },
  {
    originalText: 'Add documentation to use as context. You can also use @Add in Chat or while editing to add a doc.',
    changeText: '컨텍스트로 사용할 문서를 추가합니다. 채팅에서 @Add를 사용하거나 편집 중에 문서를 추가할 수도 있습니다.',
    searchType: 'exact',
  },
] satisfies Replacement[];
