import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'Education', href: '#education' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#07040d]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg' 
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
          
          {/* Logo with Green Angled Ribbons matching reference */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-4.5 bg-[#b5ff20] -skew-x-[22deg] rounded-[1.5px] transition-transform duration-300 group-hover:scale-105" />
              <div className="w-2.5 h-4.5 bg-[#b5ff20] -skew-x-[22deg] rounded-[1.5px] transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="font-extrabold text-white text-base sm:text-lg tracking-wider select-none">
              Chandra Mohan.
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-9">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  idx === 0 
                    ? 'text-white hover:text-[#b5ff20]' 
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Contact Me Button */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              data-cursor="pointer"
              className="bg-[#b5ff20] hover:bg-[#a6ec15] text-black font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#07040d]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-300 hover:text-[#b5ff20] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
