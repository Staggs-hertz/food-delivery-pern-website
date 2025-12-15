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
