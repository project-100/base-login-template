import express from 'express';

const router = express.Router();

/*
 * @route   GET /api/users/
 * @desc    Test Route
 * @access  Public
 */
router.get('/', (req, res) => {
  res.end('Users Test Route');
});

export default router;
