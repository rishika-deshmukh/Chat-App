import { Router } from "express";
import { getuserInfo, login, signup, updateProfile } from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/user-info", verifyToken, getuserInfo);
authRoutes.post('/update-profile', verifyToken, updateProfile);

export default authRoutes;
