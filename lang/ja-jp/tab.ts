import { type Replacement } from '../types';

export default [
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: '提案の次の単語を次のキーで承認',
    searchType: 'partial',
  },
  {
    originalText: 'Allow Tab to trigger while in a comment region',
    changeText: 'コメント領域でTabトリガーを許可',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Tab',
    changeText: 'カーソルタブ',
    searchType: 'exact',
  },
  {
    originalText: 'Context-aware, multi-line suggestions around your cursor based on recent edits',
    changeText: '最近の編集に基づくカーソル周辺のコンテキスト認識・複数行提案',
    searchType: 'exact',
  },
  {
    originalText: 'Partial Accepts',
    changeText: '部分承認',
    searchType: 'exact',
  },
  {
    originalText: 'Suggestions While Commenting',
    changeText: 'コメント中の提案',
    searchType: 'exact',
  },
  {
    originalText: 'Whitespace-Only Suggestions',
    changeText: '空白のみの提案',
    searchType: 'exact',
  },
  {
    originalText: 'Suggest edits like new lines and indentation that modify whitespace only',
    changeText: '空白のみを修正する新しい行やインデントなどの編集提案',
    searchType: 'exact',
  },
  {
    originalText: 'Imports',
    changeText: 'インポート',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically import necessary modules for TypeScript',
    changeText: 'TypeScriptに必要なモジュールを自動インポート',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Python自動インポート',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: 'Pythonの自動インポートを有効化します。ベータ機能です。',
    searchType: 'exact',
  },
] satisfies Replacement[];
