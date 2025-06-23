import React from "react";
import { Home, Building, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description:
        "Transform your home into a luxurious sanctuary with our bespoke residential interior design services.",
      features: [
        "Custom Furniture Design",
        "Space Planning",
        "Lighting Design",
        "Color Consultation",
        "Material Selection",
        "Project Management",
      ],
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      icon: Building,
      title: "Commercial Spaces",
      description:
        "Create inspiring work environments that boost productivity and reflect your brand identity.",
      features: [
        "Office Design",
        "Retail Spaces",
        "Hospitality Design",
        "Brand Integration",
        "Ergonomic Solutions",
        "Sustainable Design",
      ],
      image:
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      icon: Wrench,
      title: "Turnkey Solutions",
      description:
        "Complete project management from design conception to final installation.",
      features: [
        "Project Management",
        "Quality Control",
        "Timeline Coordination",
        "Final Installation",
        "Post-Installation Support",
        "Warranty Services",
      ],
      image:
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We begin with an in-depth consultation to understand your vision, requirements, and budget.",
    },
    {
      step: "02",
      title: "Design Development",
      description:
        "Our team creates detailed design concepts, 3D visualizations, and material selections.",
    },
    {
      step: "03",
      title: "Project Planning",
      description:
        "We develop comprehensive project timelines, coordinate with contractors, and manage logistics.",
    },
    {
      step: "04",
      title: "Implementation",
      description:
        "Our skilled craftspeople execute the design with precision and attention to detail.",
    },
    {
      step: "05",
      title: "Final Reveal",
      description:
        "We complete the installation and reveal your transformed space, ready for you to enjoy.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive interior design solutions tailored to create spaces
            that inspire, function beautifully, and reflect your unique style.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Design{" "}
              <span className="text-teal-600 dark:text-teal-400">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From initial consultation to final reveal, we follow a proven
              process that ensures exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss your project and bring your vision to life with our
            expert design services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <a
              href="tel:+91-9876543210"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
