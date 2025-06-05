import { type Replacement } from '../types';

export default [
  {
    originalText: 'HTTP Compatibility Mode',
    changeText: 'Mode de compatibilité HTTP',
    searchType: 'exact',
  },
  {
    originalText: 'HTTP/2 is recommended for low-latency streaming. In some corporate proxy and VPN environments, the compatibility mode may need to be lowered.',
    changeText: 'HTTP/2 est recommandé pour un streaming à faible latence. Dans certains environnements proxy d’entreprise et VPN, il peut être nécessaire de réduire le mode de compatibilité.',
    searchType: 'exact',
  },
  {
    originalText: 'Network Diagnostics',
    changeText: 'Diagnostic réseau',
    searchType: 'exact',
  },
  {
    originalText: 'Check network connectivity to backend AI services',
    changeText: 'Vérifier la connectivité réseau aux services IA backend',
    searchType: 'exact',
  },
  {
    originalText: 'Run Diagnostic',
    changeText: 'Lancer le diagnostic',
    searchType: 'exact',
  },
] satisfies Replacement[];
