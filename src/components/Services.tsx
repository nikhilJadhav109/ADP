import React from 'react';
import { Home, Building, Wrench, ArrowRight, Star } from 'lucide-react';
import { motion, easeInOut, easeOut } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a luxurious sanctuary with our bespoke residential interior design services. From concept to completion.',
      features: ['Custom Furniture Design', 'Space Planning', 'Lighting Design', 'Color Consultation'],
      badge: 'Popular'
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Create inspiring work environments that boost productivity and reflect your brand identity with our commercial design expertise.',
      features: ['Office Design', 'Retail Spaces', 'Hospitality Design', 'Brand Integration'],
      badge: 'Professional'
    },
    {
      icon: Wrench,
      title: 'Turnkey Solutions',
      description: 'Complete project management from design conception to final installation. We handle every detail so you don\'t have to.',
      features: ['Project Management', 'Quality Control', 'Timeline Coordination', 'Final Installation'],
      badge: 'Complete'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut // use a valid easing function
      }
    }
  };

  const iconVariants = {
    idle: { 
      scale: 1,
      rotate: 0
    },
    hover: { 
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: easeInOut
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <Star className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
            </div>
            <span className="text-sm font-semibold text-teal-700 dark:text-teal-300 uppercase tracking-wide">
              Premium Services
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our{' '}
            <span className="relative">
              <span className="text-teal-600 dark:text-teal-400">Services</span>
            </span>
          </h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We offer comprehensive interior design services tailored to create spaces that inspire, 
            function beautifully, and reflect your unique style with exceptional attention to detail.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}  
              className="group relative bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-gray-100/50 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Badge */}
              <motion.div 
                className="absolute top-4 right-4 sm:top-6 sm:right-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700">
                  {service.badge}
                </span>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Section */}
                <div className="mb-6 sm:mb-8">
                  <motion.div 
                    className="relative"
                    variants={iconVariants}
                    initial="idle"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/50 dark:to-teal-800/50 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
                      <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 dark:text-teal-400 transition-colors duration-300" />
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Features List */}
                <div className="mb-6 sm:mb-8">
                  <motion.h4 
                    className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    What's Included
                  </motion.h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start text-sm sm:text-base text-gray-700 dark:text-gray-300"
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={featureIndex}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mr-3 mt-0.5"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 dark:text-teal-400" />
                        </motion.div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={scrollToContact}
                  className="w-full relative overflow-hidden bg-gray-900 dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Learn More
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Star className="w-4 h-4 text-teal-500 mr-1" />
              <span>Premium Quality</span>
            </motion.div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Star className="w-4 h-4 text-teal-500 mr-1" />
              <span>Expert Team</span>
            </motion.div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Star className="w-4 h-4 text-teal-500 mr-1" />
              <span>Guaranteed Results</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;