import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import { Helmet } from "react-helmet-async";
import {
  COMPANY_NAME,
  COMPANY_URL,
  DESCRIPTION,
  LOGO_FULL_URL,
  SEO_KEYWORDS_STRING,
} from "../seo";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{COMPANY_NAME} - Home</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={SEO_KEYWORDS_STRING} />
        <link rel="canonical" href={COMPANY_URL} />
        <meta property="og:title" content={`${COMPANY_NAME} - Home`} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={COMPANY_URL} />
        <meta property="og:image" content={LOGO_FULL_URL} />{" "}
        <meta
          property="og:image:alt"
          content="Description of your image for social media"
        />
      </Helmet>
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage;
