import { Notification, NotificationProps } from '@app/entities/Notification';
import { Content } from '@app/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'Social',
    content: new Content('Our fears is what we become'),
    recipientId: 'recipient-1',
    ...override,
  });
}
