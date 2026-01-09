import useDocumentTitle from "../../hooks/useDocumentTitle";
import CartHeadings from "./CartHeadings";
import CartSummary from "./CartSummary";
import CartTotal from "./CartTotal";

const Cart = () => {
  useDocumentTitle("Food Delivery - Cart");
  return (
    <div className="mt-25 w-4/5 mx-auto">
      <CartHeadings />
      <CartSummary />
      <CartTotal />
    </div>
  );
};

export default Cart;
