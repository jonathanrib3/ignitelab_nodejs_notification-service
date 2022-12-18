import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from '../Notification';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Hello there!',
      category: 'Stuff',
      recipientId: 'someUUID',
    });

    console.log(notification);

    expect(notificationsRepository.notificationsList).toHaveLength(1);
    expect(notificationsRepository.notificationsList[0]).toEqual(notification);
  });
});
