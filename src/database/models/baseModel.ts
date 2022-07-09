import { Model } from 'objection';
import { timestampPlugin } from 'objection-timestamps';
import { randomUUID } from 'crypto';

export class BaseModel extends timestampPlugin({
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})(Model) {
  id?: string;

  static get timestamp() {
    return true;
  }

  async $beforeInsert() {
    super.$beforeInsert;
    this.id = randomUUID();
  }
}
