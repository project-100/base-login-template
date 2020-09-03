import mongoose from 'mongoose';

import UserSchema from '../schemas/User';

const User = mongoose.model('user', UserSchema);

export {User};



