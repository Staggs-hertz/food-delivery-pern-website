import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  getUserCart,
  removeItem,
  syncCart,
  updateItem,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/sync", protect, syncCart);
cartRouter.get("/", protect, getUserCart);
cartRouter.put("/item", protect, updateItem);
cartRouter.delete("/item/:productId", protect, removeItem);

export default cartRouter;
