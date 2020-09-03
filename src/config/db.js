import mongoose from 'mongoose';

import { db_connection } from '.';

export const connectDB = async () => {
  try {
    console.log('Establishing Connection to MongoDB...');
    await mongoose.connect(db_connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
