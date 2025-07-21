import React from "react";
import { motion } from "framer-motion";
import { sectionHeaderVariants } from "./contact/motionVariants";
import ContactDetails from "./contact/ContactDetails";
import MapEmbed from "./contact/MapEmbed";
import ContactForm from "./contact/ContactForm";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionHeaderVariants}
          >
            Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionHeaderVariants}
            transition={{ delay: 0.2 }}
          >
            Ready to transform your space? Contact us today for a consultation.
          </motion.p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactDetails />
          <ContactForm />
        </div>

        {/* Map */}
        <div className="mt-16">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
};

export default Contact;
