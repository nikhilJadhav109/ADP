import React, { useState } from "react";
import { Eye, ArrowUpRight, Calendar, MapPin, Search } from "lucide-react"; // Added Search icon for potential future use or just aesthetic
import { motion , easeOut ,Variants, Transition } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Luxury Homes"];

 const projects = [
    {
      id: 1,   
      title: "Ambient Master Bedroom",
      category: "Luxury Homes",
      location: "Model Colony, Pune, Maharashtra",
      year: "2024",
      image: "/portfolioImages/residential5.jpeg",
      description:
        "Warm elegance meets modern innovation in this luxury bedroom.",
      details:
        "This master bedroom uses indirect LED lighting, velvet headboards, and warm wood textures to create a moody, luxurious atmosphere ideal for unwinding in style.", 
    },
    {
      id: 2,
      title: "Fine Dining Lounge",
      category: "Commercial",
      location: "Koregaon Park, Pune, Maharashtra",
      year: "2022",
      image:
        "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Fine dining enhanced by rich textures and an intimate ambiance.",
      details:
        "A luxurious restaurant interior featuring velvet upholstery, wooden ceilings, and custom chandeliers to elevate every dining moment into an experience of indulgence.",
    },
    {
      id: 3,
      title: "Stylish Urban Apartment Interior",
      category: "Residential",
      location: "Koregaon Park, Pune, Maharashtra",
      year: "2024",
      image: "/portfolioImages/residential2.jpeg",
      description:
        "A sleek, modern apartment design with sophisticated textures and luxurious accents.",
      details:
        "This project features stone-textured walls, plush furnishings, and warm lighting to create a high-end look in a compact urban apartment. Custom storage and modern decor enhance functionality.",
    },
    {
      id: 4,
      title: "Elegant Hospitality Lobby",
      category: "Commercial",
      location: "Kalyani Nagar, Pune, Maharashtra",
      year: "2023",
      image: "/portfolioImages/commercial2.jpeg",
      description:
        "Creating memorable first impressions with luxurious hospitality design.",
      details:
        "A modern hotel lobby crafted to evoke luxury and comfort, featuring pastel hues, statement lighting, and customized furnishings for a welcoming guest experience.",
    },
    {
      id: 5,
      title: "Modern Kitchen Apartment",
      category: "Residential",
      location: "Aundh, Pune, Maharashtra",
      year: "2022",
      image: "/portfolioImages/residential3.jpeg",
      description:
        "Clean lines and natural materials create a serene family environment.",
      details:
        "This compact apartment kitchen blends soft blues with natural wood and marble finishes, combining smart cabinetry with modern appliances for elegant, space-saving functionality.",
    },
    {
      id: 6,
      title: "Luxury White Living Space",
      category: "Luxury Homes",
      location: "Viman Nagar, Pune, Maharashtra",
      year: "2022",
      image: "/portfolioImages/luxuryhome2.jpeg",
      description:
        "Sky-high luxury with soft tones, panoramic windows, and refined finishes.",
      details:
        "This open-plan living space boasts a light color palette, detailed molding, premium materials, and classic decor—creating an airy yet intimate setting for upscale family living.",
    },
    {
      id: 7,
      title: "Warm-Toned Bedroom Suite",
      category: "Residential",
      location: "Baner, Pune, Maharashtra",
      year: "2025",
      image: "/portfolioImages/residential4.jpeg",
      description:
        "Efficient design maximizes functionality with a cozy aesthetic.",
      details:
        "This residential suite balances function and form with plush fabrics, layered lighting, and a calming color palette—offering the perfect retreat after a long day.",
    },
    {
      id: 8,
      title: "Modern Collaborative Workspace",
      category: "Commercial",
      location: "Baner, Pune, Maharashtra",
      year: "2025",
      image: "/portfolioImages/commercial1.jpeg",
      description:
        "A minimalistic yet high-functioning office interior with natural tones and open design.",
      details:
        "Designed for a tech startup, this workspace includes collaborative areas, ergonomic furniture, and natural lighting, promoting productivity and creativity in a clean environment.",
    },
    {
      id: 9,
      title: "Contemporary Luxe Living Room",
      category: "Luxury Homes",
      location: "Hadapsar, Pune, Maharashtra",
      year: "2024",
      image: "/portfolioImages/luxuryhome1.jpeg",
      description:
        "An elegant luxury living space blending modern textures and lighting for an upscale lifestyle.",
      details:
        "This villa project features 3D wall panels, ambient lighting, and a bespoke furniture layout that enhances comfort and visual appeal, creating an opulent yet cozy environment.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Framer Motion variants
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
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
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


   const imageOverlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: easeOut } },
  };

  const eyeButtonVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.3, ease: easeOut },
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
