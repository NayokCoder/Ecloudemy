import React from "react";
import Banner from "../src/Componet/Banner/Banner";
import MemberShip from "./MemberShip";
import ZeroToMastery from "./ZeroToMastery";
import Testimonials from "./Testimonials/Testimonials";
import ImgHero from "./ImageHero/ImgHero";

const Home = () => {
  return (
    <div>
      <Banner />
      <ImgHero />
      <Testimonials />
      <ZeroToMastery />
      <MemberShip />
    </div>
  );
};

export default Home;
