import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./database/dbconnect.js";
import userRoutes from "./route/user.js";

const app=express()
dotenv.config();
let port =  process.env.PORT


app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

dbConnect();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });