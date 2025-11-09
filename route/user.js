import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controller/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/all", getUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);


export default router;
