import { Model } from 'objection';
import { timestampPlugin } from 'objection-timestamps';
import { randomUUID } from 'crypto';
import { DBErrors } from 'objection-db-errors';

export class BaseModel extends DBErrors(
  timestampPlugin({
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  })(Model),
) {
  id?: string;

  static get timestamp() {
    return true;
  }

  async $beforeInsert() {
    super.$beforeInsert;
    this.id = randomUUID();
  }
}
