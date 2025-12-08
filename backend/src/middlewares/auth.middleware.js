import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(403).json({ message: "Token inválido" });
  }
}