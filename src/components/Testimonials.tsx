import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, Tech Solutions Inc.',
      project: 'Corporate Office Design',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'Agrawal Ply Decor transformed our office space beyond our expectations. The attention to detail and professional execution was outstanding.',
      date: '15 November'
    },
    {
      name: 'Priya Sharma',
      position: 'Homeowner',
      project: 'Luxury Villa Interior',
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'Working with Agrawal Ply Decor was an absolute pleasure. They understood our vision perfectly and created a home that reflects our style beautifully.',
      date: '12 November'
    },
    {
      name: 'Amit Patel',
      position: 'Restaurant Owner',
      project: 'Fine Dining Restaurant',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'The team created an ambiance that perfectly complements our cuisine. The design has been instrumental in attracting customers and creating memorable experiences.',
      date: '08 November'
    },
    {
      name: 'Sneha Gupta',
      position: 'Interior Design Enthusiast',
      project: 'Modern Apartment',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'From the initial consultation to the final reveal, the process was seamless. They maximized our space beautifully while staying within budget.',
      date: '05 November'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }
  };


  const slideIn = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }
  };


  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <motion.div
      className="flex gap-1 mb-4"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={`w-4 h-4 rounded-full ${i < rating ? 'bg-teal-500' : 'bg-gray-200 dark:bg-gray-600'}`} />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16"
          {...fadeInUp}
        >
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What our clients say
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The right move at the right time saves your investment. live<br />
            the dream of expanding your business.
          </motion.p>
        </motion.div>

        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mb-8">
            <motion.button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <AnimatePresence mode="wait">
              {testimonials.slice(currentIndex, currentIndex + 3).concat(
                testimonials.slice(0, Math.max(0, (currentIndex + 3) - testimonials.length))
              ).map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${currentIndex}-${index}`}
                  variants={staggerItem}
                  {...slideIn}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  layout
                >
                  {/* Profile */}
                  <motion.div
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </motion.div>

                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Content */}
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {testimonial.content}
                  </motion.p>

                  {/* Date */}
                  <motion.p
                    className="text-gray-400 dark:text-gray-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {testimonial.date}
                  </motion.p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div
            className="flex justify-center mt-8 gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-teal-500 w-6'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  width: index === currentIndex ? 24 : 8,
                  backgroundColor: index === currentIndex ? "rgb(20, 184, 166)" : undefined
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;