import React from 'react';
import { Home } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-[100] bg-gradient-to-br from-white via-teal-50/40 to-slate-100 dark:from-slate-900 dark:via-slate-800/60 dark:to-slate-900 flex items-center justify-center"
      style={{ backgroundColor: '#f9fafb' }} // fallback for older browsers
    >
      <div className="text-center">
        {/* Elegant Animated Icon */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-teal-200/40 dark:border-teal-700/40">
            <div
              className="absolute inset-0 rounded-full border-t-2 border-teal-500 dark:border-teal-300 animate-spin"
              style={{ animationDuration: '3s' }}
            ></div>
          </div>

          {/* Inner Glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-teal-100/70 to-white/50 dark:from-teal-900/50 dark:to-slate-900/60 backdrop-blur-sm shadow-xl animate-pulse ring-1 ring-teal-200/30 dark:ring-teal-500/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <Home className="w-10 h-10 text-teal-600 dark:text-teal-300 drop-shadow-md" />
            </div>
          </div>

          {/* Floating Dots */}
          {[0, 120, 240].map((rotation, idx) => (
            <div
              key={idx}
              className="absolute w-2 h-2 bg-teal-400 dark:bg-teal-300 rounded-full animate-pulse shadow-md dark:shadow-teal-600/30"
              style={{
                top: '10%',
                left: '50%',
                transformOrigin: '0 32px',
                transform: `rotate(${rotation}deg) translateX(-1px)`,
                animationDelay: `${idx * 0.5}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </div>

        {/* Brand Name */}
        <div className="mb-2">
          <h1 className="text-4xl font-light text-slate-800 dark:text-slate-100 tracking-wide">
            Agrawal Ply Decor
          </h1>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm font-light tracking-[0.2em] uppercase mb-8">
          Luxury Interior Design
        </p>

        {/* Progress Bar */}
        <div className="w-48 mx-auto mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent dark:via-teal-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 dark:from-teal-300 dark:to-cyan-300 animate-pulse opacity-50 rounded-full"></div>
            <div
              className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent dark:via-slate-100/80 opacity-80 animate-pulse"
              style={{
                animation: 'shimmer 2s infinite linear',
              }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-teal-600 dark:text-teal-300 text-sm font-light">
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
