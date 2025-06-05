import { type Replacement } from '../types';

export default [
  {
    originalText: 'Codebase',
    changeText: 'Base de code',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: 'Indexation de la base de code',
    searchType: 'exact',
  },
  {
    originalText: 'Embed codebase for improved contextual understanding and knowledge. Embeddings and metadata are stored in the',
    changeText: 'Intégrez la base de code pour une meilleure compréhension contextuelle et connaissance. Les embeddings et métadonnées sont stockés dans le',
    searchType: 'exact',
  },
  {
    originalText: 'cloud',
    changeText: 'cloud',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: ', mais tout le code est stocké localement.',
    searchType: 'exact',
  },
  {
    originalText: 'Loading',
    changeText: 'Chargement',
    searchType: 'exact',
  },
  {
    originalText: 'Index New Folders',
    changeText: 'Indexer les nouveaux dossiers',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically index any new folders with fewer',
    changeText: 'Indexer automatiquement tout nouveau dossier contenant moins de',
    searchType: 'partial',
  },
  {
    originalText: 'Ignore Files in .cursorignore',
    changeText: 'Ignorer les fichiers dans .cursorignore',
    searchType: 'exact',
  },
  {
    originalText: 'Files to exclude from indexing in addition to .gitignore.',
    changeText: 'Fichiers à exclure de l’indexation en plus de .gitignore.',
    searchType: 'exact',
  },
  {
    originalText: 'View included files.',
    changeText: 'Voir les fichiers inclus.',
    searchType: 'exact',
  },
  {
    originalText: 'Edit',
    changeText: 'Éditer',
    searchType: 'exact',
  },
  {
    originalText: 'Crawl and index custom resources and developer docs',
    changeText: 'Explorer et indexer des ressources personnalisées et des docs développeur',
    searchType: 'exact',
  },
  {
    originalText: 'Add Doc',
    changeText: 'Ajouter une doc',
    searchType: 'exact',
  },
  {
    originalText: 'No Docs Added',
    changeText: 'Aucune doc ajoutée',
    searchType: 'exact',
  },
  {
    originalText: 'Add documentation to use as context. You can also use @Add in Chat or while editing to add a doc.',
    changeText: 'Ajoutez de la documentation à utiliser comme contexte. Vous pouvez aussi utiliser @Add dans le chat ou lors de l’édition pour ajouter une doc.',
    searchType: 'exact',
  },
] satisfies Replacement[];
