import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "../constants/seoConfig"; // Assuming you have COMPANY_NAME in seo.ts
import { JSX } from "react/jsx-runtime";
import { modularProductOfferings } from "../constants/process";
import { motion } from "framer-motion";
// --- SVG Icons (keeping only CheckCircleIcon as it's still useful) ---
const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


const ModularFurnitureOverviewPage: React.FC = () => {
  const whatIsModularFurniture = {
    title: "What is Modular Furniture?",
    description: "Modular furniture refers to pre-manufactured, standardized units or sections that can be combined and rearranged in various configurations to create customized furniture pieces or complete interior setups. Unlike traditional, fixed furniture, modular units offer unparalleled flexibility, allowing for easy assembly, disassembly, and reconfiguration to adapt to changing needs and spaces.",
    points: [
      "Composed of individual, interconnected units.",
      "Offers high flexibility and customization.",
      "Easy to assemble, disassemble, and transport.",
      "Optimizes space utilization efficiently.",
      "Manufactured with precision in a factory setting.",
    ],
    image: "/services/modulerFurniture.png", // Placeholder: Add a general image representing modularity
  };

  const advantagesOfModularFurniture = {
    title: "Advantages of Choosing Modular Furniture",
    description: "Opting for modular furniture brings a multitude of benefits, from superior design flexibility to long-term cost-effectiveness and environmental considerations.",
    advantages: [
      {
        heading: "Unmatched Flexibility & Customization",
        text: "Modular units can be tailored to fit any space and aesthetic, offering endless design possibilities and easy reconfigurations as your needs evolve.",
      },
      {
        heading: "Space Optimization",
        text: "Designed to maximize utility even in compact areas, modular furniture helps declutter and organize your living or working environment efficiently.",
      },
      {
        heading: "Durability & Quality",
        text: "Manufactured in controlled factory environments using high-grade materials and precision machinery, ensuring consistent quality and longevity.",
      },
      {
        heading: "Cost-Effectiveness",
        text: "Reduced on-site labor, efficient material usage, and long-lasting designs contribute to significant cost savings over the lifespan of the furniture.",
      },
      {
        heading: "Quick Installation",
        text: "Pre-fabricated units mean faster assembly and minimal disruption during installation, getting your space ready sooner.",
      },
      {
        heading: "Sustainability",
        text: "Often involves less material waste during production and offers the ability to reuse or reconfigure units, promoting a more sustainable approach to interiors.",
      },
    ],
    image: "/images/advantages-modular-furniture.jpg", // Placeholder: Add a relevant image
  };

  const ourManufacturingProcess = {
    title: "Our Professional Manufacturing Process",
    description: "At Agrawal Ply Decor, we leverage state-of-the-art machinery and skilled craftsmanship to ensure every piece of modular furniture we produce meets the highest standards of quality and precision. Our factory-made approach guarantees consistency, durability, and a flawless finish.",
    machines: [
      {
        name: "Cold Press",
        description: "Utilized for laminating and veneering, the cold press applies uniform pressure to bond materials securely, resulting in smooth, strong, and long-lasting surfaces.",
        path: "/services/cold press machine.webp", // Using a generic 'path' property
        type: "image", // Explicitly state type
      },
       {
        name: "Panel Saw Cutter",
        description: "Provides highly accurate and clean cuts on large panels of wood, ensuring precise dimensions for all modular components, minimizing waste and errors.",
        path: "/services/panel-saw-machine.jpg", // Using a generic 'path' property
        type: "image", // Explicitly state type
      },
      {
        name: "Edge Bending Machine",
        description: "Ensures seamless and durable edges, protecting against moisture and enhancing aesthetics. This precision machine applies strong adhesive and trims edges for a perfect finish.",
        path: "/services/ed.jpg", // Using a generic 'path' property
        type: "image", // Explicitly state type
      },
      {
        name: "Multi Boring Machine",
        description: "Used for precise and accurate drilling of multiple holes simultaneously, crucial for perfect alignment and easy assembly of modular units.",
        path: "/services/multiborings.jpg", // Using a generic 'path' property
        type: "image", // Explicitly state type
      },
    ],
  };

  const pageTitle = `${COMPANY_NAME} - Understanding Modular Furniture & Our Process in Pune`;
  const pageDescription = "Explore what modular furniture is, its advantages, and how Agrawal Ply Decor's state-of-the-art manufacturing process, including Edge Bending, Multi Boring, and Panel Saw machines, ensures high-quality modular solutions in Pune.";
  const pageKeywords = "what is modular furniture, advantages of modular furniture, modular furniture manufacturing process, modular furniture Pune, edge bending machine, multi boring machine, panel saw cutter, cold press, factory made furniture Pune, Agrawal Ply Decor";
  const pageUrl = "https://www.yourwebsite.com/services/modular-furniture-overview"; // Updated URL
  const ogImage = "https://www.yourwebsite.com/path-to-modular-overview-og-image.jpg"; // Replace with a relevant image

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
        <meta property="og:image:alt" content="Modular Furniture Overview by Agrawal Ply Decor" />
        <meta property="og:site_name" content={COMPANY_NAME} />

        {/* Local SEO specifics (adjust if necessary) */}
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
              Unlock the Potential of <span className="text-teal-400">Modular Furniture</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the flexibility, quality, and precision behind our expertly crafted modular solutions.
            </p>
          </div>
        </section>



        {/* What is Modular Furniture Section */}
        <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {whatIsModularFurniture.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {whatIsModularFurniture.description}
                </p>
                <ul className="space-y-2">
                  {whatIsModularFurniture.points.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300 text-sm md:text-base">
                      <CheckCircleIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src={whatIsModularFurniture.image}
                  alt="What is Modular Furniture"
                  className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

<motion.section
  className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {modularProductOfferings.title}
      </h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {modularProductOfferings.description}
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {modularProductOfferings.products.map((product, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          custom={index}
          variants={cardVariants}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {product.name}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>



        {/* Advantages of Modular Furniture Section */}
        <section className="py-16 md:py-20 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {advantagesOfModularFurniture.title}
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10">
              {advantagesOfModularFurniture.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantagesOfModularFurniture.advantages.map((advantage, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-3">
                    {advantage.heading}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{advantage.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Professional Manufacturing Process Section */}
        <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {ourManufacturingProcess.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {ourManufacturingProcess.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ourManufacturingProcess.machines.map((machine, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  {/* Conditional rendering for video or image based on 'type' property */}
                  {machine.type === "video" ? (
                    <video
                      src={machine.path} // Use 'path' for video source
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-48 object-cover object-center"
                      aria-label={`Video of ${machine.name}`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={machine.path} // Use 'path' for image source
                      alt={machine.name}
                      className="w-full h-48 object-cover object-center"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{machine.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{machine.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (retained) */}
        <section className="py-16 md:py-20 bg-teal-600 dark:bg-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ready for Your Perfect Modular Space?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Contact us today for a free consultation and let's bring your modular furniture vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-200 flex items-center justify-center"
              >
                Get a Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg>
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

export default ModularFurnitureOverviewPage;