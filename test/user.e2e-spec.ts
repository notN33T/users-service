import { UserService } from '../src/user/user.service';
import { UserModel as MockUserModel } from './__mock__/user.model-mock';

import { Status } from '../src/user/enums/status.enum';

let userService: UserService;

describe('UserService', () => {
  beforeEach(() => {
    userService = new UserService(new MockUserModel() as any);
  });

  it('It should test get all users', async () => {
    expect(await userService.getAllUsers()).toBeDefined();
  });

  it('It should test get user by id', async () => {
    expect(await userService.getUserById({ id: 'testId' })).toBeDefined();
    expect(await userService.getUserById({ id: 'testId' })).toStrictEqual({
      status: Status.SUCCESS,
      user: {
        id: 'testId',
        name: 'testName',
        email: 'testMail',
        password: 'testPassword',
      },
    });
  });

  it('It should test delete user by id', async () => {
    expect(await userService.deleteUserById({ id: 'testId' })).toBeDefined();
    expect(await userService.deleteUserById({ id: 'testId' })).toStrictEqual({
      status: Status.SUCCESS,
      message: 'User deleted successfully',
    });
  });

  it('It should test create user', async () => {
    expect(
      await userService.createUser({
        name: 'name',
        email: 'email',
        password: 'password',
      }),
    ).toBeDefined();
    expect(
      await userService.createUser({
        name: 'name',
        email: 'email',
        password: 'password',
      }),
    ).toStrictEqual({
      status: Status.SUCCESS,
      message: 'User created successfully',
    });
  });

  it('It should test update user', async () => {
    expect(await userService.updateUser({ id: 'testId' })).toBeDefined();
    expect(await userService.updateUser({ id: 'testId' })).toStrictEqual({
      status: Status.SUCCESS,
      message: 'User successfully updated',
    });
  });
});
