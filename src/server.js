import express from 'express';

import { api_port } from './config';

const app = express();

app.get('/', (req, res) => {
  res.send('API Running...');
});

app.listen(api_port, () => {
  console.log(
    `Sever started on port ${api_port} -> http://localhost:${api_port}`
  );
});
