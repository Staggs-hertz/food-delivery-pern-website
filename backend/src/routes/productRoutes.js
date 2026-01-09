import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../controllers/productController.js";
import { adminOnly, protect } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const productRoutes = express.Router();

//Public
productRoutes.get("/", getProducts);

//Admin only
productRoutes.post(
  "/create",
  // protect,
  // adminOnly,
  upload.single("image_url"),
  createProduct
);

productRoutes.delete("/:id", protect, adminOnly, deleteProduct);

export default productRoutes;
