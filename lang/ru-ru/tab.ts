import { type Replacement } from '../types';

export default [
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: 'Принять следующее слово предложения с помощью',
    searchType: 'partial',
  },
  {
    originalText: 'Allow Tab to trigger while in a comment region',
    changeText: 'Разрешить Tab в области комментария',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Tab',
    changeText: 'Вкладка курсора',
    searchType: 'exact',
  },
  {
    originalText: 'Context-aware, multi-line suggestions around your cursor based on recent edits',
    changeText: 'Контекстные, многострочные предложения вокруг курсора на основе недавних изменений',
    searchType: 'exact',
  },
  {
    originalText: 'Partial Accepts',
    changeText: 'Частичное принятие',
    searchType: 'exact',
  },
  {
    originalText: 'Suggestions While Commenting',
    changeText: 'Предложения при комментировании',
    searchType: 'exact',
  },
  {
    originalText: 'Whitespace-Only Suggestions',
    changeText: 'Предложения только для пробелов',
    searchType: 'exact',
  },
  {
    originalText: 'Suggest edits like new lines and indentation that modify whitespace only',
    changeText: 'Предлагать изменения, такие как новые строки и отступы, которые изменяют только пробелы',
    searchType: 'exact',
  },
  {
    originalText: 'Imports',
    changeText: 'Импорты',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically import necessary modules for TypeScript',
    changeText: 'Автоматически импортировать необходимые модули для TypeScript',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Автоимпорт для Python',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: 'Включить автоимпорт для Python. Это бета-функция.',
    searchType: 'exact',
  },
] satisfies Replacement[];
