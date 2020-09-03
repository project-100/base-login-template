import { User } from '../database';
import { generateAccessToken } from '../utils';

const createUser = async ({ name, email, password, username }) => {
  try {
    let user = await User.findOne({ email });
    if (user) {
      return { err_msg: 'User Exists!' };
    }

    user = new User({ name, email, password, username });

    // Encrypt Password

    await user.save();

    console.log('User Created', user);

    const payload = {
      user: {
        id: user.id,
      },
    };

    return generateAccessToken(payload);
  } catch (err) {
    console.log('createUser -> Service');
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export { createUser };
