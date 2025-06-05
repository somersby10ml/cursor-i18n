import { type Replacement } from '../types';

export default [
  {
    originalText: 'Update Access',
    changeText: 'Доступ к обновлениям',
    searchType: 'exact',
  },
  {
    originalText: 'By default, get notifications for stable updates. In Early Access, pre-release builds may be unstable for production work.',
    changeText: 'По умолчанию вы получаете уведомления о стабильных обновлениях. В раннем доступе предварительные сборки могут быть нестабильны для рабочих задач.',
    searchType: 'exact',
  },
  {
    originalText: 'Notepads',
    changeText: 'Блокноты',
    searchType: 'exact',
  },
  {
    originalText: 'Capture project notes to automatically include in Chat context',
    changeText: 'Сохраняйте заметки проекта для автоматического включения в контекст чата',
    searchType: 'exact',
  },
  {
    originalText: 'Background Agent',
    changeText: 'Фоновый агент',
    searchType: 'exact',
  },
  {
    originalText: 'Run agents in the cloud, in beta preview.',
    changeText: 'Запуск агентов в облаке в бета-версии.',
    searchType: 'exact',
  },
  {
    originalText: 'BETA',
    changeText: 'БЕТА',
    searchType: 'exact',
  },
] satisfies Replacement[];
