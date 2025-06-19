import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(() => {
      console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB:", err);
    });
};
