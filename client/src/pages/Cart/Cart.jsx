import CartHeadings from "./CartHeadings";
import CartSummary from "./CartSummary";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <div className="mt-25">
      <CartHeadings />
      <CartSummary />
      <CartTotal />
    </div>
  );
};

export default Cart;
