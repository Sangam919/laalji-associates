import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Products from './components/Products';
import Facility from './components/Facility';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-brand-bg">
      <Navbar />
      <main className="flex-grow pt-[72px]">
        <Hero />
        <Features />
        <About />
        <Products />
        <Facility />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
