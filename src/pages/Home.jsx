import React from "react";
import RandomApi from "../components/RandomApi";
import Count from "../components/Count"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <RandomApi />
      <Count />
    </div>
  );
};

export default Home;
