import { type Replacement } from '../types';

export default [
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: 'Aceptar la siguiente palabra de una sugerencia mediante',
    searchType: 'partial',
  },
  {
    originalText: 'Allow Tab to trigger while in a comment region',
    changeText: 'Permitir que Tab se active mientras esté en una región de comentario',
    searchType: 'exact',
  },

  {
    originalText: 'Cursor Tab',
    changeText: 'Cursor Tab',
    searchType: 'exact',
  },
  {
    originalText: 'Context-aware, multi-line suggestions around your cursor based on recent edits',
    changeText: 'Sugerencias contextuales de múltiples líneas alrededor de tu cursor basadas en ediciones recientes',
    searchType: 'exact',
  },
  {
    originalText: 'Partial Accepts',
    changeText: 'Aceptaciones Parciales',
    searchType: 'exact',
  },
  {
    originalText: 'Suggestions While Commenting',
    changeText: 'Sugerencias Mientras se Comenta',
    searchType: 'exact',
  },
  {
    originalText: 'Whitespace-Only Suggestions',
    changeText: 'Sugerencias Solo de Espacios en Blanco',
    searchType: 'exact',
  },
  {
    originalText: 'Suggest edits like new lines and indentation that modify whitespace only',
    changeText: 'Sugerir ediciones como nuevas líneas e indentación que modifiquen solo espacios en blanco',
    searchType: 'exact',
  },
  {
    originalText: 'Imports',
    changeText: 'Importaciones',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically import necessary modules for TypeScript',
    changeText: 'Importar automáticamente módulos necesarios para TypeScript',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Importación Automática para Python',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: 'Habilitar importación automática para Python. Esta es una función beta.',
    searchType: 'exact',
  },
] satisfies Replacement[];
