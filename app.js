import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./database/dbconnect.js";
import userRoutes from "./route/user.js";
import cors from "cors";
import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app=express()
dotenv.config();
let port =  process.env.PORT || 4000

app.use(cors())

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../../client/dist")));
  
//     app.get(/.*/, (req, res) => {
//       res.sendFile(path.resolve(__dirname, "../../client/dist", "index.html"));
//     });
//   }

dbConnect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });