import { assets } from "../../assets/assets";
import MobileAppOrderStep from "./MobileAppOrderStep";

const MobileAppOrderGuide = () => {
  return (
    <div className="w-4/5 mx-auto py-7">
      <h2 className="text-center text-3xl font-semibold mb-7">
        Order in Just a Few Steps
      </h2>
      <p className="text-gray-500 text-center w-[60%] max-md:w-full mx-auto mb-7">
        From choosing your meal to enjoying it at your doorstep, we make food
        delivery simple, fast, and reliable.
      </p>

      <div className="flex justify-evenly gap-8 max-md:flex-col *:w-full pt-5">
        <div className="text-right max-md:text-left">
          {/* Step one */}

          <MobileAppOrderStep
            number={1}
            title="Browse & Choose"
            text="Explore a wide range of restaurants and meals, and pick exactly what you are craving in just a few taps."
          />

          {/* Step two */}
          <MobileAppOrderStep
            number={2}
            title="Place Your Order"
            text="Customize your meal, add items to your cart, and securely place your order within seconds."
          />
        </div>

        <div className="">
          <img src={assets.menu_image} alt="" />
        </div>

        <div className="">
          {/* Step three */}
          <MobileAppOrderStep
            number={3}
            title="Track Your Delivery"
            text="Follow your order in real time as it is prepared and delivered straight to your location."
          />

          {/* Step four */}
          <MobileAppOrderStep
            number={4}
            title="Enjoy Your Meal"
            text="Receive your food fresh and hot, ready to enjoy wherever you are."
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppOrderGuide;
