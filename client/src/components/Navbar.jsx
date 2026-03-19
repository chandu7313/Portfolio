import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between p-6 sm:px-12 xl:px-20 z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-primary/5 py-4 shadow-sm' 
        : 'bg-transparent py-6 sm:py-8'
    }`}>
      
      {/* Brand / Logo */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className={`w-7 h-3 rounded-xl transition-all duration-500 group-hover:rotate-12 ${
          scrolled ? 'bg-primary shadow-sm' : 'bg-white'
        }`}></div>
        <span className={`font-black tracking-widest uppercase text-xs sm:text-sm transition-colors duration-500 ${
          scrolled ? 'text-textMain' : 'text-white'
        }`}>
          Chandra <span className={scrolled ? 'text-primary' : 'text-white/70'}>Mohan</span>
        </span>
      </div>

      {/* Center Links (Desktop only) */}
      <div className="hidden lg:flex items-center gap-10 ml-auto mr-12">
        {[
          { name: 'About', href: '#about' },
          { name: 'Skills', href: '#skills' },
          { name: 'Projects', href: '#projects' },
          { name: 'Training', href: '#training' },
          { name: 'Contact', href: '#contact' }
        ].map((item, i) => (
          <a 
            key={i} 
            href={item.href} 
            className={`transition-all duration-300 text-xs font-black uppercase tracking-widest hover:scale-110 ${
              scrolled ? 'text-textMain/70 hover:text-primary' : 'text-white/60 hover:text-white'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className={`transition-all duration-500 hover:rotate-90 ${
          scrolled ? 'text-textMain/60 hover:text-primary' : 'text-white/60 hover:text-white'
        }`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </button>
        {/* Mobile Menu Icon */}
        <button className={`lg:hidden transition-colors ${
          scrolled ? 'text-textMain' : 'text-white'
        }`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"></path></svg>
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
