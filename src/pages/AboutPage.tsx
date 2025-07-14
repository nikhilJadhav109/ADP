import React from "react";
import { Target, Heart, Shield } from "lucide-react";
import { TEAM } from "../constants/team";
import { AboutPageHelmet } from "../helper/seoProvider";
import { STATS } from "../constants/stats";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring the highest quality standards in design and execution.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our love for design drives us to create spaces that truly resonate with our clients' personalities and lifestyles.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "We build lasting relationships with our clients through transparency, reliability, and exceptional service.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Increased delay for more pronounced staggered effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Slightly more rigid spring
        damping: 12, // Slightly less springy
        duration: 0.6,
      },
    },
  };
  return (
    <>
      <AboutPageHelmet />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-teal-400">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For over a decade, we've been transforming spaces into
              masterpieces, combining innovative design with exceptional
              craftsmanship to create interiors that inspire and endure.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Founded with a passion for exceptional design and quality
                  craftsmanship, Agrawal Ply Decor has grown from a small local
                  business into one of the region's most trusted interior design
                  firms.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Our team of experienced designers, architects, and
                  craftspeople work collaboratively to bring your vision to
                  life, ensuring every project reflects your unique style and
                  exceeds your expectations.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  We believe that great design should be both beautiful and
                  functional, creating spaces that not only look stunning but
                  also enhance the way you live and work.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/about/image.png"
                  alt="Our team at work"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500 dark:bg-teal-600 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These core principles guide everything we do and shape the way
                we work with our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our talented team of designers and professionals are passionate
                about creating exceptional spaces.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" // Adjusted gap for better responsiveness
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }} // Trigger animation when 25% of the component is visible
            >
              {TEAM.map((member) => (
                <motion.div
                  key={member.name} // Using name as key, assuming unique names; prefer a unique ID if available
                  className="bg-white dark:bg-gray-900 rounded-xl p-5 md:p-6 shadow-lg text-center transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800" // Enhanced hover effects and border
                  variants={itemVariants}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover object-center mx-auto mb-4 border-2 border-teal-600 dark:border-teal-400 shadow-md" // Increased border width, added shadow
                    loading="lazy" // Add lazy loading for performance
                  />
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1 leading-tight">
                    {" "}
                    {/* Slightly larger text, bold, tighter line height */}
                    {member.name}
                  </h3>
                  <p className="text-teal-700 dark:text-teal-300 font-semibold mb-1 text-base">
                    {" "}
                    {/* Adjusted shades for better contrast */}
                    {member.position}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 italic">
                    {member.experience}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-prose mx-auto">
                    {" "}
                    {/* Added max-width for readability */}
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
