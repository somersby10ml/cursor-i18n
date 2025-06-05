import { type Replacement } from '../types';

export default [
  // Section MAX Mode
  {
    originalText: 'MAX Mode',
    changeText: 'Mode MAX',
    searchType: 'exact',
  },
  {
    originalText: 'Get maximum context window and tool calls. For advanced users that are cost insensitive.',
    changeText: 'Obtenez la fenêtre de contexte maximale et les appels d’outils. Pour les utilisateurs avancés insensibles au coût.',
    searchType: 'exact',
  },
  {
    originalText: 'Billed at API pricing',
    changeText: 'Facturé au tarif API',
    searchType: 'exact',
  },
  {
    originalText: 'Upgrade',
    changeText: 'Mettre à niveau',
    searchType: 'exact',
  },
  // Recherche et gestion des modèles
  {
    originalText: 'Add or search model',
    changeText: 'Ajouter ou rechercher un modèle',
    searchType: 'exact',
  },
  {
    originalText: 'View All Models',
    changeText: 'Voir tous les modèles',
    searchType: 'exact',
  },
  // Restrictions de modèle
  {
    originalText: 'MAX Only',
    changeText: 'MAX uniquement',
    searchType: 'exact',
  },
  // Sections de navigation
  {
    originalText: 'API Keys',
    changeText: 'Clés API',
    searchType: 'exact',
  },
  // OpenAI
  {
    originalText: 'You can put in',
    changeText: 'Vous pouvez saisir',
    searchType: 'exact',
  },
  {
    originalText: 'to use Cursor at public API costs.',
    changeText: 'pour utiliser Cursor au tarif API public.',
    searchType: 'partial',
  },
  {
    originalText: 'Note: this can cost more than pro',
    changeText: 'Remarque : cela peut coûter plus cher que pro',
    searchType: 'partial',
  },
  {
    originalText: 'work for custom model features.',
    changeText: 'ne fonctionne pas pour les fonctionnalités de modèle personnalisé.',
    searchType: 'partial',
  },
  // Anthropic
  {
    originalText: 'to use Claude at cost.',
    changeText: 'pour utiliser Claude au tarif coûtant.',
    searchType: 'partial',
  },
  {
    originalText: 'When enabled, this key will be used for all models beginning with',
    changeText: 'Si activée, cette clé sera utilisée pour tous les modèles commençant par',
    searchType: 'partial',
  },
  // Google
  {
    originalText: 'to use Google models at-cost.',
    changeText: 'pour utiliser les modèles Google au tarif coûtant.',
    searchType: 'exact',
  },
  // AWS Bedrock
  {
    originalText: 'Configure AWS Bedrock to use Anthropic Claude models through your AWS account.',
    changeText: 'Configurez AWS Bedrock pour utiliser les modèles Anthropic Claude via votre compte AWS.',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Enterprise teams can configure IAM roles to access Bedrock without any Access Keys.',
    changeText: 'Les équipes Cursor Enterprise peuvent configurer des rôles IAM pour accéder à Bedrock sans aucune clé d’accès.',
    searchType: 'exact',
  },
  // Azure OpenAI
  {
    originalText: 'Configure Azure OpenAI to use OpenAI models through your Azure account.',
    changeText: 'Configurez Azure OpenAI pour utiliser les modèles OpenAI via votre compte Azure.',
    searchType: 'exact',
  },
  // Étiquettes de champ
  {
    originalText: 'Access Key ID',
    changeText: 'ID de clé d’accès',
    searchType: 'exact',
  },
  {
    originalText: 'Secret Access Key',
    changeText: 'Clé d’accès secrète',
    searchType: 'exact',
  },
  {
    originalText: 'Region',
    changeText: 'Région',
    searchType: 'exact',
  },
  {
    originalText: 'Test Model',
    changeText: 'Tester le modèle',
    searchType: 'exact',
  },
  {
    originalText: 'Base URL',
    changeText: 'URL de base',
    searchType: 'exact',
  },
  {
    originalText: 'Deployment Name',
    changeText: 'Nom du déploiement',
    searchType: 'exact',
  },
  {
    originalText: 'API Key',
    changeText: 'Clé API',
    searchType: 'exact',
  },
  {
    originalText: 'Override OpenAI Base URL',
    changeText: 'Remplacer l’URL de base OpenAI',
    searchType: 'exact',
  },
  {
    originalText: 'Change the base URL for OpenAI API requests.',
    changeText: 'Modifier l’URL de base pour les requêtes API OpenAI.',
    searchType: 'exact',
  },
  // Textes d’espace réservé
  {
    originalText: 'AWS Access Key ID',
    changeText: 'ID de clé d’accès AWS',
    searchType: 'exact',
  },
  {
    originalText: 'AWS Secret Access Key',
    changeText: 'Clé d’accès secrète AWS',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your OpenAI API Key',
    changeText: 'Entrez votre clé API OpenAI',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Anthropic API Key',
    changeText: 'Entrez votre clé API Anthropic',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Google AI Studio API Key',
    changeText: 'Entrez votre clé API Google AI Studio',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Azure OpenAI API Key',
    changeText: 'Entrez votre clé API Azure OpenAI',
    searchType: 'exact',
  },
  // Éléments communs
  {
    originalText: 'Verify',
    changeText: 'Vérifier',
    searchType: 'exact',
  },
  // Gérer les exemples "e.g."
  {
    originalText: 'e\\.g\\. (.+)',
    changeText: 'ex. : $1',
    searchType: 'regex',
    flags: 'g',
  },
  // Texte de lien pour les clés
  {
    originalText: 'your OpenAI key',
    changeText: 'clé OpenAI',
    searchType: 'exact',
  },
  {
    originalText: 'your Anthropic key',
    changeText: 'clé Anthropic',
    searchType: 'exact',
  },
  {
    originalText: 'your Google AI Studio key',
    changeText: 'clé Google AI Studio',
    searchType: 'exact',
  },
] satisfies Replacement[];
