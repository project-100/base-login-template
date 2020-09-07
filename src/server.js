import express from 'express';
import cors from 'cors';

import { api_port } from './config';
import mountRoutes from './routes';
import { connectDB } from './config/db';
import passport from 'passport';
const passportsetup=require('./config/passport-setup');


const app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json({ extended: false }));

mountRoutes(app);

app.get('/', (req, res) => {
  res.send('API Running...');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(api_port, () => {
  connectDB();
  console.log(
    `Sever started on port ${api_port} -> http://localhost:${api_port}`
  );
});
