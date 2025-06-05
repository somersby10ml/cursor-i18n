import { type Replacement } from '../types';

export default [
  {
    originalText: 'Project Rules',
    changeText: '项目规则',
    searchType: 'exact',
  },
  {
    originalText: 'Help Agent understand conventions in this project directory',
    changeText: '帮助Agent理解此项目目录中的约定',
    searchType: 'exact',
  },
  // 按钮文本
  {
    originalText: 'Add Rule',
    changeText: '添加规则',
    searchType: 'exact',
  },
  // 设置部分
  {
    originalText: 'Include .cursorrules file',
    changeText: '包含.cursorrules文件',
    searchType: 'exact',
  },
  {
    originalText: 'If off, we will not include the .cursorrules file in your requests',
    changeText: '关闭时，我们不会在请求中包含.cursorrules文件',
    searchType: 'exact',
  },
  // 空状态部分
  {
    originalText: 'No Project Rules Yet',
    changeText: '尚无项目规则',
    searchType: 'exact',
  },
  {
    originalText: 'Create rules specific to this project',
    changeText: '为此项目创建专属规则',
    searchType: 'exact',
  },
] satisfies Replacement[];
