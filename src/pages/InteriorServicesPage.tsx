import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { COMPANY_NAME } from "../constants/seoConfig"; // Assuming you have COMPANY_NAME in seo.ts
import { JSX } from "react/jsx-runtime";
import BrandsCarousel from "../components/BrandsCarousel";
import { BRANDS } from "../constants/brands";
import { DESIGN_SERVICES } from "../constants/services";

// Inline SVG for CheckCircle
const CheckCircleIcon = () => (
  <svg
    className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0 mt-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// Inline SVG for Home
const HomeIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    ></path>
  </svg>
);

// Inline SVG for Building - CORRECTED LINE HERE
const BuildingIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-4-4h1m-1 4h1"
    ></path>
  </svg>
);

// Inline SVG for Wrench
const WrenchIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
);

const InteriorServicesPage: React.FC = () => {

  const process = [
    {
      step: "01",
      title: "Consultation & Vision",
      description: "Understand your project vision, needs, and budget.",
    },
    {
      step: "02",
      title: "Design Development",
      description:
        "Create detailed design concepts with 2D layouts and 3D visuals.",
    },
    {
      step: "03",
      title: "Detailed Planning",
      description:
        "Finalize timelines, material specs, and logistics with contractors.",
    },
    {
      step: "04",
      title: "Execution & Build",
      description:
        "Precision execution using skilled craftspeople and branded, high-quality materials.",
    },
    {
      step: "05",
      title: "Final Reveal & Handover",
      description:
        "Complete installation, final checks, and unveil your transformed space.",
    },
  ];

  const pageTitle = `${COMPANY_NAME} - Interior Design Services in Pune`;
  const pageDescription =
    "Explore our comprehensive residential, commercial, and turnkey interior design solutions in Pune. We create inspiring spaces with premium, branded materials.";
  const pageKeywords =
    "interior design Pune, residential interior design Pune, commercial interior design Pune, turnkey interior solutions Pune, luxury interior design Pune, home interiors Pune, office interiors Pune, interior decorator Pune, best interior designer Pune";
  const pageUrl = "https://www.yourwebsite.com/services/interior"; // Replace with your actual URL
  const ogImage = "https://www.yourwebsite.com/path-to-interior-og-image.jpg"; // Replace with a relevant image

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content="Interior Design Services by Agrawal Ply Decor"
        />
        <meta property="og:site_name" content={COMPANY_NAME} />

        {/* Local SEO specifics */}
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="text-teal-400">Interior Design</span>{" "}
              Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your spaces into breathtaking realities with our expert
              residential, commercial, and turnkey interior design services.
            </p>
          </div>
        </section>

        {/* Interior Services Detail */}

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-16">
              {DESIGN_SERVICES.map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Section */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center shadow-lg">
                        <service.icon className="w-8 h-8 text-teal-600 dark:text-teal-300" />
                      </div>
                      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-gray-700 dark:text-gray-300 text-base"
                        >
                          <CheckCircleIcon className="w-5 h-5 mr-3 text-teal-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Section */}
                  <div className="flex-1">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Trusted <span className="text-teal-600">Brands We Work With</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
              Our interiors are built with the finest materials from top-tier
              brands ensuring durability, elegance, and quality.
            </p>
            <BrandsCarousel brands={BRANDS} />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our{" "}
                <span className="text-teal-600 dark:text-teal-400">
                  Seamless Interior Process
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our proven, step-by-step approach guarantees exceptional
                results, integrating quality and branded materials from start to
                finish.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-teal-600 dark:bg-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ready to Design Your Dream Space?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Connect with us for a personalized interior design consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-200 flex items-center justify-center"
              >
                Get a Design Consultation
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </Link>
              <a
                href="tel:+91-9823069099"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-200"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InteriorServicesPage;
