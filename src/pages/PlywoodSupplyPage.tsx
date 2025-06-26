import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "../constants/seoConfig"; // Assuming you have COMPANY_NAME in seo.ts
import { JSX } from "react/jsx-runtime";

// Inline SVG for CheckCircle
const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

// Inline SVG for Box
const BoxIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
);

const PlywoodSupplyPage: React.FC = () => {
  const plywoodServices = [
    {
      icon: BoxIcon,
      title: "Yeti Ply: Quality and Durability Redefined",
      description:
        "Yeti Ply offers a comprehensive range of plywood products, including calibrated, film-faced shuttering plywood, and block boards. We focus on exceptional quality and lasting durability, utilizing high-grade raw materials and stringent checks. Yeti Ply caters to diverse needs, from furniture making to demanding construction projects, ensuring precision and reliability.",
      features: [
        "Calibrated Plywood: Precision thickness for accurate measurements.",
        "Film-Faced Shuttering Plywood: Strong and durable for construction.",
        "Yeti Arniko Ply: Waterproof options for various furniture applications.",
        "Yeti Champ Ply: Ideal for furniture, made from hardwood and Indian timber.",
        "Block Boards & Flush Doors: Available in various grades, customizable.",
        "Quality Focused: Rigorous testing and high-grade raw materials.",
        "ISI Marked: Adherence to industry quality standards.",
      ],
      image: "/services/yetiply.webp",
    },
    // Add more plywood-specific services if needed
    {
      icon: BoxIcon, // You might want a different icon for a distinct service
      title: "Custom Plywood Solutions",
      description:
        "Need specific dimensions or types of plywood? We offer custom cutting and sourcing to meet unique project requirements, ensuring you get exactly what you need.",
      features: [
        "Tailored Dimensions & Thicknesses",
        "Specialized Ply Types (Marine, Flexible)",
        "Precision Cutting Services",
        "Volume Discounts for Custom Orders",
        "Technical Consultation",
        "On-time Delivery for Project Schedules",
      ],
      image: "/services/ply.jpg", // Replace with a more specific plywood image
    },
  ];

  // Simplified process for plywood supply, if applicable
  const process = [
    {
      step: "01",
      title: "Inquiry & Consultation",
      description: "Discuss your plywood requirements and project needs.",
    },
    {
      step: "02",
      title: "Product Selection & Quote",
      description: "Choose from our extensive range, get competitive pricing.",
    },
    {
      step: "03",
      title: "Order Placement",
      description: "Confirm your order with flexible payment options.",
    },
    {
      step: "04",
      title: "Quality Check & Dispatch",
      description: "Ensuring every sheet meets our high standards before delivery.",
    },
    {
      step: "05",
      title: "Prompt Delivery",
      description: "Receive your plywood efficiently at your project site in Pune.",
    },
  ];


  const pageTitle = `${COMPANY_NAME} - Plywood Wholesale & Supply in Pune | Yeti Ply`;
  const pageDescription = "Get high-quality, branded plywood directly from the wholesaler in Pune. We supply residential and commercial projects with BWP, MR, and Yeti Ply at competitive prices.";
  const pageKeywords = "plywood wholesale Pune, plywood suppliers Pune, Yeti Ply Pune, BWP plywood Pune, MR plywood Pune, fire retardant plywood Pune, ISI plywood Pune, plywood dealers Pune, bulk plywood supply Pune, Greenply Pune, Century Ply Pune";
  const pageUrl = "https://www.yourwebsite.com/services/plywood-supply"; // Replace with your actual URL
  const ogImage = "https://www.yourwebsite.com/path-to-plywood-og-image.jpg"; // Replace with a relevant image

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
        <meta property="og:image:alt" content="Plywood Wholesale and Supply by Agrawal Ply Decor" />
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
              Premium <span className="text-teal-400">Plywood & Building Material</span> Supply
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Your reliable source for high-quality, ISI-marked, and branded plywood, including our own 'Yeti Ply', delivered directly to your project in Pune.
            </p>
          </div>
        </section>

        {/* Plywood Services Detail */}
        <section className="py-2 px-4 md:py-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
            <div className="space-y-16 md:space-y-20">
              {plywoodServices.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                      <service.icon className="w-7 h-7 md:w-8 md:h-8 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-5 md:mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-gray-700 dark:text-gray-300 text-sm md:text-base"
                        >
                          <CheckCircleIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-teal-600 dark:text-teal-400">Efficient Supply Process</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We ensure a smooth and reliable process for all your plywood and building material needs.
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
              Need High-Quality Plywood?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Get competitive prices and reliable delivery for all your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-200 flex items-center justify-center"
              >
                Get a Plywood Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg>
              </Link>
              <a
                href="tel:+91-9823069099"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlywoodSupplyPage;