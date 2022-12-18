import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Unread notification', () => {
  it('should be able to Unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    console.log(notification);

    expect(notificationsRepository.notificationsList[0].readAt).toBeNull();
  });
});
