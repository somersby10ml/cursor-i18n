import { type Replacement } from '../types';

export default [
  {
    originalText: 'HTTP Compatibility Mode',
    changeText: 'Modo de Compatibilidad HTTP',
    searchType: 'exact',
  },
  {
    originalText: 'HTTP/2 is recommended for low-latency streaming. In some corporate proxy and VPN environments, the compatibility mode may need to be lowered.',
    changeText: 'Se recomienda HTTP/2 para streaming de baja latencia. En algunos entornos de proxy corporativo y VPN, puede ser necesario reducir el modo de compatibilidad.',
    searchType: 'exact',
  },
  {
    originalText: 'Network Diagnostics',
    changeText: 'Diagnósticos de Red',
    searchType: 'exact',
  },
  {
    originalText: 'Check network connectivity to backend AI services',
    changeText: 'Verificar conectividad de red a servicios de IA backend',
    searchType: 'exact',
  },
  {
    originalText: 'Run Diagnostic',
    changeText: 'Ejecutar Diagnóstico',
    searchType: 'exact',
  },
] satisfies Replacement[];
