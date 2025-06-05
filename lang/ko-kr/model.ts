import { type Replacement } from '../types';

export default [
// MAX Mode section
  {
    originalText: 'MAX Mode',
    changeText: 'MAX 모드',
    searchType: 'exact',
  },
  {
    originalText: 'Get maximum context window and tool calls. For advanced users that are cost insensitive.',
    changeText: '최대 컨텍스트 윈도우와 도구 호출을 제공합니다. 비용에 민감하지 않은 고급 사용자용입니다.',
    searchType: 'exact',
  },
  {
    originalText: 'Billed at API pricing',
    changeText: 'API 가격으로 청구됨',
    searchType: 'exact',
  },
  {
    originalText: 'Upgrade',
    changeText: '업그레이드',
    searchType: 'exact',
  },

  // Model search and management
  {
    originalText: 'Add or search model',
    changeText: '모델 추가 또는 검색',
    searchType: 'exact',
  },
  {
    originalText: 'View All Models',
    changeText: '모든 모델 보기',
    searchType: 'exact',
  },

  // Model restrictions
  {
    originalText: 'MAX Only',
    changeText: 'MAX 전용',
    searchType: 'exact',
  },

  // Navigation sections
  {
    originalText: 'API Keys',
    changeText: 'API 키',
    searchType: 'exact',
  },

  // OpenAI section - split into smaller chunks
  {
    originalText: 'You can put in',
    changeText: '다음을 입력할 수 있습니다:',
    searchType: 'exact',
  },
  {
    originalText: 'to use Cursor at public API costs.',
    changeText: '공개 API 비용으로 Cursor를 사용하기 위해서입니다.',
    searchType: 'partial',
  },
  {
    originalText: 'Note: this can cost more than pro',
    changeText: '참고: 이는 프로보다 비용이 더 많이 들 수 있으며',
    searchType: 'partial',
  },
  {
    originalText: 'work for custom model features.',
    changeText: '사용자 정의 모델 기능에는 작동하지 않습니다.',
    searchType: 'partial',
  },

  // Anthropic section - split into smaller chunks
  {
    originalText: 'to use Claude at cost.',
    changeText: 'Claude를 비용으로 사용하기 위해서입니다.',
    searchType: 'partial',
  },
  {
    originalText: 'When enabled, this key will be used for all models beginning with',
    changeText: '활성화되면 이 키는 다음으로 시작하는 모든 모델에 사용됩니다:',
    searchType: 'partial',
  },
  // Google section - split
  {
    originalText: 'to use Google models at-cost.',
    changeText: 'Google 모델을 비용으로 사용하기 위해서입니다.',
    searchType: 'exact',
  },

  // AWS Bedrock - split into smaller parts
  {
    originalText: 'Configure AWS Bedrock to use Anthropic Claude models through your AWS account.',
    changeText: 'AWS 계정을 통해 Anthropic Claude 모델을 사용하도록 AWS Bedrock을 구성합니다.',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Enterprise teams can configure IAM roles to access Bedrock without any Access Keys.',
    changeText: 'Cursor Enterprise 팀은 액세스 키 없이 Bedrock에 액세스하도록 IAM 역할을 구성할 수 있습니다.',
    searchType: 'exact',
  },

  // Azure OpenAI - split
  {
    originalText: 'Configure Azure OpenAI to use OpenAI models through your Azure account.',
    changeText: 'Azure 계정을 통해 OpenAI 모델을 사용하도록 Azure OpenAI를 구성합니다.',
    searchType: 'exact',
  },

  // Field labels
  {
    originalText: 'Access Key ID',
    changeText: '액세스 키 ID',
    searchType: 'exact',
  },
  {
    originalText: 'Secret Access Key',
    changeText: '비밀 액세스 키',
    searchType: 'exact',
  },
  {
    originalText: 'Region',
    changeText: '지역',
    searchType: 'exact',
  },
  {
    originalText: 'Test Model',
    changeText: '테스트 모델',
    searchType: 'exact',
  },
  {
    originalText: 'Base URL',
    changeText: '기본 URL',
    searchType: 'exact',
  },
  {
    originalText: 'Deployment Name',
    changeText: '배포 이름',
    searchType: 'exact',
  },
  {
    originalText: 'API Key',
    changeText: 'API 키',
    searchType: 'exact',
  },
  {
    originalText: 'Override OpenAI Base URL',
    changeText: 'OpenAI 기본 URL 재정의',
    searchType: 'exact',
  },
  {
    originalText: 'Change the base URL for OpenAI API requests.',
    changeText: 'OpenAI API 요청의 기본 URL을 변경합니다.',
    searchType: 'exact',
  },

  // Placeholder texts
  {
    originalText: 'AWS Access Key ID',
    changeText: 'AWS 액세스 키 ID',
    searchType: 'exact',
  },
  {
    originalText: 'AWS Secret Access Key',
    changeText: 'AWS 비밀 액세스 키',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your OpenAI API Key',
    changeText: 'OpenAI API 키를 입력하세요',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Anthropic API Key',
    changeText: 'Anthropic API 키를 입력하세요',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Google AI Studio API Key',
    changeText: 'Google AI Studio API 키를 입력하세요',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Azure OpenAI API Key',
    changeText: 'Azure OpenAI API 키를 입력하세요',
    searchType: 'exact',
  },

  // Common elements
  {
    originalText: 'Verify',
    changeText: '확인',
    searchType: 'exact',
  },

  // Handle "e.g." examples with regex
  {
    originalText: 'e\\.g\\. (.+)',
    changeText: '예: $1',
    searchType: 'regex',
    flags: 'g',
  },

  // Link text for keys (already translated but handle variations)
  {
    originalText: 'your OpenAI key',
    changeText: 'OpenAI 키',
    searchType: 'exact',
  },
  {
    originalText: 'your Anthropic key',
    changeText: 'Anthropic 키',
    searchType: 'exact',
  },
  {
    originalText: 'your Google AI Studio key',
    changeText: 'Google AI Studio 키',
    searchType: 'exact',
  },
] satisfies Replacement[];
