import React from "react";
import InputBox from "../../components/InputBox";

const PlaceOrderForm = () => {
  return (
    <div className="w-full max-w-[max(30%,500px)] **:outline-secondary [&_input]:mb-4 [&_div]:flex [&_div]:gap-2.5">
      <h3 className="font-semibold text-3xl mb-12.5">Delivery Information</h3>
      <div>
        <InputBox type="text" name="fName" placeholder="First name" />
        <InputBox type="text" name="lName" placeholder="Last name" />
      </div>
      <InputBox type="email" name="email" placeholder="Email address" />
      <InputBox type="text" name="street" placeholder="Street" />

      <div>
        <InputBox type="text" name="city" placeholder="City" />
        <InputBox type="text" name="state" placeholder="State" />
      </div>

      <div>
        <InputBox type="text" name="zipCode" placeholder="Zip code" />
        <InputBox type="text" name="country" placeholder="Country" />
      </div>
      <InputBox type="tel" name="phone" placeholder="Phone" />
    </div>
  );
};

export default PlaceOrderForm;
