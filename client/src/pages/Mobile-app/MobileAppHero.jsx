import { assets } from "../../assets/assets";
import MobileAppHeroContent from "./MobileAppHeroContent";

const MobileAppHero = () => {
  return (
    <div className="my-4 flex justify-between max-md:flex-col max-md:justify-center max-md:space-y-8">
      <MobileAppHeroContent />

      <div className="max-h-vh w-full flex justify-center">
        <img
          src={assets.menu_image_sticker}
          alt="mobile phone image"
          className="transform hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  );
};

export default MobileAppHero;
