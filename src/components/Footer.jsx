import React from 'react';
import { Coffee, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex flex-col items-start leading-none">
                <span className="text-4xl font-normal text-red-500 font-pacifico tracking-tight" style={{fontFamily: 'Pacifico, cursive'}}>
                  Laalji
                </span>
                <span className="text-[10px] text-yellow-400 font-black tracking-[0.2em] uppercase">
                  Associates
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm leading-relaxed text-sm">
              Premium paper cup manufacturing factory in Gorakhpur. Providing high-quality disposable paper cups for daily and commercial use across Uttar Pradesh.
            </p>
            <div className="bg-red-900/30 border border-red-800/50 rounded-xl p-4 max-w-sm">
              <p className="text-red-400 text-xs font-black uppercase tracking-wider mb-1">🏆 Highest Selling</p>
              <p className="text-white font-bold">80 ML Tea Cup — Our #1 Product</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-red-400 transition-colors">Our Products</a></li>
              <li><a href="#facility" className="hover:text-red-400 transition-colors">Manufacturing Facility</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Factory Address</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  LAA LJI ASSOCIATES<br />
                  Paper Cup Manufacturing<br />
                  Dwarikapuri Colony, Rajendra Nagar<br />
                  Gorakhnath Road, Gorakhpur — 273015
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-400 shrink-0" />
                <a href="tel:9120222909" className="hover:text-red-400 transition-colors font-semibold">+91 9120222909</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-400 shrink-0" />
                <a href="mailto:laaljigkp@gmail.com" className="hover:text-red-400 transition-colors break-all">laaljigkp@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {currentYear} LAA LJI Associates — Paper Cup Manufacturing, Gorakhpur. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all flex items-center justify-center transform hover:-translate-y-1 shadow-lg shadow-red-600/30"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
