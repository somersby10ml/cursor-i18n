import { type Replacement } from '../types';

export default [
  {
    originalText: 'HTTP Compatibility Mode',
    changeText: 'Режим совместимости HTTP',
    searchType: 'exact',
  },
  {
    originalText: 'HTTP/2 is recommended for low-latency streaming. In some corporate proxy and VPN environments, the compatibility mode may need to be lowered.',
    changeText: 'Для низкой задержки рекомендуется HTTP/2. В некоторых корпоративных прокси и VPN может потребоваться понизить режим совместимости.',
    searchType: 'exact',
  },
  {
    originalText: 'Network Diagnostics',
    changeText: 'Диагностика сети',
    searchType: 'exact',
  },
  {
    originalText: 'Check network connectivity to backend AI services',
    changeText: 'Проверить сетевое соединение с backend AI сервисами',
    searchType: 'exact',
  },
  {
    originalText: 'Run Diagnostic',
    changeText: 'Запустить диагностику',
    searchType: 'exact',
  },
] satisfies Replacement[];
