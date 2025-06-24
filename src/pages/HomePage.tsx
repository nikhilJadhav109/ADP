import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';
import Contact from '../components/Contact';
import Intro from '../components/Intro';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Intro/>
      <Services />
      <Portfolio />
      {/* <About />
      <Testimonials />
      <Brands /> */}
      <Contact />
    </>
  );
};

export default HomePage;