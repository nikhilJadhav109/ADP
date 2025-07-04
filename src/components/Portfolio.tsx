import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants/projects";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Luxury Homes");
  
  const filters = ["Residential", "Commercial", "Luxury Homes"];

  const filteredProjects = PROJECTS.slice(0, 9).filter(
    (project) => project.category === activeFilter
  );

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

  const filterVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.05 },
  };

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.2) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center p-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-5 h-5 text-teal-400 mr-2" />
            </motion.div>
            <span className="text-sm font-semibold text-teal-300 uppercase tracking-wide">
              Our Work
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            Featured{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                Portfolio
              </span>
            </span>
          </h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover our curated collection of exceptional interior design
            projects that showcase our expertise in creating stunning,
            functional spaces that inspire and delight.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variants={filterVariants}
                initial="inactive"
                aria-label={`Show ${filter} projects`}
                animate={activeFilter === filter ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 overflow-hidden ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25"
                    : "bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-teal-500/50"
                }`}
              >
                <span className="relative z-10">{filter}</span>
                {activeFilter === filter && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-20"
                    layoutId="activeFilter"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Portfolio Grid */}
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
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-800/50 backdrop-blur-md border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 cursor-pointer"
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
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 backdrop-blur-sm text-teal-300 border border-teal-500/30">
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
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-medium">
                        {project.location}
                      </p>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-sm text-gray-300 leading-relaxed"
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
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-teal-500 to-cyan-400"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.8 + index * 0.1,
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

        {/* Stats Section */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "80%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
              { number: "10+", label: "Awards Won" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
