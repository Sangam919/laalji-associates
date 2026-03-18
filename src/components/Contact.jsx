import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#f8faf5] relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-red-100 text-red-600 font-black px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-4">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to place a bulk order? Have questions? Reach out — we respond fast!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

              <div className="space-y-7">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-xl text-white shrink-0 shadow-lg shadow-red-600/30">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-0.5">Phone</h4>
                    <a href="tel:9120222909" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-semibold">
                      +91 9120222909
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-xl text-white shrink-0 shadow-lg shadow-red-600/30">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-0.5">Email</h4>
                    <a href="mailto:laaljigkp@gmail.com" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-semibold break-all">
                      laaljigkp@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-xl text-white shrink-0 shadow-lg shadow-red-600/30">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-0.5">Factory Address</h4>
                    <p className="text-gray-700 text-base leading-relaxed font-semibold">
                      LAA LJI ASSOCIATES<br />
                      <span className="font-normal text-gray-600">Paper Cup Manufacturing</span><br />
                      Dwarikapuri Colony, Rajendra Nagar<br />
                      Gorakhnath Road, Gorakhpur — 273015<br />
                      <span className="text-sm text-gray-500">Uttar Pradesh, India</span>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-xl text-white shrink-0 shadow-lg shadow-red-600/30">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-0.5">Working Hours</h4>
                    <p className="text-gray-700 text-base">Monday – Saturday: 8 AM – 7 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <a
                href="tel:9120222909"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-600/30"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/919120222909"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 px-6 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/30"
              >
                <MessageSquare size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.64547285196!2d83.3768222!3d26.7578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144365f12e8c5%3A0xe5a3634ed1a83db6!2sRajendra%20Nagar%2C%20Gorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710787000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laalji Associates Location - Rajendra Nagar, Gorakhpur"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
