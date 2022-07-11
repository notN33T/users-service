import { randomUUID } from 'crypto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rseed = require('rseed');

const allData = rseed.getNames(5).getMails(5).result;

exports.seed = async (knex) => {
  await knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          id: randomUUID(),
          name: allData.names[0],
          email: allData.mails[0],
          password: 'test',
        },
        {
          id: randomUUID(),
          name: allData.names[1],
          email: allData.mails[1],
          password: 'test',
        },
        {
          id: randomUUID(),
          name: allData.names[2],
          email: allData.mails[2],
          password: 'test',
        },
        {
          id: randomUUID(),
          name: allData.names[3],
          email: allData.mails[3],
          password: 'test',
        },
        {
          id: randomUUID(),
          name: allData.names[4],
          email: allData.mails[4],
          password: 'test',
        },
      ]);
    });
};
