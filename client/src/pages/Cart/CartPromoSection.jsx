import BlackButton from "../../components/BlackButton";

const CartPromoSection = () => {
  return (
    <div className="flex-1">
      <div>
        <p className="text-gray-800">Have a promo code? Enter it here</p>
        <div className="mt-2.5 flex justify-between items-center bg-gray-200 rounded">
          <input
            type="text"
            placeholder="promo code"
            className="bg-transparent border-none outline-none pl-2.5"
          />

          <BlackButton content="Submit" />
        </div>
      </div>
    </div>
  );
};

export default CartPromoSection;
