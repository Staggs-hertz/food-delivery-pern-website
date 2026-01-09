import { useState } from "react";
import ExploreMenu from "./ExploreMenu";
import Hero from "./Hero";
import FoodDisplay from "./FoodDisplay";
import AppDownload from "./AppDownload";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Food Delivery - Home");

  const [category, setCategory] = useState("All");

  return (
    <div className="w-4/5 mx-auto">
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
