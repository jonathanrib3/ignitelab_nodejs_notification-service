import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;
    const count = await this.notificationsRepository.countManyByRecipient(
      recipientId,
    );

    return { count };
  }
}
