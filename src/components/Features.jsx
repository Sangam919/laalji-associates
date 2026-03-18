import React from 'react';
import { motion } from 'framer-motion';
import { CupSoda, ShieldCheck, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CupSoda size={40} className="text-brand-orange" />,
      title: '4+ Sizes Available',
      description: '80ml, 90ml, 110ml, 150ml, and custom sizes to fit all needs.',
    },
    {
      icon: <ShieldCheck size={40} className="text-brand-orange" />,
      title: '100% Quality Assured',
      description: 'Hygienic manufacturing process ensuring the best quality cups.',
    },
    {
      icon: <Truck size={40} className="text-brand-orange" />,
      title: 'Fast Bulk Delivery',
      description: 'Efficient production scale to handle large orders on time.',
    },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-20 relative z-10 -mt-10 lg:-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 text-center border border-gray-100"
            >
              <div className="mx-auto w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
