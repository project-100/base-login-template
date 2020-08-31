import express from 'express';
import cors from 'cors';

import { api_port } from './config';
import mountRoutes from './routes';

const app = express();

app.use(cors());

mountRoutes(app);

app.get('/', (req, res) => {
  res.send('API Running...');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(api_port, () => {
  console.log(
    `Sever started on port ${api_port} -> http://localhost:${api_port}`
  );
});
