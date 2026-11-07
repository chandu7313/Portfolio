import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import CursorTracker from './components/CursorTracker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [easterEgg, setEasterEgg] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Easter Egg logic: type 'sudo hire-me'
  useEffect(() => {
    let keys = "";
    const target = "sudo hire-me";
    const handler = (e) => {
      keys += e.key;
      if (keys.length > target.length) {
        keys = keys.slice(keys.length - target.length);
      }
      if (keys.toLowerCase() === target) {
        setEasterEgg(true);
        setTimeout(() => setEasterEgg(false), 5000);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white selection:bg-[#b5ff20]/25 selection:text-[#b5ff20] bg-[#070510]">
      <CursorTracker />
      <Navbar />
      {easterEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#7047ff]/90 flex-col backdrop-blur-xl">
          <h1 className="text-6xl font-black text-white font-mono drop-shadow-lg">ACCESS GRANTED</h1>
          <p className="text-[#b5ff20] mt-4 font-mono text-xl">Easter egg unlocked. Proceed to hire immediately.</p>
        </div>
      )}
      
      {/* Full Width Hero Section (Untouched) */}
      <Hero />
      
      {/* Main Content Sections (Luxury Dark Theme with Cyber Glows) */}
      <main className="relative z-10 w-full bg-[#070510] text-white overflow-hidden">
        
        {/* Subtle transition gradient from hero's bottom white bar */}
        <div className="w-full h-16 sm:h-24 bg-gradient-to-b from-white via-zinc-200/40 to-[#070510] relative z-10" />

        {/* About: High-Tech Bento Matrix */}
        <div className="relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-28">
            <About />
          </div>
        </div>

        {/* Skills: Interactive Matrix & Live Marquee */}
        <div className="relative z-10 border-t border-white/5 bg-[#090716]/60">
          <Skills />
        </div>

        {/* Projects: Cinematic Video Showcase */}
        <div className="relative z-10 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-24 lg:py-32">
            <Projects />
          </div>
        </div>

        {/* Certifications & Training */}
        <div className="relative z-10 border-t border-white/5 bg-[#090716]/60">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-24 lg:py-32">
            <Certifications />
            <div className="h-px bg-white/10 my-24" />
            <Training />
          </div>
        </div>

        {/* Education: Interactive Roadmap */}
        <div className="relative z-10 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-24 lg:py-32">
            <Education />
          </div>
        </div>

        {/* Contact: Command Center */}
        <div className="relative z-10 border-t border-white/10 bg-[#06040e]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-24 lg:pb-36 lg:pt-28">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
