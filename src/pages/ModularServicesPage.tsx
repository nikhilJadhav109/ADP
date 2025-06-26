import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "../constants/seoConfig"; // Assuming you have COMPANY_NAME in seo.ts
import { JSX } from "react/jsx-runtime";

// --- SVG Icons for Modular Services ---
// You can use existing ones or find new ones from Lucide React or similar icon libraries
// For example, using a customizable icon for modular items/units.
const CubeIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m-4-2h8m-4-4v-4m0 8h.01M12 21.01V12"></path>
  </svg>
);

const KitchenIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 3h4M2 13l2 4 2-4m-2 4h4m6-10v4m-2-4h4m-2 4l2 4 2-4m-2 4h4m6-10v4m-2-4h4m-2 4l2 4 2-4m-2 4h4M9 13l2 4 2-4m-2 4h4m6-10v4m-2-4h4m-2 4l2 4 2-4m-2 4h4"></path>
  </svg>
);

const WardrobeIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a2 2 0 00-2-2H8a2 2 0 00-2 2v4"></path>
  </svg>
);

const OfficeDeskIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m-4-2h8m-4-4v-4m0 8h.01M12 21.01V12"></path>
  </svg>
);

const CheckCircleIcon = () => ( // Re-using CheckCircleIcon from InteriorServicesPage
  <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);


const ModularServicesPage: React.FC = () => {
  const modularServices = [
    {
      icon: KitchenIcon,
      title: "Modular Kitchens",
      description:
        "Design and install highly functional and aesthetically pleasing modular kitchens tailored to your cooking style and space.",
      features: [
        "Custom Layouts (L-shape, U-shape, Parallel, Island)",
        "Premium Finishes (Acrylic, Laminate, Membrane, Veneer)",
        "Smart Storage Solutions",
        "Durable Hardware & Accessories",
        "Expert Installation",
        "Branded Plywood Base",
      ],
      image: "/portfolioImages/modular-kitchen1.jpeg", // Placeholder: Add your image paths
    },
    {
      icon: WardrobeIcon,
      title: "Modular Wardrobes",
      description:
        "Optimize your storage with custom modular wardrobes, designed for maximum utility and seamless integration into your bedroom aesthetics.",
      features: [
        "Sliding & Hinged Wardrobes",
        "Integrated Lighting",
        "Custom Compartments & Organizers",
        "Variety of Finishes & Materials",
        "Space Optimization",
        "Long-lasting Quality",
      ],
      image: "/portfolioImages/modular-wardrobe1.jpeg", // Placeholder: Add your image paths
    },
    {
      icon: OfficeDeskIcon, // Using a generic icon for now, adjust as needed
      title: "Modular Office Furniture",
      description:
        "Create efficient and comfortable office environments with our versatile modular furniture solutions, perfect for homes and commercial spaces.",
      features: [
        "Ergonomic Workstations",
        "Conference Tables & Cabinets",
        "Custom Storage Units",
        "Robust & Professional Finishes",
        "Scalable Designs",
        "Quick Assembly & Reconfiguration",
      ],
      image: "/portfolioImages/modular-office1.jpeg", // Placeholder: Add your image paths
    },
    {
      icon: CubeIcon, // Using CubeIcon for TV Units
      title: "Modular TV Units & Entertainment",
      description:
        "Enhance your living room with stylish and functional modular TV units, offering integrated storage and display solutions.",
      features: [
        "Custom Dimensions & Designs",
        "Cable Management Solutions",
        "Open Shelving & Closed Cabinets",
        "Variety of Materials & Textures",
        "Seamless Wall Integration",
        "Modern & Contemporary Styles",
      ],
      image: "/portfolioImages/modular-tvunit1.jpeg", // Placeholder: Add your image paths
    },
  ];

  const process = [
    {
      step: "01",
      title: "Concept & Planning",
      description: "Discuss your needs, measure space, and plan initial layouts.",
    },
    {
      step: "02",
      title: "Design & Material Selection",
      description: "Create detailed 3D designs, select finishes, and confirm hardware.",
    },
    {
      step: "03",
      title: "Manufacturing Precision",
      description: "Modules are crafted in our state-of-the-art facility using quality raw materials.",
    },
    {
      step: "04",
      title: "Delivery & Installation",
      description: "Careful transport and efficient, clean on-site assembly.",
    },
    {
      step: "05",
      title: "Quality Check & Handover",
      description: "Final inspection to ensure perfection and client satisfaction.",
    },
  ];

  const pageTitle = `${COMPANY_NAME} - Modular Furniture Services in Pune`;
  const pageDescription = "Discover custom modular kitchens, wardrobes, TV units, and office furniture solutions in Pune. High-quality designs, factory precision, and reliable installation.";
  const pageKeywords = "modular furniture Pune, modular kitchen Pune, modular wardrobe Pune, modular TV unit Pune, modular office furniture Pune, custom furniture Pune, factory made furniture Pune, modern furniture Pune";
  const pageUrl = "https://www.yourwebsite.com/services/modular"; // Replace with your actual URL
  const ogImage = "https://www.yourwebsite.com/path-to-modular-og-image.jpg"; // Replace with a relevant image

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
        <meta property="og:image:alt" content="Modular Furniture Services by Agrawal Ply Decor" />
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
              Innovative <span className="text-teal-400">Modular Furniture</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the blend of design flexibility, factory precision, and exceptional quality with our modular furniture services.
            </p>
          </div>
        </section>

        {/* Modular Services Detail */}
        <section className="py-2 px-4 md:py-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
            <div className="space-y-16 md:space-y-20">
              {modularServices.map((service, index) => (
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
                Our <span className="text-teal-600 dark:text-teal-400">Modular Process</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From concept to installation, our streamlined process ensures a flawless modular furniture experience.
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

export default ModularServicesPage;