import React, { useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Search } from "lucide-react";
import { motion, easeOut, Variants, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PROJECTS } from "../constants/projects";
import { PortfolioPageHelmet } from "../helper/seoProvider";

// ✅ Filters
const filters = ["Residential", "Commercial", "Luxury Homes"];

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Residential");

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.1,
      transition: {
        duration: 0.1,
        ease: "easeInOut" as const,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.1,
        ease: "easeInOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
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
        <section className="py-16 bg-snow-900  dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeFilter}
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${activeFilter}-${project.id}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.08, ease: "easeOut" }}
                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl backdrop-blur-md border shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      >
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 backdrop-blur-sm  border border-teal-500/30">
                          {project.category}
                        </span>
                      </motion.div>

                      {/* Year Badge */}
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      >
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/30 backdrop-blur-sm text-white border border-white/20">
                          {project.year}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <motion.div
                        className="flex items-start justify-between mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold mb-1 dark:text-[#f8fafc]">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 font-medium dark:text-[#f1f5f9]">
                            {project.location}
                          </p>
                        </div>
                      </motion.div>

                      <motion.p
                        className="text-sm text-gray-600 leading-relaxed dark:text-[#c7ccd2]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Progress Bar */}
                      <motion.div
                        className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-400"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{
                            delay:  index * 0.1,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
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
              animate="visible" // Change from whileInView to animate
              variants={ctaVariants}
            >
              Ready to <span className="text-teal-200">Elevate</span> Your
              Space?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-10"
              initial="hidden"
              animate="visible" // Change from whileInView to animate
              transition={{ delay: 0.2 }}
              variants={ctaVariants}
            >
              Our expert <strong>interior designers </strong> are ready to turn
              your vision into a stunning reality. Contact us today for a
              consultation.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden"
              animate="visible" // Change from whileInView to animate
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
