import { useState } from "react";
import ExploreMenu from "./ExploreMenu";
import Hero from "./Hero";
import FoodDisplay from "./FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
