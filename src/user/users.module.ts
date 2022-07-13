import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './users.controller';

@Module({
  imports: [],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
