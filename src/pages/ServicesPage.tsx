import { useState } from "react";
import { Link } from "react-router-dom";
import { ServicesPageHelmet } from "../helper/seoProvider";
import { INTERIOR_DESIGN_SERVICES, PLYWOOD_SERVICES } from "../constants/services";
import { PROCESS } from "../constants/process";
import { CheckCircleIcon } from "lucide-react";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("interiorDesign");

  return (
    <>
      <ServicesPageHelmet />
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

        {/* Tab Navigation */}
        <section className="bg-white dark:bg-gray-900 py-2">
          <div className="max-w-3xl mx-auto px-4 sm:px-4 lg:px-8">
            <div className="flex justify-center border-b border-gray-200 dark:border-gray-700">
              <button
                className={`py-3 px-6 text-lg font-medium transition-colors duration-200${
                  activeTab === "interiorDesign"
                    ? "text-teal-600 border-b-2 border-teal-600 dark:text-teal-400 dark:border-teal-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("interiorDesign")}
              >
                Interior Design
              </button>
              <button
                className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                  activeTab === "plywood"
                    ? "text-teal-600 border-b-2 border-teal-600 dark:text-teal-400 dark:border-teal-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("plywood")}
              >
                Plywood & Supply
              </button>
            </div>
          </div>
        </section>

        {/* Services Detail - Tab Content */}
        <section className="py-2 px-4 md:py-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
            {activeTab === "interiorDesign" && (
              <div className="space-y-16 md:space-y-20">
                {INTERIOR_DESIGN_SERVICES.map((service, index) => (
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
            )}

            {activeTab === "plywood" && (
              <div className="space-y-16 md:space-y-20">
                {PLYWOOD_SERVICES.map((service, index) => (
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
            )}
          </div>
        </section>

        {/* Process Section (remains the same) */}
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
              {PROCESS.map((step, index) => (
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

        {/* CTA Section (remains the same) */}
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

export default ServicesPage;