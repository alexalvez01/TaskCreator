import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import {authRoutes} from "./routes/auth.routes.js";
import {taskRoutes} from "./routes/task.routes.js";


const app = express();

// MIDDEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// CORS — NECESARIO PARA QUE FUNCIONE LOGIN/REGISTER EN FRONTEND
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
  })
);

// RUTA DE BIENVENIDA / HEALTH CHECK
app.get("/", (req, res) => {
  res.send("API de TaskCreator funcionando correctamente 🚀");
});

// RUTAS
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);


export default app;
