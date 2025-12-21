import bcrypt from "bcrypt";
import { UserModel } from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

// REGISTER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserModel.createUser(name, email, hashedPassword);

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Registration failed" });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const user = await UserModel.findByEmail(email);

    //Error catched when user credentials do not exist in the database
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong password" });
    }

    //Error catched when user types in wrong password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong password" });
    }

    const token = generateToken(user.id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV,
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Login failed" });
  }
};

// LOGOUT
export const logoutUser = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Logout failed" });
  }
};

// GET PROFILE
export const getProfile = (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch profile" });
  }
};
