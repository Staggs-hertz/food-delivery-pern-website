import { menu_list } from "../../assets/assets";
import HLine from "../../components/HLine";
import ExploreMenuItem from "./ExploreMenuItem";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold text-gray-800 text-2xl">Explore our menu</h1>
      <p className="max-w-3/5 text-gray-500">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* Below are the various images of the food categories */}
      <div className="flex justify-between items-center gap-7.5 text-center my-5 mx-0 overflow-x-scroll no-scrollbar">
        {menu_list.map((item, index) => (
          <ExploreMenuItem
            src={item.menu_image}
            key={index}
            name={item.menu_name}
            category={category}
            setCategory={setCategory}
          />
        ))}
      </div>

      <HLine />
    </div>
  );
};

export default ExploreMenu;
