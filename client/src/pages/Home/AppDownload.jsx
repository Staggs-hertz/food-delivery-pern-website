import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="mx-auto mt-25 text-[max(3vw,20px)] text-center font-medium">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10 *:w-[(30vw,120px)] *:max-w-45 *:cursor-pointer *:duration-500 *:hover:scale-105">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
