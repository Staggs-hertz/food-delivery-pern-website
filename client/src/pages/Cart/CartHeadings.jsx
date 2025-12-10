import HLine from "../../components/HLine";

const CartHeadings = () => {
  return (
    <>
      <div className="text-gray-600 text-[max(1vw,12px)] grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center mb-7">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <HLine />
    </>
  );
};

export default CartHeadings;
