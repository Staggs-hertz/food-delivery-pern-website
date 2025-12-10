import CartPromoSection from "./CartPromoSection";
import CartTotalPriceSection from "./CartTotalPriceSection";

const CartTotal = () => {
  return (
    <div className="mt-20 flex justify-between gap-[max(12vw,20px)] max-md:flex-col-reverse">
      {/* cart total checkout price section  */}
      <CartTotalPriceSection buttonType="PROCEED TO CHECKOUT" />

      {/* promo code section*/}
      <CartPromoSection />
    </div>
  );
};

export default CartTotal;
