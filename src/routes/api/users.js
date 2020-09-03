import express from 'express';

import { SchemaValidation } from '../../middleware';
import { Schemas } from '../../utils';
import { registerUser } from '../../controllers';

const router = express.Router();

router.post('/', SchemaValidation(Schemas.createUser), registerUser).get('/');

export default router;
