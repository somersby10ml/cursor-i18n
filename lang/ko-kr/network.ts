import { type Replacement } from '../types';

export default [
  {
    originalText: 'HTTP Compatibility Mode',
    changeText: 'HTTP 호환성 모드',
    searchType: 'exact',
  },
  {
    originalText: 'HTTP/2 is recommended for low-latency streaming. In some corporate proxy and VPN environments, the compatibility mode may need to be lowered.',
    changeText: '저지연 스트리밍을 위해 HTTP/2가 권장됩니다. 일부 기업 프록시 및 VPN 환경에서는 호환성 모드를 낮춰야 할 수 있습니다.',
    searchType: 'exact',
  },
  {
    originalText: 'Network Diagnostics',
    changeText: '네트워크 진단',
    searchType: 'exact',
  },
  {
    originalText: 'Check network connectivity to backend AI services',
    changeText: '백엔드 AI 서비스에 대한 네트워크 연결 확인',
    searchType: 'exact',
  },
  {
    originalText: 'Run Diagnostic',
    changeText: '진단 실행',
    searchType: 'exact',
  },
] satisfies Replacement[];
