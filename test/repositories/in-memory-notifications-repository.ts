import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Notification } from '@app/entities/Notification';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  private notifications: Notification[];

  constructor() {
    this.notifications = [];
  }
  public get notificationsList(): Notification[] {
    return this.notifications;
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification> {
    return this.notifications.find(
      (notification) => notification.id === notificationId,
    );
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }

  async countManyByRecipient(recipientId): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
