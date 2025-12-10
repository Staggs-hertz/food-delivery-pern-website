import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HLine from "../../components/HLine";
import StoreContext from "../../context/StoreContext";

const CartTotalPriceSection = ({ buttonType }) => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col gap-5">
      <h2 className="text-xl">Cart Total</h2>
      <div className="*:flex *:justify-between *:text-gray-800">
        <div>
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <HLine />
        <div>
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() ? 2 : 0}</p>
        </div>
        <HLine />
        <div className="font-bold">
          <p>Total</p>
          <p>${getTotalCartAmount() ? getTotalCartAmount() + 2 : 0}</p>
        </div>
      </div>
      <button
        onClick={() => navigate("/order")}
        className="border-none text-white bg-secondary w-[max(15vw,250px)] py-3 px-0 mt-6 rounded cursor-pointer hover:scale-105 duration-300 ease-in"
      >
        {buttonType}
      </button>
    </div>
  );
};

export default CartTotalPriceSection;
