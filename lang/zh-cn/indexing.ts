import { type Replacement } from '../types';

export default [
  {
    originalText: 'Codebase',
    changeText: '代码库',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: '代码库索引',
    searchType: 'exact',
  },
  {
    originalText: 'Embed codebase for improved contextual understanding and knowledge. Embeddings and metadata are stored in the',
    changeText: '嵌入代码库以提升上下文理解和知识。嵌入和元数据存储在',
    searchType: 'exact',
  },
  {
    originalText: 'cloud',
    changeText: '云端',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: '，但所有代码都存储在本地。',
    searchType: 'exact',
  },
  {
    originalText: 'Loading',
    changeText: '加载中',
    searchType: 'exact',
  },
  {
    originalText: 'Index New Folders',
    changeText: '索引新文件夹',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically index any new folders with fewer',
    changeText: '自动索引包含少于...个文件的新文件夹',
    searchType: 'partial',
  },
  {
    originalText: 'Ignore Files in .cursorignore',
    changeText: '忽略.cursorignore中的文件',
    searchType: 'exact',
  },
  {
    originalText: 'Files to exclude from indexing in addition to .gitignore.',
    changeText: '除了.gitignore外，还要从索引中排除的文件。',
    searchType: 'exact',
  },
  {
    originalText: 'View included files.',
    changeText: '查看包含的文件。',
    searchType: 'exact',
  },
  {
    originalText: 'Edit',
    changeText: '编辑',
    searchType: 'exact',
  },
  {
    originalText: 'Crawl and index custom resources and developer docs',
    changeText: '爬取并索引自定义资源和开发者文档',
    searchType: 'exact',
  },
  {
    originalText: 'Add Doc',
    changeText: '添加文档',
    searchType: 'exact',
  },
  {
    originalText: 'No Docs Added',
    changeText: '未添加文档',
    searchType: 'exact',
  },
  {
    originalText: 'Add documentation to use as context. You can also use @Add in Chat or while editing to add a doc.',
    changeText: '添加文档以用作上下文。你也可以在聊天或编辑时使用@Add添加文档。',
    searchType: 'exact',
  },
] satisfies Replacement[];
