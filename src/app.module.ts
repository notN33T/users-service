import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/users.module';

@Module({
  imports: [DatabaseModule, UserModule],
})
export class AppModule {}
