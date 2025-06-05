import { type Replacement } from '../types';

export default [
  // Basic settings
  {
    originalText: 'Auto-Select Code Regions for Quick Edit \\((Ctrl|Cmd)\\+K\\)',
    changeText: 'Selección automática de regiones de código para Edición Rápida ($1+K)',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Automatically parse links when pasted into Quick Edit \\((Ctrl|Cmd)\\+K\\) input',
    changeText: 'Análisis automático de enlaces al pegar en la entrada de Edición Rápida ($1+K)',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Show a hint for (Ctrl|Cmd)\\+K in the Terminal',
    changeText: 'Mostrar pista para $1+K en la Terminal',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Preview Box for Terminal (Ctrl|Cmd)\\+K',
    changeText: 'Caja de vista previa para Terminal $1+K',
    searchType: 'regex',
    flags: 'g',
  },

  // Basic settings
  {
    originalText: 'Default Mode',
    changeText: 'Modo Predeterminado',
    searchType: 'exact',
  },
  {
    originalText: 'Mode for new chats',
    changeText: 'Modo para nuevos chats',
    searchType: 'exact',
  },
  {
    originalText: 'Text Size',
    changeText: 'Tamaño de Texto',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of Chat messages',
    changeText: 'Ajustar el tamaño del texto de los mensajes de Chat',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Clear Chat',
    changeText: 'Limpiar Chat Automáticamente',
    searchType: 'exact',
  },
  {
    originalText: 'After periods of inactivity, open the Chat Pane to a new chat',
    changeText: 'Después de períodos de inactividad, abrir el Panel de Chat a un nuevo chat',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll to New Messages',
    changeText: 'Desplazar a Nuevos Mensajes',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll Chat to incoming message',
    changeText: 'Desplazar Chat al mensaje entrante',
    searchType: 'exact',
  },
  {
    originalText: 'Completion Sound',
    changeText: 'Sonido de Finalización',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when Agent finishes responding',
    changeText: 'Reproducir un sonido cuando el Agente termine de responder',
    searchType: 'exact',
  },
  {
    originalText: 'Custom Modes',
    changeText: 'Modos Personalizados',
    searchType: 'exact',
  },
  {
    originalText: 'Create custom modes with specific models, tools, keybindings, and instructions tailored to your workflow',
    changeText: 'Crear modos personalizados con modelos específicos, herramientas, combinaciones de teclas e instrucciones adaptadas a tu flujo de trabajo',
    searchType: 'exact',
  },

  // Context Section
  {
    originalText: 'Context',
    changeText: 'Contexto',
    searchType: 'exact',
  },
  {
    originalText: 'Include Full-Folder Context',
    changeText: 'Incluir Contexto de Carpeta Completa',
    searchType: 'exact',
  },
  {
    originalText: 'Allow full contents of the selected folder to be included in the context',
    changeText: 'Permitir que todo el contenido de la carpeta seleccionada se incluya en el contexto',
    searchType: 'exact',
  },
  {
    originalText: 'Include Project Structure',
    changeText: 'Incluir Estructura del Proyecto',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree as context',
    changeText: 'Incluir un árbol de directorios simplificado como contexto',
    searchType: 'exact',
  },
  {
    originalText: 'Web Search Tool',
    changeText: 'Herramienta de Búsqueda Web',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to search the web for relevant information',
    changeText: 'Permitir al Agente buscar información relevante en la web',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: 'Ignorar Cursor Jerárquico',
    searchType: 'exact',
  },
  {
    originalText: 'Apply .cursorignore files to all subdirectories. Changing this setting will require a restart of Cursor.',
    changeText: 'Aplicar archivos .cursorignore a todos los subdirectorios. Cambiar esta configuración requerirá reiniciar Cursor.',
    searchType: 'exact',
  },
  {
    originalText: 'Backspace Removes Context',
    changeText: 'Retroceso Elimina Contexto',
    searchType: 'exact',
  },
  {
    originalText: 'Remove the last context pill in the composer when pressing backspace at the start of the input',
    changeText: 'Eliminar la última píldora de contexto en el compositor al presionar retroceso al inicio de la entrada',
    searchType: 'exact',
  },

  // Applying Changes 섹션
  {
    originalText: 'Applying Changes',
    changeText: 'Aplicar Cambios',
    searchType: 'exact',
  },
  {
    originalText: 'Out-of-Context Edits in Manual Mode',
    changeText: 'Ediciones Fuera de Contexto en Modo Manual',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to edit files outside of the selected context in Manual Mode',
    changeText: 'Permitir al Agente editar archivos fuera del contexto seleccionado en Modo Manual',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Fix Lints',
    changeText: 'Corrección Automática de Lints',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically fix lint errors in the chat',
    changeText: 'Corregir automáticamente errores de lint en el chat',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Accept on Commit',
    changeText: 'Aceptar Automáticamente al Confirmar',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all changes when files are committed and no longer in the worktree',
    changeText: 'Aceptar automáticamente todos los cambios cuando los archivos sean confirmados y ya no estén en el árbol de trabajo',
    searchType: 'exact',
  },

  // Auto-Run 섹션
  {
    originalText: 'Auto-Run',
    changeText: 'Ejecución Automática',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Run Mode',
    changeText: 'Modo de Ejecución Automática',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools like command execution and file writes without asking for confirmation',
    changeText: 'Permitir al Agente ejecutar herramientas como ejecución de comandos y escritura de archivos sin pedir confirmación',
    searchType: 'exact',
  },

  // Inline Editing & Terminal Section
  {
    originalText: 'Inline Editing & Terminal',
    changeText: 'Edición en Línea y Terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Toolbar on Selection',
    changeText: 'Barra de Herramientas en Selección',
    searchType: 'exact',
  },
  {
    originalText: 'Show Add to Chat & Quick Edit buttons when selecting code',
    changeText: 'Mostrar botones Añadir al Chat y Edición Rápida al seleccionar código',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Parse Links',
    changeText: 'Análisis Automático de Enlaces',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: 'Seleccionar automáticamente regiones para edición de código en línea',
    searchType: 'exact',
  },
  {
    originalText: 'Themed Diff Backgrounds',
    changeText: 'Fondos de Diferencias Temáticos',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline code diffs',
    changeText: 'Usar colores de fondo temáticos para diferencias de código en línea',
    searchType: 'exact',
  },
  {
    originalText: 'Character-Level Diffs',
    changeText: 'Diferencias a Nivel de Carácter',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline code diffs',
    changeText: 'Usar diferencias a nivel de carácter para diferencias de código en línea',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Tooltips',
    changeText: 'Consejos de Terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Show tooltips like "Add to chat" in the terminal',
    changeText: 'Mostrar consejos como "Añadir al chat" en la terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Hint',
    changeText: 'Pista de Terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Use a preview box instead of streaming responses directly into the shell',
    changeText: 'Usar una caja de vista previa en lugar de transmitir respuestas directamente al shell',
    searchType: 'exact',
  },

  // Version/status indicators pattern

  // File extension patterns
  {
    originalText: '\\.cursorignore files',
    changeText: 'archivos .cursorignore',
    searchType: 'regex',
    flags: 'g',
  },

  // Generic button/action text patterns
  {
    originalText: '"([^"]+)"',
    changeText: '"$1"', // Keep quoted text as-is, could be customized
    searchType: 'regex',
    flags: 'g',
  },

  // Common UI elements
  {
    originalText: 'Agent',
    changeText: 'Agente',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: 'Predeterminado',
    searchType: 'exact',
  },

] satisfies Replacement[];
