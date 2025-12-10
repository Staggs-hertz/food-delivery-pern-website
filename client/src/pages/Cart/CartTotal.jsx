import CartPromoSection from "./CartPromoSection";
import CartTotalPriceSection from "./CartTotalPriceSection";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20 flex justify-between gap-[max(12vw,20px)] max-md:flex-col-reverse">
      {/* cart total checkout price section  */}
      <CartTotalPriceSection
        buttonType="PROCEED TO CHECKOUT"
        func={() => navigate("/order")}
      />

      {/* promo code section*/}
      <CartPromoSection />
    </div>
  );
};

export default CartTotal;
