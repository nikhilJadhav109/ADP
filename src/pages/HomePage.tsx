import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import { HomePageHelmet } from "../helper/seoProvider";

const HomePage: React.FC = () => {
  return (
    <>
      <HomePageHelmet />
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage;
