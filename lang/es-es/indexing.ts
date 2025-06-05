import { type Replacement } from '../types';

export default [
  {
    originalText: 'Codebase',
    changeText: 'Base de Código',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: 'Indexación de Base de Código',
    searchType: 'exact',
  },
  {
    originalText: 'Embed codebase for improved contextual understanding and knowledge. Embeddings and metadata are stored in the',
    changeText: 'Incrustar base de código para una mejor comprensión contextual y conocimiento. Las incrustaciones y metadatos se almacenan en',
    searchType: 'exact',
  },
  {
    originalText: 'cloud',
    changeText: 'la nube',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: ', pero todo el código se almacena localmente.',
    searchType: 'exact',
  },
  {
    originalText: 'Loading',
    changeText: 'Cargando',
    searchType: 'exact',
  },
  {
    originalText: 'Index New Folders',
    changeText: 'Indexar Nuevas Carpetas',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically index any new folders with fewer',
    changeText: 'Indexar automáticamente cualquier carpeta nueva con menos de',
    searchType: 'partial',
  },
  {
    originalText: 'Ignore Files in .cursorignore',
    changeText: 'Ignorar Archivos en .cursorignore',
    searchType: 'exact',
  },
  {
    originalText: 'Files to exclude from indexing in addition to .gitignore.',
    changeText: 'Archivos a excluir de la indexación además de .gitignore.',
    searchType: 'exact',
  },
  {
    originalText: 'View included files.',
    changeText: 'Ver archivos incluidos.',
    searchType: 'exact',
  },
  {
    originalText: 'Edit',
    changeText: 'Editar',
    searchType: 'exact',
  },
  {
    originalText: 'Crawl and index custom resources and developer docs',
    changeText: 'Rastrear e indexar recursos personalizados y documentación de desarrollador',
    searchType: 'exact',
  },
  {
    originalText: 'Add Doc',
    changeText: 'Añadir Documento',
    searchType: 'exact',
  },
  {
    originalText: 'No Docs Added',
    changeText: 'No hay Documentos Añadidos',
    searchType: 'exact',
  },
  {
    originalText: 'Add documentation to use as context. You can also use @Add in Chat or while editing to add a doc.',
    changeText: 'Añadir documentación para usar como contexto. También puedes usar @Add en Chat o mientras editas para añadir un documento.',
    searchType: 'exact',
  },
] satisfies Replacement[];
