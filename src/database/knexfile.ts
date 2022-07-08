import { config } from 'dotenv';
config();

if (!process.env.DB_USER) config({ path: `../../.env` });

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knexMigrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
