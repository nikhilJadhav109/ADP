import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Brand {
  name: string;
  logoPath: string;
}

interface BrandsCarouselProps {
  brands: Brand[];
}

const BrandsCarousel: React.FC<BrandsCarouselProps> = ({ brands }) => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-10"
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 90,
          ease: "linear",
        }}
      >
        {[...brands, ...brands,...brands, ...brands].map((brand, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <img
              src={brand.logoPath}
              alt={brand.name}
              className="h-18 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <div className="flex items-center gap-1 mt-2">
              <Check className="w-4 h-4 text-teal-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{brand.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsCarousel;
