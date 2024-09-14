import { DataSource } from 'typeorm';
import { Ring } from './models/Ring';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'ringsdb',
  synchronize: true,
  logging: false,
  entities: [Ring],
  migrations: [],
  subscribers: [],
});