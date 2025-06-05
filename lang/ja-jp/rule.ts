import { type Replacement } from '../types';

export default [
  {
    originalText: 'Project Rules',
    changeText: 'プロジェクトルール',
    searchType: 'exact',
  },
  {
    originalText: 'Help Agent understand conventions in this project directory',
    changeText: 'このプロジェクトディレクトリのルールをエージェントが理解できるようにします',
    searchType: 'exact',
  },
  {
    originalText: 'Add Rule',
    changeText: 'ルール追加',
    searchType: 'exact',
  },
  {
    originalText: 'Include .cursorrules file',
    changeText: '.cursorrulesファイルを含める',
    searchType: 'exact',
  },
  {
    originalText: 'If off, we will not include the .cursorrules file in your requests',
    changeText: 'オフの場合、リクエストに.cursorrulesファイルは含まれません',
    searchType: 'exact',
  },
  {
    originalText: 'No Project Rules Yet',
    changeText: 'プロジェクトルールがまだありません',
    searchType: 'exact',
  },
  {
    originalText: 'Create rules specific to this project',
    changeText: 'このプロジェクト専用のルールを作成',
    searchType: 'exact',
  },
] satisfies Replacement[];
