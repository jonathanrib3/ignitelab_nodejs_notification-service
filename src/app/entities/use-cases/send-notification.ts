import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Content } from '../content';
import { Notification } from '../Notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      content: new Content(content),
      recipientId,
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
