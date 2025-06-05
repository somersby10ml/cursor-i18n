import { type Replacement } from '../types';

export default [
  {
    originalText: 'Codebase',
    changeText: 'コードベース',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: 'コードベースのインデックス作成',
    searchType: 'exact',
  },
  {
    originalText: 'Embed codebase for improved contextual understanding and knowledge. Embeddings and metadata are stored in the',
    changeText: 'コンテキスト理解と知識向上のためにコードベースを埋め込みます。埋め込みとメタデータは次に保存されます:',
    searchType: 'exact',
  },
  {
    originalText: 'cloud',
    changeText: 'クラウド',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: '、ただしすべてのコードはローカルに保存されます。',
    searchType: 'exact',
  },
  {
    originalText: 'Loading',
    changeText: '読み込み中',
    searchType: 'exact',
  },
  {
    originalText: 'Index New Folders',
    changeText: '新しいフォルダをインデックス',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically index any new folders with fewer',
    changeText: 'ファイル数が少ない新しいフォルダを自動でインデックス',
    searchType: 'partial',
  },
  {
    originalText: 'Ignore Files in .cursorignore',
    changeText: '.cursorignore内のファイルを無視',
    searchType: 'exact',
  },
  {
    originalText: 'Files to exclude from indexing in addition to .gitignore.',
    changeText: '.gitignoreに加えてインデックスから除外するファイルです。',
    searchType: 'exact',
  },
  {
    originalText: 'View included files.',
    changeText: '含まれるファイルを表示。',
    searchType: 'exact',
  },
  {
    originalText: 'Edit',
    changeText: '編集',
    searchType: 'exact',
  },
  {
    originalText: 'Crawl and index custom resources and developer docs',
    changeText: 'カスタムリソースや開発者ドキュメントをクロールしてインデックス',
    searchType: 'exact',
  },
  {
    originalText: 'Add Doc',
    changeText: 'ドキュメント追加',
    searchType: 'exact',
  },
  {
    originalText: 'No Docs Added',
    changeText: '追加されたドキュメントはありません',
    searchType: 'exact',
  },
  {
    originalText: 'Add documentation to use as context. You can also use @Add in Chat or while editing to add a doc.',
    changeText: 'コンテキストとして使用するドキュメントを追加します。チャットで@Addを使ったり、編集中にドキュメントを追加することもできます。',
    searchType: 'exact',
  },
] satisfies Replacement[];
