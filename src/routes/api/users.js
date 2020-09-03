import express from 'express';

import { SchemaValidation } from '../../middleware';
import { Schemas } from '../../utils';
import { registerUser, getAllUsers } from '../../controllers';

const router = express.Router();

router
  .post('/', SchemaValidation(Schemas.createUser), registerUser)
  .get('/', getAllUsers);

export default router;
