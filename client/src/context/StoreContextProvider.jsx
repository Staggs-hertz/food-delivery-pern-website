import StoreContext from "./StoreContext";
import { food_list } from "../assets/assets";
import { useState } from "react";

//A provider like the one below supplies the data
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  //This function checks if the id of a product (itemId) exists in the cart (cartItems)
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      //If the id doesn't exist in the cart, the content or object data of the cart is 'spread' into another object and the new id ([itemId]) is added and giving the value of 1 (its quantity)
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      //If the id exists in the cart, the content of the cart is spread and the existing id is re-written in the new object data and its previous value (prev[itemId]) is incremented by 1
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
