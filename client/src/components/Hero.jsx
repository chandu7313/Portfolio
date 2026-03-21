import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative z-20 w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-black selection:bg-white/20 selection:text-white">
      
      {/* Perfect Reference Background: Pure Black + Fine Grid + Elegant Golden Sweeps */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        {/* Fine Dotted Grid (matching reference density) */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen z-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)', 
          backgroundSize: '16px 16px' 
        }}></div>

        {/* Elegant Swoosh 1 (Main Sweeping Golden Curve passing behind the subject) */}
        {/* Achieved by using bottom-border of a massive oval, rotated slightly */}
        <div className="absolute -top-[30vh] sm:-top-[50vh] -left-[30vw] w-[160vw] h-[120vh] sm:h-[140vh] rounded-[100%] border-b-[4px] border-[#fde047] blur-[4px] shadow-[0_40px_120px_rgba(234,179,8,0.4)] transform -rotate-[10deg] pointer-events-none z-0"></div>
        <div className="absolute -top-[30vh] sm:-top-[50vh] -left-[30vw] w-[160vw] h-[120vh] sm:h-[140vh] rounded-[100%] border-b border-white blur-[1px] transform -rotate-[10deg] pointer-events-none z-0"></div>

        {/* Elegant Swoosh 2 (Subtle fading sweep intersecting) */}
        <div className="absolute -top-[100vh] -right-[40vw] w-[150vw] h-[160vh] rounded-[100%] border-b-[2px] border-[#eab308]/60 blur-[6px] shadow-[0_20px_80px_rgba(234,179,8,0.2)] transform rotate-[15deg] pointer-events-none z-0"></div>
      </div>
      
      {/* Bold Typography Grid - Absolute centered for perfect alignment */}
      <div className="absolute top-[12%] sm:top-[15%] lg:top-[18%] left-0 w-full flex justify-center z-10 pointer-events-none px-4 sm:px-10 xl:px-16 pt-8">
        <div className="w-full max-w-[1500px] flex justify-between items-start font-sans font-black uppercase text-white leading-[0.85] tracking-tight">
          
          {/* Left Side Block (Left Aligned) */}
          <div className="flex flex-col items-start gap-1 sm:gap-2">
            <motion.span initial={{x: -50, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.8}} style={{ willChange: 'transform, opacity' }} className="text-[14vw] xl:text-[130px]">CHANDRA</motion.span>
            <motion.span initial={{x: -50, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.8, delay:0.1}} style={{ willChange: 'transform, opacity' }} className="text-[14vw] xl:text-[80px] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">FULL STACK</motion.span>
          </div>
          
          {/* Right Side Block (Right Aligned) */}
          <div className="flex flex-col items-end gap-1 sm:gap-2">
            <motion.span initial={{x: 50, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.8}} style={{ willChange: 'transform, opacity' }} className="text-[14vw] xl:text-[130px]">MOHAN</motion.span>
            <motion.span initial={{x: 50, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.8, delay:0.1}} style={{ willChange: 'transform, opacity' }} className="text-[14vw] xl:text-[80px] bg-gradient-to-l from-yellow-400 to-orange-500 bg-clip-text text-transparent">DEVOPS</motion.span>
          </div>
          
        </div>
      </div>

      {/* Person Photo Area - Perfect Size & Alignment / No Space with Marquee */}
      <div className="absolute -bottom-[80px] sm:-bottom-[100px] lg:-bottom-[120px] left-1/2 -translate-x-1/2 w-[75%] sm:w-[60%] lg:w-[45%] max-w-[650px] h-[80vh] xl:h-[95vh] z-20 pointer-events-none flex justify-center items-end">
        <motion.img 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{ willChange: 'transform, opacity' }}
          src="/123.png" 
          alt="Chandra Mohan" 
          className="object-contain object-bottom w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] mix-blend-normal"
        />
      </div>

      {/* Content wrapper for left-side text */}
      <div className="relative w-full h-full flex items-end pb-20 sm:pb-28 px-4 sm:px-12 xl:px-20 max-w-[1800px] mx-auto z-30">
        <div className="max-w-[340px] flex flex-col items-start hidden sm:flex z-30 pointer-events-none mb-10">
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm mb-6 pointer-events-auto shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84cc16] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65a30d]"></span>
            </div>
            <span className="text-[13px] font-medium text-white/90">Available for freelance projects</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-[#a1a1aa] text-[15px] leading-relaxed font-medium mb-8 pr-10"
          >
            I build intelligent digital products that blend machine learning, full-stack engineering, and human-centred AI design.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center w-full pointer-events-auto"
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-black font-semibold px-6 py-2.5 rounded-full text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-lg"
            >
              Schedule Call <span className="text-lg leading-none outline-none">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Fixed gradient floor */}
      <div className="absolute bottom-11 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Banner — pure CSS, zero JS overhead */}
      <div className="absolute bottom-0 left-0 w-full bg-black/90 overflow-hidden flex items-center h-11 sm:h-12 z-40">
        <div className="flex" style={{ animation: 'marquee 35s linear infinite', willChange: 'transform' }}>
          {Array(8).fill([
            "TAILWINDCSS", "REACT", "NODE.JS", "EXPRESS.JS", "FASTAPI", "DOCKER", "GITHUB ACTIONS","SPRING BOOT","REDIS","MONGODB","POSTGRES","DSA"
          ]).flat().map((tech, i) => (
            <span key={i} className="flex items-center gap-3 sm:gap-4 whitespace-nowrap py-2 text-[10px] sm:text-xs font-mono text-white/50 tracking-[0.15em] font-medium uppercase mr-6 sm:mr-10">
              <div className="w-1.5 h-1.5 border border-white/30 rounded-full flex-shrink-0"></div> 
              {tech}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
