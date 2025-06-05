import { type Replacement } from '../types';

export default [
  {
    originalText: 'full settings here',
    changeText: '在此查看全部设置',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Show Hover Hint',
    changeText: '终端悬停提示显示',
    searchType: 'exact',
  },
  {
    originalText: 'Show hover hint in the terminal',
    changeText: '在终端显示悬停提示',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Select',
    changeText: '自动选择',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically select regions for inline code editing (Ctrl/⌘ + K)',
    changeText: '为内联代码编辑自动选择区域 (Ctrl/⌘ + K)',
    searchType: 'exact',
  },
  {
    originalText: 'Use Themed Diff Background2',
    changeText: '使用主题差异背景2',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline diffs',
    changeText: '为内联差异使用主题背景色',
    searchType: 'exact',
  },
  {
    originalText: 'Backspace Remove Context',
    changeText: '退格键移除上下文',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the backspace key to remove the last context pill in the composer input box',
    changeText: '允许退格键移除composer输入框中的最后一个上下文标签',
    searchType: 'exact',
  },
  {
    originalText: 'Cmd PFile Picker2',
    changeText: 'Cmd P文件选择器2',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cmd+P / Ctrl+P shortcut for file picker in Composer',
    changeText: '在Composer中启用Cmd+P / Ctrl+P文件选择快捷键',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse Pane Input Box Pills',
    changeText: '折叠面板输入框标签',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in the composer pane',
    changeText: '在composer面板折叠输入框标签',
    searchType: 'exact',
  },
  {
    originalText: 'Should Allow Custom Modes',
    changeText: '允许自定义模式',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the creation of custom modes',
    changeText: '启用自定义模式创建',
    searchType: 'exact',
  },
  {
    originalText: 'Should Auto Accept Diffs',
    changeText: '差异自动接受',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all diffs in the composer once they are no longer in the worktree',
    changeText: '当不再在工作区时，composer中的所有差异自动接受',
    searchType: 'exact',
  },
  {
    originalText: 'Should Auto Save Non Agent',
    changeText: '非Agent时自动保存',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically save files in normal composers',
    changeText: '在普通composer中自动保存文件',
    searchType: 'exact',
  },
  {
    originalText: 'Should Auto Scroll To Bottom',
    changeText: '自动滚动到底部',
    searchType: 'exact',
  },
] satisfies Replacement[];
