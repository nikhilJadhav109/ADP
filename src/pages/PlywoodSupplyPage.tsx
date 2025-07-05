import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "../constants/seoConfig";
import { PLYWOOD_SERVICES } from "../constants/plywood";
import YetiplyIntro from "../components/YetiplyIntro";
import { CONTACT_INFO } from "../constants/contact";

const PlywoodSupplyPage: React.FC = () => {
  const process = [
    {
      step: "01",
      title: "Inquiry & Consultation",
      description:
        "Discuss your Yeti Ply requirements and project needs with our experts.",
    },
    {
      step: "02",
      title: "Product Selection & Quote",
      description:
        "Choose from our extensive Yeti Ply range and get competitive pricing.",
    },
    {
      step: "03",
      title: "Order Placement",
      description: "Confirm your Yeti Ply order with flexible payment options.",
    },
    {
      step: "04",
      title: "Quality Check & Dispatch",
      description:
        "Every Yeti Ply sheet meets our high standards before delivery.",
    },
    {
      step: "05",
      title: "Prompt Delivery",
      description:
        "Receive your Yeti Ply efficiently at your project site in Pune.",
    },
  ];

  const pageTitle = `${COMPANY_NAME} - Yeti Ply Wholesale & Supply in Pune | Premium Plywood`;
  const pageDescription =
    "Your trusted source for high-quality, ISI-certified plywood, delivered directly to your project site in Pune. Experience superior strength, durability, and reliability with every sheet, ensuring your construction and furniture projects stand the test of time.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Premium Ply Supply
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your trusted source for high-quality, ISI-certified plywood, delivered directly to your project in Pune. Experience superior strength, durability, and reliability with every sheet, ensuring your construction and furniture projects stand the test of time.
            </p>
          </div>
        </section>

        <section>
          <YetiplyIntro />
        </section>
        {/* <section className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-16 lg:px-18">
        <div className="max-w-7xl mx-auto space-y-20">
          {PLYWOOD_SERVICES.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex text-gray-700 dark:text-gray-300">
                      <feature.icon className="w-6 h-6 text-teal-600 dark:text-teal-400 mr-3" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-50 h-64 md:h-80 lg:h-96 object-contain bg-slate-100"
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}

        <section className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-16 lg:px-18">
          <div className="max-w-7xl mx-auto space-y-12">
            {PLYWOOD_SERVICES.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section - Takes up 2 columns */}
                  <div className="lg:col-span-2">
                    <div className="h-full min-h-[300px] lg:min-h-[500px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section - Takes up 3 columns */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    {/* Title */}
                    <div className="mb-1">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        {service.title}
                      </h2>
                    </div>

                    <div className="mb-3">
                      <p className="text-xl text-teal-600 dark:text-teal-400 font-semibold">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-200 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start py-2">
                          <feature.icon className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Yeti Ply Supply Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              From consultation to delivery, we ensure a seamless experience for
              all your Yeti Ply needs.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-600 dark:bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-teal-600 dark:bg-teal-700 text-white text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Premium Yeti Ply?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Get competitive prices and reliable delivery for all your Yeti Ply
            requirements. Experience the difference of premium quality plywood.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Yeti Ply Quote
            </Link>
            <a
              // href="tel:+91-9823069099"
              href={`tel:${CONTACT_INFO.PHONE_NUMBER_1}`}
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlywoodSupplyPage;
