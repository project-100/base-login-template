import express from 'express';
const passport=require('passport');

const router = express.Router();

/*
 * @route   GET /api/auth/
 * @desc    Test Route
 * @access  Public
 */
router
.get('/', (req, res) => {
  res.end('Auth Test Route');
})
.get('/google',passport.authenticate('google',{failureRedirect:'/api/users/google'}),(req,res)=>{
  res.send("google authentication");
})



export default router;
