import { Router } from "express";
import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask
} from "../controllers/task.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

export const taskRoutes = Router();

taskRoutes.get("/", verifyToken, getTasks);
taskRoutes.post("/", verifyToken, createTask);
taskRoutes.put("/:id/toggle", verifyToken, toggleTask);
taskRoutes.delete("/:id", verifyToken, deleteTask);

