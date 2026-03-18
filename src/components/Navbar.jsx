import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Facility', href: '#facility' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo - Updated to Red/Blue identity */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-1 group"
          >
            <div className="flex items-center leading-none">
              <span className="text-4xl font-normal text-brand-red font-pacifico tracking-tight animate-pulse" style={{fontFamily: 'Pacifico, cursive', textShadow: '1px 1px 1px rgba(0,0,0,0.1)'}}>
                LA
              </span>
              <div className="flex flex-col ml-2">
                <span className="text-sm font-black text-brand-blue tracking-[0.1em] uppercase leading-none">
                  Laalji
                </span>
                <span className="text-[10px] text-brand-red font-black tracking-[0.15em] uppercase leading-none">
                  Associates
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`font-bold transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-brand-red' : 'text-white hover:text-brand-red'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2 rounded-xl font-black transition-all transform hover:scale-105 shadow-xl shadow-brand-red/20 uppercase text-sm"
            >
              Get Bulk Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-gray-900' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0.95, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto px-4 py-10"
          >
            <ul className="space-y-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-3xl font-black text-brand-blue-dark hover:text-brand-red transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-10">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="bg-brand-red text-white text-xl px-12 py-5 rounded-2xl font-black shadow-2xl inline-block"
                >
                  GET BULK QUOTE
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
