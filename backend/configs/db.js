import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/Clothing_Store`);
    console.log("Connected");
  } catch (error) {
    res.send(error.message);
    console.log(error.message);
  }
};

export default connectDB;
