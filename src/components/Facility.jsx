import React from 'react';
import { motion } from 'framer-motion';

const Facility = () => {
  const images = [
    {
      src: '/paper_cup_machine_1_1773857554013.png',
      alt: 'High-Speed Paper Cup Forming Machine',
    },
    {
      src: '/paper_cup_machine_2_1773857569696.png',
      alt: 'Quality Inspection Line',
    },
    {
      src: '/media__1773855757902.png',
      alt: 'Production Floor',
    },
    {
      src: '/media__1773856550197.png',
      alt: 'Cup Quality Check',
    },
    {
      src: '/media__1773857029077.png',
      alt: 'Finished Product Storage',
    },
  ];

  const stats = [
    { value: 'High-Speed', label: 'Automated Machines' },
    { value: '100M+', label: 'Cups Per Year' },
    { value: 'ISO', label: 'Hygienic Standards' },
    { value: '6+', label: 'Cup Sizes Made' },
  ];

  return (
    <section id="facility" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-red-100 text-red-600 font-black px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-4">Our Facility</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Manufacturing Excellence
            </h2>
            <p className="text-gray-600 text-lg">
              Equipped with high-speed automated paper cup manufacturing machinery for consistent quality and high daily output — right here in Gorakhpur.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center shadow-xl">
              <p className="text-red-400 font-black text-2xl md:text-3xl mb-1">{stat.value}</p>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 relative"
          >
            <div className="rounded-2xl overflow-hidden h-full group border-2 border-red-200/50 min-h-[280px]">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-bold p-6 text-xl tracking-wide">{images[0].alt}</p>
              </div>
            </div>
          </motion.div>

          {images.slice(1).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="relative rounded-2xl overflow-hidden aspect-square group border border-gray-200"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 text-sm tracking-wide">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
