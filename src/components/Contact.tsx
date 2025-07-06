import React from "react";
import { motion } from "framer-motion";
import { sectionHeaderVariants } from "./contact/motionVariants";
import ContactDetails from "./contact/ContactDetails";
import MapEmbed from "./contact/MapEmbed";
import ContactForm from "./contact/ContactForm";

const Contact: React.FC = () => {
  return (
    <section className="pt-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionHeaderVariants}
          >
            Get In{" "}
            <span className="text-teal-600 dark:text-teal-400">Touch</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionHeaderVariants}
            transition={{ delay: 0.2 }}
          >
            Ready to transform your space? Contact us today for a consultation.
          </motion.p>
        </div>

        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl w-full px-4 lg:px-8">
            <div className="w-full lg:w-[50%]">
              <ContactDetails />
            </div>
            <div className="w-full lg:w-[50%] -mt-4">
              <ContactForm />
            </div>
          </div>
        </div>

          <MapEmbed />
      </div>
    </section>
  );
};

export default Contact;
