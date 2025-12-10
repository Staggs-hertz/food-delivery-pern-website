import { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import HLine from "../../components/HLine";

const CartSummary = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div>
      {food_list.map((item) => {
        if (cartItems[item._id]) {
          return (
            <div>
              <div className="my-2.5 text-black grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center">
                <img className="w-12.5" src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p className="pl-4">{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p
                  className="cursor-pointer pl-4"
                  onClick={() => removeFromCart(item._id)}
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
