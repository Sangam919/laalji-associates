import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Award, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden z-0">
      {/* Real Factory Background */}
      <div className="absolute inset-0 z-[-2]">
        <img
          src="/factory_hero_bg.png"
          alt="Laalji Associates Paper Cup Factory"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Strong overlay for readability */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#1a0a0a]/92 via-[#1a0505]/80 to-[#8B0000]/40"></div>
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 z-[-1] bg-gradient-to-b from-black/40 to-transparent"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-red-500/30"
            style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-0.5 w-10 bg-red-500"></span>
            <span className="py-1.5 px-4 rounded-full bg-red-600/20 text-red-400 text-xs font-black tracking-widest uppercase border border-red-500/30 backdrop-blur-sm">
              🏭 Paper Cup Manufacturer — Gorakhpur
            </span>
          </motion.div>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-2 drop-shadow-2xl">
              LAALJI
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-4 drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400">
                ASSOCIATES
              </span>
            </h1>
            <p className="text-red-300 text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-8">
              Paper Cup Manufacturing
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"
          >
            Gorakhpur's trusted paper cup factory — supplying tea stalls, hotels, caterers & distributors across the region with <strong className="text-white">premium quality disposable cups</strong> at the best factory-direct prices.
          </motion.p>

          {/* 80ml Highlight Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 bg-gradient-to-r from-red-700 to-orange-600 rounded-2xl px-6 py-4 mb-8 shadow-2xl shadow-red-900/50 relative overflow-hidden max-w-md"
          >
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/5 rounded-l-full"></div>
            <div className="bg-white/20 p-2 rounded-xl shrink-0">
              <Star size={28} className="text-yellow-300" fill="currentColor" />
            </div>
            <div>
              <p className="text-yellow-200 text-xs font-black tracking-widest uppercase">🏆 Highest Selling Product</p>
              <p className="text-white text-2xl font-black">80 ML Tea Cup</p>
              <p className="text-red-100 text-xs">India's favourite — used by millions of tea stalls daily</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="inline-flex justify-center items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/40 uppercase tracking-wide group"
            >
              View All Products
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="tel:9120222909"
              className="inline-flex justify-center items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-2xl font-black text-lg transition-all uppercase tracking-wide"
            >
              <Phone size={20} className="text-red-400" />
              Call: 9120222909
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
          >
            <div>
              <p className="text-red-400 font-black text-3xl md:text-4xl">100M+</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Cups / Year</p>
            </div>
            <div>
              <p className="text-white font-black text-3xl md:text-4xl">6+</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Cup Sizes</p>
            </div>
            <div>
              <p className="text-orange-400 font-black text-3xl md:text-4xl">FREE</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Bulk Delivery</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-[-2px] left-0 right-0 w-full overflow-hidden leading-[0] z-[1]">
        <svg className="relative block w-full h-[70px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120L0 0L1200 120Z" className="fill-[#f8faf5]"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
