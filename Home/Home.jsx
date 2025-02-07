import React from "react";
import Banner from "../src/Componet/Banner/Banner";
import MemberShip from "./MemberShip";
import ZeroToMastery from "./ZeroToMastery";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <ZeroToMastery />
      <MemberShip />
    </div>
  );
};

export default Home;
