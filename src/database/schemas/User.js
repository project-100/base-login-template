import { Schema } from 'mongoose';
import { date } from 'joi';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 7,
  },
  username: {
    type: String,
    min: 5,
    max: 30,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  updated_on: {
    type: Date,
    default: Date.now,
  },
});

export default UserSchema;
