import React from "react";
// Removed lucide-react imports for icons as they are now inline SVGs
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME, SERVICES_OG_IMAGE, SERVICES_PAGE_DESCRIPTION, SERVICES_PAGE_URL, SERVICES_SEO_KEYWORDS } from "../seo";

// Inline SVG for CheckCircle
const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

// Inline SVG for Home
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);

// Inline SVG for Building
const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-4-4h1m-1 4h1m-4-4h1m-1 4h1"></path></svg>
);

// Inline SVG for Wrench
const WrenchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

// Inline SVG for Box
const BoxIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Interior Design",
      description:
        "Transform your home into a luxurious sanctuary. Our bespoke designs feature premium, branded materials and exquisite craftsmanship for unparalleled living.",
      features: [
        "Personalized Space Planning",
        "Custom Furniture & Finishes",
        "Smart Lighting Integration",
        "Premium & Branded Materials",
        "Expert Plywood Use",
        "Full Project Management",
      ],
      image:
        "/portfolioImages/residential2.jpeg",
    },
    {
      icon: BuildingIcon,
      title: "Commercial Interior Design",
      description:
        "Design inspiring, high-performance commercial spaces that amplify your brand. We focus on durability, functionality, and aesthetic excellence with premium, branded materials.",
      features: [
        "Strategic Workspace Design",
        "Retail & Hospitality Expertise",
        "Seamless Brand Integration",
        "Ergonomic Solutions",
        "Durable Premium Materials",
        "Branded Fixtures",
      ],
      image:
        "/portfolioImages/commercial2.jpeg",
    },
    {
      icon: WrenchIcon,
      title: "Full Turnkey Interior Solutions",
      description:
        "Experience effortless project completion with our comprehensive turnkey solutions. We manage every detail from concept to handover, ensuring superior quality and timely delivery with branded raw materials.",
      features: [
        "End-to-End Project Management",
        "Rigorous Quality Control",
        "Efficient Timeline & Budgeting",
        "Premium Material Procurement",
        "Skilled Craftsmanship",
        "Post-Installation Support",
      ],
      image:
        "/portfolioImages/residential5.jpeg",
    },
    {
      icon: BoxIcon,
      title: "Plywood Wholesale & Supply (Pune)",
      description:
        "As Pune's trusted wholesaler, we offer a comprehensive range of premium, branded, and certified plywood, including our own 'Yeti Ply'. Get competitive prices and reliable delivery directly from the source.",
      features: [
        "Own Brand: Yeti Ply",
        "Direct from Manufacturer: Quality Assured & Competitive Prices",
        "Extensive Branded Plywoods",
        "All Grades Available (BWP, MR, Fire-Retardant)",
        "Custom Sizes & Bulk Orders",
        "Quality Certified & ISI Marked",
        "Prompt Pune Delivery",
      ],
      image:
        "/portfolioImages/luxuryhome1.jpeg",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Vision",
      description: "Understand your project vision, needs, and budget.",
    },
    {
      step: "02",
      title: "Design Development",
      description: "Create detailed design concepts with 2D layouts and 3D visuals.",
    },
    {
      step: "03",
      title: "Detailed Planning",
      description: "Finalize timelines, material specs, and logistics with contractors.",
    },
    {
      step: "04",
      title: "Execution & Build",
      description: "Precision execution using skilled craftspeople and branded, high-quality materials.",
    },
    {
      step: "05",
      title: "Final Reveal & Handover",
      description: "Complete installation, final checks, and unveil your transformed space.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{COMPANY_NAME} - Our Services in Pune | Interior Design & Plywood Wholesale</title>
        <meta name="description" content={SERVICES_PAGE_DESCRIPTION} />
        <meta name="keywords" content={`${SERVICES_SEO_KEYWORDS}, plywood wholesale Pune, interior design Pune, residential interior Pune, commercial interior Pune, turnkey solutions Pune, premium interior design Pune, luxury home interiors Pune, branded plywood suppliers Pune, quality raw materials Pune, Yeti Ply Pune, Yeti Plywood`} />
        <link rel="canonical" href={SERVICES_PAGE_URL} />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content={`${COMPANY_NAME} - Our Services in Pune | Interior Design & Plywood Wholesale`} />
        <meta property="og:description" content={SERVICES_PAGE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SERVICES_PAGE_URL} />
        <meta property="og:image" content={SERVICES_OG_IMAGE} />
        <meta
          property="og:image:alt"
          content={`${COMPANY_NAME} Interior Design and Plywood Wholesale Services`}
        />
        <meta property="og:site_name" content={COMPANY_NAME} />

        {/* Local SEO specifics for services (reiterating location and services) */}
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
              Our <span className="text-teal-400">Comprehensive Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Expert interior design and direct-from-manufacturer plywood supply. We craft inspiring spaces and provide superior materials.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 md:space-y-20">
              {services.map((service, index) => (
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
                Our <span className="text-teal-600 dark:text-teal-400">Seamless Process</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our proven, step-by-step approach guarantees exceptional results, integrating quality and branded materials from start to finish.
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
              Ready for Your Next Project?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Connect with us for expert design consultations or competitive quotes on premium plywood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-200 flex items-center justify-center"
              >
                Start Your Project / Get Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg>
              </Link>

              <a
                href="tel:+91-9876543210" // Replace with your actual phone number
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

export default ServicesPage;