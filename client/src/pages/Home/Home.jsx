import { useState } from "react";
import ExploreMenu from "./ExploreMenu";
import Hero from "./Hero";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
