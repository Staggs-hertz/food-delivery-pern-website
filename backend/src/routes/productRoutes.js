import express from "express";
import { getProducts } from "../controllers/productController.js";

const productRoutes = express.Router();

//Public
productRoutes.get("/", getProducts);

export default productRoutes;
