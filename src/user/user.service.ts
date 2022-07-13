import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { UserModel } from '../database/models/user.model';

import { CreateUserDto } from './dto/createUser.dto';
import { GetUserByIdDto } from './dto/getUserById.dto';
import { DeleteUserByIdDto } from './dto/deleteUserById.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Status } from './enums/status.enum';
import { Role } from './enums/role.enum';
import { GetUserByEmailDto } from './dto/getUserByEmail.dto';

@Injectable()
export class UserService {
  constructor(@Inject('UserModel') private userModel: ModelClass<UserModel>) {}

  async getAllUsers(): Promise<any> {
    const users = await this.userModel.query();
    if (!users.length)
      return { user: 'None', message: 'No any users', status: Status.DENIED };
    return { users, status: Status.SUCCESS };
  }

  async getUserById(getUserByIdDto: GetUserByIdDto): Promise<any> {
    const { id } = getUserByIdDto;
    const user = await this.userModel.query().findById(id);

    if (!user) return { message: 'No such user', status: Status.DENIED };
    return { user, status: Status.SUCCESS };
  }

  async getUserByEmail(getUserByEmailDto: GetUserByEmailDto): Promise<any> {
    const { email } = getUserByEmailDto;
    const user = await this.userModel.query().findOne('email', email);

    if (!user) return { message: 'No such user', status: Status.DENIED };
    return { user, status: Status.SUCCESS };
  }

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const { name, email, password } = createUserDto;

    const candidate = await this.userModel.query().findOne('email', email);
    if (candidate)
      return { message: 'User already exist', status: Status.DENIED };

    await this.userModel.query().insert({
      name,
      email,
      password,
    });

    return { status: Status.SUCCESS, message: 'User created successfully' };
  }

  async deleteUserById(deleteUserByIdDto: DeleteUserByIdDto): Promise<any> {
    const { id } = deleteUserByIdDto;

    const candidate = await this.userModel.query().findById(id);
    if (!candidate) return { message: 'User not exist', status: Status.DENIED };

    await this.userModel.query().deleteById(id);
    return { message: 'User deleted successfully', status: Status.SUCCESS };
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<any> {
    const { id, name, email, role, points } = updateUserDto;
    const roleString = role ? Role[role] : undefined;

    const [candidateUser, candidateEmail] = await Promise.all([
      this.userModel.query().findById(id),
      this.userModel.query().findOne('email', `${email}`),
    ]);

    if (!candidateUser)
      return { message: 'No such user', status: Status.DENIED };
    if (candidateEmail)
      return { message: 'Email already taken', status: Status.DENIED };

    await this.userModel
      .query()
      .patch({ name, email, role: roleString, points })
      .where('id', id);
    return { message: 'User successfully updated', status: Status.SUCCESS };
  }
}
