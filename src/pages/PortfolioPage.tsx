import React, { useState } from "react";
import { Eye, ArrowUpRight, Calendar, MapPin, Search } from "lucide-react"; // Added Search icon for potential future use or just aesthetic
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Luxury Homes"];

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Luxury Homes",
      location: "Mumbai, Maharashtra",
      year: "2023",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Contemporary design meets luxury living in this stunning 5-bedroom villa with panoramic city views.",
      details:
        "This project showcased our ability to blend modern aesthetics with traditional comfort, featuring custom-designed furniture, smart home integration, and sustainable materials throughout.",
    },
    {
      id: 2,
      title: "Executive Office Suite",
      category: "Commercial",
      location: "Delhi, NCR",
      year: "2023",
      image:
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Sophisticated office design that enhances productivity and reflects corporate brand identity.",
      details:
        "A complete transformation of a 10,000 sq ft corporate office space, incorporating biophilic design elements, flexible workspaces, and state-of-the-art technology integration.",
    },
    {
      id: 3,
      title: "Elegant Apartment",
      category: "Residential",
      location: "Bangalore, Karnataka",
      year: "2023",
      image:
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Maximizing space and style in this beautifully designed urban apartment.",
      details:
        "Smart space planning and multi-functional furniture solutions transformed this compact 2BHK into a spacious, elegant home perfect for modern urban living.",
    },
    {
      id: 4,
      title: "Boutique Hotel Lobby",
      category: "Commercial",
      location: "Goa",
      year: "2022",
      image:
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Creating memorable first impressions with luxurious hospitality design.",
      details:
        "A stunning hotel lobby that captures the essence of coastal luxury, featuring locally sourced materials, custom lighting installations, and artwork from regional artists.",
    },
    {
      id: 5,
      title: "Contemporary Home",
      category: "Residential",
      location: "Pune, Maharashtra",
      year: "2022",
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Clean lines and natural materials create a serene family environment.",
      details:
        "This family home emphasizes connection with nature through large windows, natural materials, and an open-plan design that seamlessly integrates indoor and outdoor living.",
    },
    {
      id: 6,
      title: "Penthouse Paradise",
      category: "Luxury Homes",
      location: "Mumbai, Maharashtra",
      year: "2022",
      image:
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Sky-high luxury with panoramic city views and premium finishes.",
      details:
        "A breathtaking penthouse featuring floor-to-ceiling windows, custom Italian marble finishes, and a rooftop terrace with infinity pool overlooking the city skyline.",
    },
    {
      id: 7,
      title: "Minimalist Studio",
      category: "Residential",
      location: "Chennai, Tamil Nadu",
      year: "2023",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Efficient design maximizes functionality in a compact studio apartment.",
      details:
        "Clever storage solutions and multi-purpose furniture create distinct living zones within a single space, proving that small can be both beautiful and functional.",
    },
    {
      id: 8,
      title: "Luxury Restaurant",
      category: "Commercial",
      location: "Hyderabad, Telangana",
      year: "2023",
      image:
        "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Fine dining experience enhanced by sophisticated interior design.",
      details:
        "An upscale restaurant design that creates intimate dining experiences through strategic lighting, acoustic treatments, and luxurious material selections.",
    },
    {
      id: 9,
      title: "Heritage Home Revival",
      category: "Luxury Homes",
      location: "Jaipur, Rajasthan",
      year: "2022",
      image:
        "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Restoring grandeur while adding modern amenities to a heritage property.",
      details:
        "Careful restoration of a 100-year-old haveli, preserving original architectural elements while seamlessly integrating modern conveniences and luxury amenities.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Framer Motion variants
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const filterButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const eyeButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const MotionLink = motion(Link);
  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Our Featured <span className="text-teal-400">Portfolio</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 font-light"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Explore our curated collection of exceptional interior design
            projects, showcasing our passion for creating stunning, functional,
            and personalized spaces.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {filters.map((filter, i) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md
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

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-white dark:bg-gray-850 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative" // Added border and relative for positioning
                variants={projectCardVariants}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75" // Added brightness effect
                  />

                  {/* Overlay for view button */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial="hidden"
                    animate="hidden"
                    whileHover="visible"
                    variants={imageOverlayVariants}
                  >
                    <motion.button
                      className="bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out flex items-center justify-center"
                      variants={eyeButtonVariants}
                    >
                      <Eye className="w-7 h-7" />
                    </motion.button>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-5 left-5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.2, duration: 0.4 },
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                      {project.category}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                      <span>{project.year}</span>
                    </div>
                    {/* ArrowUpRight for more details, perhaps links to a project page */}
                    <a
                      href={`/portfolio/${project.id}`}
                      className="flex items-center text-teal-600 hover:text-teal-500 transition-colors duration-200"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Optional: Details on hover or expansion */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm italic leading-relaxed pt-2 border-t border-gray-100 dark:border-gray-700">
                    {project.details.substring(0, 100)}...{" "}
                    {/* Truncate for brevity on main card */}
                  </p>
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
              <Search className="w-10 h-10 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
              <p>No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-800 text-white shadow-inner">
        {" "}
        {/* Added shadow-inner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ctaVariants}
          >
            Ready to <span className="text-teal-200">Elevate</span> Your Space?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-10 font-light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ctaVariants}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            Let's discuss how our expert team can transform your vision into an
            extraordinary reality.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <MotionLink
              to="/contact"
              className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
              variants={ctaVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Project
              <ArrowUpRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MotionLink>
            <MotionLink
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={ctaVariants}
              transition={{ delay: 0.1, ...ctaVariants.visible.transition }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              View Our Services
            </MotionLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
