import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#07040d]">
      
      {/* ── TOP DARK ZONE ──────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#07040d] pt-28 sm:pt-36 lg:pt-36 pb-6 sm:pb-8 lg:pb-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-6 items-end">
            
            {/* ── LEFT COLUMN: Headline + Bio + CTA Buttons ── */}
            <div className="lg:col-span-7 xl:col-span-6 z-10 pb-8 sm:pb-12 lg:pb-24 xl:pb-28">
              
              {/* Bold Headline */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <h1 className="font-sans font-black text-white text-[42px] sm:text-[62px] md:text-[72px] lg:text-[68px] xl:text-[82px] tracking-tight leading-[0.93] uppercase select-none">
                  <span className="block text-white">CODING WITH</span>
                  
                  {/* Line 2 with Flame Emoji & text passing behind subject */}
                  <span className="block text-white whitespace-nowrap">
                    <span className="inline-block mr-2 sm:mr-3 text-3xl sm:text-5xl lg:text-[60px] xl:text-[72px] align-baseline">
                      🔥
                    </span>
                    <span>PASSION, CREATING</span>
                  </span>
                  
                  <span className="block text-white">WITH PURPOSE</span>
                </h1>
              </motion.div>

              {/* Subtitle Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-zinc-400 text-sm sm:text-base lg:text-[15px] xl:text-[16px] max-w-[440px] leading-relaxed mt-6 sm:mt-7 font-normal"
              >
                Hello and welcome to my web developer portfolio! I'm thrilled to showcase my passion for crafting captivating and functional websites.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-5 sm:gap-7 mt-8 sm:mt-10 flex-wrap"
              >
                {/* Primary: Let's Talk Pill */}
                <a
                  href="#contact"
                  data-cursor="pointer"
                  className="inline-flex items-center gap-3 bg-[#b5ff20] hover:bg-[#a6f010] text-black font-extrabold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_8px_25px_rgba(181,255,32,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-black shadow-sm transition-transform duration-300 group-hover:rotate-12 shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
                      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
                      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
                      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
                    </svg>
                  </span>
                  <span>Let's Talk</span>
                </a>

                {/* Secondary: Download CV with overlapping toggle-style circle */}
                <a
                  href="https://drive.google.com/file/d/1AfmXylZNdx_IIv4sNeC8igKT0izahqtF/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="pointer"
                  className="inline-flex items-center gap-3 text-white font-medium text-xs sm:text-sm group hover:text-[#b5ff20] transition-colors duration-300"
                >
                  <div className="relative flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#b5ff20] flex items-center justify-center text-black z-10 shadow-sm transition-transform duration-300 group-hover:scale-110 shrink-0">
                      <svg className="w-3.5 h-3.5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="w-8 h-8 rounded-full border border-white/60 -ml-4 z-0 group-hover:border-[#b5ff20]/60 transition-colors shrink-0"></span>
                  </div>
                  <span className="font-semibold underline-offset-4 group-hover:underline">Download CV</span>
                </a>
              </motion.div>

            </div>

            {/* ── RIGHT COLUMN: Unified Person + Violet Backdrop (Centered & Layered) ── */}
            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end items-end z-20 relative">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[350px] sm:w-[440px] md:w-[490px] lg:w-[510px] xl:w-[570px] 2xl:w-[620px] flex justify-center items-end translate-y-8 sm:translate-y-12 lg:translate-y-20 xl:translate-y-24 -mb-8 sm:-mb-12 lg:-mb-20 xl:-mb-24 pointer-events-none"
              >
                {/* 1. Tilted Violet Backdrop Card — Centered behind Chandu's torso and shoulders */}
                <div 
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[92%] h-[76%] sm:h-[78%] lg:h-[80%] bg-[#7047ff] rounded-[38px] sm:rounded-[44px] lg:rounded-[48px] xl:rounded-[54px] shadow-[0_25px_60px_rgba(112,71,255,0.45)] transform -rotate-[3.5deg] z-0"
                />

                {/* 2. Chandu Photo Cutout — Sits directly over the card with head towering into the dark zone */}
                <img
                  src="/chandu.png"
                  alt="Chandra Mohan"
                  className="relative z-10 w-full h-auto object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
                  loading="eager"
                />
              </motion.div>
            </div>

          </div>

        </div>
      </div>

      {/* ── BOTTOM WHITE ZONE ──────────────────────────────────────────────────── */}
      <div className="relative w-full bg-white border-t border-zinc-100 py-8 lg:py-10 z-0">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="lg:max-w-[620px] xl:max-w-[700px] z-10 relative">
            <p className="text-[13px] sm:text-sm font-bold text-zinc-900 tracking-normal mb-3">
              Follow Me:
            </p>
            <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap">
              {[
                { label: 'In.', title: 'LinkedIn', href: 'https://linkedin.com/in/chandu7313/' },
                { label: 'Gh.', title: 'GitHub', href: 'https://github.com/chandu7313' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  title={soc.title}
                  data-cursor="pointer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-zinc-400 text-zinc-800 flex items-center justify-center text-xs font-bold hover:border-black hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
                >
                  {soc.label}
                </a>
              ))}
              
              {/* Horizontal Line extending to the right */}
              <div className="hidden sm:block h-[1.5px] bg-zinc-300 w-28 md:w-40 lg:w-52 ml-2" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
