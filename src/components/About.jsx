import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Award } from 'lucide-react';

const About = () => {
  const points = [
    'Hygienic Automated Manufacturing',
    'Bulk Orders Welcomed',
    'Factory-Direct Pricing',
    'Fast & Reliable Delivery',
    'FSSAI Compliant Cups',
    'Custom Printing Available',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images Grid - all local */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="/red_yellow_green_paper_cups_1773856760723.png"
                alt="Colorful Paper Cups - Laalji Associates"
                className="rounded-2xl w-full h-52 object-cover shadow-xl border border-gray-100"
              />
              <img
                src="/stack_of_red_tea_cups_1773856775041.png"
                alt="Stack of Tea Cups"
                className="rounded-2xl w-full h-64 object-cover shadow-xl border border-gray-100"
              />
            </div>
            <div className="space-y-4 pt-10">
              <img
                src="/paper_cup_machine_1_1773857554013.png"
                alt="Paper Cup Manufacturing Machine"
                className="rounded-2xl w-full h-64 object-cover shadow-xl border border-gray-100"
              />
              <img
                src="/paper_cup_machine_2_1773857569696.png"
                alt="Paper Cup Production Line"
                className="rounded-2xl w-full h-52 object-cover shadow-xl border border-gray-100"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-red-100 text-red-600 font-black px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-4">About Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Gorakhpur's Trusted<br />
              <span className="text-red-600">Paper Cup Factory</span>
            </h2>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">
              <strong className="text-gray-900 font-bold">LAA LJI Associates</strong> is a reputed paper glass manufacturing factory located at Dwarikapuri Colony, Rajendra Nagar, Gorakhpur. We specialize in producing high-quality disposable paper cups in various sizes to meet the diverse needs of our customers.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our cups are widely used by <strong className="text-gray-800">tea stalls, restaurants, hotels, event organizers, catering services, and distributors</strong>. We ensure premium quality, hygienic manufacturing, competitive pricing, and timely delivery.
            </p>

            {/* Award badge */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-4 mb-8 flex items-center gap-4">
              <div className="bg-red-600 p-3 rounded-xl shrink-0">
                <Award size={28} className="text-white" />
              </div>
              <div>
                <p className="font-black text-gray-900">🏆 Highest Selling: 80 ML Tea Cup</p>
                <p className="text-gray-600 text-sm">India's most-loved chai cup — manufactured at our Gorakhpur factory</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-red-100 p-1 rounded-full shrink-0">
                    <CheckCircle2 size={20} className="text-red-600" />
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-2xl transition-all transform hover:scale-105 shadow-lg shadow-red-600/30 group"
            >
              Contact Us Today
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
