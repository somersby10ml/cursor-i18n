import { type Replacement } from '../types';

export default [
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: '通过...接受建议的下一个单词',
    searchType: 'partial',
  },
  {
    originalText: 'Allow Tab to trigger while in a comment region',
    changeText: '允许在注释区域使用Tab触发',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Tab',
    changeText: 'Cursor标签',
    searchType: 'exact',
  },
  {
    originalText: 'Context-aware, multi-line suggestions around your cursor based on recent edits',
    changeText: '基于最近编辑，围绕光标的上下文感知多行建议',
    searchType: 'exact',
  },
  {
    originalText: 'Partial Accepts',
    changeText: '部分接受',
    searchType: 'exact',
  },
  {
    originalText: 'Suggestions While Commenting',
    changeText: '注释时的建议',
    searchType: 'exact',
  },
  {
    originalText: 'Whitespace-Only Suggestions',
    changeText: '仅空白建议',
    searchType: 'exact',
  },
  {
    originalText: 'Suggest edits like new lines and indentation that modify whitespace only',
    changeText: '建议仅修改空白的编辑，如新行和缩进',
    searchType: 'exact',
  },
  {
    originalText: 'Imports',
    changeText: '导入',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically import necessary modules for TypeScript',
    changeText: '为TypeScript自动导入必要模块',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Python自动导入',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: '启用Python自动导入。此为测试功能。',
    searchType: 'exact',
  },
] satisfies Replacement[];
