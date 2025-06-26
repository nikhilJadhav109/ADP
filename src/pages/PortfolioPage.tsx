import React, { useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Search } from "lucide-react";
import { motion, easeOut, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PROJECTS } from "../constants/projects";
import { PortfolioPageHelmet } from "../helper/seoProvider";

// ✅ Filters
const filters = ["Residential", "Commercial", "Luxury Homes"];

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter.toLowerCase() === "all"
      ? PROJECTS
      : PROJECTS.filter(
          (project) =>
            project.category.trim().toLowerCase() ===
            activeFilter.trim().toLowerCase()
        );

  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const filterButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const projectCardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  const MotionLink = motion(Link);

  return (
    <>
      <PortfolioPageHelmet />
      <div className="pt-20 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-500">
        {/* ✅ Hero */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
            >
              Our Featured <span className="text-teal-400">Portfolio</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              transition={{ delay: 0.2 }}
            >
              Explore our curated collection of exceptional interior design
              projects in Pune, showcasing stunning and functional residential,
              commercial, and luxury spaces.
            </motion.p>

            {/* ✅ Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {filters.map((filter, i) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium text-lg transition-all transform hover:scale-105 active:scale-95 shadow-md
                  ${
                    activeFilter === filter
                      ? "bg-teal-500 text-white shadow-lg border border-teal-600"
                      : "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white border border-gray-600"
                  }`}
                  variants={filterButtonVariants}
                  custom={i}
                >
                  {filter}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ✅ Portfolio Grid */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group bg-white dark:bg-gray-850 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                  variants={projectCardVariants}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-75"
                    />
                    <span className="absolute top-5 left-5 bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3 text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                      <span>{project.location}</span>
                    </div>

                    <p className="text-gray-800 mb-4">{project.description}</p>

                    {/* <p className="text-gray-500 dark:text-gray-400 text-sm italic border-t border-gray-100 dark:border-gray-700 pt-2">
                      {project.details.substring(0, 250)}...
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-10 text-gray-600 dark:text-gray-400 text-lg"
              >
                <Search className="w-10 h-10 mx-auto mb-4" />
                <p>No projects found for this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* ✅ CTA */}
        <section className="py-20 bg-teal-600 dark:bg-teal-800 text-white shadow-inner">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ctaVariants}
            >
              Ready to <span className="text-teal-200">Elevate</span> Your
              Space?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ctaVariants}
              transition={{ delay: 0.2 }}
            >
              Our expert **interior designers in Pune** are ready to turn your
              vision into a stunning reality. Contact us today for a
              consultation.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <MotionLink
                to="/contact"
                className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center group"
                variants={ctaVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Your Project
                <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </MotionLink>
              <MotionLink
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl"
                variants={ctaVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Our Services
              </MotionLink>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
