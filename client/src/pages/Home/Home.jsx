import { useState } from "react";
import ExploreMenu from "./ExploreMenu";
import Hero from "./Hero";
import FoodDisplay from "./FoodDisplay";
import AppDownload from "./AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
