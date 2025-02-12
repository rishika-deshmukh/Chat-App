import express from "express";
import { login, signup, getUserInfo } from "../controllers/AuthController.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/user-info", getUserInfo); 

export default authRoutes;
