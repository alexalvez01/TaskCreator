import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import {router as authRoutes} from "./routes/auth.routes.js";


const app = express();

// MIDDEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// CORS — NECESARIO PARA QUE FUNCIONE LOGIN/REGISTER EN FRONTEND
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

// RUTAS
app.use("/auth", authRoutes);


export default app;
