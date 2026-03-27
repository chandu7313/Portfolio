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
    <div className="relative w-full min-h-screen text-textMain selection:bg-primary/20 selection:text-primary">
      <CursorTracker />
      <Navbar />
      {easterEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 flex-col">
          <h1 className="text-6xl font-black text-white font-mono drop-shadow-lg">ACCESS GRANTED</h1>
          <p className="text-white mt-4 font-mono text-xl">Easter egg unlocked. Proceed to hire immediately.</p>
        </div>
      )}
      
      {/* Full Width Hero Section (stays dark) */}
      <Hero />
      
      {/* Main Content Sections (light theme) */}
      <main className="relative z-10 w-full bg-background overflow-hidden rounded-t-[48px] -mt-12 shadow-[0_-20px_80px_rgba(0,0,0,0.08)]">
        
        {/* About: Mesh Gradient Background */}
        <div className="mesh-gradient relative z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 pt-16 pb-20">
            <About />
          </div>
        </div>

        

        {/* Skills: Dark accordion section — background handled internally */}
        <div className="relative z-10">
          <Skills />
        </div>

        {/* Projects: Subtle Background */}
        <div className="bg-surfaceSubtle relative z-10 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-20 lg:py-28">
            <Projects />
          </div>
        </div>

        {/* Training & Certifications: alternating */}
        <div className="bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-20 lg:py-28">
            <Training />
            <div className="h-px bg-border my-20" />
            <Certifications />
          </div>
        </div>

        {/* Education: Solid background with subtle depth */}
        <div className="bg-surfaceSubtle relative z-10 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-20 lg:py-28">
            <Education />
          </div>
        </div>

        {/* Contact: Highlighted section */}
        <div className="bg-surfaceSubtle relative z-10 border-t border-border rounded-t-[48px]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-20 lg:pb-32 lg:pt-28">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
