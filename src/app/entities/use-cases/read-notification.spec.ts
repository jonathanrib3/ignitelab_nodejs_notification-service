import { NotificationNotFound } from './errors/notification-not-found-error';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from '../Notification';
import { ReadNotification } from './read-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Read notification', () => {
  it('should be able to Read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    console.log(notification);

    expect(notificationsRepository.notificationsList[0].readAt).toEqual(
      expect.any(Date),
    );
  });
});
