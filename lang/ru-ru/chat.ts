import { type Replacement } from '../types';

export default [
  // Основные настройки
  {
    originalText: 'Auto-Select Code Regions for Quick Edit \\((Ctrl|Cmd)\\+K\\)',
    changeText: 'Автоматический выбор области кода для быстрого редактирования ($1+K)',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Automatically parse links when pasted into Quick Edit \\((Ctrl|Cmd)\\+K\\) input',
    changeText: 'Автоматически анализировать ссылки при вставке в поле быстрого редактирования ($1+K)',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Show a hint for (Ctrl|Cmd)\\+K in the Terminal',
    changeText: 'Показать подсказку для $1+K в терминале',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Preview Box for Terminal (Ctrl|Cmd)\\+K',
    changeText: 'Окно предварительного просмотра для терминала $1+K',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Default Mode',
    changeText: 'Режим по умолчанию',
    searchType: 'exact',
  },
  {
    originalText: 'Mode for new chats',
    changeText: 'Режим для новых чатов',
    searchType: 'exact',
  },
  {
    originalText: 'Text Size',
    changeText: 'Размер текста',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of Chat messages',
    changeText: 'Настроить размер текста сообщений чата',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Clear Chat',
    changeText: 'Автоматически очищать чат',
    searchType: 'exact',
  },
  {
    originalText: 'After periods of inactivity, open the Chat Pane to a new chat',
    changeText: 'После периода бездействия открыть панель чата с новым чатом',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll to New Messages',
    changeText: 'Прокрутить к новым сообщениям',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll Chat to incoming message',
    changeText: 'Прокрутить чат к входящему сообщению',
    searchType: 'exact',
  },
  {
    originalText: 'Completion Sound',
    changeText: 'Звук завершения',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when Agent finishes responding',
    changeText: 'Воспроизводить звук, когда агент завершает ответ',
    searchType: 'exact',
  },
  {
    originalText: 'Custom Modes',
    changeText: 'Пользовательские режимы',
    searchType: 'exact',
  },
  {
    originalText: 'Create custom modes with specific models, tools, keybindings, and instructions tailored to your workflow',
    changeText: 'Создавайте пользовательские режимы с определёнными моделями, инструментами, горячими клавишами и инструкциями под ваш рабочий процесс',
    searchType: 'exact',
  },
  // Контекст
  {
    originalText: 'Context',
    changeText: 'Контекст',
    searchType: 'exact',
  },
  {
    originalText: 'Include Full-Folder Context',
    changeText: 'Включить контекст всей папки',
    searchType: 'exact',
  },
  {
    originalText: 'Allow full contents of the selected folder to be included in the context',
    changeText: 'Разрешить включать всё содержимое выбранной папки в контекст',
    searchType: 'exact',
  },
  {
    originalText: 'Include Project Structure',
    changeText: 'Включить структуру проекта',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree as context',
    changeText: 'Включить упрощённое дерево каталогов как контекст',
    searchType: 'exact',
  },
  {
    originalText: 'Web Search Tool',
    changeText: 'Инструмент веб-поиска',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to search the web for relevant information',
    changeText: 'Разрешить агенту искать релевантную информацию в интернете',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: 'Иерархическое игнорирование Cursor',
    searchType: 'exact',
  },
  {
    originalText: 'Apply .cursorignore files to all subdirectories. Changing this setting will require a restart of Cursor.',
    changeText: 'Применять файлы .cursorignore ко всем подкаталогам. Изменение этой настройки потребует перезапуска Cursor.',
    searchType: 'exact',
  },
  {
    originalText: 'Backspace Removes Context',
    changeText: 'Backspace удаляет контекст',
    searchType: 'exact',
  },
  {
    originalText: 'Remove the last context pill in the composer when pressing backspace at the start of the input',
    changeText: 'Удалять последнюю метку контекста в компоновщике при нажатии Backspace в начале ввода',
    searchType: 'exact',
  },
  // Применение изменений
  {
    originalText: 'Applying Changes',
    changeText: 'Применение изменений',
    searchType: 'exact',
  },
  {
    originalText: 'Out-of-Context Edits in Manual Mode',
    changeText: 'Редактирование вне контекста в ручном режиме',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to edit files outside of the selected context in Manual Mode',
    changeText: 'Разрешить агенту редактировать файлы вне выбранного контекста в ручном режиме',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Fix Lints',
    changeText: 'Автоматическое исправление lint-ошибок',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically fix lint errors in the chat',
    changeText: 'Автоматически исправлять lint-ошибки в чате',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Accept on Commit',
    changeText: 'Автоматически принимать при коммите',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all changes when files are committed and no longer in the worktree',
    changeText: 'Автоматически принимать все изменения, когда файлы закоммичены и больше не находятся в рабочем дереве',
    searchType: 'exact',
  },
  // Автоматический запуск
  {
    originalText: 'Auto-Run',
    changeText: 'Автоматический запуск',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Run Mode',
    changeText: 'Режим автозапуска',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools like command execution and file writes without asking for confirmation',
    changeText: 'Разрешить агенту запускать инструменты, такие как выполнение команд и запись файлов, без подтверждения',
    searchType: 'exact',
  },
  // Инлайн-редактирование и терминал
  {
    originalText: 'Inline Editing & Terminal',
    changeText: 'Инлайн-редактирование и терминал',
    searchType: 'exact',
  },
  {
    originalText: 'Toolbar on Selection',
    changeText: 'Панель инструментов при выделении',
    searchType: 'exact',
  },
  {
    originalText: 'Show Add to Chat & Quick Edit buttons when selecting code',
    changeText: 'Показывать кнопки "Добавить в чат" и "Быстрое редактирование" при выборе кода',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Parse Links',
    changeText: 'Автоматический разбор ссылок',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: 'Автоматически выбирать области для инлайн-редактирования кода',
    searchType: 'exact',
  },
  {
    originalText: 'Themed Diff Backgrounds',
    changeText: 'Фон различий с темой',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline code diffs',
    changeText: 'Использовать тематические цвета фона для различий в инлайн-коде',
    searchType: 'exact',
  },
  {
    originalText: 'Character-Level Diffs',
    changeText: 'Различия на уровне символов',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline code diffs',
    changeText: 'Использовать различия на уровне символов для инлайн-кода',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Tooltips',
    changeText: 'Подсказки терминала',
    searchType: 'exact',
  },
  {
    originalText: 'Show tooltips like "Add to chat" in the terminal',
    changeText: 'Показывать подсказки, такие как "Добавить в чат", в терминале',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Hint',
    changeText: 'Подсказка терминала',
    searchType: 'exact',
  },
  {
    originalText: 'Use a preview box instead of streaming responses directly into the shell',
    changeText: 'Использовать окно предварительного просмотра вместо прямой передачи ответов в оболочку',
    searchType: 'exact',
  },
  // Шаблоны расширений файлов
  {
    originalText: '\\.cursorignore files',
    changeText: 'Файлы .cursorignore',
    searchType: 'regex',
    flags: 'g',
  },
  // Общие шаблоны кнопок/действий
  {
    originalText: '"([^"]+)"',
    changeText: '"$1"', // Keep quoted text as-is, could be customized
    searchType: 'regex',
    flags: 'g',
  },
  // Общие элементы интерфейса
  {
    originalText: 'Agent',
    changeText: 'Агент',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: 'По умолчанию',
    searchType: 'exact',
  },
] satisfies Replacement[];
