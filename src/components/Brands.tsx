import React, { useRef, useState, useCallback } from 'react';
import { motion, useAnimationFrame, wrap } from 'framer-motion';
import { BRANDS } from '../constants/path';

// ========== CUSTOMIZATION CONSTANTS ==========
const ANIMATION_CONFIG = {
  baseSpeed: 0.02,              // Base scroll speed
  mouseSpeedMultiplier: 2,      // How much mouse movement affects speed
  speedSmoothness: 0.12,        // Speed transition smoothness (0-1)
  pauseOnHover: false,          // Whether to pause when hovering without mouse movement
  mouseInfluenceRadius: 0.8,    // How far from center mouse affects speed (0-1)
};

const RESPONSIVE_CONFIG = {
  // Card widths for different screen sizes
  cardWidth: {
    sm: 'w-40',      // 160px
    md: 'w-44',      // 176px  
    lg: 'w-48',      // 192px
  },
  // Gaps between cards
  gap: {
    sm: 'gap-4',     // 16px
    md: 'gap-6',     // 24px
    lg: 'gap-8',     // 32px
  },
  // Padding inside cards
  padding: {
    sm: 'p-4',       // 16px
    md: 'p-5',       // 20px
    lg: 'p-6',       // 24px
  },
  // Logo sizes
  logoSize: {
    sm: 'w-10 h-10', // 40px
    md: 'w-11 h-11', // 44px
    lg: 'w-12 h-12', // 48px
  },
  // Text sizes
  logoText: {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  },
  brandText: {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-sm',
  }
};

const VISUAL_CONFIG = {
  gradientWidth: 'w-24 sm:w-32',           // Edge gradient mask width
  containerPadding: 'py-12 sm:py-16',     // Vertical padding
  containerBg: 'bg-gray-900',             // Background color
  cardBg: 'bg-gray-800',                  // Card background
  cardHoverBg: 'hover:bg-gray-750',       // Card hover background
  logoBg: 'bg-white',                     // Logo background color (white for images)
  textColor: 'text-white',                // Text color
  shadowStyle: 'shadow-md hover:shadow-lg', // Card shadows
};

// ========== COMPONENT HELPERS ==========
interface BrandLogoProps {
  brand: { name: string; logo: string; fallback: string };
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ brand, className }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`${className} relative overflow-hidden`}>
      {!imageError ? (
        <>
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className={`w-full h-full object-contain transition-all duration-300 hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-teal-500 text-white flex items-center justify-center font-bold text-lg animate-pulse">
              {brand.fallback}
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg">
          {brand.fallback}
        </div>
      )}
    </div>
  );
};

const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS]; // Triple for smoother loop

const InfiniteCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseInfluence, setMouseInfluence] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useRef(0);
  const targetSpeed = useRef(ANIMATION_CONFIG.baseSpeed);
  const currentSpeed = useRef(ANIMATION_CONFIG.baseSpeed);
  const [position, setPosition] = useState(0);

  // Handle mouse movement for directional control
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    
    // Calculate relative position (-1 to 1)
    const relativeX = (mouseX - centerX) / (rect.width / 2);
    
    // Apply influence radius
    const clampedInfluence = Math.max(-ANIMATION_CONFIG.mouseInfluenceRadius, 
                                    Math.min(ANIMATION_CONFIG.mouseInfluenceRadius, relativeX));
    
    setMouseInfluence(clampedInfluence);
    
    // Calculate target speed based on mouse position
    // Negative values = move left, positive = move right
    targetSpeed.current = -ANIMATION_CONFIG.baseSpeed + 
      (clampedInfluence * ANIMATION_CONFIG.mouseSpeedMultiplier * ANIMATION_CONFIG.baseSpeed);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMouseInfluence(0);
    targetSpeed.current = -ANIMATION_CONFIG.baseSpeed; // Reset to default left movement
  }, []);

  // Animation frame handler
  useAnimationFrame((_, delta) => {
    // Smooth speed transition
    currentSpeed.current += (targetSpeed.current - currentSpeed.current) * ANIMATION_CONFIG.speedSmoothness;
    
    // Apply movement (unless paused on hover)
    if (!ANIMATION_CONFIG.pauseOnHover || !isHovered || Math.abs(mouseInfluence) > 0.01) {
      x.current += currentSpeed.current * (delta / 16);
      // Wrap at -33.33% for seamless triple loop
      setPosition(wrap(-33.33, 0, x.current));
    }
  });

  return (
    <section
      ref={containerRef}
      className={`relative w-full ${VISUAL_CONFIG.containerPadding} ${VISUAL_CONFIG.containerBg} overflow-hidden cursor-pointer`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse direction indicator */}
      {isHovered && Math.abs(mouseInfluence) > 0.1 && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-200">
          <div className="flex items-center gap-2 text-white text-sm">
            <span className="text-teal-400">
              {mouseInfluence > 0 ? '→' : '←'}
            </span>
            <div className="w-8 h-1 bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-teal-500 rounded-full transition-all duration-100"
                style={{ 
                  width: `${Math.abs(mouseInfluence) * 100}%`,
                  marginLeft: mouseInfluence > 0 ? '0' : 'auto',
                  marginRight: mouseInfluence < 0 ? '0' : 'auto'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Gradient masks */}
      <div className={`pointer-events-none absolute top-0 left-0 ${VISUAL_CONFIG.gradientWidth} h-full z-10 bg-gradient-to-r from-gray-900 to-transparent`} />
      <div className={`pointer-events-none absolute top-0 right-0 ${VISUAL_CONFIG.gradientWidth} h-full z-10 bg-gradient-to-l from-gray-900 to-transparent`} />

      {/* Sliding brands container */}
      <motion.div
        className={`flex ${RESPONSIVE_CONFIG.gap.sm} ${RESPONSIVE_CONFIG.gap.md} ${RESPONSIVE_CONFIG.gap.lg} px-4 sm:px-6`}
        style={{
          x: `${position}%`,
          width: '300%', // Triple width for seamless loop
        }}
      >
        {duplicatedBrands.map((brand, idx) => (
          <motion.div
            key={idx}
            className={`
              ${RESPONSIVE_CONFIG.cardWidth.sm} 
              sm:${RESPONSIVE_CONFIG.cardWidth.md} 
              lg:${RESPONSIVE_CONFIG.cardWidth.lg}
              flex-shrink-0 
              ${VISUAL_CONFIG.cardBg} 
              ${VISUAL_CONFIG.cardHoverBg}
              rounded-xl 
              ${RESPONSIVE_CONFIG.padding.sm} 
              sm:${RESPONSIVE_CONFIG.padding.md} 
              lg:${RESPONSIVE_CONFIG.padding.lg}
              text-center 
              ${VISUAL_CONFIG.shadowStyle}
              transition-all duration-300 ease-out
              border border-gray-700/50
            `}
            whileHover={{ 
              y: -4, 
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <BrandLogo 
              brand={brand}
              className={`
                ${RESPONSIVE_CONFIG.logoSize.sm}
                sm:${RESPONSIVE_CONFIG.logoSize.md}
                lg:${RESPONSIVE_CONFIG.logoSize.lg}
                mx-auto mb-3 rounded-lg overflow-hidden
                bg-white shadow-inner
                transition-transform duration-300 hover:rotate-3
              `}
            />
            <p className={`
              ${VISUAL_CONFIG.textColor} 
              ${RESPONSIVE_CONFIG.brandText.sm}
              sm:${RESPONSIVE_CONFIG.brandText.md}
              lg:${RESPONSIVE_CONFIG.brandText.lg}
              font-medium opacity-90
            `}>
              {brand.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle instruction hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs opacity-60">
        Move cursor left/right to control direction
      </div>
    </section>
  );
};

export default InfiniteCarousel;