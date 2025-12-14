import React, { useRef, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Check, 
  Play, 
  ExternalLink,
  Star,
  Film,
  Loader2,
  AlertCircle,
  Clapperboard
} from 'lucide-react';
import { SlideProps, SlideContent } from '../types';

// --- Cinematic Animations (Optimized) ---
const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.03, // Even Faster stagger
      delayChildren: 0 // No delay for instant feel
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "linear" }
  }
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 }, 
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.4, 
      ease: EASE 
    }
  }
};

// --- Cinema Brick Background Component (Exported for Global Use) ---
export const CinemaBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#1f1212] pointer-events-none">
      {/* 1. Deep Base Brick Texture - Static */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(335deg, rgba(20, 10, 10, 0.8) 23px, transparent 23px),
            linear-gradient(155deg, rgba(20, 10, 10, 0.8) 23px, transparent 23px),
            linear-gradient(335deg, rgba(20, 10, 10, 0.8) 23px, transparent 23px),
            linear-gradient(155deg, rgba(20, 10, 10, 0.8) 23px, transparent 23px)
          `,
          backgroundSize: '58px 58px',
          backgroundPosition: '0px 2px, 4px 35px, 29px 31px, 34px 6px'
        }}
      />
      
      {/* 2. Static Atmosphere */}
      <div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-screen opacity-5 bg-repeat contrast-150 brightness-75 scale-150"
      />

      {/* 3. Static God Ray (Optimized opacity) */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vh] origin-top pointer-events-none z-0 opacity-15"
        style={{
          background: 'conic-gradient(from 225deg at 50% 0%, transparent 35deg, rgba(255, 160, 60, 0.08) 45deg, rgba(255, 180, 80, 0.15) 50deg, rgba(255, 160, 60, 0.08) 55deg, transparent 65deg)',
          filter: 'blur(30px)', 
          mixBlendMode: 'screen'
        }}
      />

      {/* 4. Static Hot Spot */}
      <div 
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(255,160,50,0.15)] via-[rgba(100,20,10,0.05)] to-transparent blur-[60px] pointer-events-none mix-blend-hard-light"
      />
      
      {/* 5. Deep Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(5,0,0,0.4)_50%,#0a0202_95%)] pointer-events-none"></div>
      
      {/* 6. Floor Reflection */}
      <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black via-[#1a0505] to-transparent pointer-events-none opacity-80 mix-blend-multiply"></div>
    </div>
  );
};

// --- Sub-Components ---

const MentorComment = ({ text }: { text?: string }) => {
  if (!text) return null;
  return (
    <motion.div 
      variants={itemVariants}
      className="absolute bottom-24 left-8 md:left-16 max-w-[calc(100%-4rem)] md:max-w-xl z-30"
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff8800] to-[#E50914] rounded-sm blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative bg-[#1a0f0f]/90 border-l-2 border-[#E50914] p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <p className="text-[#ffaa00] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
            <Film size={12} className="text-[#E50914]" />
            Director's Commentary
          </p>
          <p className="text-[#ffeedd] text-base md:text-lg font-light leading-relaxed tracking-wide font-sans">
            "{text}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Layouts ---

const HeroLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-6 md:px-24 relative z-10 w-full">
    <motion.div variants={itemVariants} className="mb-6 flex items-center gap-2 opacity-60">
      <Star size={16} className="text-[#ffcc00] fill-[#ffcc00]" />
      <span className="text-xs tracking-[0.3em] uppercase text-[#ffcc00] drop-shadow-[0_0_5px_rgba(255,200,0,0.5)]">Now Showing</span>
    </motion.div>

    <motion.h1 
      variants={itemVariants}
      className="text-6xl md:text-8xl xl:text-9xl font-black italic tracking-tighter text-white mb-8 uppercase leading-[0.9] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] w-full break-words pr-12 md:pr-16"
      style={{ textShadow: '0 0 30px rgba(229, 9, 20, 0.3)' }}
    >
      {data.title}
    </motion.h1>
    
    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
      <div className="h-[3px] w-24 bg-[#E50914] shadow-[0_0_15px_rgba(229,9,20,1)] box-shadow"></div>
      <div className="h-[3px] w-4 bg-[#ffcc00] shadow-[0_0_15px_rgba(255,204,0,1)]"></div>
    </motion.div>
    
    <motion.p 
      variants={itemVariants}
      className="text-xl md:text-2xl font-light text-[#eec] whitespace-pre-wrap leading-loose max-w-4xl tracking-wide pl-2 drop-shadow-md mix-blend-screen"
    >
      {data.subtitle}
    </motion.p>
  </div>
);

const ProfileLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col md:flex-row px-8 md:px-24 relative z-10 pt-24 md:pt-0">
    <div className="w-full md:w-5/12 flex flex-col justify-center mb-12 md:mb-0 border-r border-[#ffffff10] pr-0 md:pr-12 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#E50914] to-transparent shadow-[0_0_15px_rgba(229,9,20,0.9)] hidden md:block"></div>
      
      <motion.div variants={itemVariants} className="text-[#ffaa00] font-bold tracking-[0.3em] mb-6 text-sm uppercase flex items-center gap-2">
        <Star size={14} fill="currentColor" /> {data.title}
      </motion.div>
      <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none drop-shadow-xl break-words pr-8">
        {data.subtitle}
      </motion.h2>
      <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#ccb] font-light tracking-wide mb-10">
        {data.highlight}
      </motion.p>
    </div>

    <div className="w-full md:w-7/12 flex flex-col justify-center pl-0 md:pl-16">
      <div className="space-y-12">
        <div>
          <motion.h3 variants={itemVariants} className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-6 flex items-center gap-2 shadow-red-900">
            <span className="w-2 h-2 bg-[#E50914] rounded-full shadow-[0_0_8px_#E50914]"></span>
            Credits
          </motion.h3>
          <ul className="space-y-5">
            {data.items?.slice(0, 3).map((item, idx) => (
              <motion.li key={idx} variants={itemVariants} className="text-lg md:text-xl text-white font-light tracking-tight flex items-start gap-4 leading-relaxed drop-shadow-md">
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div>
          <motion.h3 variants={itemVariants} className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ffcc00] rounded-full shadow-[0_0_8px_#ffcc00]"></span>
            Filmography
          </motion.h3>
          <ul className="space-y-4">
            {data.items?.slice(3).map((item, idx) => (
              <motion.li key={idx} variants={itemVariants} className="text-base md:text-lg text-[#bbaaaa] font-light tracking-tight flex items-start gap-4 hover:text-white transition-colors leading-relaxed">
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const TextLeftLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 w-full">
    <motion.h2 
      variants={itemVariants}
      className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-16 uppercase opacity-100 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] break-words pr-8"
    >
      {data.title}
    </motion.h2>
    {data.subtitle && (
      <motion.div variants={itemVariants} className="text-3xl md:text-4xl text-[#ffaa00] font-bold mb-16 whitespace-pre-wrap leading-relaxed shadow-black drop-shadow-md">
        {data.subtitle}
      </motion.div>
    )}
    {data.items && (
      <div className="space-y-6 border-l-4 border-[#E50914] pl-8">
        {data.items.map((item, idx) => (
          <motion.div key={idx} variants={itemVariants} className="flex items-start gap-6 group cursor-default">
            <Check className="text-[#E50914] w-8 h-8 md:w-10 md:h-10 shrink-0 drop-shadow-[0_0_8px_rgba(229,9,20,0.8)] mt-1" />
            <span className="text-3xl md:text-5xl text-[#eeddcc] font-bold tracking-tight group-hover:text-white transition-colors leading-tight drop-shadow-sm">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    )}
  </div>
);

const ListLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 w-full">
    <div className="mb-20 relative">
      <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter z-10 relative drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] break-words pr-8">
        {data.title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -bottom-4 left-0 h-px bg-gradient-to-r from-[#E50914] via-[#8B0000] to-transparent shadow-[0_0_15px_#E50914]" 
      />
      {data.subtitle && (
        <motion.p variants={itemVariants} className="text-xl text-[#ccb] font-light mb-8 leading-relaxed pl-1">
          {data.subtitle}
        </motion.p>
      )}
    </div>
    
    <div className="space-y-8 pl-2">
      {data.items?.map((item, idx) => (
        <motion.div 
          key={idx} 
          variants={itemVariants} 
          className="flex items-center gap-8 group cursor-default"
        >
          <span className="text-2xl font-black text-[#E50914] font-display italic opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]">
            0{idx + 1}
          </span>
          <span className="text-3xl md:text-5xl text-[#eeddcc] font-bold tracking-tight block transition-all duration-300 group-hover:text-white group-hover:translate-x-2 shadow-none">
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const GridLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 w-full">
    <div className="mb-16">
      <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg break-words pr-8">
        {data.title}
      </motion.h2>
      {data.subtitle && <motion.p variants={itemVariants} className="text-2xl text-[#ffaa00] font-medium tracking-wide leading-relaxed">{data.subtitle}</motion.p>}
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.items?.map((item, idx) => (
        <motion.div 
          key={idx} 
          variants={itemVariants}
          className="bg-[#2a1a1a]/40 p-8 border border-[#ffffff10] hover:border-[#E50914]/60 hover:bg-[#2a1a1a]/80 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden shadow-2xl"
        >
          <span className="text-[#ffccaa]/30 font-mono text-sm mb-6 block group-hover:text-[#E50914] transition-colors">SCENE 0{idx + 1}</span>
          <h3 className="text-2xl font-bold text-white tracking-tight leading-relaxed drop-shadow-md">{item}</h3>
        </motion.div>
      ))}
    </div>
  </div>
);

const ScheduleLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center items-center px-8 relative z-10 text-center w-full">
    <motion.h2 variants={itemVariants} className="text-6xl md:text-9xl font-black text-white mb-24 uppercase italic tracking-tighter drop-shadow-[0_0_30px_rgba(255,100,0,0.3)] break-words w-full pr-12 md:pr-16">
      {data.title}
    </motion.h2>
    
    <motion.div variants={itemVariants} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#8B0000] to-[#E50914] rounded-lg blur opacity-20"></div>
        <div className="relative bg-[#1a0f0f] p-12 border border-[#ffffff10] flex flex-col justify-center items-center gap-6 shadow-2xl">
          <span className="text-gray-500 text-xs uppercase font-bold tracking-[0.4em]">Date & Period</span>
          <span className="text-3xl md:text-5xl text-white font-bold tracking-tight">
            {data.subtitle}
          </span>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#ffaa00] to-[#ffdd00] rounded-lg blur opacity-10"></div>
        <div className="relative bg-[#1a0f0f] p-12 border border-[#ffffff10] flex flex-col justify-center items-center gap-6 shadow-2xl">
          <span className="text-[#E50914] text-xs uppercase font-bold tracking-[0.4em]">Running Time</span>
          <span className="text-3xl md:text-4xl text-white font-bold tracking-tight">
            {data.highlight}
          </span>
        </div>
      </div>
    </motion.div>
  </div>
);

const CenterLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center items-center px-8 relative z-10 text-center w-full">
    <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white mb-12 uppercase tracking-tighter drop-shadow-xl break-words w-full pr-8">
      {data.title}
    </motion.h2>
    {data.subtitle && (
      <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-bold text-[#eec] mb-12 leading-loose tracking-tight max-w-5xl drop-shadow-md">
        {data.subtitle}
      </motion.p>
    )}
    {data.highlight && (
      <motion.div 
        variants={itemVariants} 
        className="relative group cursor-pointer mb-8"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-[#E50914] to-[#8B0000] rounded-sm blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="relative bg-[#0a0505]/90 text-[#E50914] px-14 py-6 text-2xl md:text-4xl font-black italic uppercase leading-none border border-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.2)] backdrop-blur-sm tracking-widest">
          {data.highlight}
        </div>
      </motion.div>
    )}
    
    {data.extraData?.qrCode && (
      <motion.div variants={itemVariants} className="flex flex-col items-center">
        <div className="bg-white p-3 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300 group">
          <img src={data.extraData.qrCode} alt="Contact QR" className="w-48 h-48 md:w-64 md:h-64 object-contain" />
        </div>
        <p className="mt-4 text-[#ffaa00] text-xs font-bold uppercase tracking-[0.4em] animate-pulse">Scan to Save Contact</p>
      </motion.div>
    )}
  </div>
);

const FinaleLayout: React.FC<{ data: SlideContent }> = ({ data }) => {
  const isContactSlide = !!data.extraData?.qrCode;

  return (
    <div className="h-full flex flex-col justify-center items-center px-4 md:px-16 relative z-10 text-center w-full overflow-visible">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(229,9,20,0.2)_0%,transparent_70%)] blur-[80px] pointer-events-none animate-pulse"></div>

      <motion.div variants={itemVariants} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Label */}
        <span className="text-[#ffcc00] font-mono text-sm md:text-base tracking-[0.5em] uppercase border-b border-[#ffcc00]/50 pb-2 mb-10 drop-shadow-[0_0_8px_rgba(255,204,0,0.6)]">
          {data.extraData?.subTitle2 || "PRESENTED BY"}
        </span>

        {isContactSlide ? (
           <div className="mb-10 relative">
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#aaaaaa] uppercase tracking-wider drop-shadow-sm mb-4">
                {data.subtitle?.split('\n')[0]}
              </h2>
              <div className="relative inline-block pr-6">
                <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase text-white relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
                   {data.subtitle?.split('\n')[1]}
                </h1>
                <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-[#E50914] to-[#8B0000] blur-sm opacity-60 transform translate-y-1 scale-105 pointer-events-none select-none">
                   {data.subtitle?.split('\n')[1]}
                </div>
              </div>
           </div>
        ) : (
           <div className="mb-12 relative w-full flex justify-center">
             {/* Title Wrapper: inline-block with generous padding to catch italic overflow */}
             <div className="relative inline-block">
                {/* Shadow/Glow Layer (Absolute) */}
                <h1 className="absolute inset-0 text-5xl md:text-8xl xl:text-9xl font-black italic tracking-tighter uppercase leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-[#E50914] to-[#550000] blur-[4px] opacity-70 transform translate-y-2 scale-105 pointer-events-none select-none pr-8 flex items-center justify-center">
                   {data.title}
                </h1>
                
                {/* Main Text Layer (Relative) - Padding Right accounts for slant */}
                <h1 className="relative z-10 text-5xl md:text-8xl xl:text-9xl font-black italic tracking-tighter uppercase leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#aaaaaa] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] pr-8">
                   {data.title}
                </h1>
             </div>
           </div>
        )}

        {/* Separator */}
        <div className="w-32 h-1.5 bg-[#E50914] rounded-full shadow-[0_0_20px_#E50914] mb-12"></div>

        {/* Subtitle / Description */}
        {!isContactSlide && (
            <div className="w-full max-w-5xl mx-auto mb-12 px-4">
                 <p className="text-xl md:text-3xl text-[#ffaa00] font-bold uppercase tracking-wide leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] whitespace-pre-wrap">
                   {data.subtitle}
                 </p>
            </div>
        )}

        {/* Highlights / Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {data.highlight && (
                <div className="flex flex-col items-center">
                    {isContactSlide && <span className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-2">Direct Contact</span>}
                    <div className={`text-3xl md:text-4xl font-bold text-white tracking-widest font-mono border border-white/20 px-8 py-4 bg-black/40 backdrop-blur-sm rounded-sm ${!isContactSlide ? 'hidden' : ''}`}>
                        {data.highlight}
                    </div>
                </div>
            )}
             {data.extraData?.qrCode && (
                <div className="relative group">
                  <div className="absolute -top-6 -right-6 text-[#E50914] opacity-50 transform rotate-12">
                      <Clapperboard size={48} />
                  </div>
                  <div className="p-1 bg-gradient-to-br from-[#ffcc00] via-[#E50914] to-[#8B0000] rounded-lg shadow-[0_0_50px_rgba(229,9,20,0.3)] group-hover:shadow-[0_0_80px_rgba(229,9,20,0.6)] transition-shadow duration-500">
                      <div className="bg-white p-2 rounded-md">
                          <img src={data.extraData.qrCode} alt="Contact QR" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
                      </div>
                  </div>
                  <p className="mt-4 text-[#ffaa00] text-[10px] font-bold uppercase tracking-[0.4em] text-center">Save Contact</p>
                </div>
              )}
        </div>

      </motion.div>
    </div>
  );
};

const PortfolioItem: React.FC<{ sample: any; idx: number; isVisible: boolean }> = ({ sample, idx, isVisible }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && !isLoading && !hasError) {
      videoRef.current.play().catch(e => console.log("Play failed", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isLoading && !hasError) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="aspect-[9/16] relative group overflow-hidden bg-black border border-[#ffffff10] rounded-sm cursor-pointer hover:border-[#E50914] hover:shadow-[0_0_40px_rgba(229,9,20,0.5)] transition-all duration-300 hover:scale-[1.01]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#1a0f0f]">
          <Loader2 className="w-8 h-8 text-[#E50914] animate-spin" />
        </div>
      )}

      {hasError && (
         <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#1a0f0f] text-white/50 gap-2">
            <AlertCircle className="w-8 h-8 text-white/30" />
            <span className="text-xs uppercase tracking-widest">Unavailable</span>
         </div>
      )}

      {isVisible && (
        <video
          ref={videoRef}
          src={sample.src}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-60 group-hover:opacity-100'} grayscale group-hover:grayscale-0`}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
      
      {!isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-16 h-16 bg-[#E50914]/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(229,9,20,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 backdrop-blur-sm border border-red-400">
            <Play className="text-white ml-1 w-6 h-6 fill-white" />
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
        <span className="text-[#E50914] text-[10px] font-bold uppercase tracking-widest mb-1 block">Project 0{idx + 1}</span>
        <p className="text-white font-bold uppercase text-lg tracking-tighter leading-none">{sample.title}</p>
      </div>
    </motion.div>
  );
};

const PortfolioLayout: React.FC<{ data: SlideContent; isActive?: boolean }> = ({ data, isActive = false }) => (
  <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 w-full">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#ffffff15] pb-8 gap-4">
        <div>
          <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] break-words w-full pr-8">
          {data.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#ccb] text-lg tracking-wide leading-relaxed pl-1">
            {data.subtitle}
          </motion.p>
        </div>
        
        {data.extraData?.link && (
            <motion.a 
                variants={itemVariants}
                href={data.extraData.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white bg-[#E50914] px-8 py-3 font-bold hover:bg-[#c40810] transition-all hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] uppercase tracking-widest text-xs md:text-sm rounded-[2px]"
            >
                View Archive <ExternalLink size={14}/>
            </motion.a>
        )}
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {data.extraData?.samples.map((sample: any, idx: number) => (
            <PortfolioItem key={idx} sample={sample} idx={idx} isVisible={isActive} />
        ))}
    </div>
  </div>
);

// --- Main Slide Component ---

export const NikeSlide: React.FC<SlideProps> = ({ data, isActive }) => {
  return (
    // REMOVED overflow-hidden and explicitly set relative, allowing overflow from child elements
    <div className="w-full h-full relative bg-transparent font-display">
      <motion.div
        className="w-full h-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        exit="exit"
      >
        {data.layout === 'hero' && <HeroLayout data={data} />}
        {data.layout === 'profile' && <ProfileLayout data={data} />}
        {data.layout === 'text-left' && <TextLeftLayout data={data} />}
        {data.layout === 'list' && <ListLayout data={data} />}
        {data.layout === 'grid' && <GridLayout data={data} />}
        {data.layout === 'schedule' && <ScheduleLayout data={data} />}
        {data.layout === 'center' && <CenterLayout data={data} />}
        {data.layout === 'portfolio' && <PortfolioLayout data={data} isActive={isActive} />}
        {data.layout === 'finale' && <FinaleLayout data={data} />}

        <MentorComment text={data.mentorComment} />
        
        <div className="absolute top-10 right-10 text-[#ffffff40] font-mono text-xl md:text-2xl font-bold z-20 flex items-center gap-2">
          <span>#</span>
          {data.id.toString().padStart(2, '0')}
        </div>
      </motion.div>
    </div>
  );
};