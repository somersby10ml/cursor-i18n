import { type Replacement } from '../types';

export default [
  {
    originalText: 'Update Access',
    changeText: '更新访问权限',
    searchType: 'exact',
  },
  {
    originalText: 'By default, get notifications for stable updates. In Early Access, pre-release builds may be unstable for production work.',
    changeText: '默认情况下，接收稳定更新通知。早期访问中，预发布版本可能不适合生产环境。',
    searchType: 'exact',
  },
  {
    originalText: 'Notepads',
    changeText: '记事本',
    searchType: 'exact',
  },
  {
    originalText: 'Capture project notes to automatically include in Chat context',
    changeText: '捕获项目笔记，自动包含在聊天上下文中',
    searchType: 'exact',
  },
  {
    originalText: 'Background Agent',
    changeText: '后台Agent',
    searchType: 'exact',
  },
  {
    originalText: 'Run agents in the cloud, in beta preview.',
    changeText: '在测试预览中于云端运行Agent。',
    searchType: 'exact',
  },
  {
    originalText: 'BETA',
    changeText: '测试版',
    searchType: 'exact',
  },
] satisfies Replacement[];
