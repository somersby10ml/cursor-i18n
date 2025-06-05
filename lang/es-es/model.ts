import { type Replacement } from '../types';

export default [
// MAX Mode section
  {
    originalText: 'MAX Mode',
    changeText: 'Modo MAX',
    searchType: 'exact',
  },
  {
    originalText: 'Get maximum context window and tool calls. For advanced users that are cost insensitive.',
    changeText: 'Obtener ventana de contexto máxima y llamadas de herramientas. Para usuarios avanzados que no son sensibles al coste.',
    searchType: 'exact',
  },
  {
    originalText: 'Billed at API pricing',
    changeText: 'Facturado a precios de API',
    searchType: 'exact',
  },
  {
    originalText: 'Upgrade',
    changeText: 'Actualizar',
    searchType: 'exact',
  },

  // Model search and management
  {
    originalText: 'Add or search model',
    changeText: 'Añadir o buscar modelo',
    searchType: 'exact',
  },
  {
    originalText: 'View All Models',
    changeText: 'Ver Todos los Modelos',
    searchType: 'exact',
  },

  // Model restrictions
  {
    originalText: 'MAX Only',
    changeText: 'Solo MAX',
    searchType: 'exact',
  },

  // Navigation sections
  {
    originalText: 'API Keys',
    changeText: 'Claves API',
    searchType: 'exact',
  },

  // OpenAI section - split into smaller chunks
  {
    originalText: 'You can put in',
    changeText: 'Puedes introducir',
    searchType: 'exact',
  },
  {
    originalText: 'to use Cursor at public API costs.',
    changeText: 'para usar Cursor a coste de API pública.',
    searchType: 'partial',
  },
  {
    originalText: 'Note: this can cost more than pro',
    changeText: 'Nota: esto puede costar más que pro',
    searchType: 'partial',
  },
  {
    originalText: 'work for custom model features.',
    changeText: 'funcionar para funciones de modelo personalizado.',
    searchType: 'partial',
  },

  // Anthropic section - split into smaller chunks
  {
    originalText: 'to use Claude at cost.',
    changeText: 'para usar Claude a coste.',
    searchType: 'partial',
  },
  {
    originalText: 'When enabled, this key will be used for all models beginning with',
    changeText: 'Cuando esté habilitada, esta clave se usará para todos los modelos que comiencen con',
    searchType: 'partial',
  },
  // Google section - split
  {
    originalText: 'to use Google models at-cost.',
    changeText: 'para usar modelos de Google a coste.',
    searchType: 'exact',
  },

  // AWS Bedrock - split into smaller parts
  {
    originalText: 'Configure AWS Bedrock to use Anthropic Claude models through your AWS account.',
    changeText: 'Configurar AWS Bedrock para usar modelos Anthropic Claude a través de tu cuenta AWS.',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Enterprise teams can configure IAM roles to access Bedrock without any Access Keys.',
    changeText: 'Los equipos de Cursor Enterprise pueden configurar roles IAM para acceder a Bedrock sin ninguna Clave de Acceso.',
    searchType: 'exact',
  },

  // Azure OpenAI - split
  {
    originalText: 'Configure Azure OpenAI to use OpenAI models through your Azure account.',
    changeText: 'Configurar Azure OpenAI para usar modelos OpenAI a través de tu cuenta Azure.',
    searchType: 'exact',
  },

  // Field labels
  {
    originalText: 'Access Key ID',
    changeText: 'ID de Clave de Acceso',
    searchType: 'exact',
  },
  {
    originalText: 'Secret Access Key',
    changeText: 'Clave de Acceso Secreta',
    searchType: 'exact',
  },
  {
    originalText: 'Region',
    changeText: 'Región',
    searchType: 'exact',
  },
  {
    originalText: 'Test Model',
    changeText: 'Probar Modelo',
    searchType: 'exact',
  },
  {
    originalText: 'Base URL',
    changeText: 'URL Base',
    searchType: 'exact',
  },
  {
    originalText: 'Deployment Name',
    changeText: 'Nombre de Despliegue',
    searchType: 'exact',
  },
  {
    originalText: 'API Key',
    changeText: 'Clave API',
    searchType: 'exact',
  },
  {
    originalText: 'Override OpenAI Base URL',
    changeText: 'Sobrescribir URL Base de OpenAI',
    searchType: 'exact',
  },
  {
    originalText: 'Change the base URL for OpenAI API requests.',
    changeText: 'Cambiar la URL base para las solicitudes de API de OpenAI.',
    searchType: 'exact',
  },

  // Placeholder texts
  {
    originalText: 'AWS Access Key ID',
    changeText: 'ID de Clave de Acceso AWS',
    searchType: 'exact',
  },
  {
    originalText: 'AWS Secret Access Key',
    changeText: 'Clave de Acceso Secreta AWS',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your OpenAI API Key',
    changeText: 'Introduce tu Clave API de OpenAI',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Anthropic API Key',
    changeText: 'Introduce tu Clave API de Anthropic',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Google AI Studio API Key',
    changeText: 'Introduce tu Clave API de Google AI Studio',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Azure OpenAI API Key',
    changeText: 'Introduce tu Clave API de Azure OpenAI',
    searchType: 'exact',
  },

  // Common elements
  {
    originalText: 'Verify',
    changeText: 'Verificar',
    searchType: 'exact',
  },

  // Handle "e.g." examples with regex
  {
    originalText: 'e\\.g\\. (.+)',
    changeText: 'p. ej. $1',
    searchType: 'regex',
    flags: 'g',
  },

  // Link text for keys (already translated but handle variations)
  {
    originalText: 'your OpenAI key',
    changeText: 'tu clave OpenAI',
    searchType: 'exact',
  },
  {
    originalText: 'your Anthropic key',
    changeText: 'tu clave Anthropic',
    searchType: 'exact',
  },
  {
    originalText: 'your Google AI Studio key',
    changeText: 'tu clave Google AI Studio',
    searchType: 'exact',
  },
] satisfies Replacement[];
