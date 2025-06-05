import { type Replacement } from '../types';

export default [
  // 基本设置
  {
    originalText: 'Auto-Select Code Regions for Quick Edit \\((Ctrl|Cmd)\\+K\\)',
    changeText: '快速编辑($1+K)自动选择代码区域',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Automatically parse links when pasted into Quick Edit \\((Ctrl|Cmd)\\+K\\) input',
    changeText: '在快速编辑($1+K)输入中粘贴时自动解析链接',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Show a hint for (Ctrl|Cmd)\\+K in the Terminal',
    changeText: '在终端显示$1+K的提示',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Preview Box for Terminal (Ctrl|Cmd)\\+K',
    changeText: '终端$1+K预览框',
    searchType: 'regex',
    flags: 'g',
  },
  // 基本设置
  {
    originalText: 'Default Mode',
    changeText: '默认模式',
    searchType: 'exact',
  },
  {
    originalText: 'Mode for new chats',
    changeText: '新聊天的模式',
    searchType: 'exact',
  },
  {
    originalText: 'Text Size',
    changeText: '文字大小',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of Chat messages',
    changeText: '调整聊天消息的文字大小',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Clear Chat',
    changeText: '自动清除聊天',
    searchType: 'exact',
  },
  {
    originalText: 'After periods of inactivity, open the Chat Pane to a new chat',
    changeText: '长时间无操作后，打开聊天面板为新聊天',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll to New Messages',
    changeText: '滚动到新消息',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll Chat to incoming message',
    changeText: '聊天滚动到收到的消息',
    searchType: 'exact',
  },
  {
    originalText: 'Completion Sound',
    changeText: '完成提示音',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when Agent finishes responding',
    changeText: 'Agent完成回复时播放提示音',
    searchType: 'exact',
  },
  {
    originalText: 'Custom Modes',
    changeText: '自定义模式',
    searchType: 'exact',
  },
  {
    originalText: 'Create custom modes with specific models, tools, keybindings, and instructions tailored to your workflow',
    changeText: '根据你的工作流，创建包含特定模型、工具、快捷键和指令的自定义模式',
    searchType: 'exact',
  },
  // Context Section
  {
    originalText: 'Context',
    changeText: '上下文',
    searchType: 'exact',
  },
  {
    originalText: 'Include Full-Folder Context',
    changeText: '包含整个文件夹上下文',
    searchType: 'exact',
  },
  {
    originalText: 'Allow full contents of the selected folder to be included in the context',
    changeText: '允许将所选文件夹的全部内容包含在上下文中',
    searchType: 'exact',
  },
  {
    originalText: 'Include Project Structure',
    changeText: '包含项目结构',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree as context',
    changeText: '将简化的目录树作为上下文包含',
    searchType: 'exact',
  },
  {
    originalText: 'Web Search Tool',
    changeText: '网页搜索工具',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to search the web for relevant information',
    changeText: '允许Agent在网页上搜索相关信息',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: '分层Cursor忽略',
    searchType: 'exact',
  },
  {
    originalText: 'Apply .cursorignore files to all subdirectories. Changing this setting will require a restart of Cursor.',
    changeText: '将.cursorignore文件应用于所有子目录。更改此设置需要重启Cursor。',
    searchType: 'exact',
  },
  {
    originalText: 'Backspace Removes Context',
    changeText: '退格键移除上下文',
    searchType: 'exact',
  },
  {
    originalText: 'Remove the last context pill in the composer when pressing backspace at the start of the input',
    changeText: '在输入开头按退格键时，移除composer中的最后一个上下文标签',
    searchType: 'exact',
  },
  // Applying Changes
  {
    originalText: 'Applying Changes',
    changeText: '应用更改',
    searchType: 'exact',
  },
  {
    originalText: 'Out-of-Context Edits in Manual Mode',
    changeText: '手动模式下的上下文外编辑',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to edit files outside of the selected context in Manual Mode',
    changeText: '在手动模式下允许Agent编辑所选上下文之外的文件',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Fix Lints',
    changeText: '自动修复Lint',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically fix lint errors in the chat',
    changeText: '在聊天中自动修复lint错误',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Accept on Commit',
    changeText: '提交时自动接受',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all changes when files are committed and no longer in the worktree',
    changeText: '当文件提交且不再在工作区时，自动接受所有更改',
    searchType: 'exact',
  },
  // Auto-Run
  {
    originalText: 'Auto-Run',
    changeText: '自动运行',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Run Mode',
    changeText: '自动运行模式',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools like command execution and file writes without asking for confirmation',
    changeText: '允许Agent无需确认即可运行命令执行和文件写入等工具',
    searchType: 'exact',
  },
] satisfies Replacement[];
