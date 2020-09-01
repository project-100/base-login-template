import express from 'express';

import { SchemaValidation } from '../../middleware';
import { Schemas } from '../../utils';

const router = express.Router();

/*
 * @route   GET /api/users/
 * @desc    Test Route
 * @access  Public
 */
router.post('/', SchemaValidation(Schemas.createUser), (req, res) => {
  res.end('Users Test Route');
});

export default router;
