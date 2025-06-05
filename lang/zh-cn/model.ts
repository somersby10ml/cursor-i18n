import { type Replacement } from '../types';

export default [
  // MAX Mode section
  {
    originalText: 'MAX Mode',
    changeText: 'MAX模式',
    searchType: 'exact',
  },
  {
    originalText: 'Get maximum context window and tool calls. For advanced users that are cost insensitive.',
    changeText: '为高级用户提供最大上下文窗口和工具调用，不关心成本。',
    searchType: 'exact',
  },
  {
    originalText: 'Billed at API pricing',
    changeText: '按API定价计费',
    searchType: 'exact',
  },
  {
    originalText: 'Upgrade',
    changeText: '升级',
    searchType: 'exact',
  },
  // Model search and management
  {
    originalText: 'Add or search model',
    changeText: '添加或搜索模型',
    searchType: 'exact',
  },
  {
    originalText: 'View All Models',
    changeText: '查看所有模型',
    searchType: 'exact',
  },
  // Model restrictions
  {
    originalText: 'MAX Only',
    changeText: '仅限MAX',
    searchType: 'exact',
  },
  // Navigation sections
  {
    originalText: 'API Keys',
    changeText: 'API密钥',
    searchType: 'exact',
  },
  // OpenAI section - split into smaller chunks
  {
    originalText: 'You can put in',
    changeText: '你可以输入',
    searchType: 'exact',
  },
  {
    originalText: 'to use Cursor at public API costs.',
    changeText: '以公开API价格使用Cursor。',
    searchType: 'partial',
  },
  {
    originalText: 'Note: this can cost more than pro',
    changeText: '注意：这可能比专业版更贵',
    searchType: 'partial',
  },
  {
    originalText: 'work for custom model features.',
    changeText: '不适用于自定义模型功能。',
    searchType: 'partial',
  },
  // Anthropic section - split into smaller chunks
  {
    originalText: 'to use Claude at cost.',
    changeText: '以成本价使用Claude。',
    searchType: 'partial',
  },
  {
    originalText: 'When enabled, this key will be used for all models beginning with',
    changeText: '启用后，此密钥将用于所有以以下开头的模型：',
    searchType: 'partial',
  },
  // Google section - split
  {
    originalText: 'to use Google models at-cost.',
    changeText: '以成本价使用Google模型。',
    searchType: 'exact',
  },
  // AWS Bedrock - split into smaller parts
  {
    originalText: 'Configure AWS Bedrock to use Anthropic Claude models through your AWS account.',
    changeText: '通过您的AWS账户配置AWS Bedrock以使用Anthropic Claude模型。',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Enterprise teams can configure IAM roles to access Bedrock without any Access Keys.',
    changeText: 'Cursor企业团队可以配置IAM角色，无需访问密钥即可访问Bedrock。',
    searchType: 'exact',
  },
  // Azure OpenAI - split
  {
    originalText: 'Configure Azure OpenAI to use OpenAI models through your Azure account.',
    changeText: '通过您的Azure账户配置Azure OpenAI以使用OpenAI模型。',
    searchType: 'exact',
  },
  // Field labels
  {
    originalText: 'Access Key ID',
    changeText: '访问密钥ID',
    searchType: 'exact',
  },
  {
    originalText: 'Secret Access Key',
    changeText: '秘密访问密钥',
    searchType: 'exact',
  },
  {
    originalText: 'Region',
    changeText: '区域',
    searchType: 'exact',
  },
  {
    originalText: 'Test Model',
    changeText: '测试模型',
    searchType: 'exact',
  },
  {
    originalText: 'Base URL',
    changeText: '基础URL',
    searchType: 'exact',
  },
  {
    originalText: 'Deployment Name',
    changeText: '部署名称',
    searchType: 'exact',
  },
  {
    originalText: 'API Key',
    changeText: 'API密钥',
    searchType: 'exact',
  },
  {
    originalText: 'Override OpenAI Base URL',
    changeText: '覆盖OpenAI基础URL',
    searchType: 'exact',
  },
  {
    originalText: 'Change the base URL for OpenAI API requests.',
    changeText: '更改OpenAI API请求的基础URL。',
    searchType: 'exact',
  },
  // Placeholder texts
  {
    originalText: 'AWS Access Key ID',
    changeText: 'AWS访问密钥ID',
    searchType: 'exact',
  },
  {
    originalText: 'AWS Secret Access Key',
    changeText: 'AWS秘密访问密钥',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your OpenAI API Key',
    changeText: '请输入您的OpenAI API密钥',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Anthropic API Key',
    changeText: '请输入您的Anthropic API密钥',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Google AI Studio API Key',
    changeText: '请输入您的Google AI Studio API密钥',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Azure OpenAI API Key',
    changeText: '请输入您的Azure OpenAI API密钥',
    searchType: 'exact',
  },
  // Common elements
  {
    originalText: 'Verify',
    changeText: '验证',
    searchType: 'exact',
  },
  // Handle "e.g." examples with regex
  {
    originalText: 'e\\.g\\. (.+)',
    changeText: '例如：$1',
    searchType: 'regex',
    flags: 'g',
  },
  // Link text for keys (already translated but handle variations)
  {
    originalText: 'your OpenAI key',
    changeText: '您的OpenAI密钥',
    searchType: 'exact',
  },
  {
    originalText: 'your Anthropic key',
    changeText: '您的Anthropic密钥',
    searchType: 'exact',
  },
  {
    originalText: 'your Google AI Studio key',
    changeText: '您的Google AI Studio密钥',
    searchType: 'exact',
  },
] satisfies Replacement[];
