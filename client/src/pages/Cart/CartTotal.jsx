import { useContext } from "react";
import HLine from "../../components/HLine";
import StoreContext from "../../context/StoreContext";

const CartTotal = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="mt-20 flex justify-between gap-[max(12vw,20px)] max-md:flex-col-reverse">
      {/* cart total checkout price section  */}
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
            <p>${2}</p>
          </div>
          <HLine />
          <div className="font-bold">
            <p>Total</p>
            <p>${getTotalCartAmount() + 2}</p>
          </div>
        </div>
        <button className="border-none text-white bg-secondary w-[max(15vw,250px)] py-3 px-0 rounded cursor-pointer hover:scale-105 duration-300 ease-in">
          PROCEED TO CHECKOUT
        </button>
      </div>

      {/* promo code section*/}
      <div className="flex-1">
        <div>
          <p className="text-gray-800">Have a promo code? Enter it here</p>
          <div className="mt-2.5 flex justify-between items-center bg-gray-200 rounded">
            <input
              type="text"
              placeholder="promo code"
              className="bg-transparent border-none outline-none pl-2.5"
            />
            <button className="w-[max(10vw,150px)] py-3 px-1.5 bg-black border-none text-white rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
