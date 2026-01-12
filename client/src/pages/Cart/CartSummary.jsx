import { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import HLine from "../../components/HLine";
import ProductContext from "../../context/ProductContext";

const CartSummary = () => {
  const { cartItems, removeFromCart, url } = useContext(StoreContext);
  const { foodItems } = useContext(ProductContext);
  return (
    <div>
      {foodItems.map((item, index) => {
        if (cartItems[item.id]) {
          return (
            <div key={index}>
              <div className="my-2.5 text-black grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center">
                <img className="w-12.5" src={url + item.image_url} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p className="pl-4">{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <p
                  className="cursor-pointer pl-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  x
                </p>
              </div>
              <HLine />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartSummary;
