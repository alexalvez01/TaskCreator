import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

export const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", verifyToken, profile);

