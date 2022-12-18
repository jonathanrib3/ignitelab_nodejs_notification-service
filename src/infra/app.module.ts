import { HttpModule } from './http/http.module';
import { PrismaService } from './database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
