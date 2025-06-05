import { type Replacement } from '../types';

export default [
  {
    originalText: 'Codebase',
    changeText: 'Кодовая база',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: 'Индексация кодовой базы',
    searchType: 'exact',
  },
  {
    originalText: 'Embed codebase for improved contextual understanding and knowledge. Embeddings and metadata are stored in the',
    changeText: 'Встраивайте кодовую базу для лучшего понимания контекста и знаний. Встраивания и метаданные хранятся в',
    searchType: 'exact',
  },
  {
    originalText: 'cloud',
    changeText: 'облако',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: ', но весь код хранится локально.',
    searchType: 'exact',
  },
  {
    originalText: 'Loading',
    changeText: 'Загрузка',
    searchType: 'exact',
  },
  {
    originalText: 'Index New Folders',
    changeText: 'Индексировать новые папки',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically index any new folders with fewer',
    changeText: 'Автоматически индексировать новые папки с меньшим количеством',
    searchType: 'partial',
  },
  {
    originalText: 'Ignore Files in .cursorignore',
    changeText: 'Игнорировать файлы в .cursorignore',
    searchType: 'exact',
  },
  {
    originalText: 'Files to exclude from indexing in addition to .gitignore.',
    changeText: 'Файлы, исключаемые из индексации, кроме .gitignore.',
    searchType: 'exact',
  },
  {
    originalText: 'View included files.',
    changeText: 'Просмотреть включённые файлы.',
    searchType: 'exact',
  },
  {
    originalText: 'Edit',
    changeText: 'Редактировать',
    searchType: 'exact',
  },
  {
    originalText: 'Crawl and index custom resources and developer docs',
    changeText: 'Сканировать и индексировать пользовательские ресурсы и документацию разработчика',
    searchType: 'exact',
  },
  {
    originalText: 'Add Doc',
    changeText: 'Добавить документ',
    searchType: 'exact',
  },
  {
    originalText: 'No Docs Added',
    changeText: 'Документы не добавлены',
    searchType: 'exact',
  },
  {
    originalText: 'Add documentation to use as context. You can also use @Add in Chat or while editing to add a doc.',
    changeText: 'Добавьте документацию для использования в качестве контекста. Также можно использовать @Add в чате или при редактировании для добавления документа.',
    searchType: 'exact',
  },
] satisfies Replacement[];
