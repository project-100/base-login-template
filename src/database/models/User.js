import mongoose from 'mongoose';

import UserSchema from '../schema/User';

const User = mongoose.model('user', UserSchema);

export default User;
