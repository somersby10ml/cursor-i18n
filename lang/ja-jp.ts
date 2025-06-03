import { type Replacement } from './types';

export const REPLACEMENTS: Replacement[] = [

  // Left Menu
  {
    originalText: 'General',
    changeText: '一般',
    searchType: 'exact',
  },
  {
    originalText: 'Features',
    changeText: '機能',
    searchType: 'exact',
  },
  {
    originalText: 'Models',
    changeText: 'モデル',
    searchType: 'exact',
  },
  {
    originalText: 'Indexing',
    changeText: 'インデックス',
    searchType: 'exact',
  },
  {
    originalText: 'Beta',
    changeText: 'ベータ機能',
    searchType: 'exact',
  },
  {
    originalText: 'Account',
    changeText: 'アカウント',
    searchType: 'exact',
  },

  // General
  {
    originalText: 'You are currently signed in with',
    changeText: '現在ログインしているアカウント',
    searchType: 'partial',
  },
  {
    originalText: 'Manage',
    changeText: '管理',
    searchType: 'exact',
  },
  {
    originalText: 'Log out',
    changeText: 'ログアウト',
    searchType: 'exact',
  },
  {
    originalText: 'VS Code Import',
    changeText: 'VS Code インポート',
    searchType: 'exact',
  },
  {
    originalText: 'Instantly use all of your extensions, settings and keybindings',
    changeText: 'すべての拡張機能、設定、キーバインドを即座に使用できます',
    searchType: 'exact',
  },
  {
    originalText: 'Import',
    changeText: 'インポート',
    searchType: 'exact',
  },
  {
    originalText: 'Appearance',
    changeText: '外観',
    searchType: 'exact',
  },
  {
    originalText: 'Configure how Cursor looks and feels.',
    changeText: 'Cursorの外観と操作感を設定します。',
    searchType: 'exact',
  },
  {
    originalText: '<div><span>Open editor settings.</span> (font, auto-save, word wrap, etc)<br><br><span>Configure keyboard shortcuts.</span> <br><br>Use <span></span> for the command palette, where many editor functions can be controlled.',
    changeText: '<div><span>エディターの設定を開きます。</span> (フォント、自動保存、ワードラップなど)<br><br><span>キーボードショートカットを設定します。</span> <br><br>多くのエディター機能を制御できるコマンドパレットを開くには <span></span> を使用してください。',
    searchType: 'exact',
  },
  {
    originalText: 'If on, none of your code will be stored by us. If off, we use prompts and telemetry to improve Cursor.',
    changeText: '有効にすると、コードは保存されません。無効にすると、プロンプトとテレメトリを使用してCursorを改善します。',
    searchType: 'exact',
  },
  {
    originalText: ' setting, not account-level.',
    changeText: ' この設定はアカウントではなくマシンに適用されます。',
    searchType: 'exact',
  },
  {
    originalText: '<strong>machine-level',
    changeText: '<strong>',
    searchType: 'exact',
  },
  {
    originalText: 'Privacy mode',
    changeText: 'プライバシーモード',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled (all code remains private)',
    changeText: '有効（すべてのコードはプライベートのまま）',
    searchType: 'exact',
  },
  {
    originalText: 'Any questions?',
    changeText: 'ご質問はありますか？',
    searchType: 'exact',
  },
  {
    originalText: '<div>Check out our <span>docs</span> or join our <span>forum</span>.<br><br>Feel free to reach out at <span>hi@cursor.com</span>.',
    changeText: '<div>私たちの <span>docs</span> をご確認いただくか、<span>forum</span> にご参加ください。<br><br> <span>hi@cursor.com</span> までお気軽にお問い合わせください。',
    searchType: 'exact',
  },
  // Features
  {
    originalText: 'A powerful Copilot replacement that can suggest changes across multiple lines. Previously called Copilot++.',
    changeText: '複数行にわたって変更を提案できる強力なCopilot代替ツールです。以前はCopilot++と呼ばれていました。',
    searchType: 'exact',
  },
  {
    originalText: 'Partial accepts',
    changeText: '部分承認',
    searchType: 'exact',
  },
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: '次のキーを使用して提案の次の単語を承認します。',
    searchType: 'partial',
  },
  {
    originalText: 'Suggestions in Comments',
    changeText: 'コメント内の提案',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cursor Tab suggestions in comments',
    changeText: 'コメント内でCursor Tabの提案を有効にします。',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only changes',
    changeText: '空白のみの変更を表示',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only Cursor Tab suggestions',
    changeText: '空白のみのCursor Tab提案を表示',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import',
    changeText: '自動インポート',
    searchType: 'exact',
  },
  {
    originalText: 'Tab to import necessary modules with Cursor Tab. Only supports',
    changeText: 'Cursor Tabで必要なモジュールをインポートするにはTabを押してください。次の言語のみサポートしています。',
    searchType: 'partial',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Python用自動インポート',
    searchType: 'exact',
  },
  {
    originalText: 'BETA',
    changeText: 'ベータ',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: 'Pythonの自動インポートを有効にします。これはベータ機能です。',
    searchType: 'exact',
  },
  {
    originalText: 'Chat',
    changeText: 'チャット',
    searchType: 'exact',
  },
  {
    originalText: 'Ask Cursor Agent questions about your codebase, edit multiple files at once, and use tools',
    changeText: 'Cursor Agentにコードベースについて質問し、複数のファイルを同時に編集し、ツールを使用できます。',
    searchType: 'exact',
  },
  {
    originalText: 'Default new chat mode',
    changeText: 'デフォルトの新しいチャットモード',
    searchType: 'exact',
  },
  {
    originalText: 'New chats will open on this mode',
    changeText: '新しいチャットはこのモードで開きます。',
    searchType: 'exact',
  },
  {
    originalText: 'Agent',
    changeText: 'エージェント',
    searchType: 'exact',
  },
  {
    originalText: 'Chat text size',
    changeText: 'チャットテキストサイズ',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of AI chat messages',
    changeText: 'AIチャットメッセージのテキストサイズを調整します。',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: 'デフォルト',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-refresh chats',
    changeText: 'チャット自動更新',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically create a new chat after inactivity when opening the chat pane',
    changeText: 'チャットペインを開く際、非アクティブ状態の後に自動的に新しいチャットを作成します。',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-scroll to bottom',
    changeText: 'チャット下部への自動スクロール',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the chat pane when a new message is generated',
    changeText: '新しいメッセージが生成されたときにチャットペインの下部へ自動スクロールします。',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-apply to files outside context in Manual mode',
    changeText: 'Manualモードでコンテキスト外ファイルへの自動適用',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the chat in Manual mode to auto-apply changes to files outside the current context',
    changeText: 'Manualモードでチャットが現在のコンテキスト外のファイルに変更を自動適用することを許可',
    searchType: 'exact',
  },
  {
    originalText: '<div>Include project structure ',
    changeText: '<div>プロジェクト構造を含める ',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree to give the model a sense of your codebase layout',
    changeText: 'モデルがコードベースのレイアウトを理解できるように、簡略化されたディレクトリツリーを含めます。',
    searchType: 'exact',
  },
  {
    originalText: 'Full folder contents',
    changeText: 'フォルダ全体の内容',
    searchType: 'exact',
  },
  {
    originalText: 'Enable full folder contents instead of a tree outline of the folder structure',
    changeText: 'フォルダ構造のツリー概要の代わりにフォルダ全体の内容を有効にします。',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto-run mode',
    changeText: '自動実行モードを有効化',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools without asking for confirmation, such as executing commands and writing to files',
    changeText: 'コマンド実行やファイル書き込みなどの作業を行う際に、エージェントが確認なしにツールを実行することを許可します。',
    searchType: 'exact',
  },
  {
    originalText: 'Command allowlist',
    changeText: 'コマンド許可リスト',
    searchType: 'exact',
  },
  {
    originalText: 'Add commands here if only very specific commands should be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: '自動実行されるべき非常に特定のコマンドがある場合はここに追加してください${s().isAdminControlled?" (管理者によって制御)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Add',
    changeText: '追加',
    searchType: 'exact',
  },
  {
    originalText: 'Command denylist',
    changeText: 'コマンド拒否リスト',
    searchType: 'exact',
  },
  {
    originalText: 'Commands which should never be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: '自動実行されるべきではないコマンド${s().isAdminControlled?" (管理者によって制御)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Delete file protection',
    changeText: 'ファイル削除保護',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from deleting files automatically',
    changeText: '有効にすると、エージェントがファイルを自動削除することを防ぎます。',
    searchType: 'partial',
  },
  {
    originalText: 'MCP tools protection',
    changeText: 'MCPツール保護',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from running MCP tools automatically',
    changeText: '有効にすると、エージェントがMCPツールを自動実行することを防ぎます。',
    searchType: 'partial',
  },
  {
    originalText: 'Dot files protection',
    changeText: 'ドットファイル保護',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from modifying dot files (like .gitignore) automatically',
    changeText: '有効にすると、エージェントがドットファイル（.gitignoreなど）を自動修正することを防ぎます。',
    searchType: 'partial',
  },
  {
    originalText: 'Outside workspace protection',
    changeText: 'ワークスペース外保護',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from creating or modifying files outside the workspace automatically',
    changeText: '有効にすると、エージェントがワークスペース外のファイルを自動作成または修正することを防ぎます。',
    searchType: 'partial',
  },
  {
    originalText: "Dialog 'Don't ask again' preferences",
    changeText: "'再度確認しない'ダイアログ設定",
    searchType: 'exact',
  },
  {
    originalText: "Manage dialogs that you've previously selected 'Don't ask again' for",
    changeText: "以前に'再度確認しない'を選択したダイアログを管理します。",
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in pane or editor',
    changeText: 'ペインまたはエディターの入力ボックスタグを折りたたむ',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse pills in the chat pane or editor input box to save space',
    changeText: 'チャットペインまたはエディター入力ボックスのタグを折りたたんでスペースを節約します。',
    searchType: 'exact',
  },
  {
    originalText: 'Iterate on lints',
    changeText: 'リントの反復実行',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, chat in agent mode will iterate on linter errors to fix them automatically',
    changeText: '有効にすると、エージェントモードのチャットでリンターエラーを自動修正するために反復実行します',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: '階層的Cursor無視',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, .cursorignore files will apply to all subdirectories',
    changeText: '有効にすると、.cursorignoreファイルがすべてのサブディレクトリに適用されます',
    searchType: 'partial',
  },
  {
    originalText: 'Changing this setting will require a restart of Cursor.',
    changeText: 'この設定を変更するには、Cursorの再起動が必要です。',
    searchType: 'partial',
  },
  {
    originalText: 'Auto-accept diffs',
    changeText: '差分の自動承認',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, all diffs in the composer will be accepted once they are no longer in the worktree',
    changeText: '有効にすると、作業ツリーから削除されたコンポーザー内のすべての差分が自動承認されます',
    searchType: 'exact',
  },
  {
    originalText: '<div>Custom modes',
    changeText: '<div>カスタムモード',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the creation of custom modes',
    changeText: 'カスタムモードの作成を許可',
    searchType: 'exact',
  },
  {
    originalText: '<div>Play sound on finish ',
    changeText: '<div>完了時に音を再生 ',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when a chat response is completed',
    changeText: 'チャット応答が完了したときに音を再生します',
    searchType: 'exact',
  },
  {
    originalText: '<div>Auto Group Changes ',
    changeText: '<div>変更の自動グループ化 ',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically group changes made in a chat session with an LLM for you to review',
    changeText: 'LLMとのチャットセッションで行われた変更を自動的にグループ化して確認できるようにします',
    searchType: 'exact',
  },
  {
    originalText: '<div>Web Search Tool ',
    changeText: '<div>ウェブ検索ツール ',
    searchType: 'exact',
  },
  {
    originalText: 'This will allow chat in agent/ask mode to search the web for information',
    changeText: 'エージェント/質問モードのチャットが情報を検索するためにウェブを検索することを許可します',
    searchType: 'exact',
  },
  {
    originalText: "Manage the custom docs that you've added.",
    changeText: '追加したカスタムドキュメントを管理します。',
    searchType: 'exact',
  },
  {
    originalText: '<div>No docs added yet... Type "@Add" in a chat or in an edit to start a doc.',
    changeText: '<div>まだドキュメントが追加されていません...チャットまたは編集で"@Add"と入力してドキュメントを開始してください。',
    searchType: 'exact',
  },
  {
    originalText: 'Show chat/edit tooltip',
    changeText: 'チャット/編集ツールチップを表示',
    searchType: 'exact',
  },
  {
    originalText: 'Show a chat/edit tooltip near highlighted code in the editor',
    changeText: 'エディターでハイライトされたコードの近くにチャット/編集ツールチップを表示します',
    searchType: 'exact',
  },
  {
    originalText: 'Auto parse inline edit links',
    changeText: 'インライン編集リンクの自動解析',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically parse links when pasted into',
    changeText: '入力に貼り付けたときにリンクを自動解析します',
    searchType: 'partial',
  },
  {
    originalText: 'Auto select for',
    changeText: '自動選択',
    searchType: 'partial',
  },
  {
    originalText: 'Use themed diff backgrounds',
    changeText: 'テーマ適用差分背景を使用',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline diffs',
    changeText: 'インライン差分にテーマ背景色を使用します',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs',
    changeText: '文字レベル差分を使用',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline diffs',
    changeText: 'インライン差分に文字レベル差分を使用します',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal hint',
    changeText: 'ターミナルヒント',
    searchType: 'exact',
  },
  {
    originalText: 'Show the hint text at the bottom of the terminal',
    changeText: 'ターミナル下部にヒントテキストを表示します',
    searchType: 'exact',
  },
  {
    originalText: 'Show terminal hover hint',
    changeText: 'ターミナルホバーヒントを表示',
    searchType: 'exact',
  },
  {
    originalText: "Show hints like 'Add to chat' in the terminal",
    changeText: "ターミナルで'チャットに追加'などのヒントを表示します",
    searchType: 'exact',
  },
  {
    originalText: 'Use preview box for terminal',
    changeText: 'ターミナルにプレビューボックスを使用',
    searchType: 'partial',
  },
  {
    originalText: 'If turned off, responses are streamed directly into the shell',
    changeText: '無効にすると、応答がシェルに直接ストリーミングされます',
    searchType: 'exact',
  },
  {
    originalText: '<div>Beta features',
    changeText: '<div>ベータ機能',
    searchType: 'exact',
  },
  {
    originalText: 'Update frequency',
    changeText: '更新頻度',
    searchType: 'exact',
  },
  {
    originalText: 'Get updates as soon as they are ready. Early Access updates may be unstable for production work.',
    changeText: '準備でき次第アップデートを受け取ります。早期アクセスアップデートは本番作業では不安定な場合があります。',
    searchType: 'exact',
  },
  {
    originalText: 'Standard',
    changeText: '標準',
    searchType: 'exact',
  },
  {
    originalText: 'Notepads',
    changeText: 'ノートパッド',
    searchType: 'exact',
  },
  {
    originalText: 'Craft and share context between chat and composers',
    changeText: 'チャットとコンポーザー間でコンテキストを作成・共有',
    searchType: 'exact',
  },
  {
    originalText: 'Bug Finder',
    changeText: 'バグファインダー',
    searchType: 'exact',
  },
  {
    originalText: 'Run a bug finder on your current git diff to find bugs.',
    changeText: '現在のgit diffでバグファインダーを実行してバグを見つけます。',
    searchType: 'exact',
  },
  {
    originalText: '<div><div>Check out the Bug Finder tab in the Activity Bar.',
    changeText: '<div><div>アクティビティバーのバグファインダータブをご確認ください。',
    searchType: 'exact',
  },
  {
    originalText: 'Background Agent',
    changeText: 'バックグラウンドエージェント',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the background agent, in beta. Allows you to run agents in the cloud.',
    changeText: 'ベータ版のバックグラウンドエージェントを有効にします。クラウドでエージェントを実行できるようになります。',
    searchType: 'exact',
  },
  {
    originalText: '<h3>Enable Background Agents (preview)',
    changeText: '<h3>バックグラウンドエージェントを有効化（プレビュー）',
    searchType: 'exact',
  },
  {
    originalText: '<div>Background agents run in parallel in their own remote developer environments. This feature is in <strong>beta</strong>, and has a few caveats:',
    changeText: '<div>バックグラウンドエージェントは独自のリモート開発環境で並列実行されます。この機能は<strong>ベータ</strong>版であり、いくつかの注意事項があります：',
    searchType: 'exact',
  },
  {
    originalText: '<ul><li><strong>Privacy:</strong> During the preview period, background agents are only available if you have privacy mode disabled.</li><li><strong>Security:</strong> Background agents run in isolated remote environments. We have prioritized security while building this, but the code has not yet been audited. Please email security@cursor.com with any concerns.</li><li><strong>Cost:</strong> During the preview period, background agents cost the same as normal agents (but only MAX models are supported, which can be quite expensive).',
    changeText: '<ul><li><strong>プライバシー:</strong> プレビュー期間中、バックグラウンドエージェントはプライバシーモードを無効にした場合のみ利用可能です。</li><li><strong>セキュリティ:</strong> バックグラウンドエージェントは隔離されたリモート環境で実行されます。この機能の構築中にセキュリティを優先しましたが、コードはまだ監査されていません。ご質問がございましたらsecurity@cursor.comまでメールでお問い合わせください。</li><li><strong>コスト:</strong> プレビュー期間中、バックグラウンドエージェントは通常のエージェントと同じコストがかかります（ただし、かなり高価なMAXモデルのみサポートされています）。',
    searchType: 'exact',
  },
  {
    originalText: '<div>You can find more details at <span>docs.cursor.com/background-agent</span>.',
    changeText: '<div>詳細については<span>docs.cursor.com/background-agent</span>をご覧ください。',
    searchType: 'exact',
  },
  {
    originalText: '<div class="mt-4 mb-4 relative">To enable background agents in preview, please <span>go to Settings</span> and disable privacy mode.',
    changeText: '<div class="mt-4 mb-4 relative">プレビューでバックグラウンドエージェントを有効にするには、<span>設定に移動</span>してプライバシーモードを無効にしてください。',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: 'コードベースインデックス',
    searchType: 'exact',
  },
  {
    originalText: 'Embeddings improve your codebase-wide answers. Embeddings and metadata are stored in the',
    changeText: '埋め込みによってコードベース全体の回答が向上します。埋め込みとメタデータは次の場所に保存されます： ',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: ' ですが、すべてのコードはローカルに保存されます。',
    searchType: 'exact',
  },
  {
    originalText: 'Resync Index',
    changeText: 'インデックス再同期',
    searchType: 'exact',
  },
  {
    originalText: 'Delete Index',
    changeText: 'インデックス削除',
    searchType: 'exact',
  },
  {
    originalText: 'Index new folders by default',
    changeText: 'デフォルトで新しいフォルダをインデックス',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled',
    changeText: '有効',
    searchType: 'exact',
  },
  {
    originalText: 'Ignore files',
    changeText: 'ファイルを無視',
    searchType: 'exact',
  },
  {
    originalText: '<div class=settings__item_link>Configure ignored files',
    changeText: '<div class=settings__item_link>無視するファイルを設定',
    searchType: 'exact',
  },
  {
    originalText: 'Configure the files that Cursor will ignore when indexing your repository (in addition to your .gitignore).',
    changeText: 'リポジトリをインデックスする際にCursorが無視するファイルを設定します。',
    searchType: 'exact',
  },
  {
    originalText: 'Git graph file relationships',
    changeText: 'Gitグラフファイル関係',
    searchType: 'exact',
  },
  {
    originalText: 'When set to true, Cursor will by default index any new folders opened. If turned off, you can still manually index folders by clicking the "Compute Index" button. Folders with more than',
    changeText: '有効にすると、Cursorはデフォルトで新しく開かれたすべてのフォルダをインデックスします。無効にしても、「インデックス計算」ボタンをクリックしてフォルダを手動でインデックスできます。',
    searchType: 'exact',
  },
  {
    originalText: 'files will not be auto-indexed.',
    changeText: ' 個のファイルは自動インデックスされません。',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, Cursor will index your git history to help understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and obfuscated file names) are stored on the server.',
    changeText: '有効にすると、Cursorはgit履歴をインデックスしてファイル間の関係を理解するのに役立ちます。コードとコミットメッセージはローカルに保存されますが、コミットに関するメタデータ（SHA、変更数、難読化されたファイル名）はサーバーに保存されます。',
    searchType: 'exact',
  },

  // Editor Settings -> Cursor
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: 'インラインコード編集のために領域を自動選択します',
    searchType: 'exact',
  },
  {
    originalText: 'Show hover hint in the terminal',
    changeText: 'ターミナルでホバーヒントを表示',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cmd+P / Ctrl+P shortcut for file picker in Composer',
    changeText: 'コンポーザーでファイル選択のためのCmd+P / Ctrl+Pショートカットを有効化',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in the composer pane',
    changeText: 'コンポーザーペインで入力ボックスタグを折りたたむ',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the creation of custom modes',
    changeText: 'カスタムモードの作成を許可',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all diffs in the composer once they are no longer in the worktree',
    changeText: '作業ツリーから削除された後、コンポーザーですべての差分を自動承認します',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically save files in normal composers',
    changeText: '通常のコンポーザーでファイルを自動保存',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the composer pane when a new message is generated',
    changeText: '新しいメッセージが生成されたときにコンポーザーペインの下部へ自動スクロールします',
    searchType: 'exact',
  },
  {
    originalText: 'Queue submitted messages when the composer is generating',
    changeText: 'コンポーザーが生成中に送信されたメッセージをキューに追加します',
    searchType: 'exact',
  },
  {
    originalText: 'Show markdown hover participant actions',
    changeText: 'マークダウンホバー参加者アクションを表示',
    searchType: 'exact',
  },
  {
    originalText: 'Show suggested files in the composer',
    changeText: 'コンポーザーで提案されたファイルを表示',
    searchType: 'exact',
  },
  {
    originalText: 'Controls the text size scale (relative to base 12px) of AI chat messages.',
    changeText: 'AIチャットメッセージのテキストサイズスケールを制御します（基本12pxを基準）。',
    searchType: 'exact',
  },
  {
    originalText: 'Disable Cursor Tab for these languages',
    changeText: 'これらの言語でCursor Tabを無効化',
    searchType: 'exact',
  },
  {
    originalText: 'Enable partial accepts for Cursor Tab, using the editor.action.inlineSuggest.acceptNextWord keybinding',
    changeText: 'Cursor Tabの部分承認を有効にし、editor.action.inlineSuggest.acceptNextWordキーバインドを使用します',
    searchType: 'exact',
  },
  {
    originalText: 'Use character level diffs for inline diffs',
    changeText: 'インライン差分に文字レベル差分を使用',
    searchType: 'exact',
  },
  {
    originalText: "Disable HTTP/2 for all requests, and use HTTP/1.1 instead. This increases resource utilization and latency, but is useful if you're behind a corporate proxy that blocks HTTP/2.",
    changeText: 'すべてのリクエストでHTTP/2を無効にし、代わりにHTTP/1.1を使用します。これによりリソース使用量と遅延が増加しますが、HTTP/2をブロックする企業プロキシの背後にいる場合に便利です。',
    searchType: 'exact',
  },
  {
    originalText: 'Warning: this will increase the memory usage of Cursor. Some AI features use the shadow workspace to refine code in the background before presenting it to you. The shadow workspace is a hidden window running on your local machine in a copy of your current workspace.',
    changeText: '警告：これによりCursorのメモリ使用量が増加します。一部のAI機能は、コードをユーザーに提示する前にバックグラウンドで改良するためにシャドウワークスペースを使用します。シャドウワークスペースは、現在のワークスペースのコピーでローカルマシン上で実行されている隠しウィンドウです。',
    searchType: 'exact',
  },
  {
    originalText: 'Index your git history to help Cursor understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and encrypted file names) are stored on the server.',
    changeText: 'Cursorがファイル間の関係を理解するのに役立つように、git履歴をインデックスします。コードとコミットメッセージはローカルに保存されますが、コミットに関するメタデータ（SHA、変更数、暗号化されたファイル名）はサーバーに保存されます。',
    searchType: 'exact',
  },
  {
    originalText: 'Global list of files to always ignore in Cursor features, across all workspaces. Uses glob patterns. These patterns have the same effect as adding them to a .cursorignore file in every workspace.',
    changeText: 'すべてのワークスペースでCursor機能において常に無視するファイルのグローバルリスト。globパターンを使用します。これらのパターンは、すべてのワークスペースの.cursorignoreファイルに追加するのと同じ効果があります。',
    searchType: 'exact',
  },
  {
    originalText: 'Show notification toasts in the same location as the chat',
    changeText: 'チャットと同じ場所に通知トーストを表示',
    searchType: 'exact',
  },
];
