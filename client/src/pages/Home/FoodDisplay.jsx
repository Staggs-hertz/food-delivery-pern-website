import { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import FoodDispayItem from "./FoodDispayItem";
import ProductContext from "../../context/ProductContext";

const FoodDisplay = ({ category }) => {
  const { foodItems } = useContext(ProductContext);
  return (
    <div className="mt-7.5">
      <h2 className="text-[max(2vw,24px)] font-semibold">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-7.5 gap-7.5 gap-y-12">
        {foodItems
          // the filter function here filters the food_list array based on the value of category into a new array
          .filter((item) => category === "All" || category === item.category)
          //the map function maps through the array that is created by the filter function
          .map((item, index) => (
            <FoodDispayItem
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image_url}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
