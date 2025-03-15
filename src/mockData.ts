import { MessageType } from './types';

export const mockMessages: MessageType[] = [
  {
    id: '1',
    title: '更新成功',
    content: '有新的系统更新可用，建议立即更新以获得最新功能',
    priority: 'low',
    timestamp: new Date().toUTCString(),
    source: 'system',
  },
  {
    id: '2',
    title: '系统更新提醒',
    content: '有新的系统更新可用，建议立即更新以获得最新功能',
    priority: 'high',
    timestamp: new Date().toUTCString(),
    source: 'system',
  },
  {
    id: '3',
    title: '会议提醒',
    content: '15分钟后有项目周会，请提前准备',
    priority: 'urgent',
    timestamp: new Date().toISOString(),
    source: 'calendar',
  },
  {
    id: '4',
    title: '任务截止提醒',
    content: '项目文档需要在今天下班前提交',
    priority: 'medium',
    timestamp: new Date().toISOString(),
    source: 'task',
  }
];