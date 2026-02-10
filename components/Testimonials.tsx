
import React from 'react';

const socialProofImages = [
  "https://i.ibb.co/LX4KjPRT/img-0136-1.png",
  "https://i.ibb.co/PG8F4T6m/img-0136-3.png",
  "https://i.ibb.co/R4N6wSFQ/img-0136-4.png"
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Divisor Ondulado Superior */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[100%] scale-x-110 -translate-y-1"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Relatos de Famílias Reais</h2>
          <p className="text-slate-400 font-medium max-w-xl mx-auto">
            Veja o que as mamães estão postando e compartilhando. Prova real de que o material encanta e diverte de verdade!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {socialProofImages.map((src, idx) => (
            <div 
              key={idx} 
              className={`relative group bg-white p-2 md:p-3 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:z-20 ${
                idx === 1 ? 'md:rotate-2' : idx === 0 ? 'md:-rotate-1' : 'md:-rotate-2'
              }`}
            >
              {/* Efeito de Fita Adesiva Decorativa */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 md:w-24 h-6 md:h-8 bg-white/30 backdrop-blur-md rounded-sm z-20 pointer-events-none shadow-sm"></div>
              
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={src} 
                  alt={`Prova Social ${idx + 1}`} 
                  className="w-full h-auto object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Badge de Verificado */}
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg scale-90 md:scale-100 group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center flex flex-col items-center">
          <div className="bg-white/10 px-8 py-4 rounded-3xl flex flex-col md:flex-row items-center gap-4 mb-6 border border-white/5">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-green-400">ATIVO AGORA</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <span className="text-sm font-medium text-slate-300">
              <strong className="text-white">14 famílias</strong> adquiriram o material nas últimas 2 horas
            </span>
          </div>
          
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            CONTEÚDO 100% ORIGINAL & EXCLUSIVO
          </p>
        </div>
      </div>
      
      {/* Decoração de fundo */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
