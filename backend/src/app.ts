import 'reflect-metadata';
import express from 'express';
import ringRoutes from './routes/ringRoutes';
import { AppDataSource } from './data-source';

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Conectado ao banco de dados');

    app.use('/rings', ringRoutes);

    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((error) => console.log(error));
