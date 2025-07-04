import React from "react";
import { motion } from "framer-motion";
import { ContactPageHelmet } from "../helper/seoProvider";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import MapEmbed from "../components/contact/MapEmbed";
import { heroVariants } from "../components/contact/motionVariants";

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactPageHelmet />
      <div className="pt-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-6"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
            >
              Get In <span className="text-teal-400">Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              transition={{ delay: 0.2 }}
            >
              Ready to elevate your space? Share your vision and let’s create something extraordinary together.
            </motion.p>
          </div>
        </section>

        {/* Contact Details & Form */}
        {/* <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4">
            <ContactDetails />
            <ContactForm />
          </div>
        </section> */}

        <section className="flex items-center justify-center p-8 sm:py-24 bg-white dark:bg-gray-900">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl w-full px-4 lg:px-8">
            <div className="w-full lg:w-[50%]">
              <ContactDetails />
            </div>
            <div className="w-full lg:w-[50%]">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <MapEmbed />
      </div>
    </>
  );
};

export default ContactPage;
