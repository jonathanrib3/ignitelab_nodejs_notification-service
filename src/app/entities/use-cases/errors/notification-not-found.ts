import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from '../cancel-notification';
import { Notification } from '@app/entities/Notification';
import { Content } from '@app/entities/content';

describe('Cancel notification', () => {
  it('should be able to Cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'Social',
      content: new Content('HAAAAHA, PARABÉNS ZÉ, HAAAAHAHA'),
      recipientId: 'some-uuid',
    });

    notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notificationsList).toEqual(expect.any(Date));
  });
});
