import { type Replacement } from '../types';

export default [
  // Paramètres de base
  {
    originalText: 'Auto-Select Code Regions for Quick Edit \\((Ctrl|Cmd)\\+K\\)',
    changeText: 'Sélection automatique des régions de code pour l’édition rapide ($1+K)',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Automatically parse links when pasted into Quick Edit \\((Ctrl|Cmd)\\+K\\) input',
    changeText: 'Analyser automatiquement les liens lors du collage dans l’entrée d’édition rapide ($1+K)',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Show a hint for (Ctrl|Cmd)\\+K in the Terminal',
    changeText: 'Afficher une astuce pour $1+K dans le terminal',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Preview Box for Terminal (Ctrl|Cmd)\\+K',
    changeText: 'Boîte d’aperçu pour le terminal $1+K',
    searchType: 'regex',
    flags: 'g',
  },

  // Paramètres de base
  {
    originalText: 'Default Mode',
    changeText: 'Mode par défaut',
    searchType: 'exact',
  },
  {
    originalText: 'Mode for new chats',
    changeText: 'Mode pour les nouveaux chats',
    searchType: 'exact',
  },
  {
    originalText: 'Text Size',
    changeText: 'Taille du texte',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of Chat messages',
    changeText: 'Ajuster la taille du texte des messages de chat',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Clear Chat',
    changeText: 'Effacement automatique du chat',
    searchType: 'exact',
  },
  {
    originalText: 'After periods of inactivity, open the Chat Pane to a new chat',
    changeText: 'Après une période d’inactivité, ouvrir le panneau de chat sur une nouvelle conversation',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll to New Messages',
    changeText: 'Faire défiler vers les nouveaux messages',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll Chat to incoming message',
    changeText: 'Faire défiler le chat jusqu’au message entrant',
    searchType: 'exact',
  },
  {
    originalText: 'Completion Sound',
    changeText: 'Son de fin',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when Agent finishes responding',
    changeText: 'Jouer un son lorsque l’agent a terminé de répondre',
    searchType: 'exact',
  },
  {
    originalText: 'Custom Modes',
    changeText: 'Modes personnalisés',
    searchType: 'exact',
  },
  {
    originalText: 'Create custom modes with specific models, tools, keybindings, and instructions tailored to your workflow',
    changeText: 'Créer des modes personnalisés avec des modèles, outils, raccourcis et instructions adaptés à votre flux de travail',
    searchType: 'exact',
  },

  // Section Contexte
  {
    originalText: 'Context',
    changeText: 'Contexte',
    searchType: 'exact',
  },
  {
    originalText: 'Include Full-Folder Context',
    changeText: 'Inclure le contexte du dossier complet',
    searchType: 'exact',
  },
  {
    originalText: 'Allow full contents of the selected folder to be included in the context',
    changeText: 'Permettre d’inclure tout le contenu du dossier sélectionné dans le contexte',
    searchType: 'exact',
  },
  {
    originalText: 'Include Project Structure',
    changeText: 'Inclure la structure du projet',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree as context',
    changeText: 'Inclure un arbre de répertoires simplifié comme contexte',
    searchType: 'exact',
  },
  {
    originalText: 'Web Search Tool',
    changeText: 'Outil de recherche web',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to search the web for relevant information',
    changeText: 'Autoriser l’agent à rechercher des informations pertinentes sur le web',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: 'Ignorer le curseur hiérarchique',
    searchType: 'exact',
  },
  {
    originalText: 'Apply .cursorignore files to all subdirectories. Changing this setting will require a restart of Cursor.',
    changeText: 'Appliquer les fichiers .cursorignore à tous les sous-répertoires. Modifier ce paramètre nécessitera de redémarrer Cursor.',
    searchType: 'exact',
  },
  {
    originalText: 'Backspace Removes Context',
    changeText: 'Retour arrière supprime le contexte',
    searchType: 'exact',
  },
  {
    originalText: 'Remove the last context pill in the composer when pressing backspace at the start of the input',
    changeText: 'Supprimer la dernière pastille de contexte dans le compositeur en appuyant sur retour arrière au début de la saisie',
    searchType: 'exact',
  },

  // Section Application des modifications
  {
    originalText: 'Applying Changes',
    changeText: 'Application des modifications',
    searchType: 'exact',
  },
  {
    originalText: 'Out-of-Context Edits in Manual Mode',
    changeText: 'Modifications hors contexte en mode manuel',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to edit files outside of the selected context in Manual Mode',
    changeText: 'Autoriser l’agent à modifier des fichiers hors du contexte sélectionné en mode manuel',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Fix Lints',
    changeText: 'Correction automatique des lints',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically fix lint errors in the chat',
    changeText: 'Corriger automatiquement les erreurs de lint dans le chat',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Accept on Commit',
    changeText: 'Acceptation automatique lors du commit',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all changes when files are committed and no longer in the worktree',
    changeText: 'Accepter automatiquement toutes les modifications lorsque les fichiers sont validés et ne sont plus dans l’arborescence de travail',
    searchType: 'exact',
  },

  // Section Exécution automatique
  {
    originalText: 'Auto-Run',
    changeText: 'Exécution automatique',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Run Mode',
    changeText: 'Mode d’exécution automatique',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools like command execution and file writes without asking for confirmation',
    changeText: 'Autoriser l’agent à exécuter des outils comme l’exécution de commandes et l’écriture de fichiers sans demander de confirmation',
    searchType: 'exact',
  },

  // Section Édition en ligne & Terminal
  {
    originalText: 'Inline Editing & Terminal',
    changeText: 'Édition en ligne & terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Toolbar on Selection',
    changeText: 'Barre d’outils à la sélection',
    searchType: 'exact',
  },
  {
    originalText: 'Show Add to Chat & Quick Edit buttons when selecting code',
    changeText: 'Afficher les boutons Ajouter au chat & Édition rapide lors de la sélection de code',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Parse Links',
    changeText: 'Analyse automatique des liens',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: 'Sélectionner automatiquement les régions pour l’édition de code en ligne',
    searchType: 'exact',
  },
  {
    originalText: 'Themed Diff Backgrounds',
    changeText: 'Arrière-plans différenciés par thème',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline code diffs',
    changeText: 'Utiliser des couleurs d’arrière-plan thématiques pour les différences de code en ligne',
    searchType: 'exact',
  },
  {
    originalText: 'Character-Level Diffs',
    changeText: 'Différences au niveau des caractères',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline code diffs',
    changeText: 'Utiliser des différences au niveau des caractères pour les différences de code en ligne',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Tooltips',
    changeText: 'Info-bulles du terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Show tooltips like "Add to chat" in the terminal',
    changeText: 'Afficher des info-bulles comme "Ajouter au chat" dans le terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Hint',
    changeText: 'Astuce du terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Use a preview box instead of streaming responses directly into the shell',
    changeText: 'Utiliser une boîte d’aperçu au lieu de diffuser les réponses directement dans le shell',
    searchType: 'exact',
  },

  // Motifs d’indicateurs de version/statut

  // Motifs d’extension de fichier
  {
    originalText: '\\.cursorignore files',
    changeText: 'fichiers .cursorignore',
    searchType: 'regex',
    flags: 'g',
  },

  // Motifs de texte de bouton/action génériques
  {
    originalText: '"([^"]+)"',
    changeText: '"$1"', // Garder le texte entre guillemets tel quel, peut être personnalisé
    searchType: 'regex',
    flags: 'g',
  },

  // Éléments d’interface utilisateur courants
  {
    originalText: 'Agent',
    changeText: 'Agent',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: 'Par défaut',
    searchType: 'exact',
  },

] satisfies Replacement[];
