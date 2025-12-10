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
          <button className="w-[max(10vw,150px)] py-3 px-1.5 bg-black border-none text-white rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPromoSection;
