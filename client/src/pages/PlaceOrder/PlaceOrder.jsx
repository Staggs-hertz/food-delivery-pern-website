import useDocumentTitle from "../../hooks/useDocumentTitle";
import CartTotalPriceSection from "../Cart/CartTotalPriceSection";
import PlaceOrderForm from "./PlaceOrderForm";

const PlaceOrder = () => {
  useDocumentTitle("Food Delivery - Order");
  return (
    <form className="flex items-start justify-between max-md:flex-col gap-12.5 mt-25 w-4/5 mx-auto">
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
