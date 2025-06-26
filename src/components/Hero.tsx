import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  ];

  // Consolidate duplicate useEffect for interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Using 4000ms as per your second useEffect

    return () => clearInterval(interval);
  }, [backgroundImages.length]); // Dependency array should include backgroundImages for robustness, though length is fine here.

  const scrollToServices = () => {
    // You might want to use React Router's `useNavigate` or `Link` for internal navigation
    // if `#services` is on a different page, or ensure `#services` is an actual ID on the current page.
    const section = document.querySelector("#services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background carousel */}
      <div className="absolute inset-0 bg-gray-900">
        <AnimatePresence initial={false}>
          {backgroundImages.map(
            (image, index) =>
              // Only render the current image's motion.div
              index === currentImageIndex && (
                <motion.div
                  key={image} // Use image path as key for reliable animation with AnimatePresence
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                  initial={{ opacity: 0 }} // Start completely transparent
                  animate={{ opacity: 1 }} // Fade in to fully opaque
                  exit={{ opacity: 0 }} // Fade out to completely transparent
                  transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition for crossfade
                >
                  {/* Overlay for text readability (optional, adjust opacity) */}
                  <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Changed from div to h1 for semantic SEO */}
        <motion.h1
          className="md:text-5xl text-3xl font-bold text-white mb-6 leading-snug tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Your Vision, Our Expertise{" "}
          <span className="block text-teal-400 font-semibold">
            Seamless Turnkey Interior Solutions.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          From Concept to Keys, We Handle Every Detail for Your Dream Space.
          Trusted choice for end-to-end interior design and customized modular furniture.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.button
            onClick={scrollToContact}
            className="relative group text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center overflow-hidden bg-teal-500"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="relative z-10 flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            {/* The animated border effect here looks cool! */}
            <span className="absolute inset-0 rounded-lg z-0 hidden group-hover:block border-2 border-transparent animate-border bg-gradient-to-r from-teal-500 via-coral-500 to-teal-500 bg-[length:200%_100%]"></span>
          </motion.button>

          <motion.button
            onClick={scrollToServices}
            className="group border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Carousel indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-teal-400 w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <button
          onClick={scrollToServices}
          className="text-white hover:text-teal-400 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
