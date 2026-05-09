import { assets } from "../../assets/assets";

const MobileAppHeroContent = () => {
  return (
    <div className="w-full pt-5 max-h-dvh">
      <h1 className="font-semibold text-[max(4.3vw,20px)]">
        Download App, Order food, Enjoy every bite!
      </h1>
      <p className="text-gray-500">
        From local street food to premium restaurant dishes, enjoy access to a
        diverse menu right at your fingertips. Easily browse, customize your
        order, and track it every step of the way while we ensure your meal
        arrives quickly, safely, and ready to enjoy.
      </p>
      <div className="flex justify-start max-md:justify-center gap-[max(2vw,10px)] mt-10 *:w-[(30vw,120px)] *:max-w-45 *:cursor-pointer *:duration-500 *:hover:scale-105">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default MobileAppHeroContent;
