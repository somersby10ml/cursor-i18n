import { type Replacement } from '../types';

export default [
  // MAX Mode section
  {
    originalText: 'MAX Mode',
    changeText: 'Режим MAX',
    searchType: 'exact',
  },
  {
    originalText: 'Get maximum context window and tool calls. For advanced users that are cost insensitive.',
    changeText: 'Максимальное окно контекста и вызовы инструментов. Для опытных пользователей, не чувствительных к стоимости.',
    searchType: 'exact',
  },
  {
    originalText: 'Billed at API pricing',
    changeText: 'Оплата по тарифу API',
    searchType: 'exact',
  },
  {
    originalText: 'Upgrade',
    changeText: 'Обновить',
    searchType: 'exact',
  },
  {
    originalText: 'Add or search model',
    changeText: 'Добавить или найти модель',
    searchType: 'exact',
  },
  {
    originalText: 'View All Models',
    changeText: 'Просмотреть все модели',
    searchType: 'exact',
  },
  {
    originalText: 'MAX Only',
    changeText: 'Только MAX',
    searchType: 'exact',
  },
  {
    originalText: 'API Keys',
    changeText: 'API-ключи',
    searchType: 'exact',
  },
  {
    originalText: 'You can put in',
    changeText: 'Вы можете ввести',
    searchType: 'exact',
  },
  {
    originalText: 'to use Cursor at public API costs.',
    changeText: 'чтобы использовать Cursor по стоимости публичного API.',
    searchType: 'partial',
  },
  {
    originalText: 'Note: this can cost more than pro',
    changeText: 'Примечание: это может стоить дороже, чем pro',
    searchType: 'partial',
  },
  {
    originalText: 'work for custom model features.',
    changeText: 'не работает для пользовательских функций модели.',
    searchType: 'partial',
  },
  {
    originalText: 'to use Claude at cost.',
    changeText: 'чтобы использовать Claude по себестоимости.',
    searchType: 'partial',
  },
  {
    originalText: 'When enabled, this key will be used for all models beginning with',
    changeText: 'Если включено, этот ключ будет использоваться для всех моделей, начинающихся с',
    searchType: 'partial',
  },
  {
    originalText: 'to use Google models at-cost.',
    changeText: 'чтобы использовать модели Google по себестоимости.',
    searchType: 'exact',
  },
  {
    originalText: 'Configure AWS Bedrock to use Anthropic Claude models through your AWS account.',
    changeText: 'Настройте AWS Bedrock для использования моделей Anthropic Claude через ваш аккаунт AWS.',
    searchType: 'exact',
  },
  {
    originalText: 'Cursor Enterprise teams can configure IAM roles to access Bedrock without any Access Keys.',
    changeText: 'Команды Cursor Enterprise могут настраивать IAM-роли для доступа к Bedrock без Access Key.',
    searchType: 'exact',
  },
  {
    originalText: 'Configure Azure OpenAI to use OpenAI models through your Azure account.',
    changeText: 'Настройте Azure OpenAI для использования моделей OpenAI через ваш аккаунт Azure.',
    searchType: 'exact',
  },
  {
    originalText: 'Access Key ID',
    changeText: 'ID ключа доступа',
    searchType: 'exact',
  },
  {
    originalText: 'Secret Access Key',
    changeText: 'Секретный ключ доступа',
    searchType: 'exact',
  },
  {
    originalText: 'Region',
    changeText: 'Регион',
    searchType: 'exact',
  },
  {
    originalText: 'Test Model',
    changeText: 'Тестовая модель',
    searchType: 'exact',
  },
  {
    originalText: 'Base URL',
    changeText: 'Базовый URL',
    searchType: 'exact',
  },
  {
    originalText: 'Deployment Name',
    changeText: 'Имя развертывания',
    searchType: 'exact',
  },
  {
    originalText: 'API Key',
    changeText: 'API-ключ',
    searchType: 'exact',
  },
  {
    originalText: 'Override OpenAI Base URL',
    changeText: 'Переопределить базовый URL OpenAI',
    searchType: 'exact',
  },
  {
    originalText: 'Change the base URL for OpenAI API requests.',
    changeText: 'Изменить базовый URL для запросов к OpenAI API.',
    searchType: 'exact',
  },
  {
    originalText: 'AWS Access Key ID',
    changeText: 'ID ключа доступа AWS',
    searchType: 'exact',
  },
  {
    originalText: 'AWS Secret Access Key',
    changeText: 'Секретный ключ доступа AWS',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your OpenAI API Key',
    changeText: 'Введите ваш OpenAI API-ключ',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Anthropic API Key',
    changeText: 'Введите ваш Anthropic API-ключ',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Google AI Studio API Key',
    changeText: 'Введите ваш Google AI Studio API-ключ',
    searchType: 'exact',
  },
  {
    originalText: 'Enter your Azure OpenAI API Key',
    changeText: 'Введите ваш Azure OpenAI API-ключ',
    searchType: 'exact',
  },
  {
    originalText: 'Verify',
    changeText: 'Проверить',
    searchType: 'exact',
  },
  {
    originalText: 'e\\.g\\. (.+)',
    changeText: 'например: $1',
    searchType: 'regex',
    flags: 'g',
  },
] satisfies Replacement[];
