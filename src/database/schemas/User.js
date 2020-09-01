import { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    min:6,
    max:144
  },
  password: {
    type: String,
    required: true,
    min:8
  },
  name:{
    type:String,
    required:true,
    min:3
  },
  phonenumber:{
    type:Number,
    required:true,
    min:10,
    max:10
  }
});

export default UserSchema;
