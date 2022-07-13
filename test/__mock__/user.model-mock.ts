/* eslint-disable @typescript-eslint/no-unused-vars */
export class UserModel {
  query = jest.fn(() => {
    const data = [
      {
        id: 'testId',
        name: 'testName',
        email: 'testMail',
        password: 'testPassword',
      },
    ];
    return {
      findById: jest.fn((id) => {
        if (id === 'testId') return data[0];
        return null;
      }),
      findOne: jest.fn((text, email) => {
        if (email === 'testMail') return data[0];
        return null;
      }),
      insert: jest.fn((object) => {
        return null;
      }),
      deleteById: jest.fn((id) => {
        return null;
      }),
      patch: jest.fn((object) => {
        return {
          where: jest.fn(() => {
            return null;
          }),
        };
      }),
    };
  });
}
