import { type Replacement } from './types';

export const LOCALE = 'es-es';
export const REPLACEMENTS: Replacement[] = [

  // Left Menu
  {
    originalText: 'General',
    changeText: 'General',
    searchType: 'exact',
  },
  {
    originalText: 'Features',
    changeText: 'Funciones',
    searchType: 'exact',
  },
  {
    originalText: 'Models',
    changeText: 'Modelos',
    searchType: 'exact',
  },
  {
    originalText: 'Indexing',
    changeText: 'Indexación',
    searchType: 'exact',
  },
  {
    originalText: 'Beta',
    changeText: 'Función Beta',
    searchType: 'exact',
  },
  {
    originalText: 'Account',
    changeText: 'Cuenta',
    searchType: 'exact',
  },

  // General
  {
    originalText: 'You are currently signed in with',
    changeText: 'Actualmente has iniciado sesión con',
    searchType: 'partial',
  },
  {
    originalText: 'Manage',
    changeText: 'Gestionar',
    searchType: 'exact',
  },
  {
    originalText: 'Log out',
    changeText: 'Cerrar sesión',
    searchType: 'exact',
  },
  {
    originalText: 'VS Code Import',
    changeText: 'Importar VS Code',
    searchType: 'exact',
  },
  {
    originalText: 'Instantly use all of your extensions, settings and keybindings',
    changeText: 'Usa instantáneamente todas tus extensiones, configuraciones y combinaciones de teclas',
    searchType: 'exact',
  },
  {
    originalText: 'Import',
    changeText: 'Importar',
    searchType: 'exact',
  },
  {
    originalText: 'Appearance',
    changeText: 'Apariencia',
    searchType: 'exact',
  },
  {
    originalText: 'Configure how Cursor looks and feels.',
    changeText: 'Configura el aspecto y la sensación de Cursor.',
    searchType: 'exact',
  },
  {
    originalText: '<div><span>Open editor settings.</span> (font, auto-save, word wrap, etc)<br><br><span>Configure keyboard shortcuts.</span> <br><br>Use <span></span> for the command palette, where many editor functions can be controlled.',
    changeText: '<div><span>Abrir configuración del editor.</span> (fuente, guardado automático, ajuste de línea, etc.)<br><br><span>Configurar atajos de teclado.</span> <br><br>Usa <span></span> para la paleta de comandos, donde se pueden controlar muchas funciones del editor.',
    searchType: 'exact',
  },
  {
    originalText: 'If on, none of your code will be stored by us. If off, we use prompts and telemetry to improve Cursor.',
    changeText: 'Si está activado, ninguno de tu código será almacenado por nosotros. Si está desactivado, usamos prompts y telemetría para mejorar Cursor.',
    searchType: 'exact',
  },
  {
    originalText: ' setting, not account-level.',
    changeText: ' Esta configuración aplica al dispositivo, no a nivel de cuenta.',
    searchType: 'exact',
  },
  {
    originalText: '<strong>machine-level',
    changeText: '<strong>',
    searchType: 'exact',
  },
  {
    originalText: 'Privacy mode',
    changeText: 'Modo de privacidad',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled (all code remains private)',
    changeText: 'Habilitado (todo el código permanece privado)',
    searchType: 'exact',
  },
  {
    originalText: 'Any questions?',
    changeText: '¿Alguna pregunta?',
    searchType: 'exact',
  },
  {
    originalText: '<div>Check out our <span>docs</span> or join our <span>forum</span>.<br><br>Feel free to reach out at <span>hi@cursor.com</span>.',
    changeText: '<div>Consulta nuestra <span>documentación</span> o únete a nuestro <span>foro</span>.<br><br>No dudes en contactarnos en <span>hi@cursor.com</span>.',
    searchType: 'exact',
  },
  // Features
  {
    originalText: 'A powerful Copilot replacement that can suggest changes across multiple lines. Previously called Copilot++.',
    changeText: 'Un potente reemplazo de Copilot que puede sugerir cambios en múltiples líneas. Anteriormente llamado Copilot++.',
    searchType: 'exact',
  },
  {
    originalText: 'Partial accepts',
    changeText: 'Aceptación parcial',
    searchType: 'exact',
  },
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: 'Acepta la siguiente palabra de una sugerencia mediante',
    searchType: 'partial',
  },
  {
    originalText: 'Suggestions in Comments',
    changeText: 'Sugerencias en Comentarios',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cursor Tab suggestions in comments',
    changeText: 'Habilitar sugerencias de Cursor Tab en comentarios',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only changes',
    changeText: 'Mostrar solo cambios de espacios en blanco',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only Cursor Tab suggestions',
    changeText: 'Mostrar solo sugerencias de Cursor Tab de espacios en blanco',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import',
    changeText: 'Importación Automática',
    searchType: 'exact',
  },
  {
    originalText: 'Tab to import necessary modules with Cursor Tab. Only supports',
    changeText: 'Tab para importar módulos necesarios con Cursor Tab. Solo soporta',
    searchType: 'partial',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Importación Automática para Python',
    searchType: 'exact',
  },
  {
    originalText: 'BETA',
    changeText: 'BETA',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: 'Habilitar importación automática para Python. Esta es una función beta.',
    searchType: 'exact',
  },
  {
    originalText: 'Chat',
    changeText: 'Chat',
    searchType: 'exact',
  },
  {
    originalText: 'Ask Cursor Agent questions about your codebase, edit multiple files at once, and use tools',
    changeText: 'Pregunta al Agente Cursor sobre tu código base, edita múltiples archivos a la vez y usa herramientas',
    searchType: 'exact',
  },
  {
    originalText: 'Default new chat mode',
    changeText: 'Modo de chat nuevo por defecto',
    searchType: 'exact',
  },
  {
    originalText: 'New chats will open on this mode',
    changeText: 'Los nuevos chats se abrirán en este modo',
    searchType: 'exact',
  },
  {
    originalText: 'Agent',
    changeText: 'Agente',
    searchType: 'exact',
  },
  {
    originalText: 'Chat text size',
    changeText: 'Tamaño del texto del chat',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of AI chat messages',
    changeText: 'Ajustar el tamaño del texto de los mensajes de chat de IA',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: 'Por defecto',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-refresh chats',
    changeText: 'Actualización automática de chats',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically create a new chat after inactivity when opening the chat pane',
    changeText: 'Crear automáticamente un nuevo chat después de inactividad al abrir el panel de chat',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-scroll to bottom',
    changeText: 'Desplazamiento automático hacia abajo',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the chat pane when a new message is generated',
    changeText: 'Desplazarse automáticamente al final del panel de chat cuando se genera un nuevo mensaje',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-apply to files outside context in Manual mode',
    changeText: 'Aplicar automáticamente a archivos fuera del contexto en modo Manual',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the chat in Manual mode to auto-apply changes to files outside the current context',
    changeText: 'Permitir que el chat en modo Manual aplique automáticamente cambios a archivos fuera del contexto actual',
    searchType: 'exact',
  },
  {
    originalText: '<div>Include project structure ',
    changeText: '<div>Incluir estructura del proyecto ',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree to give the model a sense of your codebase layout',
    changeText: 'Incluir un árbol de directorios simplificado para dar al modelo una idea de la estructura de tu código base',
    searchType: 'exact',
  },
  {
    originalText: 'Full folder contents',
    changeText: 'Contenido completo de la carpeta',
    searchType: 'exact',
  },
  {
    originalText: 'Enable full folder contents instead of a tree outline of the folder structure',
    changeText: 'Habilitar contenido completo de la carpeta en lugar de un esquema de árbol de la estructura de carpetas',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto-run mode',
    changeText: 'Habilitar modo de ejecución automática',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools without asking for confirmation, such as executing commands and writing to files',
    changeText: 'Permitir al Agente ejecutar herramientas sin pedir confirmación, como ejecutar comandos y escribir archivos',
    searchType: 'exact',
  },
  {
    originalText: 'Command allowlist',
    changeText: 'Lista de comandos permitidos',
    searchType: 'exact',
  },
  {
    originalText: 'Add commands here if only very specific commands should be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: 'Agrega comandos aquí si solo comandos muy específicos deberían ejecutarse automáticamente${s().isAdminControlled?" (controlado por administrador)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Add',
    changeText: 'Agregar',
    searchType: 'exact',
  },
  {
    originalText: 'Command denylist',
    changeText: 'Lista de comandos bloqueados',
    searchType: 'exact',
  },
  {
    originalText: 'Commands which should never be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: 'Comandos que nunca deberían ejecutarse automáticamente${s().isAdminControlled?" (controlado por administrador)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Delete file protection',
    changeText: 'Protección de eliminación de archivos',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from deleting files automatically',
    changeText: 'Si está habilitado, impide que el agente elimine archivos automáticamente',
    searchType: 'partial',
  },
  {
    originalText: 'MCP tools protection',
    changeText: 'Protección de herramientas MCP',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from running MCP tools automatically',
    changeText: 'Si está habilitado, impide que el agente ejecute herramientas MCP automáticamente',
    searchType: 'partial',
  },
  {
    originalText: 'Dot files protection',
    changeText: 'Protección de archivos punto',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from modifying dot files (like .gitignore) automatically',
    changeText: 'Si está habilitado, impide que el agente modifique archivos punto (como .gitignore) automáticamente',
    searchType: 'partial',
  },
  {
    originalText: 'Outside workspace protection',
    changeText: 'Protección fuera del espacio de trabajo',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from creating or modifying files outside the workspace automatically',
    changeText: 'Si está habilitado, impide que el agente cree o modifique archivos fuera del espacio de trabajo automáticamente',
    searchType: 'partial',
  },
  {
    originalText: "Dialog 'Don't ask again' preferences",
    changeText: "Preferencias de diálogo 'No preguntar de nuevo'",
    searchType: 'exact',
  },
  {
    originalText: "Manage dialogs that you've previously selected 'Don't ask again' for",
    changeText: "Gestionar diálogos para los que previamente seleccionaste 'No preguntar de nuevo'",
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in pane or editor',
    changeText: 'Contraer píldoras de caja de entrada en panel o editor',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse pills in the chat pane or editor input box to save space',
    changeText: 'Contraer píldoras en el panel de chat o caja de entrada del editor para ahorrar espacio',
    searchType: 'exact',
  },
  {
    originalText: 'Iterate on lints',
    changeText: 'Iterar en lints',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, chat in agent mode will iterate on linter errors to fix them automatically',
    changeText: 'Si está habilitado, el chat en modo agente iterará en errores de linter para corregirlos automáticamente',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: 'Ignorar Cursor Jerárquico',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, .cursorignore files will apply to all subdirectories',
    changeText: 'Cuando esté habilitado, los archivos .cursorignore se aplicarán a todos los subdirectorios',
    searchType: 'partial',
  },
  {
    originalText: 'Changing this setting will require a restart of Cursor.',
    changeText: 'Cambiar esta configuración requerirá reiniciar Cursor.',
    searchType: 'partial',
  },
  {
    originalText: 'Auto-accept diffs',
    changeText: 'Aceptar diferencias automáticamente',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, all diffs in the composer will be accepted once they are no longer in the worktree',
    changeText: 'Si está habilitado, todas las diferencias en el compositor se aceptarán una vez que ya no estén en el árbol de trabajo',
    searchType: 'exact',
  },
  {
    originalText: '<div>Custom modes',
    changeText: '<div>Modos personalizados',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the creation of custom modes',
    changeText: 'Permitir la creación de modos personalizados',
    searchType: 'exact',
  },
  {
    originalText: '<div>Play sound on finish ',
    changeText: '<div>Reproducir sonido al terminar ',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when a chat response is completed',
    changeText: 'Reproducir un sonido cuando se complete una respuesta de chat',
    searchType: 'exact',
  },
  {
    originalText: '<div>Auto Group Changes ',
    changeText: '<div>Agrupar Cambios Automáticamente ',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically group changes made in a chat session with an LLM for you to review',
    changeText: 'Agrupar automáticamente los cambios realizados en una sesión de chat con un LLM para que los revises',
    searchType: 'exact',
  },
  {
    originalText: '<div>Web Search Tool ',
    changeText: '<div>Herramienta de Búsqueda Web ',
    searchType: 'exact',
  },
  {
    originalText: 'This will allow chat in agent/ask mode to search the web for information',
    changeText: 'Esto permitirá que el chat en modo agente/pregunta busque información en la web',
    searchType: 'exact',
  },
  {
    originalText: "Manage the custom docs that you've added.",
    changeText: 'Gestiona los documentos personalizados que has agregado.',
    searchType: 'exact',
  },
  {
    originalText: '<div>No docs added yet... Type "@Add" in a chat or in an edit to start a doc.',
    changeText: '<div>Aún no se han agregado documentos... Escribe "@Add" en un chat o en una edición para comenzar un documento.',
    searchType: 'exact',
  },
  {
    originalText: 'Show chat/edit tooltip',
    changeText: 'Mostrar tooltip de chat/edición',
    searchType: 'exact',
  },
  {
    originalText: 'Show a chat/edit tooltip near highlighted code in the editor',
    changeText: 'Mostrar un tooltip de chat/edición cerca del código resaltado en el editor',
    searchType: 'exact',
  },
  {
    originalText: 'Auto parse inline edit links',
    changeText: 'Analizar automáticamente enlaces de edición en línea',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically parse links when pasted into',
    changeText: 'Analizar automáticamente enlaces cuando se peguen en',
    searchType: 'partial',
  },
  {
    originalText: 'Auto select for',
    changeText: 'Selección automática para',
    searchType: 'partial',
  },
  {
    originalText: 'Use themed diff backgrounds',
    changeText: 'Usar fondos de diferencias temáticos',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline diffs',
    changeText: 'Usar colores de fondo temáticos para diferencias en línea',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs',
    changeText: 'Usar diferencias a nivel de carácter',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline diffs',
    changeText: 'Usar diferencias a nivel de carácter para diferencias en línea',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal hint',
    changeText: 'Sugerencia de terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Show the hint text at the bottom of the terminal',
    changeText: 'Mostrar el texto de sugerencia en la parte inferior del terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Show terminal hover hint',
    changeText: 'Mostrar sugerencia al pasar el mouse en terminal',
    searchType: 'exact',
  },
  {
    originalText: "Show hints like 'Add to chat' in the terminal",
    changeText: "Mostrar sugerencias como 'Agregar al chat' en el terminal",
    searchType: 'exact',
  },
  {
    originalText: 'Use preview box for terminal',
    changeText: 'Usar caja de vista previa para terminal',
    searchType: 'partial',
  },
  {
    originalText: 'If turned off, responses are streamed directly into the shell',
    changeText: 'Si está desactivado, las respuestas se transmiten directamente al shell',
    searchType: 'exact',
  },
  {
    originalText: '<div>Beta features',
    changeText: '<div>Funciones beta',
    searchType: 'exact',
  },
  {
    originalText: 'Update frequency',
    changeText: 'Frecuencia de actualización',
    searchType: 'exact',
  },
  {
    originalText: 'Get updates as soon as they are ready. Early Access updates may be unstable for production work.',
    changeText: 'Obtener actualizaciones tan pronto como estén listas. Las actualizaciones de Acceso Temprano pueden ser inestables para trabajo de producción.',
    searchType: 'exact',
  },
  {
    originalText: 'Standard',
    changeText: 'Estándar',
    searchType: 'exact',
  },
  {
    originalText: 'Notepads',
    changeText: 'Blocs de notas',
    searchType: 'exact',
  },
  {
    originalText: 'Craft and share context between chat and composers',
    changeText: 'Crear y compartir contexto entre chat y compositores',
    searchType: 'exact',
  },
  {
    originalText: 'Bug Finder',
    changeText: 'Detector de Bugs',
    searchType: 'exact',
  },
  {
    originalText: 'Run a bug finder on your current git diff to find bugs.',
    changeText: 'Ejecutar un detector de bugs en tu git diff actual para encontrar bugs.',
    searchType: 'exact',
  },
  {
    originalText: '<div><div>Check out the Bug Finder tab in the Activity Bar.',
    changeText: '<div><div>Consulta la pestaña Detector de Bugs en la Barra de Actividad.',
    searchType: 'exact',
  },
  {
    originalText: 'Background Agent',
    changeText: 'Agente en Segundo Plano',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the background agent, in beta. Allows you to run agents in the cloud.',
    changeText: 'Habilitar el agente en segundo plano, en beta. Te permite ejecutar agentes en la nube.',
    searchType: 'exact',
  },
  {
    originalText: '<h3>Enable Background Agents (preview)',
    changeText: '<h3>Habilitar Agentes en Segundo Plano (vista previa)',
    searchType: 'exact',
  },
  {
    originalText: '<div>Background agents run in parallel in their own remote developer environments. This feature is in <strong>beta</strong>, and has a few caveats:',
    changeText: '<div>Los agentes en segundo plano se ejecutan en paralelo en sus propios entornos de desarrollo remotos. Esta función está en <strong>beta</strong>, y tiene algunas advertencias:',
    searchType: 'exact',
  },
  {
    originalText: '<ul><li><strong>Privacy:</strong> During the preview period, background agents are only available if you have privacy mode disabled.</li><li><strong>Security:</strong> Background agents run in isolated remote environments. We have prioritized security while building this, but the code has not yet been audited. Please email security@cursor.com with any concerns.</li><li><strong>Cost:</strong> During the preview period, background agents cost the same as normal agents (but only MAX models are supported, which can be quite expensive).',
    changeText: '<ul><li><strong>Privacidad:</strong> Durante el período de vista previa, los agentes en segundo plano solo están disponibles si tienes el modo de privacidad deshabilitado.</li><li><strong>Seguridad:</strong> Los agentes en segundo plano se ejecutan en entornos remotos aislados. Hemos priorizado la seguridad mientras construimos esto, pero el código aún no ha sido auditado. Por favor envía un email a security@cursor.com con cualquier preocupación.</li><li><strong>Costo:</strong> Durante el período de vista previa, los agentes en segundo plano cuestan lo mismo que los agentes normales (pero solo se admiten modelos MAX, que pueden ser bastante costosos).',
    searchType: 'exact',
  },
  {
    originalText: '<div>You can find more details at <span>docs.cursor.com/background-agent</span>.',
    changeText: '<div>Puedes encontrar más detalles en <span>docs.cursor.com/background-agent</span>.',
    searchType: 'exact',
  },
  {
    originalText: '<div class="mt-4 mb-4 relative">To enable background agents in preview, please <span>go to Settings</span> and disable privacy mode.',
    changeText: '<div class="mt-4 mb-4 relative">Para habilitar agentes en segundo plano en vista previa, por favor <span>ve a Configuración</span> y deshabilita el modo de privacidad.',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: 'Indexación del Código Base',
    searchType: 'exact',
  },
  {
    originalText: 'Embeddings improve your codebase-wide answers. Embeddings and metadata are stored in the',
    changeText: 'Los embeddings mejoran tus respuestas a nivel de código base. Los embeddings y metadatos se almacenan en ',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: ', pero todo el código se almacena localmente.',
    searchType: 'exact',
  },
  {
    originalText: 'Resync Index',
    changeText: 'Resincronizar Índice',
    searchType: 'exact',
  },
  {
    originalText: 'Delete Index',
    changeText: 'Eliminar Índice',
    searchType: 'exact',
  },
  {
    originalText: 'Index new folders by default',
    changeText: 'Indexar nuevas carpetas por defecto',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled',
    changeText: 'Habilitado',
    searchType: 'exact',
  },
  {
    originalText: 'Ignore files',
    changeText: 'Ignorar archivos',
    searchType: 'exact',
  },
  {
    originalText: '<div class=settings__item_link>Configure ignored files',
    changeText: '<div class=settings__item_link>Configurar archivos ignorados',
    searchType: 'exact',
  },
  {
    originalText: 'Configure the files that Cursor will ignore when indexing your repository (in addition to your .gitignore).',
    changeText: 'Configurar los archivos que Cursor ignorará al indexar tu repositorio (además de tu .gitignore).',
    searchType: 'exact',
  },
  {
    originalText: 'Git graph file relationships',
    changeText: 'Relaciones de archivos del gráfico Git',
    searchType: 'exact',
  },
  {
    originalText: 'When set to true, Cursor will by default index any new folders opened. If turned off, you can still manually index folders by clicking the "Compute Index" button. Folders with more than',
    changeText: 'Cuando se establece en verdadero, Cursor indexará por defecto cualquier nueva carpeta abierta. Si se desactiva, aún puedes indexar carpetas manualmente haciendo clic en el botón "Calcular Índice". Las carpetas con más de',
    searchType: 'exact',
  },
  {
    originalText: 'files will not be auto-indexed.',
    changeText: ' archivos no se indexarán automáticamente.',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, Cursor will index your git history to help understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and obfuscated file names) are stored on the server.',
    changeText: 'Cuando esté habilitado, Cursor indexará tu historial de git para ayudar a entender qué archivos están relacionados entre sí. El código y los mensajes de commit se almacenan localmente, pero los metadatos sobre commits (SHAs, número de cambios y nombres de archivos ofuscados) se almacenan en el servidor.',
    searchType: 'exact',
  },

  // Editor Settings -> Cursor
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: 'Seleccionar automáticamente regiones para edición de código en línea',
    searchType: 'exact',
  },
  {
    originalText: 'Show hover hint in the terminal',
    changeText: 'Mostrar sugerencia al pasar el mouse en el terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cmd+P / Ctrl+P shortcut for file picker in Composer',
    changeText: 'Habilitar atajo Cmd+P / Ctrl+P para selector de archivos en Compositor',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in the composer pane',
    changeText: 'Contraer píldoras de caja de entrada en el panel del compositor',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the creation of custom modes',
    changeText: 'Habilitar la creación de modos personalizados',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all diffs in the composer once they are no longer in the worktree',
    changeText: 'Aceptar automáticamente todas las diferencias en el compositor una vez que ya no estén en el árbol de trabajo',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically save files in normal composers',
    changeText: 'Guardar automáticamente archivos en compositores normales',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the composer pane when a new message is generated',
    changeText: 'Desplazarse automáticamente al final del panel del compositor cuando se genere un nuevo mensaje',
    searchType: 'exact',
  },
  {
    originalText: 'Queue submitted messages when the composer is generating',
    changeText: 'Poner en cola mensajes enviados cuando el compositor esté generando',
    searchType: 'exact',
  },
  {
    originalText: 'Show markdown hover participant actions',
    changeText: 'Mostrar acciones de participante al pasar el mouse en markdown',
    searchType: 'exact',
  },
  {
    originalText: 'Show suggested files in the composer',
    changeText: 'Mostrar archivos sugeridos en el compositor',
    searchType: 'exact',
  },
  {
    originalText: 'Controls the text size scale (relative to base 12px) of AI chat messages.',
    changeText: 'Controla la escala del tamaño del texto (relativo a la base de 12px) de los mensajes de chat de IA.',
    searchType: 'exact',
  },
  {
    originalText: 'Disable Cursor Tab for these languages',
    changeText: 'Deshabilitar Cursor Tab para estos lenguajes',
    searchType: 'exact',
  },
  {
    originalText: 'Enable partial accepts for Cursor Tab, using the editor.action.inlineSuggest.acceptNextWord keybinding',
    changeText: 'Habilitar aceptaciones parciales para Cursor Tab, usando la combinación de teclas editor.action.inlineSuggest.acceptNextWord',
    searchType: 'exact',
  },
  {
    originalText: 'Use character level diffs for inline diffs',
    changeText: 'Usar diferencias a nivel de carácter para diferencias en línea',
    searchType: 'exact',
  },
  {
    originalText: "Disable HTTP/2 for all requests, and use HTTP/1.1 instead. This increases resource utilization and latency, but is useful if you're behind a corporate proxy that blocks HTTP/2.",
    changeText: 'Deshabilitar HTTP/2 para todas las solicitudes, y usar HTTP/1.1 en su lugar. Esto aumenta la utilización de recursos y la latencia, pero es útil si estás detrás de un proxy corporativo que bloquea HTTP/2.',
    searchType: 'exact',
  },
  {
    originalText: 'Warning: this will increase the memory usage of Cursor. Some AI features use the shadow workspace to refine code in the background before presenting it to you. The shadow workspace is a hidden window running on your local machine in a copy of your current workspace.',
    changeText: 'Advertencia: esto aumentará el uso de memoria de Cursor. Algunas funciones de IA usan el espacio de trabajo sombra para refinar código en segundo plano antes de presentártelo. El espacio de trabajo sombra es una ventana oculta que se ejecuta en tu máquina local en una copia de tu espacio de trabajo actual.',
    searchType: 'exact',
  },
  {
    originalText: 'Index your git history to help Cursor understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and encrypted file names) are stored on the server.',
    changeText: 'Indexar tu historial de git para ayudar a Cursor a entender qué archivos están relacionados entre sí. El código y los mensajes de commit se almacenan localmente, pero los metadatos sobre commits (SHAs, número de cambios y nombres de archivos encriptados) se almacenan en el servidor.',
    searchType: 'exact',
  },
  {
    originalText: 'Global list of files to always ignore in Cursor features, across all workspaces. Uses glob patterns. These patterns have the same effect as adding them to a .cursorignore file in every workspace.',
    changeText: 'Lista global de archivos para ignorar siempre en las funciones de Cursor, en todos los espacios de trabajo. Usa patrones glob. Estos patrones tienen el mismo efecto que agregarlos a un archivo .cursorignore en cada espacio de trabajo.',
    searchType: 'exact',
  },
  {
    originalText: 'Show notification toasts in the same location as the chat',
    changeText: 'Mostrar notificaciones toast en la misma ubicación que el chat',
    searchType: 'exact',
  },
];

export default { LOCALE, REPLACEMENTS };
