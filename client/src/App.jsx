import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
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
      duration: 1, // Snappier
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
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
      <Navbar />
      {easterEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/20 backdrop-blur flex-col">
          <h1 className="text-6xl font-black text-primary font-mono drop-shadow-lg">ACCESS GRANTED</h1>
          <p className="text-textMain mt-4 font-mono text-xl">Easter egg unlocked. Proceed to hire immediately.</p>
        </div>
      )}
      
      {/* Full Width Hero Section (stays dark) */}
      <Hero />
      
      {/* Main Content Sections (light theme) */}
      <main className="relative z-10 w-full bg-background overflow-hidden rounded-t-[48px] -mt-12 shadow-[0_-20px_80px_rgba(0,0,0,0.08)]">
        
        {/* About: Mesh Gradient Background */}
        <div className="mesh-gradient relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20">
            <About />
          </div>
        </div>

        {/* Education: Solid background with subtle depth */}
        <div className="bg-surfaceSubtle relative z-10 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
            <Education />
          </div>
        </div>

        {/* Skills: Patterned background */}
        <div className="bg-background relative z-10">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]" style={{ 
            backgroundImage: 'radial-gradient(circle at center, rgba(79,70,229,0.06) 1.5px, transparent 1.5px)', 
            backgroundSize: '32px 32px' 
          }}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
            <Skills />
          </div>
        </div>

        {/* Projects: Subtle Background */}
        <div className="bg-surfaceSubtle relative z-10 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
            <Projects />
          </div>
        </div>

        {/* Training & Certifications: alternating */}
        <div className="bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
            <Training />
            <div className="h-px bg-border my-20" />
            <Certifications />
          </div>
        </div>

        {/* Contact: Highlighted section */}
        <div className="bg-surfaceSubtle relative z-10 border-t border-border rounded-t-[48px]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:pb-32 lg:pt-28">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
