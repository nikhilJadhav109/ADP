import React from 'react';
import { Home } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-100 dark:from-slate-900 dark:via-teal-900/20 dark:to-slate-800 flex items-center justify-center">
      <div className="text-center">
        {/* Elegant Animated Icon */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-teal-200/40 dark:border-teal-600/30">
            <div className="absolute inset-0 rounded-full border-t-2 border-teal-500 dark:border-teal-400 animate-spin"
              style={{ animationDuration: '3s' }}></div>
          </div>

          {/* Inner Glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-teal-100/80 to-white/60 dark:from-teal-900/40 dark:to-slate-800/60 backdrop-blur-sm animate-pulse shadow-lg">
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Home className="w-10 h-10 text-teal-600 dark:text-teal-400" />
            </div>
          </div>

          {/* Floating Dots */}
          {[0, 120, 240].map((rotation, idx) => (
            <div
              key={idx}
              className="absolute w-2 h-2 bg-teal-400 dark:bg-teal-300 rounded-full animate-pulse"
              style={{
                top: '10%',
                left: '50%',
                transformOrigin: '0 32px',
                transform: `rotate(${rotation}deg) translateX(-1px)`,
                animationDelay: `${idx * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Brand Name with Gradient */}
        <div className="mb-2">
          <h1 className="text-4xl font-light text-slate-800 dark:text-slate-200 tracking-wide">
            Agrawal Ply
          </h1>
          <div className="text-4xl font-medium bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Decor
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm font-light tracking-[0.2em] uppercase mb-8">
          Luxury Interior Design
        </p>

        {/* Sophisticated Progress Bar */}
        <div className="w-48 mx-auto mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent dark:via-teal-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 dark:from-teal-300 dark:to-cyan-300 animate-pulse opacity-60"></div>
            <div
              className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent dark:via-slate-200 opacity-80 animate-pulse"
              style={{
                animation: 'shimmer 2s infinite linear'
              }}
            ></div>
          </div>
        </div>

        {/* Elegant Loading Text */}
        <p className="text-teal-600 dark:text-teal-400 text-sm font-light">
          Crafting your perfect space...
        </p>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(600%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;