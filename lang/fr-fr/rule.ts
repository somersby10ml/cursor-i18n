import { type Replacement } from '../types';

export default [
  {
    originalText: 'Project Rules',
    changeText: 'Règles du projet',
    searchType: 'exact',
  },
  {
    originalText: 'Help Agent understand conventions in this project directory',
    changeText: 'Aidez l’agent à comprendre les conventions dans ce répertoire de projet',
    searchType: 'exact',
  },
  // Boutons
  {
    originalText: 'Add Rule',
    changeText: 'Ajouter une règle',
    searchType: 'exact',
  },
  // Paramètres
  {
    originalText: 'Include .cursorrules file',
    changeText: 'Inclure le fichier .cursorrules',
    searchType: 'exact',
  },
  {
    originalText: 'If off, we will not include the .cursorrules file in your requests',
    changeText: 'Si désactivé, nous n’inclurons pas le fichier .cursorrules dans vos requêtes',
    searchType: 'exact',
  },
  // État vide
  {
    originalText: 'No Project Rules Yet',
    changeText: 'Aucune règle de projet pour le moment',
    searchType: 'exact',
  },
  {
    originalText: 'Create rules specific to this project',
    changeText: 'Créer des règles spécifiques à ce projet',
    searchType: 'exact',
  },
] satisfies Replacement[];
