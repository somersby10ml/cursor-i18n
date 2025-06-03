import { type Replacement } from './types';

export const REPLACEMENTS: Replacement[] = [

  // Left Menu
  {
    originalText: 'General',
    changeText: 'Общие',
    searchType: 'exact',
  },
  {
    originalText: 'Features',
    changeText: 'Функции',
    searchType: 'exact',
  },
  {
    originalText: 'Models',
    changeText: 'Модели',
    searchType: 'exact',
  },
  {
    originalText: 'Indexing',
    changeText: 'Индексация',
    searchType: 'exact',
  },
  {
    originalText: 'Beta',
    changeText: 'Бета-функции',
    searchType: 'exact',
  },
  {
    originalText: 'Account',
    changeText: 'Аккаунт',
    searchType: 'exact',
  },

  // General
  {
    originalText: 'You are currently signed in with',
    changeText: 'Вы вошли с аккаунтом',
    searchType: 'partial',
  },
  {
    originalText: 'Manage',
    changeText: 'Управление',
    searchType: 'exact',
  },
  {
    originalText: 'Log out',
    changeText: 'Выйти',
    searchType: 'exact',
  },
  {
    originalText: 'VS Code Import',
    changeText: 'Импорт VS Code',
    searchType: 'exact',
  },
  {
    originalText: 'Instantly use all of your extensions, settings and keybindings',
    changeText: 'Мгновенно используйте все ваши расширения, настройки и горячие клавиши',
    searchType: 'exact',
  },
  {
    originalText: 'Import',
    changeText: 'Импорт',
    searchType: 'exact',
  },
  {
    originalText: 'Appearance',
    changeText: 'Внешний вид',
    searchType: 'exact',
  },
  {
    originalText: 'Configure how Cursor looks and feels.',
    changeText: 'Настройте внешний вид и поведение Cursor.',
    searchType: 'exact',
  },
  {
    originalText: '<div><span>Open editor settings.</span> (font, auto-save, word wrap, etc)<br><br><span>Configure keyboard shortcuts.</span> <br><br>Use <span></span> for the command palette, where many editor functions can be controlled.',
    changeText: '<div><span>Открыть настройки редактора.</span> (шрифт, автосохранение, перенос слов и т.д.)<br><br><span>Настроить горячие клавиши.</span> <br><br>Используйте <span></span> для командной палитры, где можно управлять многими функциями редактора.',
    searchType: 'exact',
  },
  {
    originalText: 'If on, none of your code will be stored by us. If off, we use prompts and telemetry to improve Cursor.',
    changeText: 'Если включено, ваш код не будет храниться у нас. Если отключено, мы используем запросы и телеметрию для улучшения Cursor.',
    searchType: 'exact',
  },
  {
    originalText: ' setting, not account-level.',
    changeText: ' данная настройка применяется к устройству, а не к аккаунту.',
    searchType: 'exact',
  },
  {
    originalText: '<strong>machine-level',
    changeText: '<strong>',
    searchType: 'exact',
  },
  {
    originalText: 'Privacy mode',
    changeText: 'Режим конфиденциальности',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled (all code remains private)',
    changeText: 'Включен (весь код остается приватным)',
    searchType: 'exact',
  },
  {
    originalText: 'Any questions?',
    changeText: 'Есть вопросы?',
    searchType: 'exact',
  },
  {
    originalText: '<div>Check out our <span>docs</span> or join our <span>forum</span>.<br><br>Feel free to reach out at <span>hi@cursor.com</span>.',
    changeText: '<div>Ознакомьтесь с нашей <span>docs</span> или присоединяйтесь к нашему <span>forum</span>.<br><br> Обращайтесь к нам по адресу <span>hi@cursor.com</span>.',
    searchType: 'exact',
  },
  // Features
  {
    originalText: 'A powerful Copilot replacement that can suggest changes across multiple lines. Previously called Copilot++.',
    changeText: 'Мощная замена Copilot, которая может предлагать изменения в нескольких строках. Ранее называлась Copilot++.',
    searchType: 'exact',
  },
  {
    originalText: 'Partial accepts',
    changeText: 'Частичное принятие',
    searchType: 'exact',
  },
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: 'Принять следующее слово предложения с помощью',
    searchType: 'partial',
  },
  {
    originalText: 'Suggestions in Comments',
    changeText: 'Предложения в комментариях',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cursor Tab suggestions in comments',
    changeText: 'Включить предложения Cursor Tab в комментариях',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only changes',
    changeText: 'Показывать изменения только пробелов',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only Cursor Tab suggestions',
    changeText: 'Показывать предложения Cursor Tab только для пробелов',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import',
    changeText: 'Автоимпорт',
    searchType: 'exact',
  },
  {
    originalText: 'Tab to import necessary modules with Cursor Tab. Only supports',
    changeText: 'Нажмите Tab для импорта необходимых модулей с Cursor Tab. Поддерживает только',
    searchType: 'partial',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Автоимпорт для Python',
    searchType: 'exact',
  },
  {
    originalText: 'BETA',
    changeText: 'БЕТА',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: 'Включить автоимпорт для Python. Это бета-функция.',
    searchType: 'exact',
  },
  {
    originalText: 'Chat',
    changeText: 'Чат',
    searchType: 'exact',
  },
  {
    originalText: 'Ask Cursor Agent questions about your codebase, edit multiple files at once, and use tools',
    changeText: 'Задавайте вопросы Cursor Agent о вашей кодовой базе, редактируйте несколько файлов одновременно и используйте инструменты',
    searchType: 'exact',
  },
  {
    originalText: 'Default new chat mode',
    changeText: 'Режим нового чата по умолчанию',
    searchType: 'exact',
  },
  {
    originalText: 'New chats will open on this mode',
    changeText: 'Новые чаты будут открываться в этом режиме',
    searchType: 'exact',
  },
  {
    originalText: 'Agent',
    changeText: 'Агент',
    searchType: 'exact',
  },
  {
    originalText: 'Chat text size',
    changeText: 'Размер текста чата',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of AI chat messages',
    changeText: 'Настроить размер текста сообщений ИИ в чате',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: 'По умолчанию',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-refresh chats',
    changeText: 'Автообновление чатов',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically create a new chat after inactivity when opening the chat pane',
    changeText: 'Автоматически создавать новый чат после бездействия при открытии панели чата',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-scroll to bottom',
    changeText: 'Автопрокрутка к низу чата',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the chat pane when a new message is generated',
    changeText: 'Автоматически прокручивать к низу панели чата при генерации нового сообщения',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-apply to files outside context in Manual mode',
    changeText: 'Автоприменение к файлам вне контекста в ручном режиме',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the chat in Manual mode to auto-apply changes to files outside the current context',
    changeText: 'Разрешить чату в ручном режиме автоматически применять изменения к файлам вне текущего контекста',
    searchType: 'exact',
  },
  {
    originalText: '<div>Include project structure ',
    changeText: '<div>Включить структуру проекта ',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree to give the model a sense of your codebase layout',
    changeText: 'Включить упрощенное дерево каталогов, чтобы дать модели представление о структуре вашей кодовой базы',
    searchType: 'exact',
  },
  {
    originalText: 'Full folder contents',
    changeText: 'Полное содержимое папки',
    searchType: 'exact',
  },
  {
    originalText: 'Enable full folder contents instead of a tree outline of the folder structure',
    changeText: 'Включить полное содержимое папки вместо древовидной структуры папок',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto-run mode',
    changeText: 'Включить режим автозапуска',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools without asking for confirmation, such as executing commands and writing to files',
    changeText: 'Разрешить агенту запускать инструменты без запроса подтверждения, например выполнение команд и запись в файлы',
    searchType: 'exact',
  },
  {
    originalText: 'Command allowlist',
    changeText: 'Список разрешенных команд',
    searchType: 'exact',
  },
  {
    originalText: 'Add commands here if only very specific commands should be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: 'Добавьте команды сюда, если только очень специфические команды должны выполняться автоматически${s().isAdminControlled?" (контролируется администратором)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Add',
    changeText: 'Добавить',
    searchType: 'exact',
  },
  {
    originalText: 'Command denylist',
    changeText: 'Список запрещенных команд',
    searchType: 'exact',
  },
  {
    originalText: 'Commands which should never be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: 'Команды, которые никогда не должны выполняться автоматически${s().isAdminControlled?" (контролируется администратором)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Delete file protection',
    changeText: 'Защита от удаления файлов',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from deleting files automatically',
    changeText: 'Если включено, предотвращает автоматическое удаление файлов агентом',
    searchType: 'partial',
  },
  {
    originalText: 'MCP tools protection',
    changeText: 'Защита инструментов MCP',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from running MCP tools automatically',
    changeText: 'Если включено, предотвращает автоматический запуск инструментов MCP агентом',
    searchType: 'partial',
  },
  {
    originalText: 'Dot files protection',
    changeText: 'Защита dot-файлов',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from modifying dot files (like .gitignore) automatically',
    changeText: 'Если включено, предотвращает автоматическое изменение dot-файлов (например .gitignore) агентом',
    searchType: 'partial',
  },
  {
    originalText: 'Outside workspace protection',
    changeText: 'Защита от выхода за пределы рабочего пространства',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from creating or modifying files outside the workspace automatically',
    changeText: 'Если включено, предотвращает автоматическое создание или изменение файлов за пределами рабочего пространства агентом',
    searchType: 'partial',
  },
  {
    originalText: "Dialog 'Don't ask again' preferences",
    changeText: "Настройки диалогов 'Не спрашивать снова'",
    searchType: 'exact',
  },
  {
    originalText: "Manage dialogs that you've previously selected 'Don't ask again' for",
    changeText: "Управление диалогами, для которых вы ранее выбрали 'Не спрашивать снова'",
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in pane or editor',
    changeText: 'Свернуть теги поля ввода в панели или редакторе',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse pills in the chat pane or editor input box to save space',
    changeText: 'Свернуть теги в панели чата или поле ввода редактора для экономии места',
    searchType: 'exact',
  },
  {
    originalText: 'Iterate on lints',
    changeText: 'Итерация по линтингу',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, chat in agent mode will iterate on linter errors to fix them automatically',
    changeText: 'Если включено, чат в режиме агента будет итеративно исправлять ошибки линтера автоматически',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: 'Иерархический Cursor Ignore',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, .cursorignore files will apply to all subdirectories',
    changeText: 'Когда включено, файлы .cursorignore будут применяться ко всем подкаталогам',
    searchType: 'partial',
  },
  {
    originalText: 'Changing this setting will require a restart of Cursor.',
    changeText: 'Изменение этой настройки потребует перезапуска Cursor.',
    searchType: 'partial',
  },
  {
    originalText: 'Auto-accept diffs',
    changeText: 'Автоприятие изменений',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, all diffs in the composer will be accepted once they are no longer in the worktree',
    changeText: 'Если включено, все изменения в композере будут приняты после их исчезновения из рабочего дерева',
    searchType: 'exact',
  },
  {
    originalText: '<div>Custom modes',
    changeText: '<div>Пользовательские режимы',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the creation of custom modes',
    changeText: 'Разрешить создание пользовательских режимов',
    searchType: 'exact',
  },
  {
    originalText: '<div>Play sound on finish ',
    changeText: '<div>Воспроизводить звук при завершении ',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when a chat response is completed',
    changeText: 'Воспроизводить звук при завершении ответа в чате',
    searchType: 'exact',
  },
  {
    originalText: '<div>Auto Group Changes ',
    changeText: '<div>Автогруппировка изменений ',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically group changes made in a chat session with an LLM for you to review',
    changeText: 'Автоматически группировать изменения, сделанные в сеансе чата с LLM для вашего просмотра',
    searchType: 'exact',
  },
  {
    originalText: '<div>Web Search Tool ',
    changeText: '<div>Инструмент веб-поиска ',
    searchType: 'exact',
  },
  {
    originalText: 'This will allow chat in agent/ask mode to search the web for information',
    changeText: 'Это позволит чату в режиме агента/вопроса искать информацию в интернете',
    searchType: 'exact',
  },
  {
    originalText: "Manage the custom docs that you've added.",
    changeText: 'Управление пользовательскими документами, которые вы добавили.',
    searchType: 'exact',
  },
  {
    originalText: '<div>No docs added yet... Type "@Add" in a chat or in an edit to start a doc.',
    changeText: '<div>Документы еще не добавлены... Введите "@Add" в чате или при редактировании, чтобы начать создание документа.',
    searchType: 'exact',
  },
  {
    originalText: 'Show chat/edit tooltip',
    changeText: 'Показывать подсказку чат/редактирование',
    searchType: 'exact',
  },
  {
    originalText: 'Show a chat/edit tooltip near highlighted code in the editor',
    changeText: 'Показывать подсказку чат/редактирование рядом с выделенным кодом в редакторе',
    searchType: 'exact',
  },
  {
    originalText: 'Auto parse inline edit links',
    changeText: 'Автопарсинг ссылок встроенного редактирования',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically parse links when pasted into',
    changeText: 'Автоматически парсить ссылки при вставке в',
    searchType: 'partial',
  },
  {
    originalText: 'Auto select for',
    changeText: 'Автовыбор для',
    searchType: 'partial',
  },
  {
    originalText: 'Use themed diff backgrounds',
    changeText: 'Использовать тематические фоны изменений',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline diffs',
    changeText: 'Использовать тематические цвета фона для встроенных изменений',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs',
    changeText: 'Использовать изменения на уровне символов',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline diffs',
    changeText: 'Использовать изменения на уровне символов для встроенных изменений',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal hint',
    changeText: 'Подсказка терминала',
    searchType: 'exact',
  },
  {
    originalText: 'Show the hint text at the bottom of the terminal',
    changeText: 'Показывать текст подсказки внизу терминала',
    searchType: 'exact',
  },
  {
    originalText: 'Show terminal hover hint',
    changeText: 'Показывать подсказку при наведении в терминале',
    searchType: 'exact',
  },
  {
    originalText: "Show hints like 'Add to chat' in the terminal",
    changeText: "Показывать подсказки вроде 'Добавить в чат' в терминале",
    searchType: 'exact',
  },
  {
    originalText: 'Use preview box for terminal',
    changeText: 'Использовать окно предварительного просмотра для терминала',
    searchType: 'partial',
  },
  {
    originalText: 'If turned off, responses are streamed directly into the shell',
    changeText: 'Если отключено, ответы транслируются непосредственно в оболочку',
    searchType: 'exact',
  },
  {
    originalText: '<div>Beta features',
    changeText: '<div>Бета-функции',
    searchType: 'exact',
  },
  {
    originalText: 'Update frequency',
    changeText: 'Частота обновлений',
    searchType: 'exact',
  },
  {
    originalText: 'Get updates as soon as they are ready. Early Access updates may be unstable for production work.',
    changeText: 'Получать обновления как только они готовы. Обновления раннего доступа могут быть нестабильными для продакшн-работы.',
    searchType: 'exact',
  },
  {
    originalText: 'Standard',
    changeText: 'Стандартный',
    searchType: 'exact',
  },
  {
    originalText: 'Notepads',
    changeText: 'Блокноты',
    searchType: 'exact',
  },
  {
    originalText: 'Craft and share context between chat and composers',
    changeText: 'Создавать и делиться контекстом между чатом и композерами',
    searchType: 'exact',
  },
  {
    originalText: 'Bug Finder',
    changeText: 'Поиск багов',
    searchType: 'exact',
  },
  {
    originalText: 'Run a bug finder on your current git diff to find bugs.',
    changeText: 'Запустить поиск багов на текущем git diff для обнаружения ошибок.',
    searchType: 'exact',
  },
  {
    originalText: '<div><div>Check out the Bug Finder tab in the Activity Bar.',
    changeText: '<div><div>Ознакомьтесь с вкладкой Поиск багов в панели активности.',
    searchType: 'exact',
  },
  {
    originalText: 'Background Agent',
    changeText: 'Фоновый агент',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the background agent, in beta. Allows you to run agents in the cloud.',
    changeText: 'Включить фонового агента, в бета-версии. Позволяет запускать агентов в облаке.',
    searchType: 'exact',
  },
  {
    originalText: '<h3>Enable Background Agents (preview)',
    changeText: '<h3>Включить фоновых агентов (предварительный просмотр)',
    searchType: 'exact',
  },
  {
    originalText: '<div>Background agents run in parallel in their own remote developer environments. This feature is in <strong>beta</strong>, and has a few caveats:',
    changeText: '<div>Фоновые агенты работают параллельно в своих собственных удаленных средах разработки. Эта функция находится в <strong>бета-версии</strong> и имеет несколько ограничений:',
    searchType: 'exact',
  },
  {
    originalText: '<ul><li><strong>Privacy:</strong> During the preview period, background agents are only available if you have privacy mode disabled.</li><li><strong>Security:</strong> Background agents run in isolated remote environments. We have prioritized security while building this, but the code has not yet been audited. Please email security@cursor.com with any concerns.</li><li><strong>Cost:</strong> During the preview period, background agents cost the same as normal agents (but only MAX models are supported, which can be quite expensive).',
    changeText: '<ul><li><strong>Конфиденциальность:</strong> В период предварительного просмотра фоновые агенты доступны только при отключенном режиме конфиденциальности.</li><li><strong>Безопасность:</strong> Фоновые агенты работают в изолированных удаленных средах. Мы уделили приоритет безопасности при создании этой функции, но код еще не прошел аудит. Пожалуйста, отправьте email на security@cursor.com с любыми вопросами.</li><li><strong>Стоимость:</strong> В период предварительного просмотра фоновые агенты стоят столько же, сколько обычные агенты (но поддерживаются только модели MAX, которые могут быть довольно дорогими).',
    searchType: 'exact',
  },
  {
    originalText: '<div>You can find more details at <span>docs.cursor.com/background-agent</span>.',
    changeText: '<div>Больше деталей можно найти на <span>docs.cursor.com/background-agent</span>.',
    searchType: 'exact',
  },
  {
    originalText: '<div class="mt-4 mb-4 relative">To enable background agents in preview, please <span>go to Settings</span> and disable privacy mode.',
    changeText: '<div class="mt-4 mb-4 relative">Чтобы включить фоновых агентов в предварительном просмотре, пожалуйста <span>go to Settings</span> перейдите в настройки и отключите режим конфиденциальности.',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: 'Индексация кодовой базы',
    searchType: 'exact',
  },
  {
    originalText: 'Embeddings improve your codebase-wide answers. Embeddings and metadata are stored in the',
    changeText: 'Эмбеддинги улучшают ответы по всей кодовой базе. Эмбеддинги и метаданные хранятся в ',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: ', но весь код хранится локально.',
    searchType: 'exact',
  },
  {
    originalText: 'Resync Index',
    changeText: 'Пересинхронизировать индекс',
    searchType: 'exact',
  },
  {
    originalText: 'Delete Index',
    changeText: 'Удалить индекс',
    searchType: 'exact',
  },
  {
    originalText: 'Index new folders by default',
    changeText: 'Индексировать новые папки по умолчанию',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled',
    changeText: 'Включено',
    searchType: 'exact',
  },
  {
    originalText: 'Ignore files',
    changeText: 'Игнорировать файлы',
    searchType: 'exact',
  },
  {
    originalText: '<div class=settings__item_link>Configure ignored files',
    changeText: '<div class=settings__item_link>Настроить игнорируемые файлы',
    searchType: 'exact',
  },
  {
    originalText: 'Configure the files that Cursor will ignore when indexing your repository (in addition to your .gitignore).',
    changeText: 'Настроить файлы, которые Cursor будет игнорировать при индексации вашего репозитория.',
    searchType: 'exact',
  },
  {
    originalText: 'Git graph file relationships',
    changeText: 'Связи файлов Git-графа',
    searchType: 'exact',
  },
  {
    originalText: 'When set to true, Cursor will by default index any new folders opened. If turned off, you can still manually index folders by clicking the "Compute Index" button. Folders with more than',
    changeText: 'Когда включено, Cursor по умолчанию будет индексировать любые новые открытые папки. Если отключено, вы все еще можете вручную индексировать папки, нажав кнопку "Вычислить индекс". Папки с более чем',
    searchType: 'exact',
  },
  {
    originalText: 'files will not be auto-indexed.',
    changeText: ' файлами не будут автоматически индексироваться.',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, Cursor will index your git history to help understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and obfuscated file names) are stored on the server.',
    changeText: 'Когда включено, Cursor будет индексировать вашу git-историю для понимания связей между файлами. Код и сообщения коммитов хранятся локально, но метаданные о коммитах (SHA, количество изменений и обфусцированные имена файлов) хранятся на сервере.',
    searchType: 'exact',
  },

  // Editor Settings -> Cursor
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: 'Автоматически выбирать области для встроенного редактирования кода',
    searchType: 'exact',
  },
  {
    originalText: 'Show hover hint in the terminal',
    changeText: 'Показывать подсказку при наведении в терминале',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cmd+P / Ctrl+P shortcut for file picker in Composer',
    changeText: 'Включить горячую клавишу Cmd+P / Ctrl+P для выбора файлов в Композере',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in the composer pane',
    changeText: 'Свернуть теги поля ввода в панели композера',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the creation of custom modes',
    changeText: 'Разрешить создание пользовательских режимов',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all diffs in the composer once they are no longer in the worktree',
    changeText: 'Автоматически принимать все изменения в композере после их исчезновения из рабочего дерева',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically save files in normal composers',
    changeText: 'Автоматически сохранять файлы в обычных композерах',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the composer pane when a new message is generated',
    changeText: 'Автоматически прокручивать к низу панели композера при генерации нового сообщения',
    searchType: 'exact',
  },
  {
    originalText: 'Queue submitted messages when the composer is generating',
    changeText: 'Ставить в очередь отправленные сообщения во время генерации композером',
    searchType: 'exact',
  },
  {
    originalText: 'Show markdown hover participant actions',
    changeText: 'Показывать действия участника при наведении на markdown',
    searchType: 'exact',
  },
  {
    originalText: 'Show suggested files in the composer',
    changeText: 'Показывать предлагаемые файлы в композере',
    searchType: 'exact',
  },
  {
    originalText: 'Controls the text size scale (relative to base 12px) of AI chat messages.',
    changeText: 'Управляет масштабом размера текста (относительно базового 12px) сообщений ИИ в чате.',
    searchType: 'exact',
  },
  {
    originalText: 'Disable Cursor Tab for these languages',
    changeText: 'Отключить Cursor Tab для этих языков',
    searchType: 'exact',
  },
  {
    originalText: 'Enable partial accepts for Cursor Tab, using the editor.action.inlineSuggest.acceptNextWord keybinding',
    changeText: 'Включить частичное принятие для Cursor Tab, используя горячую клавишу editor.action.inlineSuggest.acceptNextWord',
    searchType: 'exact',
  },
  {
    originalText: 'Use character level diffs for inline diffs',
    changeText: 'Использовать изменения на уровне символов для встроенных изменений',
    searchType: 'exact',
  },
  {
    originalText: "Disable HTTP/2 for all requests, and use HTTP/1.1 instead. This increases resource utilization and latency, but is useful if you're behind a corporate proxy that blocks HTTP/2.",
    changeText: 'Отключить HTTP/2 для всех запросов и использовать HTTP/1.1 вместо этого. Это увеличивает использование ресурсов и задержку, но полезно, если вы находитесь за корпоративным прокси, который блокирует HTTP/2.',
    searchType: 'exact',
  },
  {
    originalText: 'Warning: this will increase the memory usage of Cursor. Some AI features use the shadow workspace to refine code in the background before presenting it to you. The shadow workspace is a hidden window running on your local machine in a copy of your current workspace.',
    changeText: 'Предупреждение: это увеличит использование памяти Cursor. Некоторые функции ИИ используют теневое рабочее пространство для улучшения кода в фоне перед его представлением вам. Теневое рабочее пространство - это скрытое окно, работающее на вашей локальной машине в копии вашего текущего рабочего пространства.',
    searchType: 'exact',
  },
  {
    originalText: 'Index your git history to help Cursor understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and encrypted file names) are stored on the server.',
    changeText: 'Индексировать вашу git-историю, чтобы помочь Cursor понять, какие файлы связаны друг с другом. Код и сообщения коммитов хранятся локально, но метаданные о коммитах (SHA, количество изменений и зашифрованные имена файлов) хранятся на сервере.',
    searchType: 'exact',
  },
  {
    originalText: 'Global list of files to always ignore in Cursor features, across all workspaces. Uses glob patterns. These patterns have the same effect as adding them to a .cursorignore file in every workspace.',
    changeText: 'Глобальный список файлов для игнорирования в функциях Cursor во всех рабочих пространствах. Использует glob-паттерны. Эти паттерны имеют тот же эффект, что и добавление их в файл .cursorignore в каждом рабочем пространстве.',
    searchType: 'exact',
  },
  {
    originalText: 'Show notification toasts in the same location as the chat',
    changeText: 'Показывать уведомления в том же месте, что и чат',
    searchType: 'exact',
  },
];
