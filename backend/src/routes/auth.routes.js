import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

export const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/me", verifyToken, profile);

