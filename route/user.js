import express from "express";
import { createUser, deleteUser, getUsers } from "../controller/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/all", getUsers);
router.delete("/delete/:id", deleteUser);


export default router;
