import Button from "../../components/Button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="h-[34vw] mx-auto my-7.5 bg-[url(../../../header_img.png)] bg-contain bg-no-repeat relative">
      {/* The div element below creates the darkening effect on the hero image making text clearer */}
      <div className="absolute top-0 inset-0 bg-black opacity-18 h-full rounded-xl" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] sm:max-w-[65%] bottom-[10%] left-[6vw]"
      >
        <h2 className="font-semibold text-white text-[max(4.5vw,20px)]">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw] max-sm:hidden">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <Button content="View Menu" />
      </motion.div>
    </div>
  );
};

export default Hero;
