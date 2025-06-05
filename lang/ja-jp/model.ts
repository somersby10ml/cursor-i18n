import { type Replacement } from '../types';

export default [
  {
    originalText: 'MAX Mode',
    changeText: 'MAXモード',
    searchType: 'exact',
  },
  {
    originalText: 'Get maximum context window and tool calls. For advanced users that are cost insensitive.',
    changeText: '最大のコンテキストウィンドウとツール呼び出しを利用できます。コストを気にしない上級者向けです。',
    searchType: 'exact',
  },
  {
    originalText: 'Billed at API pricing',
    changeText: 'API価格で請求',
    searchType: 'exact',
  },
  {
    originalText: 'Upgrade',
    changeText: 'アップグレード',
    searchType: 'exact',
  },
  {
    originalText: 'Add or search model',
    changeText: 'モデルの追加または検索',
    searchType: 'exact',
  },
  {
    originalText: 'View All Models',
    changeText: 'すべてのモデルを表示',
    searchType: 'exact',
  },
  {
    originalText: 'MAX Only',
    changeText: 'MAX専用',
    searchType: 'exact',
  },
  {
    originalText: 'API Keys',
    changeText: 'APIキー',
    searchType: 'exact',
  },
  {
    originalText: 'You can put in',
    changeText: '次を入力できます:',
    searchType: 'exact',
  },
  {
    originalText: 'to use Cursor at public API costs.',
    changeText: '公開APIコストでCursorを利用するためです。',
    searchType: 'partial',
  },
  {
    originalText: 'Note: this can cost more than pro',
    changeText: '注意: これはProよりコストが高くなる場合があります',
    searchType: 'partial',
  },
  {
    originalText: 'work for custom model features.',
    changeText: 'カスタムモデル機能には対応しません。',
    searchType: 'partial',
  },
  {
    originalText: 'to use Claude at cost.',
    changeText: 'Claudeをコストで利用するためです。',
    searchType: 'partial',
  },
  {
    originalText: 'When enabled, this key will be used for all models beginning with',
    changeText: '有効化すると、このキーは次で始まるすべてのモデルに使用されます:',
    searchType: 'partial',
  },
  {
    originalText: 'to use Google models at-cost.',
    changeText: 'Googleモデルをコストで利用するためです。',
    searchType: 'exact',
  },
  {
    originalText: 'Configure AWS Bedrock to use Anthropic Claude models through your AWS account.',
    changeText: 'AWSアカウントを通じてAnthropic Claudeモデルを利用するためにAWS Bedrockを構成します。',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Enterprise teams can configure IAM roles to access Bedrock without any Access Keys.',
    changeText: 'Cursor EnterpriseチームはアクセスキーなしでBedrockにアクセスできるIAMロールを構成できます。',
    searchType: 'exact',
  },
  {
    originalText: 'Configure Azure OpenAI to use OpenAI models through your Azure account.',
    changeText: 'Azureアカウントを通じてOpenAIモデルを利用するためにAzure OpenAIを構成します。',
    searchType: 'exact',
  },
  {
    originalText: 'Access Key ID',
    changeText: 'アクセスキーID',
    searchType: 'exact',
  },
  {
    originalText: 'Secret Access Key',
    changeText: 'シークレットアクセスキー',
    searchType: 'exact',
  },
  {
    originalText: 'Region',
    changeText: 'リージョン',
    searchType: 'exact',
  },
  {
    originalText: 'Test Model',
    changeText: 'テストモデル',
    searchType: 'exact',
  },
  {
    originalText: 'Base URL',
    changeText: 'ベースURL',
    searchType: 'exact',
  },
  {
    originalText: 'Deployment Name',
    changeText: 'デプロイ名',
    searchType: 'exact',
  },
  {
    originalText: 'API Key',
    changeText: 'APIキー',
    searchType: 'exact',
  },
  {
    originalText: 'Override OpenAI Base URL',
    changeText: 'OpenAIベースURLを上書き',
    searchType: 'exact',
  },
  {
    originalText: 'Change the base URL for OpenAI API requests.',
    changeText: 'OpenAI APIリクエストのベースURLを変更します。',
    searchType: 'exact',
  },
  {
    originalText: 'AWS Access Key ID',
    changeText: 'AWSアクセスキーID',
    searchType: 'exact',
  },
  {
    originalText: 'AWS Secret Access Key',
    changeText: 'AWSシークレットアクセスキー',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your OpenAI API Key',
    changeText: 'OpenAI APIキーを入力してください',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Anthropic API Key',
    changeText: 'Anthropic APIキーを入力してください',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Google AI Studio API Key',
    changeText: 'Google AI Studio APIキーを入力してください',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Azure OpenAI API Key',
    changeText: 'Azure OpenAI APIキーを入力してください',
    searchType: 'exact',
  },
  {
    originalText: 'Verify',
    changeText: '確認',
    searchType: 'exact',
  },
  {
    originalText: 'e\\.g\\. (.+)',
    changeText: '例: $1',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'your OpenAI key',
    changeText: 'OpenAIキー',
    searchType: 'exact',
  },
  {
    originalText: 'your Anthropic key',
    changeText: 'Anthropicキー',
    searchType: 'exact',
  },
  {
    originalText: 'your Google AI Studio key',
    changeText: 'Google AI Studioキー',
    searchType: 'exact',
  },
] satisfies Replacement[];
