
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Elementos Decorativos "Handmade" */}
      <div className="absolute top-10 left-[5%] opacity-20 pointer-events-none hidden lg:block float-animation">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50 Q30 10 50 50 T90 50" stroke="#F472B6" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm text-pink-600 font-bold text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-ping"></span>
            Aprovado por mais de 3.400 famílias
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            Resgate a <span className="scribble-underline text-orange-500">imaginação</span> do seu pequeno artista.
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Chega de desenhos genéricos. Nossas ilustrações foram desenhadas à mão para encantar crianças e proporcionar <span className="font-bold text-slate-800">momentos de paz para os pais.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <a 
              href="#oferta" 
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-orange-700 rounded-2xl translate-y-2"></div>
              <div className="relative bg-orange-500 hover:bg-orange-400 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all transform hover:-translate-y-1 active:translate-y-1 active:shadow-none text-center uppercase tracking-wide">
                Quero o Material Agora! ✨
              </div>
            </a>
            
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex -space-x-3 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Mãe cliente" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                ⭐⭐⭐⭐⭐ 4.9/5 de satisfação
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          {/* Moldura de "Desenho Colado na Geladeira" */}
          <div className="relative z-10 p-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] -rotate-2 transform hover:rotate-0 transition-transform duration-700 border-8 border-white">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-8 bg-blue-400/30 -translate-y-6 opacity-80 rounded-sm"></div> {/* "Fita adesiva" */}
            <img 
              src="https://i.ibb.co/kVHH6kR8/Whats-App-Image-2026-02-09-at-14-58-09.jpg" 
              alt="E-book Aventuras Coloridas" 
              className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all"
            />
          </div>
          
          {/* Badge de Preço Flutuante */}
          <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 bg-yellow-300 text-slate-900 px-6 py-4 rounded-3xl shadow-xl border-4 border-white rotate-6 handwritten text-2xl font-bold">
            Apenas R$ 10,90 <br/> <span className="text-sm block text-center line-through opacity-50">R$ 29,90</span>
          </div>
          
          <div className="absolute -top-12 -right-8 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -left-8 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
