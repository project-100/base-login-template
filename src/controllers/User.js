import { createUser } from '../services/User';

const registerUser = async (req, res) => {
  const { name, email, password, username } = req.body;

  try {
    const user = await createUser({ name, email, password, username });

    if (user.err_msg)
      return res.status(409).json({ errors: { msg: user.err_msg } });

    console.log(user);

    res.json({ user });
  } catch (err) {
    console.log('registerUser -> Controller');
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export { registerUser };
