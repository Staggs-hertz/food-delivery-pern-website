import express from "express";
import {
  getProfile,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
import { adminOnly, protect } from "../middleware/auth.middleware.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", logoutUser);

userRoutes.get("/profile", protect, getProfile);

// Admin route
userRoutes.get("/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome admin" });
});

export default userRoutes;
