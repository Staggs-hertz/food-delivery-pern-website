import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

export const ProductContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/");

      if (res.data.success) {
        // console.log(res.data.data);
        setFoodItems(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-check login on refresh
  useEffect(() => {
    fetchProducts();
  }, []);

  const ProductContextValue = {
    foodItems,
    loading,
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={ProductContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
