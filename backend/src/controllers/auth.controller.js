import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function createToken(user) {
  return jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );
}

// ====================================
//   REGISTER
// ====================================
export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    const userFound = await User.findOne({ where: { email } });
    if (userFound)
      return res.status(400).json({ message: "Email ya registrado" });

    const hash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hash,
    });

    const token = createToken(newUser);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.json({
      message: "Usuario registrado",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error en register" });
  }
}


// ====================================
//   LOGIN
// ====================================
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ where: { email } });
    if (!userFound)
      return res.status(400).json({ message: "Email no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    const token = createToken(userFound);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.json({
      message: "Login exitoso",
      user: {
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error en login" });
  }
}


// ====================================
//   LOGOUT
// ====================================
export function logout(req, res) {
  res.clearCookie("token");
  res.json({ message: "Logout exitoso" });
}


// ====================================
//   PROFILE
// ====================================
export async function profile(req, res) {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "email", "username"],
    });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: "Error en profile" });
  }
}
