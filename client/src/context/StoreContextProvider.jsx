import StoreContext from "./StoreContext";
import { food_list } from "../assets/assets";
import { useState } from "react";

//A provider like the one below supplies the data
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  //This function checks if the id of a product (itemId) exists in the cart (cartItems) which is an object
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
    //If the id exists in the cart, the content of the cart is spread and the existing id is re-written in the new object data and its previous value (prev[itemId]) is decremented by 1
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      // This holds the quantity for each element after the for..in loops through the cartItems object
      const quantity = cartItems[itemId];

      if (quantity > 0) {
        //itemInfo is an array gotten from find-ing the elements of the food_list array that matches the condition
        const itemInfo = food_list.find(
          //The condition is to compare each _id of products (elements of the array) with itemId which is the key of the cartItems object
          (product) => product._id.toString() === itemId.toString()
        );

        //if itemInfo array exists, the price property of the individual arrays gotten from the that was 'found' from the cartItems items are multiplied with their individual quantities
        //The multiplied results are all accumulated and initialized to totalAmount
        if (itemInfo) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }

    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
