import { createUser } from '../services/users';

/*
 * @route   POST /api/users/
 * @desc    Register User
 * @access  Public
 *
 * @param   {string}  name
 * @param   {string}  email
 * @param   {string}  password
 * @param   {string}  confirmPassword
 * @param   {string}  [username=null]
 */
const registerUser = async (req, res) => {
  const { name, email, password, username } = req.body;

  try {
    const user = await createUser({ name, email, password, username });

    if (user.err_msg)
      return res.status(409).json({ errors: { msg: user.err_msg } });

    res.json({ token: user });
  } catch (err) {
    console.log('registerUser -> Controller');
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export { registerUser };
