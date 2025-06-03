import { type Replacement } from './types';

export const REPLACEMENTS: Replacement[] = [

  // Left Menu
  {
    originalText: 'General',
    changeText: 'Général',
    searchType: 'exact',
  },
  {
    originalText: 'Features',
    changeText: 'Fonctionnalités',
    searchType: 'exact',
  },
  {
    originalText: 'Models',
    changeText: 'Modèles',
    searchType: 'exact',
  },
  {
    originalText: 'Indexing',
    changeText: 'Indexation',
    searchType: 'exact',
  },
  {
    originalText: 'Beta',
    changeText: 'Fonctionnalités bêta',
    searchType: 'exact',
  },
  {
    originalText: 'Account',
    changeText: 'Compte',
    searchType: 'exact',
  },

  // General
  {
    originalText: 'You are currently signed in with',
    changeText: 'Compte actuellement connecté',
    searchType: 'partial',
  },
  {
    originalText: 'Manage',
    changeText: 'Gérer',
    searchType: 'exact',
  },
  {
    originalText: 'Log out',
    changeText: 'Se déconnecter',
    searchType: 'exact',
  },
  {
    originalText: 'VS Code Import',
    changeText: 'Importer VS Code',
    searchType: 'exact',
  },
  {
    originalText: 'Instantly use all of your extensions, settings and keybindings',
    changeText: 'Utilisez instantanément toutes vos extensions, paramètres et raccourcis clavier',
    searchType: 'exact',
  },
  {
    originalText: 'Import',
    changeText: 'Importer',
    searchType: 'exact',
  },
  {
    originalText: 'Appearance',
    changeText: 'Apparence',
    searchType: 'exact',
  },
  {
    originalText: 'Configure how Cursor looks and feels.',
    changeText: 'Configurez l\'apparence et le comportement de Cursor.',
    searchType: 'exact',
  },
  {
    originalText: '<div><span>Open editor settings.</span> (font, auto-save, word wrap, etc)<br><br><span>Configure keyboard shortcuts.</span> <br><br>Use <span></span> for the command palette, where many editor functions can be controlled.',
    changeText: '<div><span>Ouvrir les paramètres de l\'éditeur.</span> (police, sauvegarde automatique, retour à la ligne, etc.)<br><br><span>Configurer les raccourcis clavier.</span> <br><br>Utilisez <span></span> pour la palette de commandes, où de nombreuses fonctions de l\'éditeur peuvent être contrôlées.',
    searchType: 'exact',
  },
  {
    originalText: 'If on, none of your code will be stored by us. If off, we use prompts and telemetry to improve Cursor.',
    changeText: 'Si activé, aucun de vos codes ne sera stocké par nous. Si désactivé, nous utilisons les invites et la télémétrie pour améliorer Cursor.',
    searchType: 'exact',
  },
  {
    originalText: ' setting, not account-level.',
    changeText: ' ce paramètre s\'applique à la machine, pas au niveau du compte.',
    searchType: 'exact',
  },
  {
    originalText: '<strong>machine-level',
    changeText: '<strong>',
    searchType: 'exact',
  },
  {
    originalText: 'Privacy mode',
    changeText: 'Mode confidentialité',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled (all code remains private)',
    changeText: 'Activé (tout le code reste privé)',
    searchType: 'exact',
  },
  {
    originalText: 'Any questions?',
    changeText: 'Des questions ?',
    searchType: 'exact',
  },
  {
    originalText: '<div>Check out our <span>docs</span> or join our <span>forum</span>.<br><br>Feel free to reach out at <span>hi@cursor.com</span>.',
    changeText: '<div>Consultez notre <span>docs</span> ou rejoignez notre <span>forum</span>.<br><br>N\'hésitez pas à nous contacter à <span>hi@cursor.com</span>.',
    searchType: 'exact',
  },
  // Features
  {
    originalText: 'A powerful Copilot replacement that can suggest changes across multiple lines. Previously called Copilot++.',
    changeText: 'Un puissant remplaçant de Copilot qui peut suggérer des modifications sur plusieurs lignes. Anciennement appelé Copilot++.',
    searchType: 'exact',
  },
  {
    originalText: 'Partial accepts',
    changeText: 'Acceptations partielles',
    searchType: 'exact',
  },
  {
    originalText: 'Accept the next word of a suggestion via',
    changeText: 'Accepter le mot suivant d\'une suggestion via',
    searchType: 'partial',
  },
  {
    originalText: 'Suggestions in Comments',
    changeText: 'Suggestions dans les commentaires',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cursor Tab suggestions in comments',
    changeText: 'Activer les suggestions Cursor Tab dans les commentaires',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only changes',
    changeText: 'Afficher uniquement les modifications d\'espaces',
    searchType: 'exact',
  },
  {
    originalText: 'Show whitespace only Cursor Tab suggestions',
    changeText: 'Afficher uniquement les suggestions Cursor Tab d\'espaces',
    searchType: 'exact',
  },
  {
    originalText: 'Auto Import',
    changeText: 'Import automatique',
    searchType: 'exact',
  },
  {
    originalText: 'Tab to import necessary modules with Cursor Tab. Only supports',
    changeText: 'Appuyez sur Tab pour importer les modules nécessaires avec Cursor Tab. Supporte uniquement',
    searchType: 'partial',
  },
  {
    originalText: 'Auto Import for Python',
    changeText: 'Import automatique pour Python',
    searchType: 'exact',
  },
  {
    originalText: 'BETA',
    changeText: 'BÊTA',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto import for Python. This is a beta feature.',
    changeText: 'Activer l\'import automatique pour Python. Il s\'agit d\'une fonctionnalité bêta.',
    searchType: 'exact',
  },
  {
    originalText: 'Chat',
    changeText: 'Chat',
    searchType: 'exact',
  },
  {
    originalText: 'Ask Cursor Agent questions about your codebase, edit multiple files at once, and use tools',
    changeText: 'Posez des questions à Cursor Agent sur votre base de code, modifiez plusieurs fichiers à la fois et utilisez des outils',
    searchType: 'exact',
  },
  {
    originalText: 'Default new chat mode',
    changeText: 'Mode de nouveau chat par défaut',
    searchType: 'exact',
  },
  {
    originalText: 'New chats will open on this mode',
    changeText: 'Les nouveaux chats s\'ouvriront dans ce mode',
    searchType: 'exact',
  },
  {
    originalText: 'Agent',
    changeText: 'Agent',
    searchType: 'exact',
  },
  {
    originalText: 'Chat text size',
    changeText: 'Taille du texte du chat',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of AI chat messages',
    changeText: 'Ajuster la taille du texte des messages de chat IA',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: 'Par défaut',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-refresh chats',
    changeText: 'Actualisation automatique des chats',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically create a new chat after inactivity when opening the chat pane',
    changeText: 'Créer automatiquement un nouveau chat après inactivité lors de l\'ouverture du panneau de chat',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-scroll to bottom',
    changeText: 'Défilement automatique vers le bas',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the chat pane when a new message is generated',
    changeText: 'Faire défiler automatiquement vers le bas du panneau de chat lorsqu\'un nouveau message est généré',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-apply to files outside context in Manual mode',
    changeText: 'Application automatique aux fichiers hors contexte en mode Manuel',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the chat in Manual mode to auto-apply changes to files outside the current context',
    changeText: 'Permettre au chat en mode Manuel d\'appliquer automatiquement les modifications aux fichiers en dehors du contexte actuel',
    searchType: 'exact',
  },
  {
    originalText: '<div>Include project structure ',
    changeText: '<div>Inclure la structure du projet ',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree to give the model a sense of your codebase layout',
    changeText: 'Inclure un arbre de répertoires simplifié pour donner au modèle une idée de la disposition de votre base de code',
    searchType: 'exact',
  },
  {
    originalText: 'Full folder contents',
    changeText: 'Contenu complet des dossiers',
    searchType: 'exact',
  },
  {
    originalText: 'Enable full folder contents instead of a tree outline of the folder structure',
    changeText: 'Activer le contenu complet des dossiers au lieu d\'un aperçu en arbre de la structure des dossiers',
    searchType: 'exact',
  },
  {
    originalText: 'Enable auto-run mode',
    changeText: 'Activer le mode d\'exécution automatique',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools without asking for confirmation, such as executing commands and writing to files',
    changeText: 'Permettre à l\'Agent d\'exécuter des outils sans demander confirmation, comme l\'exécution de commandes et l\'écriture dans des fichiers',
    searchType: 'exact',
  },
  {
    originalText: 'Command allowlist',
    changeText: 'Liste des commandes autorisées',
    searchType: 'exact',
  },
  {
    originalText: 'Add commands here if only very specific commands should be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: 'Ajoutez des commandes ici si seules des commandes très spécifiques doivent être exécutées automatiquement${s().isAdminControlled?" (contrôlé par l\'administrateur)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Add',
    changeText: 'Ajouter',
    searchType: 'exact',
  },
  {
    originalText: 'Command denylist',
    changeText: 'Liste des commandes interdites',
    searchType: 'exact',
  },
  {
    originalText: 'Commands which should never be executed automatically${s().isAdminControlled?" (controlled by admin)":""}',
    changeText: 'Commandes qui ne doivent jamais être exécutées automatiquement${s().isAdminControlled?" (contrôlé par l\'administrateur)":""}',
    searchType: 'exact',
  },
  {
    originalText: 'Delete file protection',
    changeText: 'Protection de suppression de fichiers',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from deleting files automatically',
    changeText: 'Si activé, empêche l\'agent de supprimer automatiquement des fichiers',
    searchType: 'partial',
  },
  {
    originalText: 'MCP tools protection',
    changeText: 'Protection des outils MCP',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from running MCP tools automatically',
    changeText: 'Si activé, empêche l\'agent d\'exécuter automatiquement les outils MCP',
    searchType: 'partial',
  },
  {
    originalText: 'Dot files protection',
    changeText: 'Protection des fichiers cachés',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from modifying dot files (like .gitignore) automatically',
    changeText: 'Si activé, empêche l\'agent de modifier automatiquement les fichiers cachés (comme .gitignore)',
    searchType: 'partial',
  },
  {
    originalText: 'Outside workspace protection',
    changeText: 'Protection hors espace de travail',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, prevents the agent from creating or modifying files outside the workspace automatically',
    changeText: 'Si activé, empêche l\'agent de créer ou modifier automatiquement des fichiers en dehors de l\'espace de travail',
    searchType: 'partial',
  },
  {
    originalText: "Dialog 'Don't ask again' preferences",
    changeText: "Préférences de dialogue 'Ne plus demander'",
    searchType: 'exact',
  },
  {
    originalText: "Manage dialogs that you've previously selected 'Don't ask again' for",
    changeText: "Gérer les dialogues pour lesquels vous avez précédemment sélectionné 'Ne plus demander'",
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in pane or editor',
    changeText: 'Réduire les pilules de la boîte de saisie dans le panneau ou l\'éditeur',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse pills in the chat pane or editor input box to save space',
    changeText: 'Réduire les pilules dans le panneau de chat ou la boîte de saisie de l\'éditeur pour économiser l\'espace',
    searchType: 'exact',
  },
  {
    originalText: 'Iterate on lints',
    changeText: 'Itérer sur les lints',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, chat in agent mode will iterate on linter errors to fix them automatically',
    changeText: 'Si activé, le chat en mode agent itérera sur les erreurs de linter pour les corriger automatiquement',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: 'Ignore Cursor hiérarchique',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, .cursorignore files will apply to all subdirectories',
    changeText: 'Lorsqu\'activé, les fichiers .cursorignore s\'appliqueront à tous les sous-répertoires',
    searchType: 'partial',
  },
  {
    originalText: 'Changing this setting will require a restart of Cursor.',
    changeText: 'Modifier ce paramètre nécessitera un redémarrage de Cursor.',
    searchType: 'partial',
  },
  {
    originalText: 'Auto-accept diffs',
    changeText: 'Acceptation automatique des différences',
    searchType: 'exact',
  },
  {
    originalText: 'If enabled, all diffs in the composer will be accepted once they are no longer in the worktree',
    changeText: 'Si activé, toutes les différences dans le compositeur seront acceptées une fois qu\'elles ne sont plus dans l\'arbre de travail',
    searchType: 'exact',
  },
  {
    originalText: '<div>Custom modes',
    changeText: '<div>Modes personnalisés',
    searchType: 'exact',
  },
  {
    originalText: 'Allow the creation of custom modes',
    changeText: 'Permettre la création de modes personnalisés',
    searchType: 'exact',
  },
  {
    originalText: '<div>Play sound on finish ',
    changeText: '<div>Jouer un son à la fin ',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when a chat response is completed',
    changeText: 'Jouer un son lorsqu\'une réponse de chat est terminée',
    searchType: 'exact',
  },
  {
    originalText: '<div>Auto Group Changes ',
    changeText: '<div>Groupement automatique des modifications ',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically group changes made in a chat session with an LLM for you to review',
    changeText: 'Grouper automatiquement les modifications apportées dans une session de chat avec un LLM pour que vous puissiez les examiner',
    searchType: 'exact',
  },
  {
    originalText: '<div>Web Search Tool ',
    changeText: '<div>Outil de recherche Web ',
    searchType: 'exact',
  },
  {
    originalText: 'This will allow chat in agent/ask mode to search the web for information',
    changeText: 'Cela permettra au chat en mode agent/demande de rechercher des informations sur le web',
    searchType: 'exact',
  },
  {
    originalText: "Manage the custom docs that you've added.",
    changeText: 'Gérer les documents personnalisés que vous avez ajoutés.',
    searchType: 'exact',
  },
  {
    originalText: '<div>No docs added yet... Type "@Add" in a chat or in an edit to start a doc.',
    changeText: '<div>Aucun document ajouté pour le moment... Tapez "@Add" dans un chat ou dans une édition pour commencer un document.',
    searchType: 'exact',
  },
  {
    originalText: 'Show chat/edit tooltip',
    changeText: 'Afficher l\'infobulle chat/édition',
    searchType: 'exact',
  },
  {
    originalText: 'Show a chat/edit tooltip near highlighted code in the editor',
    changeText: 'Afficher une infobulle chat/édition près du code mis en surbrillance dans l\'éditeur',
    searchType: 'exact',
  },
  {
    originalText: 'Auto parse inline edit links',
    changeText: 'Analyse automatique des liens d\'édition en ligne',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically parse links when pasted into',
    changeText: 'Analyser automatiquement les liens lorsqu\'ils sont collés dans',
    searchType: 'partial',
  },
  {
    originalText: 'Auto select for',
    changeText: 'Sélection automatique pour',
    searchType: 'partial',
  },
  {
    originalText: 'Use themed diff backgrounds',
    changeText: 'Utiliser des arrière-plans de différences thématiques',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline diffs',
    changeText: 'Utiliser des couleurs d\'arrière-plan thématiques pour les différences en ligne',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs',
    changeText: 'Utiliser des différences au niveau des caractères',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline diffs',
    changeText: 'Utiliser des différences au niveau des caractères pour les différences en ligne',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal hint',
    changeText: 'Indication du terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Show the hint text at the bottom of the terminal',
    changeText: 'Afficher le texte d\'indication en bas du terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Show terminal hover hint',
    changeText: 'Afficher l\'indication de survol du terminal',
    searchType: 'exact',
  },
  {
    originalText: "Show hints like 'Add to chat' in the terminal",
    changeText: "Afficher des indications comme 'Ajouter au chat' dans le terminal",
    searchType: 'exact',
  },
  {
    originalText: 'Use preview box for terminal',
    changeText: 'Utiliser la boîte de prévisualisation pour le terminal',
    searchType: 'partial',
  },
  {
    originalText: 'If turned off, responses are streamed directly into the shell',
    changeText: 'Si désactivé, les réponses sont diffusées directement dans le shell',
    searchType: 'exact',
  },
  {
    originalText: '<div>Beta features',
    changeText: '<div>Fonctionnalités bêta',
    searchType: 'exact',
  },
  {
    originalText: 'Update frequency',
    changeText: 'Fréquence de mise à jour',
    searchType: 'exact',
  },
  {
    originalText: 'Get updates as soon as they are ready. Early Access updates may be unstable for production work.',
    changeText: 'Recevez les mises à jour dès qu\'elles sont prêtes. Les mises à jour en accès anticipé peuvent être instables pour le travail de production.',
    searchType: 'exact',
  },
  {
    originalText: 'Standard',
    changeText: 'Standard',
    searchType: 'exact',
  },
  {
    originalText: 'Notepads',
    changeText: 'Blocs-notes',
    searchType: 'exact',
  },
  {
    originalText: 'Craft and share context between chat and composers',
    changeText: 'Créer et partager le contexte entre le chat et les compositeurs',
    searchType: 'exact',
  },
  {
    originalText: 'Bug Finder',
    changeText: 'Détecteur de bugs',
    searchType: 'exact',
  },
  {
    originalText: 'Run a bug finder on your current git diff to find bugs.',
    changeText: 'Exécuter un détecteur de bugs sur votre diff git actuel pour trouver des bugs.',
    searchType: 'exact',
  },
  {
    originalText: '<div><div>Check out the Bug Finder tab in the Activity Bar.',
    changeText: '<div><div>Consultez l\'onglet Détecteur de bugs dans la barre d\'activité.',
    searchType: 'exact',
  },
  {
    originalText: 'Background Agent',
    changeText: 'Agent en arrière-plan',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the background agent, in beta. Allows you to run agents in the cloud.',
    changeText: 'Activer l\'agent en arrière-plan, en bêta. Vous permet d\'exécuter des agents dans le cloud.',
    searchType: 'exact',
  },
  {
    originalText: '<h3>Enable Background Agents (preview)',
    changeText: '<h3>Activer les agents en arrière-plan (aperçu)',
    searchType: 'exact',
  },
  {
    originalText: '<div>Background agents run in parallel in their own remote developer environments. This feature is in <strong>beta</strong>, and has a few caveats:',
    changeText: '<div>Les agents en arrière-plan s\'exécutent en parallèle dans leurs propres environnements de développement distants. Cette fonctionnalité est en <strong>bêta</strong>, et présente quelques inconvénients :',
    searchType: 'exact',
  },
  {
    originalText: '<ul><li><strong>Privacy:</strong> During the preview period, background agents are only available if you have privacy mode disabled.</li><li><strong>Security:</strong> Background agents run in isolated remote environments. We have prioritized security while building this, but the code has not yet been audited. Please email security@cursor.com with any concerns.</li><li><strong>Cost:</strong> During the preview period, background agents cost the same as normal agents (but only MAX models are supported, which can be quite expensive).',
    changeText: '<ul><li><strong>Confidentialité :</strong> Pendant la période d\'aperçu, les agents en arrière-plan ne sont disponibles que si vous avez désactivé le mode confidentialité.</li><li><strong>Sécurité :</strong> Les agents en arrière-plan s\'exécutent dans des environnements distants isolés. Nous avons priorisé la sécurité lors de la construction de cette fonctionnalité, mais le code n\'a pas encore été audité. Veuillez envoyer un e-mail à security@cursor.com pour toute préoccupation.</li><li><strong>Coût :</strong> Pendant la période d\'aperçu, les agents en arrière-plan coûtent le même prix que les agents normaux (mais seuls les modèles MAX sont pris en charge, ce qui peut être assez coûteux).',
    searchType: 'exact',
  },
  {
    originalText: '<div>You can find more details at <span>docs.cursor.com/background-agent</span>.',
    changeText: '<div>Vous pouvez trouver plus de détails sur <span>docs.cursor.com/background-agent</span>.',
    searchType: 'exact',
  },
  {
    originalText: '<div class="mt-4 mb-4 relative">To enable background agents in preview, please <span>go to Settings</span> and disable privacy mode.',
    changeText: '<div class="mt-4 mb-4 relative">Pour activer les agents en arrière-plan en aperçu, veuillez <span>aller aux Paramètres</span> et désactiver le mode confidentialité.',
    searchType: 'exact',
  },
  {
    originalText: 'Codebase Indexing',
    changeText: 'Indexation de la base de code',
    searchType: 'exact',
  },
  {
    originalText: 'Embeddings improve your codebase-wide answers. Embeddings and metadata are stored in the',
    changeText: 'Les embeddings améliorent vos réponses à l\'échelle de la base de code. Les embeddings et métadonnées sont stockés dans',
    searchType: 'exact',
  },
  {
    originalText: ', but all code is stored locally.',
    changeText: ', mais tout le code est stocké localement.',
    searchType: 'exact',
  },
  {
    originalText: 'Resync Index',
    changeText: 'Resynchroniser l\'index',
    searchType: 'exact',
  },
  {
    originalText: 'Delete Index',
    changeText: 'Supprimer l\'index',
    searchType: 'exact',
  },
  {
    originalText: 'Index new folders by default',
    changeText: 'Indexer les nouveaux dossiers par défaut',
    searchType: 'exact',
  },
  {
    originalText: 'Enabled',
    changeText: 'Activé',
    searchType: 'exact',
  },
  {
    originalText: 'Ignore files',
    changeText: 'Ignorer les fichiers',
    searchType: 'exact',
  },
  {
    originalText: '<div class=settings__item_link>Configure ignored files',
    changeText: '<div class=settings__item_link>Configurer les fichiers ignorés',
    searchType: 'exact',
  },
  {
    originalText: 'Configure the files that Cursor will ignore when indexing your repository (in addition to your .gitignore).',
    changeText: 'Configurez les fichiers que Cursor ignorera lors de l\'indexation de votre dépôt (en plus de votre .gitignore).',
    searchType: 'exact',
  },
  {
    originalText: 'Git graph file relationships',
    changeText: 'Relations de fichiers du graphique Git',
    searchType: 'exact',
  },
  {
    originalText: 'When set to true, Cursor will by default index any new folders opened. If turned off, you can still manually index folders by clicking the "Compute Index" button. Folders with more than',
    changeText: 'Lorsque défini sur vrai, Cursor indexera par défaut tous les nouveaux dossiers ouverts. Si désactivé, vous pouvez toujours indexer manuellement les dossiers en cliquant sur le bouton "Calculer l\'index". Les dossiers avec plus de',
    searchType: 'exact',
  },
  {
    originalText: 'files will not be auto-indexed.',
    changeText: ' fichiers ne seront pas indexés automatiquement.',
    searchType: 'exact',
  },
  {
    originalText: 'When enabled, Cursor will index your git history to help understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and obfuscated file names) are stored on the server.',
    changeText: 'Lorsqu\'activé, Cursor indexera votre historique git pour aider à comprendre quels fichiers sont liés les uns aux autres. Le code et les messages de commit sont stockés localement, mais les métadonnées sur les commits (SHA, nombre de modifications et noms de fichiers obscurcis) sont stockées sur le serveur.',
    searchType: 'exact',
  },

  // Editor Settings -> Cursor
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: 'Sélectionner automatiquement les régions pour l\'édition de code en ligne',
    searchType: 'exact',
  },
  {
    originalText: 'Show hover hint in the terminal',
    changeText: 'Afficher l\'indication de survol dans le terminal',
    searchType: 'exact',
  },
  {
    originalText: 'Enable Cmd+P / Ctrl+P shortcut for file picker in Composer',
    changeText: 'Activer le raccourci Cmd+P / Ctrl+P pour le sélecteur de fichiers dans le Compositeur',
    searchType: 'exact',
  },
  {
    originalText: 'Collapse input box pills in the composer pane',
    changeText: 'Réduire les pilules de la boîte de saisie dans le panneau du compositeur',
    searchType: 'exact',
  },
  {
    originalText: 'Enable the creation of custom modes',
    changeText: 'Activer la création de modes personnalisés',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all diffs in the composer once they are no longer in the worktree',
    changeText: 'Accepter automatiquement toutes les différences dans le compositeur une fois qu\'elles ne sont plus dans l\'arbre de travail',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically save files in normal composers',
    changeText: 'Sauvegarder automatiquement les fichiers dans les compositeurs normaux',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically scroll to the bottom of the composer pane when a new message is generated',
    changeText: 'Faire défiler automatiquement vers le bas du panneau du compositeur lorsqu\'un nouveau message est généré',
    searchType: 'exact',
  },
  {
    originalText: 'Queue submitted messages when the composer is generating',
    changeText: 'Mettre en file d\'attente les messages soumis lorsque le compositeur génère',
    searchType: 'exact',
  },
  {
    originalText: 'Show markdown hover participant actions',
    changeText: 'Afficher les actions de participant de survol markdown',
    searchType: 'exact',
  },
  {
    originalText: 'Show suggested files in the composer',
    changeText: 'Afficher les fichiers suggérés dans le compositeur',
    searchType: 'exact',
  },
  {
    originalText: 'Controls the text size scale (relative to base 12px) of AI chat messages.',
    changeText: 'Contrôle l\'échelle de taille du texte (relative à la base 12px) des messages de chat IA.',
    searchType: 'exact',
  },
  {
    originalText: 'Disable Cursor Tab for these languages',
    changeText: 'Désactiver Cursor Tab pour ces langages',
    searchType: 'exact',
  },
  {
    originalText: 'Enable partial accepts for Cursor Tab, using the editor.action.inlineSuggest.acceptNextWord keybinding',
    changeText: 'Activer les acceptations partielles pour Cursor Tab, en utilisant la liaison de touches editor.action.inlineSuggest.acceptNextWord',
    searchType: 'exact',
  },
  {
    originalText: 'Use character level diffs for inline diffs',
    changeText: 'Utiliser des différences au niveau des caractères pour les différences en ligne',
    searchType: 'exact',
  },
  {
    originalText: "Disable HTTP/2 for all requests, and use HTTP/1.1 instead. This increases resource utilization and latency, but is useful if you're behind a corporate proxy that blocks HTTP/2.",
    changeText: 'Désactiver HTTP/2 pour toutes les requêtes, et utiliser HTTP/1.1 à la place. Cela augmente l\'utilisation des ressources et la latence, mais est utile si vous êtes derrière un proxy d\'entreprise qui bloque HTTP/2.',
    searchType: 'exact',
  },
  {
    originalText: 'Warning: this will increase the memory usage of Cursor. Some AI features use the shadow workspace to refine code in the background before presenting it to you. The shadow workspace is a hidden window running on your local machine in a copy of your current workspace.',
    changeText: 'Attention : cela augmentera l\'utilisation de la mémoire de Cursor. Certaines fonctionnalités IA utilisent l\'espace de travail fantôme pour affiner le code en arrière-plan avant de vous le présenter. L\'espace de travail fantôme est une fenêtre cachée qui s\'exécute sur votre machine locale dans une copie de votre espace de travail actuel.',
    searchType: 'exact',
  },
  {
    originalText: 'Index your git history to help Cursor understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and encrypted file names) are stored on the server.',
    changeText: 'Indexer votre historique git pour aider Cursor à comprendre quels fichiers sont liés les uns aux autres. Le code et les messages de commit sont stockés localement, mais les métadonnées sur les commits (SHA, nombre de modifications et noms de fichiers chiffrés) sont stockées sur le serveur.',
    searchType: 'exact',
  },
  {
    originalText: 'Global list of files to always ignore in Cursor features, across all workspaces. Uses glob patterns. These patterns have the same effect as adding them to a .cursorignore file in every workspace.',
    changeText: 'Liste globale de fichiers à toujours ignorer dans les fonctionnalités Cursor, dans tous les espaces de travail. Utilise des motifs glob. Ces motifs ont le même effet que de les ajouter à un fichier .cursorignore dans chaque espace de travail.',
    searchType: 'exact',
  },
  {
    originalText: 'Show notification toasts in the same location as the chat',
    changeText: 'Afficher les notifications toast au même endroit que le chat',
    searchType: 'exact',
  },
];
