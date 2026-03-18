import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Zap } from 'lucide-react';

const Products = () => {
  const products = [
    {
      size: '50 ml',
      desc: 'Small plain white cups for espresso, tasting, or medicine dispensing.',
      tag: 'Tasting Size',
      img: '/small_white_50ml_cup_1773857513050.png',
      color: 'from-gray-100 to-gray-200',
      border: 'border-gray-200',
    },
    {
      size: '80 ml',
      desc: 'Our #1 bestseller — the perfect chai cup used by millions of tea stalls every single day.',
      tag: '⭐ Best Seller',
      isTop: true,
      img: '/red_nascafe_80ml_cup_1773857446851.png',
      color: 'from-red-50 to-orange-50',
      border: 'border-red-400',
    },
    {
      size: '100 ml',
      desc: 'Elegant coffee glass with attractive prints — ideal for cafés and offices.',
      tag: 'Coffee Special',
      img: '/brown_coffee_100ml_glass_1773857464016.png',
      color: 'from-amber-50 to-yellow-50',
      border: 'border-amber-200',
    },
    {
      size: '150 ml',
      desc: 'Bright yellow cups for a cheerful serving — popular at events.',
      tag: 'Sweet Day',
      img: '/yellow_sweetday_150ml_cup_1773857479143.png',
      color: 'from-yellow-50 to-lime-50',
      border: 'border-yellow-200',
    },
    {
      size: '210 ml',
      desc: 'Intricate floral designs for premium events, restaurants and catering.',
      tag: 'Sweetest Day',
      img: '/orange_sweetestday_210ml_cup_1773857496524.png',
      color: 'from-orange-50 to-red-50',
      border: 'border-orange-200',
    },
    {
      size: '250 ml',
      desc: 'Large cups perfect for juices, cold drinks and large beverages.',
      tag: 'Juice & More',
      img: '/large_colddrink_250ml_cup_1773857535354.png',
      color: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200',
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#f8faf5] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-100/50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100/50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-red-100 text-red-600 font-black px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-4">Our Products</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Paper Cup Sizes We Offer
            </h2>
            <p className="text-gray-600 text-lg">
              From small tea cups to large beverage cups — we manufacture all sizes with premium quality materials.
            </p>
          </motion.div>
        </div>

        {/* 80 ML MEGA HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-1 shadow-2xl shadow-red-500/30">
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-orange-600/20 rounded-full translate-y-1/2 blur-2xl pointer-events-none"></div>

              <div className="shrink-0 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl scale-150"></div>
                  <img
                    src="/red_nascafe_80ml_cup_1773857446851.png"
                    alt="80ml Tea Cup - Bestseller"
                    className="w-48 h-48 object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="text-center md:text-left relative z-10">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                  <Trophy size={24} className="text-yellow-400" fill="currentColor" />
                  <span className="text-yellow-300 font-black text-sm tracking-widest uppercase">Highest Selling Product in Our Company</span>
                  <Trophy size={24} className="text-yellow-400" fill="currentColor" />
                </div>
                <h3 className="text-white text-5xl md:text-7xl font-black mb-2">80 ML</h3>
                <p className="text-red-200 text-2xl font-bold mb-4">Tea / Chai Cup</p>
                <p className="text-red-100 text-lg max-w-lg leading-relaxed">
                  Our <strong className="text-white">most popular product</strong> — the classic 80ml paper cup trusted by thousands of tea stalls, vendors, offices and events across Gorakhpur and beyond.
                </p>
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">✅ Food Safe</span>
                  <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">✅ Leak Proof</span>
                  <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">✅ Bulk Available</span>
                  <span className="bg-yellow-500/20 text-yellow-200 px-4 py-2 rounded-full text-sm font-bold border border-yellow-400/30">⭐ #1 Bestseller</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-gradient-to-br ${product.color} rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 ${product.border} group relative ${product.isTop ? 'ring-4 ring-red-400/30 scale-[1.02]' : ''}`}
            >
              {product.isTop && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase flex items-center gap-1.5 shadow-lg shadow-red-500/40 z-10">
                  <Trophy size={12} fill="currentColor" />
                  Highest Selling
                  <Trophy size={12} fill="currentColor" />
                </div>
              )}
              <div className={`w-full aspect-square overflow-hidden rounded-2xl mb-5 bg-white/70 border border-white shadow-inner flex items-center justify-center p-4 ${product.isTop ? 'ring-4 ring-red-300/50' : ''}`}>
                <img
                  src={product.img}
                  alt={product.size}
                  className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className={`text-3xl font-black mb-2 ${product.isTop ? 'text-red-700' : 'text-gray-900'}`}>{product.size}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[48px]">{product.desc}</p>
              <span className={`inline-block px-4 py-1.5 ${product.isTop ? 'bg-gradient-to-r from-red-600 to-orange-500 shadow-lg shadow-red-500/30' : 'bg-gray-700'} text-white text-sm font-bold rounded-full`}>
                {product.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Custom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full translate-x-1/3 -translate-y-1/2 blur-2xl"></div>
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
              <Zap size={20} className="text-yellow-400" fill="currentColor" />
              <span className="text-yellow-400 font-black text-sm tracking-widest uppercase">Custom Manufacturing</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3">Need Custom Sizes or Printing?</h3>
            <p className="text-gray-300 text-lg">
              We also manufacture custom sizes with your <strong className="text-white">brand logo and design</strong>. Contact us for bulk orders.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-red-600/30"
            >
              Get Custom Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
