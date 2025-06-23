import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Users, Home, Sparkles } from 'lucide-react';

const Intro: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    // {
    //   url: "https://images.pexels.com/photos/313705/pexels-photo-313705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //   alt: "Designers collaborating on luxury interior"
    // },
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Modern luxury living room design"
    },
    {
      url: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Elegant bedroom interior design"
    },
    {
      url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Contemporary kitchen design"
    }
  ];

  const stats = [
    { icon: Award, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Home, number: "15+", label: "Years Experience" },
    { icon: Sparkles, number: "100%", label: "Satisfaction Rate" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="intro"
      className="py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-100 dark:from-gray-950 dark:via-teal-950/20 dark:to-gray-900 text-gray-800 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-teal-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-teal-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-teal-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Enhanced Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 px-4 sm:px-0"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gray-200 dark:bg-gray-800">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                  {/* Base image that stays visible */}
                  <img
                    src={images[currentImage].url}
                    alt={images[currentImage].alt}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  />
                  
                  {/* Preload next image */}
                  <img
                    src={images[(currentImage + 1) % images.length].url}
                    alt={images[(currentImage + 1) % images.length].alt}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
                    style={{ display: 'none' }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? 'bg-teal-400 scale-110'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg"
              >
                <p className="text-xs sm:text-sm font-semibold">Premium Quality</p>
                <p className="text-xs opacity-90 hidden sm:block">Guaranteed</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Pune's Premier Interior Design Studio
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
                Agrawal Ply Decor
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                We don't just design spaces – we craft{' '}
                <span className="font-semibold text-teal-600 dark:text-teal-400">experiences</span>.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                As leading interior design experts, we transform your vision into reality with our comprehensive turnkey solutions. From initial concept to final installation, we guide you through every step with unmatched expertise and meticulous attention to detail.
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start mb-1 sm:mb-2">
                    <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-teal-500 dark:text-teal-400 mr-1 sm:mr-2" />
                    <span className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 italic font-light leading-relaxed"
            >
              "Say goodbye to project complexities and hello to a beautifully realized vision that exceeds your expectations."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;