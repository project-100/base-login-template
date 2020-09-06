import express from 'express';
const passport=require('passport');

import { SchemaValidation } from '../../middleware';
import { Schemas } from '../../utils';
import { registerUser, getAllUsers } from '../../controllers';

const router = express.Router();

router
  .post('/', SchemaValidation(Schemas.createUser), registerUser)
  .get('/', getAllUsers)
  .get('/google',passport.authenticate('google',{
    scope:['profile','email']
  }
  ));

   


export default router;
