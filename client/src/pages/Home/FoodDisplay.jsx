import { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import FoodDispayItem from "./FoodDispayItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-7.5">
      <h2 className="text-[max(2vw,24px)] font-semibold">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-7.5 gap-7.5 gap-y-12">
        {food_list
          // the filter function here filters the food_list array based on the value of category into a new array
          .filter((item) => category === "All" || category === item.category)
          //the map function maps through the array that is created by the filter function
          .map((item, index) => (
            <FoodDispayItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
