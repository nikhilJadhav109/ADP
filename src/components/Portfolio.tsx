import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence, } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Residential', 'Commercial', 'Luxury Homes'];
  
  // const projects = [
  //   {
  //     id: 1,
  //     title: 'Modern Luxury Villa',
  //     category: 'Luxury Homes',
  //     image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     description: 'Contemporary design meets luxury living in this stunning 5-bedroom villa.',
  //     year: '2024',
  //     location: 'Beverly Hills, CA'
  //   },
  //   {
  //     id: 2,
  //     title: 'Executive Office Suite',
  //     category: 'Commercial',
  //     image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     description: 'Sophisticated office design that enhances productivity and brand image.',
  //     year: '2024',
  //     location: 'Manhattan, NY'
  //   },
  //   {
  //     id: 3,
  //     title: 'Elegant Apartment',
  //     category: 'Residential',
  //     image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     description: 'Maximizing space and style in this beautifully designed urban apartment.',
  //     year: '2023',
  //     location: 'Chicago, IL'
  //   },
  //   {
  //     id: 4,
  //     title: 'Boutique Hotel Lobby',
  //     category: 'Commercial',
  //     image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     description: 'Creating memorable first impressions with luxurious hospitality design.',
  //     year: '2024',
  //     location: 'Miami, FL'
  //   },
  //   {
  //     id: 5,
  //     title: 'Contemporary Home',
  //     category: 'Residential',
  //     image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     description: 'Clean lines and natural materials create a serene family environment.',
  //     year: '2023',
  //     location: 'Seattle, WA'
  //   },
  //   {
  //     id: 6,
  //     title: 'Penthouse Paradise',
  //     category: 'Luxury Homes',
  //     image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     description: 'Sky-high luxury with panoramic city views and premium finishes.',
  //     year: '2024',
  //     location: 'San Francisco, CA'
  //   }
  // ];

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

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut' as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const filterVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.05 }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.2) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)`
        }}></div>
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
            Featured{' '}
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
            Discover our curated collection of exceptional interior design projects that showcase 
            our expertise in creating stunning, functional spaces that inspire and delight.
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
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25'
                    : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-teal-500/50'
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
                whileHover={{ y: -5 }}
                transition={{ duration: 0.1 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
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
                      transition={{ delay: 0.8 + index * 0.1, duration: 1.2, ease: "easeOut" }}
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
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Awards Won' }
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
                  transition={{ delay: 0.1 * index, duration: 0.5, type: "spring" }}
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