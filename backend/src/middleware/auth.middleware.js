import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    // 1.Read cookie
    // console.log(req.headers); //TEST
    if (req.cookies?.token) {
      token = req.cookies.token;
    }
    if (!token) {
      return res.status(401).json({
        error: "Not authenticated",
      });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded); //Test

    // 3. Attach user to request
    req.user = await UserModel.findById(decoded.id);
    // console.log(req.user); //Test
    next(); //move to controller
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

// Admin-only access
export const adminOnly = (req, res, next) => {
  try {
    // console.log(req.headers); //Test
    if (req.user.role !== "admin") {
      return res.status(403).json({
        error: "Admin access required",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      error: "Authorization failed",
    });
  }
};
