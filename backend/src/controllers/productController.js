import { ProductModel } from "../models/productModel.js";

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
