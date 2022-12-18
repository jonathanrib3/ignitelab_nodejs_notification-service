import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/Notification';
import { Content } from '@app/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const { category, content, createdAt, id, readAt, recipientId } =
      notification;
    return {
      id,
      category,
      recipientId,
      content: content.value,
      readAt,
      createdAt,
    };
  }

  static toDomain(raw: RawNotification) {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
        readAt: raw.readAt,
      },
      raw.id,
    );
  }
}
