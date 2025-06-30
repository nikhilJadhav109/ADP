import React from "react";
import { Home, Building, Wrench, ArrowRight, Star } from "lucide-react";
import { motion, easeOut } from "framer-motion";

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description:
        "Transform your home into a luxurious sanctuary with our bespoke residential interior design services. From concept to completion, we handle every detail.",
      features: [
        "Custom Furniture Design",
        "Personalized Space Planning",
        "Intelligent Lighting Solutions",
        "Expert Color Consultation",
      ],
      badge: "Popular Choice",
    },
    {
      icon: Building,
      title: "Commercial Spaces",
      description:
        "Create inspiring and productive work environments that reflect your brand identity with our expert commercial interior design.",
      features: [
        "Dynamic Office Design",
        "Engaging Retail Spaces",
        "Sophisticated Hospitality Design",
        "Seamless Brand Integration",
      ],
      badge: "Commercial Excellence", // Slightly more descriptive
    },
    {
      icon: Wrench,
      title: "Turnkey Solutions",
      description:
        "Experience complete peace of mind with our end-to-end project management, from initial design to final installation. We manage it all.",
      features: [
        "Comprehensive Project Management",
        "Rigorous Quality Control",
        "Precise Timeline Coordination",
        "Flawless Final Installation",
      ],
      badge: "Full Service", // Slightly more descriptive
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Increased stagger for a softer entrance
        delayChildren: 0.3, // Increased delay
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 }, // Added scale for a subtle pop-in
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut }, // Slightly longer duration
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -15 }, // Increased x for more noticeable slide
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4, // Slightly longer duration
      },
    }),
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-700 overflow-hidden" // Added overflow-hidden for safety
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }} // Increased initial y for a more pronounced slide up
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Added amount for better control
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <motion.div
            className="inline-flex items-center justify-center py-2 px-4 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6 shadow-sm" // Added shadow-sm
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }} // Enhanced hover
            transition={{ duration: 0.3 }}
          >
            <Star className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
            <span className="text-sm font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider">
              Our Premium Offerings
            </span>{" "}
            {/* More engaging text */}
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 dark:text-white leading-tight">
            Elevate Your{" "}
            <span className="text-teal-600 dark:text-teal-400">Spaces</span>
          </h2>{" "}
          {/* Stronger heading */}
          <motion.p
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light" // Adjusted font weight
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.8, ease: easeOut }}
          >
            Discover a curated collection of services designed to infuse
            elegance, enhance functionality, and reflect your unique personality
            into every corner of your environment.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" // Adjusted gap
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Increased amount for cards to animate when more visible
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", // More pronounced shadow on hover
              }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="relative group bg-white dark:bg-gray-900/80 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 overflow-hidden" // Rounded-3xl, added overflow-hidden
            >
              <motion.div
                className="absolute top-6 right-6"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: 0.7 + index * 0.15,
                  duration: 0.5,
                  ease: easeOut,
                }}
              >
                <span className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {service.badge}
                </span>
              </motion.div>

              <div className="mb-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-300 to-teal-200 dark:from-teal-800/70 dark:to-teal-700/50 shadow-md">
                  {" "}
                  {/* Enhanced gradient and shadow */}
                  <service.icon className="w-8 h-8 text-teal-800 dark:text-teal-200" />{" "}
                  {/* Adjusted icon color */}
                </div>
                <h3 className="mt-7 text-2xl font-bold text-gray-950 dark:text-white leading-snug">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-extrabold text-teal-700 dark:text-teal-400 mb-3 uppercase tracking-wider">
                  What's Included
                </h4>{" "}
                {/* Stronger heading for features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      custom={i}
                    >
                      <ArrowRight className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />{" "}
                      {/* flex-shrink-0 to prevent icon from squishing */}
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl transform group-hover:scale-[1.01]" // Slightly larger button, stronger hover effect
                whileHover={{ scale: 1.03 }} // Adjusted hover scale
                whileTap={{ scale: 0.97 }} // Adjusted tap scale
              >
                Discover More <ArrowRight className="inline-block ml-2 w-4 h-4" />{" "}
                {/* Added icon to button */}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-20" // Increased margin-top
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.8, duration: 0.7, ease: easeOut }}
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            {["Premium Quality", "Expert Team", "Guaranteed Results"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 py-2 px-4 rounded-full shadow-sm border border-gray-200 dark:border-gray-700" // Added background and border to these
                  whileHover={{ scale: 1.07, boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }} // Enhanced hover
                  transition={{ duration: 0.2 }}
                >
                  <Star className="w-4 h-4 text-teal-500 flex-shrink-0" />{" "}
                  <span className="font-medium">{item}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;