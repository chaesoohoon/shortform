import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NikeSlide, CinemaBackground } from './components/Slides';
import { SLIDE_CONTENT } from './constants';

// --- Marquee Lights Component (Optimized - No Animation) ---
const MarqueeLights = () => {
  // Create an array for the bulbs
  const bulbs = Array.from({ length: 24 });

  return (
    <div className="absolute top-0 left-0 w-full h-16 bg-[#050000] z-50 flex items-center justify-between px-2 md:px-6 border-b-4 border-[#3a1515] shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden">
      {/* Background reflection/glow on the bar itself */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1111] to-black opacity-80"></div>

      {bulbs.map((_, i) => (
        <div
          key={i}
          className="relative w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#332200] border border-[#553300] shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)] opacity-90"
        >
          {/* Filament (The hot center) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#fffdd0] rounded-full blur-[0.5px] shadow-[0_0_4px_#ffcc00]"></div>
          
          {/* Bulb Glass Glow (The sphere) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffaa0066] to-transparent"></div>
          
          {/* External Halo (The bloom) */}
          <div className="absolute -inset-2 rounded-full bg-[#ffaa00] opacity-30 blur-md"></div>
          
          {/* Wall Reflection (The cast light) */}
          <div className="absolute -inset-12 rounded-full bg-[#ff6600] opacity-5 blur-xl pointer-events-none"></div>
        </div>
      ))}
      
      {/* Center Logo Area in Marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050000] px-8 py-2 border-2 border-[#5a1a1a] rounded shadow-[0_0_20px_rgba(0,0,0,1)] z-10 hidden md:block">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E50914]/20 to-transparent opacity-50"></div>
         <span className="relative text-[#E50914] font-black italic tracking-tighter text-2xl drop-shadow-[0_0_15px_rgba(229,9,20,0.8)]" style={{ textShadow: '0 0 10px rgba(229,9,20,0.6), 0 0 20px rgba(229,9,20,0.4)' }}>
           THE KUKJE CINEMA
         </span>
      </div>
    </div>
  );
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideCount = SLIDE_CONTENT.length;

  const navigate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return 0;
      if (next >= slideCount) return slideCount - 1;
      return next;
    });
  }, [slideCount]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      navigate(1);
    } else if (e.key === 'ArrowLeft') {
      navigate(-1);
    }
  }, [navigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    // Moved background color to App wrapper and inserted CinemaBackground here
    <div className="w-screen h-screen bg-[#1f1212] text-white flex flex-col relative overflow-hidden font-sans selection:bg-[#E50914] selection:text-white">
      
      {/* Optimized: Background renders once and persists */}
      <CinemaBackground />

      {/* Marquee Lights Header */}
      <MarqueeLights />

      {/* Cinematic Progress Bar (Below Lights) */}
      <div className="absolute top-16 left-0 w-full h-1 bg-[#2a1515] z-40">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#8B0000] via-[#E50914] to-[#ff4d4d] shadow-[0_0_20px_rgba(229,9,20,1)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />
      </div>

      {/* Main Slide Area */}
      <main className="flex-1 relative w-full h-full pt-16">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={{
              enter: (direction: number) => ({
                opacity: 0,
              }),
              center: {
                zIndex: 1,
                opacity: 1,
              },
              exit: (direction: number) => ({
                zIndex: 0,
                opacity: 0,
              })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.4, // Faster transition matching internal items
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-full h-full bg-transparent"
          >
             <NikeSlide data={SLIDE_CONTENT[currentSlide]} isActive={true} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls (Bottom Right) */}
      <div className="absolute bottom-10 right-10 z-40 flex gap-4">
        <button
          onClick={() => navigate(-1)}
          disabled={currentSlide === 0}
          className={`w-14 h-14 flex items-center justify-center border border-white/10 rounded-full transition-all hover:bg-white/5 backdrop-blur-sm group ${
            currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:border-[#E50914]/50'
          }`}
        >
          <ChevronLeft size={24} className="group-hover:text-[#E50914] transition-colors" />
        </button>
        <button
          onClick={() => navigate(1)}
          disabled={currentSlide === slideCount - 1}
          className={`w-14 h-14 flex items-center justify-center bg-[#E50914] text-white font-bold rounded-full transition-all hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(229,9,20,0.5)] hover:shadow-[0_0_40px_rgba(229,9,20,0.8)] border border-red-400/30 ${
            currentSlide === slideCount - 1 ? 'opacity-50 cursor-not-allowed bg-neutral-800 shadow-none border-none' : ''
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Footer / Institution Info - Bottom Center */}
      <div className="absolute bottom-8 w-full z-40 hidden md:flex justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-1 opacity-40">
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#E50914]/80 text-shadow-sm">
            Now Playing
          </p>
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#ffccaa] drop-shadow-md">
            Short-Form Content Creation Course
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;