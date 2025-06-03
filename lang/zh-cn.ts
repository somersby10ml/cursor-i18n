import { type Replacement } from './types';

export const REPLACEMENTS: Replacement[] = [

  // Left Menu
  {
    originalText: 'General',
    changeText: '常规',
    searchType: 'exact',
  },
  {
    originalText: 'Features',
    changeText: '功能',
    searchType: 'exact',
  },
  {
    originalText: 'Models',
    changeText: '模型',
    searchType: 'exact',
  },
  {
    originalText: 'Indexing',
    changeText: '索引',
    searchType: 'exact',
  },
  {
    originalText: 'Beta',
    changeText: '测试功能',
    searchType: 'exact',
  },
  {
    originalText: 'Account',
    changeText: '账户',
    searchType: 'exact',
  },

  // General
  {
    originalText: 'You are currently signed in with',
    changeText: '当前登录账户',
    searchType: 'partial',
  },
  {
    originalText: 'Manage',
    changeText: '管理',
    searchType: 'exact',
  },
  {
    originalText: 'Log out',
    changeText: '退出登录',
    searchType: 'exact',
  },
  {
    originalText: 'VS Code Import',
    changeText: 'VS Code 导入',
    searchType: 'exact',
  },
  {
    originalText: 'Instantly use all of your extensions, settings and keybindings',
    changeText: '立即使用您的所有扩展、设置和快捷键绑定',
    searchType: 'exact',
  },
  {
    originalText: 'Import',
    changeText: '导入',
    searchType: 'exact',
  },
  {
    originalText: 'Appearance',
    changeText: '外观',
    searchType: 'exact',
  },
  {
    originalText: 'Configure how Cursor looks and feels.',
    changeText: '配置 Cursor 的外观和体验。',
    searchType: 'exact',
  },
  {
    originalText: '<div><span>Open editor settings.</span> (font, auto-save, word wrap, etc)<br><br><span>Configure keyboard shortcuts.</span> <br><br>Use <span></span> for the command palette, where many editor functions can be controlled.',
    changeText: '<div><span>打开编辑器设置。</span> (字体、自动保存、自动换行等)<br><br><span>配置键盘快捷键。</span> <br><br>使用 <span></span> 打开命令面板，可以控制许多编辑器功能。',
    searchType: 'exact',
  },
  {
    originalText: 'If on, none of your code will be stored by us. If off, we use prompts and telemetry to improve Cursor.',
    changeText: '启用后，您的代码不会被我们存储。禁用时，我们使用提示和遥测数据来改进 Cursor。',
    searchType: 'exact',
  },
  {
    originalText: ' setting, not account-level.',
    changeText: ' 该设置适用于设备而非账户。',
    searchType: 'exact',
  },
  {
    originalText: '<strong>machine-level',
    changeText: '<strong>',
    searchType: 'exact',
  },
  {
    originalText: 'Privacy mode',
    changeText: '隐私模式',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled (all code remains private)',
    changeText: '已启用 (所有代码保持私密)',
    searchType: 'exact',
  },
  {
    originalText: 'Any questions?',
    changeText: '有疑问吗？',
    searchType: 'exact',
  },
  {
    originalText: '<div>Check out our <span>docs</span> or join our <span>forum</span>.<br><br>Feel free to reach out at <span>hi@cursor.com</span>.',
    changeText: '<div>查看我们的 <span>docs</span> 或加入我们的 <span>forum</span>。<br><br>随时通过 <span>hi@cursor.com</span> 联系我们。',
    searchType: 'exact',
  },
  // Features
  {
    originalText: 'A powerful Copilot replacement that can suggest changes across multiple lines. Previously called Copilot++.',
    changeText: '一个强大的 Copilot 替代工具，可以跨多行建议更改。以前称为 Copilot++。',
    searchType: 'exact',
  },
  {
    originalText: 'Partial accepts',
    changeText: '部分接受',
    searchType: 'exact',
  },
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: '通过以下键接受建议的下一个词：',
    searchType: 'partial',
  },
  {
    originalText: 'Suggestions in Comments',
    changeText: '注释中的建议',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cursor Tab suggestions in comments',
    changeText: '在注释中启用 Cursor Tab 建议',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only changes',
    changeText: '显示仅空白字符的更改',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only Cursor Tab suggestions',
    changeText: '显示仅空白字符的 Cursor Tab 建议',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import',
    changeText: '自动导入',
    searchType: 'exact',
  },
  {
    originalText: 'Tab to import necessary modules with Cursor Tab. Only supports',
    changeText: '使用 Cursor Tab 按 Tab 键导入必要的模块。仅支持以下语言：',
    searchType: 'partial',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Python 自动导入',
    searchType: 'exact',
  },
  {
    originalText: 'BETA',
    changeText: '测试版',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: '为 Python 启用自动导入。这是一个测试版功能。',
    searchType: 'exact',
  },
  {
    originalText: 'Chat',
    changeText: '聊天',
    searchType: 'exact',
  },
  {
    originalText: 'Ask Cursor Agent questions about your codebase, edit multiple files at once, and use tools',
    changeText: '向 Cursor Agent 询问关于代码库的问题，同时编辑多个文件，并使用工具',
    searchType: 'exact',
  },
  {
    originalText: 'Default new chat mode',
    changeText: '默认新聊天模式',
    searchType: 'exact',
  },
  {
    originalText: 'New chats will open on this mode',
    changeText: '新聊天将在此模式下打开',
    searchType: 'exact',
  },
  {
    originalText: 'Agent',
    changeText: '智能体',
    searchType: 'exact',
  },
  {
    originalText: 'Chat text size',
    changeText: '聊天文本大小',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of AI chat messages',
    changeText: '调整 AI 聊天消息的文本大小',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: '默认',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-refresh chats',
    changeText: '自动刷新聊天',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically create a new chat after inactivity when opening the chat pane',
    changeText: '打开聊天面板时在非活动状态后自动创建新聊天',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-scroll to bottom',
    changeText: '自动滚动到底部',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the chat pane when a new message is generated',
    changeText: '生成新消息时自动滚动到聊天面板底部',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-apply to files outside context in Manual mode',
    changeText: '在手动模式下自动应用到上下文外的文件',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the chat in Manual mode to auto-apply changes to files outside the current context',
    changeText: '允许手动模式下的聊天自动将更改应用到当前上下文外的文件',
    searchType: 'exact',
  },
  {
    originalText: '<div>Include project structure ',
    changeText: '<div>包含项目结构 ',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree to give the model a sense of your codebase layout',
    changeText: '包含简化的目录树，让模型了解您的代码库布局',
    searchType: 'exact',
  },
  {
    originalText: 'Full folder contents',
    changeText: '完整文件夹内容',
    searchType: 'exact',
  },
  {
    originalText: 'Enable full folder contents instead of a tree outline of the folder structure',
    changeText: '启用完整文件夹内容而不是文件夹结构的树形大纲',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto-run mode',
    changeText: '启用自动运行模式',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools without asking for confirmation, such as executing commands and writing to files',
    changeText: '允许智能体无需确认即可运行工具，如执行命令和写入文件',
    searchType: 'exact',
  },
  {
    originalText: 'Command allowlist',
    changeText: '命令允许列表',
    searchType: 'exact',
  },
  {
    originalText: 'Add commands here if only very specific commands should be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: '如果只有非常特定的命令应该自动执行，请在此处添加命令${s().isAdminControlled?" (由管理员控制)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Add',
    changeText: '添加',
    searchType: 'exact',
  },
  {
    originalText: 'Command denylist',
    changeText: '命令拒绝列表',
    searchType: 'exact',
  },
  {
    originalText: 'Commands which should never be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: '永远不应自动执行的命令${s().isAdminControlled?" (由管理员控制)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Delete file protection',
    changeText: '删除文件保护',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from deleting files automatically',
    changeText: '如果启用，防止智能体自动删除文件',
    searchType: 'partial',
  },
  {
    originalText: 'MCP tools protection',
    changeText: 'MCP 工具保护',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from running MCP tools automatically',
    changeText: '如果启用，防止智能体自动运行 MCP 工具',
    searchType: 'partial',
  },
  {
    originalText: 'Dot files protection',
    changeText: '点文件保护',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from modifying dot files (like .gitignore) automatically',
    changeText: '如果启用，防止智能体自动修改点文件（如 .gitignore）',
    searchType: 'partial',
  },
  {
    originalText: 'Outside workspace protection',
    changeText: '工作区外保护',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from creating or modifying files outside the workspace automatically',
    changeText: '如果启用，防止智能体自动在工作区外创建或修改文件',
    searchType: 'partial',
  },
  {
    originalText: "Dialog 'Don't ask again' preferences",
    changeText: "'不再询问'对话框首选项",
    searchType: 'exact',
  },
  {
    originalText: "Manage dialogs that you've previously selected 'Don't ask again' for",
    changeText: "管理您之前选择过'不再询问'的对话框",
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in pane or editor',
    changeText: '在面板或编辑器中折叠输入框标签',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse pills in the chat pane or editor input box to save space',
    changeText: '折叠聊天面板或编辑器输入框中的标签以节省空间',
    searchType: 'exact',
  },
  {
    originalText: 'Iterate on lints',
    changeText: '迭代代码检查',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, chat in agent mode will iterate on linter errors to fix them automatically',
    changeText: '如果启用，智能体模式下的聊天将迭代代码检查错误以自动修复它们',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: '分层 Cursor 忽略',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, .cursorignore files will apply to all subdirectories',
    changeText: '启用时，.cursorignore 文件将应用于所有子目录',
    searchType: 'partial',
  },
  {
    originalText: 'Changing this setting will require a restart of Cursor.',
    changeText: '更改此设置需要重新启动 Cursor。',
    searchType: 'partial',
  },
  {
    originalText: 'Auto-accept diffs',
    changeText: '自动接受差异',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, all diffs in the composer will be accepted once they are no longer in the worktree',
    changeText: '如果启用，编辑器中的所有差异在不再存在于工作树中时将被自动接受',
    searchType: 'exact',
  },
  {
    originalText: '<div>Custom modes',
    changeText: '<div>自定义模式',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the creation of custom modes',
    changeText: '允许创建自定义模式',
    searchType: 'exact',
  },
  {
    originalText: '<div>Play sound on finish ',
    changeText: '<div>完成时播放声音 ',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when a chat response is completed',
    changeText: '聊天回复完成时播放声音',
    searchType: 'exact',
  },
  {
    originalText: '<div>Auto Group Changes ',
    changeText: '<div>自动分组更改 ',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically group changes made in a chat session with an LLM for you to review',
    changeText: '自动分组在与大语言模型聊天会话中所做的更改以供您查看',
    searchType: 'exact',
  },
  {
    originalText: '<div>Web Search Tool ',
    changeText: '<div>网络搜索工具 ',
    searchType: 'exact',
  },
  {
    originalText: 'This will allow chat in agent/ask mode to search the web for information',
    changeText: '这将允许智能体/询问模式下的聊天在网络上搜索信息',
    searchType: 'exact',
  },
  {
    originalText: "Manage the custom docs that you've added.",
    changeText: '管理您添加的自定义文档。',
    searchType: 'exact',
  },
  {
    originalText: '<div>No docs added yet... Type "@Add" in a chat or in an edit to start a doc.',
    changeText: '<div>尚未添加文档... 在聊天或编辑中输入 "@Add" 开始创建文档。',
    searchType: 'exact',
  },
  {
    originalText: 'Show chat/edit tooltip',
    changeText: '显示聊天/编辑工具提示',
    searchType: 'exact',
  },
  {
    originalText: 'Show a chat/edit tooltip near highlighted code in the editor',
    changeText: '在编辑器中突出显示的代码附近显示聊天/编辑工具提示',
    searchType: 'exact',
  },
  {
    originalText: 'Auto parse inline edit links',
    changeText: '自动解析内联编辑链接',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically parse links when pasted into',
    changeText: '粘贴到输入框时自动解析链接',
    searchType: 'partial',
  },
  {
    originalText: 'Auto select for',
    changeText: '自动选择',
    searchType: 'partial',
  },
  {
    originalText: 'Use themed diff backgrounds',
    changeText: '使用主题差异背景',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline diffs',
    changeText: '为内联差异使用主题背景颜色',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs',
    changeText: '使用字符级差异',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline diffs',
    changeText: '为内联差异使用字符级差异',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal hint',
    changeText: '终端提示',
    searchType: 'exact',
  },
  {
    originalText: 'Show the hint text at the bottom of the terminal',
    changeText: '在终端底部显示提示文本',
    searchType: 'exact',
  },
  {
    originalText: 'Show terminal hover hint',
    changeText: '显示终端悬停提示',
    searchType: 'exact',
  },
  {
    originalText: "Show hints like 'Add to chat' in the terminal",
    changeText: "在终端中显示如'添加到聊天'等提示",
    searchType: 'exact',
  },
  {
    originalText: 'Use preview box for terminal',
    changeText: '为终端使用预览框',
    searchType: 'partial',
  },
  {
    originalText: 'If turned off, responses are streamed directly into the shell',
    changeText: '如果关闭，响应将直接流式传输到 shell',
    searchType: 'exact',
  },
  {
    originalText: '<div>Beta features',
    changeText: '<div>测试版功能',
    searchType: 'exact',
  },
  {
    originalText: 'Update frequency',
    changeText: '更新频率',
    searchType: 'exact',
  },
  {
    originalText: 'Get updates as soon as they are ready. Early Access updates may be unstable for production work.',
    changeText: '一旦准备就绪即可获得更新。抢先体验更新可能对生产工作不稳定。',
    searchType: 'exact',
  },
  {
    originalText: 'Standard',
    changeText: '标准',
    searchType: 'exact',
  },
  {
    originalText: 'Notepads',
    changeText: '记事本',
    searchType: 'exact',
  },
  {
    originalText: 'Craft and share context between chat and composers',
    changeText: '在聊天和编辑器之间制作和共享上下文',
    searchType: 'exact',
  },
  {
    originalText: 'Bug Finder',
    changeText: '错误查找器',
    searchType: 'exact',
  },
  {
    originalText: 'Run a bug finder on your current git diff to find bugs.',
    changeText: '在当前 git 差异上运行错误查找器来发现错误。',
    searchType: 'exact',
  },
  {
    originalText: '<div><div>Check out the Bug Finder tab in the Activity Bar.',
    changeText: '<div><div>查看活动栏中的错误查找器选项卡。',
    searchType: 'exact',
  },
  {
    originalText: 'Background Agent',
    changeText: '后台智能体',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the background agent, in beta. Allows you to run agents in the cloud.',
    changeText: '启用测试版后台智能体。允许您在云端运行智能体。',
    searchType: 'exact',
  },
  {
    originalText: '<h3>Enable Background Agents (preview)',
    changeText: '<h3>启用后台智能体 (预览)',
    searchType: 'exact',
  },
  {
    originalText: '<div>Background agents run in parallel in their own remote developer environments. This feature is in <strong>beta</strong>, and has a few caveats:',
    changeText: '<div>后台智能体在其自己的远程开发环境中并行运行。此功能处于 <strong>测试版</strong>，有一些注意事项：',
    searchType: 'exact',
  },
  {
    originalText: '<ul><li><strong>Privacy:</strong> During the preview period, background agents are only available if you have privacy mode disabled.</li><li><strong>Security:</strong> Background agents run in isolated remote environments. We have prioritized security while building this, but the code has not yet been audited. Please email security@cursor.com with any concerns.</li><li><strong>Cost:</strong> During the preview period, background agents cost the same as normal agents (but only MAX models are supported, which can be quite expensive).',
    changeText: '<ul><li><strong>隐私：</strong> 在预览期间，只有禁用隐私模式才能使用后台智能体。</li><li><strong>安全：</strong> 后台智能体在隔离的远程环境中运行。我们在构建此功能时优先考虑了安全性，但代码尚未经过审计。如有任何问题，请发送邮件至 security@cursor.com。</li><li><strong>成本：</strong> 在预览期间，后台智能体的成本与普通智能体相同（但仅支持 MAX 模型，这可能相当昂贵）。',
    searchType: 'exact',
  },
  {
    originalText: '<div>You can find more details at <span>docs.cursor.com/background-agent</span>.',
    changeText: '<div>您可以在 <span>docs.cursor.com/background-agent</span> 找到更多详细信息。',
    searchType: 'exact',
  },
  {
    originalText: '<div class="mt-4 mb-4 relative">To enable background agents in preview, please <span>go to Settings</span> and disable privacy mode.',
    changeText: '<div class="mt-4 mb-4 relative">要在预览中启用后台智能体，请 <span>go to Settings</span> 转到设置并禁用隐私模式。',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: '代码库索引',
    searchType: 'exact',
  },
  {
    originalText: 'Embeddings improve your codebase-wide answers. Embeddings and metadata are stored in the',
    changeText: '嵌入向量改善您的整个代码库回答。嵌入向量和元数据存储在',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: '，但所有代码都存储在本地。',
    searchType: 'exact',
  },
  {
    originalText: 'Resync Index',
    changeText: '重新同步索引',
    searchType: 'exact',
  },
  {
    originalText: 'Delete Index',
    changeText: '删除索引',
    searchType: 'exact',
  },
  {
    originalText: 'Index new folders by default',
    changeText: '默认索引新文件夹',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled',
    changeText: '已启用',
    searchType: 'exact',
  },
  {
    originalText: 'Ignore files',
    changeText: '忽略文件',
    searchType: 'exact',
  },
  {
    originalText: '<div class=settings__item_link>Configure ignored files',
    changeText: '<div class=settings__item_link>配置忽略的文件',
    searchType: 'exact',
  },
  {
    originalText: 'Configure the files that Cursor will ignore when indexing your repository (in addition to your .gitignore).',
    changeText: '配置 Cursor 在索引您的存储库时将忽略的文件（除了您的 .gitignore）。',
    searchType: 'exact',
  },
  {
    originalText: 'Git graph file relationships',
    changeText: 'Git 图文件关系',
    searchType: 'exact',
  },
  {
    originalText: 'When set to true, Cursor will by default index any new folders opened. If turned off, you can still manually index folders by clicking the "Compute Index" button. Folders with more than',
    changeText: '设置为启用时，Cursor 默认会索引任何新打开的文件夹。如果关闭，您仍然可以通过单击"计算索引"按钮手动索引文件夹。超过',
    searchType: 'exact',
  },
  {
    originalText: 'files will not be auto-indexed.',
    changeText: '个文件的文件夹将不会自动索引。',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, Cursor will index your git history to help understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and obfuscated file names) are stored on the server.',
    changeText: '启用时，Cursor 将索引您的 git 历史记录以帮助了解哪些文件彼此相关。代码和提交消息存储在本地，但有关提交的元数据（SHA、更改数量和混淆的文件名）存储在服务器上。',
    searchType: 'exact',
  },

  // Editor Settings -> Cursor
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: '自动选择内联代码编辑区域',
    searchType: 'exact',
  },
  {
    originalText: 'Show hover hint in the terminal',
    changeText: '在终端中显示悬停提示',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cmd+P / Ctrl+P shortcut for file picker in Composer',
    changeText: '在编辑器中启用文件选择器的 Cmd+P / Ctrl+P 快捷键',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in the composer pane',
    changeText: '在编辑器面板中折叠输入框标签',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the creation of custom modes',
    changeText: '启用自定义模式的创建',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all diffs in the composer once they are no longer in the worktree',
    changeText: '一旦不再在工作树中，自动接受编辑器中的所有差异',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically save files in normal composers',
    changeText: '在普通编辑器中自动保存文件',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the composer pane when a new message is generated',
    changeText: '生成新消息时自动滚动到编辑器面板底部',
    searchType: 'exact',
  },
  {
    originalText: 'Queue submitted messages when the composer is generating',
    changeText: '当编辑器正在生成时将提交的消息排队',
    searchType: 'exact',
  },
  {
    originalText: 'Show markdown hover participant actions',
    changeText: '显示 Markdown 悬停参与者操作',
    searchType: 'exact',
  },
  {
    originalText: 'Show suggested files in the composer',
    changeText: '在编辑器中显示建议的文件',
    searchType: 'exact',
  },
  {
    originalText: 'Controls the text size scale (relative to base 12px) of AI chat messages.',
    changeText: '控制 AI 聊天消息的文本大小比例（相对于基础 12px）。',
    searchType: 'exact',
  },
  {
    originalText: 'Disable Cursor Tab for these languages',
    changeText: '为这些语言禁用 Cursor Tab',
    searchType: 'exact',
  },
  {
    originalText: 'Enable partial accepts for Cursor Tab, using the editor.action.inlineSuggest.acceptNextWord keybinding',
    changeText: '为 Cursor Tab 启用部分接受，使用 editor.action.inlineSuggest.acceptNextWord 键绑定',
    searchType: 'exact',
  },
  {
    originalText: 'Use character level diffs for inline diffs',
    changeText: '为内联差异使用字符级差异',
    searchType: 'exact',
  },
  {
    originalText: "Disable HTTP/2 for all requests, and use HTTP/1.1 instead. This increases resource utilization and latency, but is useful if you're behind a corporate proxy that blocks HTTP/2.",
    changeText: '为所有请求禁用 HTTP/2，改用 HTTP/1.1。这会增加资源利用率和延迟，但如果您位于阻止 HTTP/2 的企业代理之后，这会很有用。',
    searchType: 'exact',
  },
  {
    originalText: 'Warning: this will increase the memory usage of Cursor. Some AI features use the shadow workspace to refine code in the background before presenting it to you. The shadow workspace is a hidden window running on your local machine in a copy of your current workspace.',
    changeText: '警告：这将增加 Cursor 的内存使用量。一些 AI 功能使用影子工作区在向您展示之前在后台改进代码。影子工作区是在您本地机器上运行的隐藏窗口，是您当前工作区的副本。',
    searchType: 'exact',
  },
  {
    originalText: 'Index your git history to help Cursor understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and encrypted file names) are stored on the server.',
    changeText: '索引您的 git 历史记录以帮助 Cursor 了解哪些文件彼此相关。代码和提交消息存储在本地，但有关提交的元数据（SHA、更改数量和加密的文件名）存储在服务器上。',
    searchType: 'exact',
  },
  {
    originalText: 'Global list of files to always ignore in Cursor features, across all workspaces. Uses glob patterns. These patterns have the same effect as adding them to a .cursorignore file in every workspace.',
    changeText: '在所有工作区中始终在 Cursor 功能中忽略的文件的全局列表。使用 glob 模式。这些模式的效果与将它们添加到每个工作区的 .cursorignore 文件中相同。',
    searchType: 'exact',
  },
  {
    originalText: 'Show notification toasts in the same location as the chat',
    changeText: '在与聊天相同的位置显示通知提示',
    searchType: 'exact',
  },
];
