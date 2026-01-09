import { ProductModel } from "../models/productModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const { category, id } = req.query;

    const products = await ProductModel.getProducts({ category, id });
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, description, price, image_url, category_id } = req.body;

    // console.log(req.file);
    if (!req.file) {
      return res.status(400).json({ error: "Image required" });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    // Save imageUrl to database
    const product = await ProductModel.postProducts({
      name,
      description,
      price,
      image_url: imageUrl,
      category_id,
    });

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductModel.findProductById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete image from uploads folder
    if (product.image_url) {
      const imagePath = path.join(process.cwd(), product.image_url);

      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Failed to delete image", err.message);
        }
      });
    }

    // Delete product from database
    await ProductModel.deleteProduct(id);

    res
      .status(200)
      .json({ success: true, message: "Food deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to delete product" });
  }
};
