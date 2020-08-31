import express from 'express';

const router = express.Router();

/*
 * @route   GET /api/auth/
 * @desc    Test Route
 * @access  Public
 */
router.get('/', (req, res) => {
  res.end('Auth Test Route');
});

export default router;
