import express from 'express';

import { SchemaValidation } from '../../middleware';
import { Schemas } from '../../utils';
import { registerUser } from '../../controllers';

const router = express.Router();

/*
 * @route   POST /api/users/
 * @desc    Register User
 * @access  Public
 */
router.post('/', SchemaValidation(Schemas.createUser), registerUser);

export default router;
