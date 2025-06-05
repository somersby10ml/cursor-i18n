import { type Replacement } from '../types';

export default [
  // 基本設定
  {
    originalText: 'Auto-Select Code Regions for Quick Edit \\((Ctrl|Cmd)\\+K\\)',
    changeText: 'クイック編集($1+K)用コード領域を自動選択',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Automatically parse links when pasted into Quick Edit \\((Ctrl|Cmd)\\+K\\) input',
    changeText: 'クイック編集($1+K)入力に貼り付けたときリンクを自動解析',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Show a hint for (Ctrl|Cmd)\\+K in the Terminal',
    changeText: 'ターミナルで$1+Kのヒントを表示',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Preview Box for Terminal (Ctrl|Cmd)\\+K',
    changeText: 'ターミナル$1+K用プレビューボックス',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Default Mode',
    changeText: 'デフォルトモード',
    searchType: 'exact',
  },
  {
    originalText: 'Mode for new chats',
    changeText: '新しいチャットのモード',
    searchType: 'exact',
  },
  {
    originalText: 'Text Size',
    changeText: 'テキストサイズ',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of Chat messages',
    changeText: 'チャットメッセージのテキストサイズを調整',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Clear Chat',
    changeText: '自動チャット消去',
    searchType: 'exact',
  },
  {
    originalText: 'After periods of inactivity, open the Chat Pane to a new chat',
    changeText: '非アクティブ状態が続くとチャットパネルを新しいチャットで開く',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll to New Messages',
    changeText: '新しいメッセージへスクロール',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll Chat to incoming message',
    changeText: '受信メッセージへチャットをスクロール',
    searchType: 'exact',
  },
  {
    originalText: 'Completion Sound',
    changeText: '完了音',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when Agent finishes responding',
    changeText: 'エージェントが応答を完了したときに音を再生',
    searchType: 'exact',
  },
  {
    originalText: 'Custom Modes',
    changeText: 'カスタムモード',
    searchType: 'exact',
  },
  {
    originalText: 'Create custom modes with specific models, tools, keybindings, and instructions tailored to your workflow',
    changeText: 'ワークフローに合わせた特定モデル・ツール・キーバインド・指示でカスタムモードを作成',
    searchType: 'exact',
  },
  {
    originalText: 'Context',
    changeText: 'コンテキスト',
    searchType: 'exact',
  },
  {
    originalText: 'Include Full-Folder Context',
    changeText: 'フォルダ全体のコンテキストを含める',
    searchType: 'exact',
  },
  {
    originalText: 'Allow full contents of the selected folder to be included in the context',
    changeText: '選択したフォルダの全内容をコンテキストに含めることを許可',
    searchType: 'exact',
  },
  {
    originalText: 'Include Project Structure',
    changeText: 'プロジェクト構造を含める',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree as context',
    changeText: '簡易ディレクトリツリーをコンテキストとして含める',
    searchType: 'exact',
  },
  {
    originalText: 'Web Search Tool',
    changeText: 'ウェブ検索ツール',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to search the web for relevant information',
    changeText: 'エージェントが関連情報をウェブで検索できるようにする',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: '階層的Cursor無視',
    searchType: 'exact',
  },
  {
    originalText: 'Apply .cursorignore files to all subdirectories. Changing this setting will require a restart of Cursor.',
    changeText: '.cursorignoreファイルをすべてのサブディレクトリに適用します。この設定を変更するとCursorの再起動が必要です。',
    searchType: 'exact',
  },
  {
    originalText: 'Backspace Removes Context',
    changeText: 'バックスペースでコンテキスト削除',
    searchType: 'exact',
  },
  {
    originalText: 'Remove the last context pill in the composer when pressing backspace at the start of the input',
    changeText: '入力開始時にバックスペースを押すとコンポーザーの最後のコンテキストピルを削除',
    searchType: 'exact',
  },
  {
    originalText: 'Applying Changes',
    changeText: '変更の適用',
    searchType: 'exact',
  },
  {
    originalText: 'Out-of-Context Edits in Manual Mode',
    changeText: '手動モードでのコンテキスト外編集',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to edit files outside of the selected context in Manual Mode',
    changeText: '手動モードでエージェントが選択したコンテキスト外のファイルを編集できるようにする',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Fix Lints',
    changeText: '自動Lint修正',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically fix lint errors in the chat',
    changeText: 'チャットでLintエラーを自動修正',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Accept on Commit',
    changeText: 'コミット時に自動承認',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all changes when files are committed and no longer in the worktree',
    changeText: 'ファイルがコミットされワークツリーに存在しなくなったときすべての変更を自動承認',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Run',
    changeText: '自動実行',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Run Mode',
    changeText: '自動実行モード',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools like command execution and file writes without asking for confirmation',
    changeText: 'エージェントが確認なしでコマンド実行やファイル書き込みなどのツールを実行できるようにする',
    searchType: 'exact',
  },
] satisfies Replacement[];
