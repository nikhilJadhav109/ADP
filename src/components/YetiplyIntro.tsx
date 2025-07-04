import React from "react";
import { motion } from "framer-motion";
import { Layers, Droplets, ShieldCheck, Hammer } from "lucide-react";

const features = [
  {
    icon: <Droplets className="w-7 h-7 text-teal-600 dark:text-teal-400" />,
    title: "Marine Grade Durability",
    desc: "MR, BWR & BWP plywood built for superior moisture resistance & exceptional longevity.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-teal-600 dark:text-teal-400" />,
    title: "Calibrated Precision",
    desc: "Achieve flawless results with uniform thickness, ideal for modular & luxury furniture.",
  },
  {
    icon: <Hammer className="w-7 h-7 text-teal-600 dark:text-teal-400" />,
    title: "Shuttering Strength",
    desc: "Experience robust performance with high-density film face plywood for demanding construction needs.",
  },
];

const YetiplyIntro: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden relative">
      {/* Background Yetiply Logo with low opacity */}
      <div
        className="absolute inset-0 z-0 opacity-5 dark:opacity-3" // Adjust opacity as needed (e.g., opacity-10, opacity-5)
        style={{
          backgroundImage: "url('/services/yetiPly.JPG')", // Use the correct path to your logo
          backgroundSize: "cover", // or 'contain' depending on desired effect
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Background radial gradient for subtle effect - kept if you want both */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-10">
        <div className="w-full h-full radial-gradient-top-left"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center gap-3 mb-6 px-5 py-2 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-900 dark:text-teal-300 backdrop-blur-sm shadow-sm border border-teal-700 dark:border-teal-800 animate-fade-in-up">
          <motion.span
            className="uppercase font-bold tracking-wide text-sm sm:text-base relative"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            About Yetiply
            <motion.span
              className="absolute bottom-0 left-0 h-[2px] bg-teal-500 dark:bg-teal-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            ></motion.span>
          </motion.span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight sm:leading-tight">
          <span className="bg-clip-text text-transparent bg-teal-500">
            25+ Years
          </span>{" "}
          of Plywood Excellence
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Yetiply is a **trusted name** in premium plywood, consistently combining
          **unmatched durability**, **precision engineering**, and **exceptional strength** for
          all your furniture, modular setups, and robust formwork needs.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out group"
          >
            <div className="mb-5 p-3 rounded-full bg-teal-100 dark:bg-teal-800/50 group-hover:bg-teal-200 dark:group-hover:bg-teal-700/60 transition-colors duration-300">
              {feature.icon}
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 leading-snug">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default YetiplyIntro;