import express from "express";
import {
  deleteMyAccount,
  deleteUserByAdmin,
  getProfile,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
import { adminOnly, protect } from "../middleware/auth.middleware.js";

const userRoutes = express.Router();

// Public routes
userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", logoutUser);

userRoutes.get("/profile", protect, getProfile);

userRoutes.delete("/me", protect, deleteMyAccount);

// Admin routes
userRoutes.get("/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome admin" });
});

userRoutes.delete("/:id", protect, adminOnly, deleteUserByAdmin);

export default userRoutes;
