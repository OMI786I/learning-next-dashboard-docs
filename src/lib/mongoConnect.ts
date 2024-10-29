import mongoose from "mongoose";
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI as string);

    if (connection.readyState === 1) {
      console.log(
        `MongoDB connected successfully to database: ${connection.name}`
      );
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
