import React from "react";
import RandomApi from "../components/RandomApi";
import Count from "../components/Count"
import Mycars from "../components/Mycars"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <RandomApi />
      <Count />
      <Mycars />
    </div>
  );
};

export default Home;
