import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { GetUserByIdDto } from './dto/getUserById.dto';
import { DeleteUserByIdDto } from './dto/deleteUserById.dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @GrpcMethod('UserService', 'GetAllUsers')
  async getAllUsers(): Promise<any> {
    return this.userService.getAllUsers();
  }

  @GrpcMethod('UserService', 'CreateUser')
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    return this.userService.createUser(createUserDto);
  }

  @GrpcMethod('UserService', 'GetUserById')
  async getUserById(getUserByIdDto: GetUserByIdDto): Promise<any> {
    return this.userService.getUserById(getUserByIdDto);
  }

  @GrpcMethod('UserService', 'DeleteUserById')
  async deleteUserById(deleteUserByIdDto: DeleteUserByIdDto): Promise<any> {
    return this.userService.deleteUserById(deleteUserByIdDto);
  }

  @GrpcMethod('UserService', 'UpdateUser')
  async updateUser(updateUserDto: UpdateUserDto): Promise<any> {
    return this.userService.updateUser(updateUserDto);
  }
}
