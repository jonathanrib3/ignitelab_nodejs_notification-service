import { CancelNotification } from '@app/entities/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@app/entities/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/entities/use-cases/get-recipient-notifications';
import { ReadNotification } from '@app/entities/use-cases/read-notification';
import { UnreadNotification } from '@app/entities/use-cases/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/entities/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
