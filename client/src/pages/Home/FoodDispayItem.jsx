import { useContext } from "react";
import { assets } from "../../assets/assets";
import StoreContext from "../../context/StoreContext";

const FoodDispayItem = ({ id, name, price, description, image }) => {
  //In order to save the quantity selected for each product
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-2xl shadow-sm shadow-gray-300 cursor-pointer">
      <div className="relative">
        <img className="w-full rounded-t-2xl" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            className="absolute w-9 bottom-4 right-4 cursor-pointer rounded-full hover:scale-105 duration-200 ease-in"
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 bg-white rounded-4xl">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              className="w-7.5"
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              className="w-7.5"
              alt=""
            />
          </div>
        )}
      </div>

      {/* Below is the info section of the card */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-xl font-medium">{name}</p>
          <img src={assets.rating_starts} className="w-[70px]" alt="" />
        </div>
        <p className="text-gray-500 text-[12px]">{description}</p>
        <p className="text-secondary text-xl font-medium my-2.5">${price}</p>
      </div>
    </div>
  );
};

export default FoodDispayItem;
