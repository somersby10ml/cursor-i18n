import { type Replacement } from '../types';

export default [
  {
    originalText: 'Project Rules',
    changeText: 'Правила проекта',
    searchType: 'exact',
  },
  {
    originalText: 'Help Agent understand conventions in this project directory',
    changeText: 'Помогите агенту понять правила в этом каталоге проекта',
    searchType: 'exact',
  },
  {
    originalText: 'Add Rule',
    changeText: 'Добавить правило',
    searchType: 'exact',
  },
  {
    originalText: 'Include .cursorrules file',
    changeText: 'Включить файл .cursorrules',
    searchType: 'exact',
  },
  {
    originalText: 'If off, we will not include the .cursorrules file in your requests',
    changeText: 'Если выключено, файл .cursorrules не будет включён в ваши запросы',
    searchType: 'exact',
  },
  {
    originalText: 'No Project Rules Yet',
    changeText: 'Правила проекта ещё не созданы',
    searchType: 'exact',
  },
  {
    originalText: 'Create rules specific to this project',
    changeText: 'Создайте правила, специфичные для этого проекта',
    searchType: 'exact',
  },
] satisfies Replacement[];
