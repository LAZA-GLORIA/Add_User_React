import React, { useState } from "react";
import RandomApi from "../components/RandomApi";
import Count from "../components/Count"
import Mycars from "../components/Mycars"

const Home = () => {
  state = {
    titre: "Mon catalogue voiture"
  }
  return (
    <div>
      <h1>Home</h1>
      <RandomApi />
      <Count />
      <Mycars title={this.state.titre}/>
    </div>
  );
};

export default Home;
