import { type Replacement } from '../types';

export default [
  {
    originalText: 'Project Rules',
    changeText: 'Reglas del Proyecto',
    searchType: 'exact',
  },
  {
    originalText: 'Help Agent understand conventions in this project directory',
    changeText: 'Ayudar al Agente a entender las convenciones en este directorio de proyecto',
    searchType: 'exact',
  },

  // Button texts
  {
    originalText: 'Add Rule',
    changeText: 'Añadir Regla',
    searchType: 'exact',
  },

  // Settings section
  {
    originalText: 'Include .cursorrules file',
    changeText: 'Incluir archivo .cursorrules',
    searchType: 'exact',
  },
  {
    originalText: 'If off, we will not include the .cursorrules file in your requests',
    changeText: 'Si está desactivado, no incluiremos el archivo .cursorrules en tus solicitudes',
    searchType: 'exact',
  },

  // Empty state section
  {
    originalText: 'No Project Rules Yet',
    changeText: 'No hay Reglas de Proyecto Aún',
    searchType: 'exact',
  },
  {
    originalText: 'Create rules specific to this project',
    changeText: 'Crear reglas específicas para este proyecto',
    searchType: 'exact',
  },
] satisfies Replacement[];
