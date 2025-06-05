import { type Replacement } from '../types';

export default [
  {
    originalText: 'HTTP Compatibility Mode',
    changeText: 'HTTP互換モード',
    searchType: 'exact',
  },
  {
    originalText: 'HTTP/2 is recommended for low-latency streaming. In some corporate proxy and VPN environments, the compatibility mode may need to be lowered.',
    changeText: '低遅延ストリーミングにはHTTP/2が推奨されます。一部の企業プロキシやVPN環境では互換モードを下げる必要がある場合があります。',
    searchType: 'exact',
  },
  {
    originalText: 'Network Diagnostics',
    changeText: 'ネットワーク診断',
    searchType: 'exact',
  },
  {
    originalText: 'Check network connectivity to backend AI services',
    changeText: 'バックエンドAIサービスへのネットワーク接続を確認',
    searchType: 'exact',
  },
  {
    originalText: 'Run Diagnostic',
    changeText: '診断を実行',
    searchType: 'exact',
  },
] satisfies Replacement[];
