import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  readonly name?: string;
  readonly email?: string;
  readonly password?: string;
  readonly role?: string;
  readonly points?: number;

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'password'],
      properties: {
        id: { type: 'string' },
        role: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
        points: { type: 'number' },
        password: { type: 'string' },
      },
    };
  }
}
