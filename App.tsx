
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Preview from './components/Preview';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen blob-bg selection:bg-pink-100 selection:text-pink-600">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Preview />
        <Testimonials />
        <Offer />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] md:hidden">
        <a 
          href="#oferta" 
          className="flex items-center justify-center bg-orange-500 text-white py-4 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(249,115,22,0.4)] animate-pulse uppercase tracking-wider border-b-4 border-orange-700"
        >
          🎁 GARANTIR MEU E-BOOK!
        </a>
      </div>
    </div>
  );
}

export default App;
