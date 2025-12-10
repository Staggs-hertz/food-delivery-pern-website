import CartTotalPriceSection from "../Cart/CartTotalPriceSection";
import PlaceOrderForm from "./PlaceOrderForm";

const PlaceOrder = () => {
  return (
    <form className="flex items-start justify-between max-md:flex-col gap-12.5 mt-25">
      {/* left side */}
      <PlaceOrderForm />

      {/* right side */}
      <div className="w-full max-w-[max(40%,500px)]">
        <CartTotalPriceSection buttonType="PROCEED TO PAYMENT" />
      </div>
    </form>
  );
};

export default PlaceOrder;
