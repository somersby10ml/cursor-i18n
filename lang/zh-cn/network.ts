import { type Replacement } from '../types';

export default [
  {
    originalText: 'HTTP Compatibility Mode',
    changeText: 'HTTP兼容模式',
    searchType: 'exact',
  },
  {
    originalText: 'HTTP/2 is recommended for low-latency streaming. In some corporate proxy and VPN environments, the compatibility mode may need to be lowered.',
    changeText: '建议使用HTTP/2以获得低延迟流。在某些公司代理和VPN环境下，可能需要降低兼容模式。',
    searchType: 'exact',
  },
  {
    originalText: 'Network Diagnostics',
    changeText: '网络诊断',
    searchType: 'exact',
  },
  {
    originalText: 'Check network connectivity to backend AI services',
    changeText: '检查到后端AI服务的网络连接',
    searchType: 'exact',
  },
  {
    originalText: 'Run Diagnostic',
    changeText: '运行诊断',
    searchType: 'exact',
  },
] satisfies Replacement[];
