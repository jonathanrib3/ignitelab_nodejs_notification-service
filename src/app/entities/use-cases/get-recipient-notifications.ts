import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Content } from '../content';
import { Notification } from '../Notification';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
