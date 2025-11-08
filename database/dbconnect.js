import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://mailtoakashit_db_user:XBJRdvB0u4aFnScU@cluster0.cfhcxbt.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // stop the app if DB connection fails
  }
};
