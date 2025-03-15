export type PriorityType= 'urgent' | 'high' | 'medium' | 'low';

export interface MessageType {
  id: string;
  title: string;
  content: string;
  priority: PriorityType;
  timestamp: string;
  source: string;
}

export interface MessageAlertProps {
  messages: MessageType[];
}