
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-16 pb-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 font-bold text-sm mb-6 animate-bounce">
            🎨 Diversão 100% Longe das Telas!
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            <span className="text-orange-500 block mb-2">Menos Tela, Mais Criatividade!</span>
            Desperte o Artista no seu Pequeno com <span className="text-blue-500">Aventuras Coloridas!</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
            Mais de 50 desenhos exclusivos para colorir que estimulam a <strong>coordenação motora</strong>, o <strong>foco</strong> e a <strong>criatividade</strong> de crianças de 3 a 8 anos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#oferta" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-[0_10px_0_0_#c2410c] hover:shadow-[0_8px_0_0_#c2410c] transition-all transform hover:-translate-y-1 active:translate-y-1 active:shadow-none text-center uppercase tracking-wider"
            >
              Baixar Agora! 🚀
            </a>
            <div className="flex items-center gap-2 justify-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i+10}/100`} alt="Avatar" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-500">+1,200 pais já baixaram</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative z-10 p-2 bg-white rounded-3xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500 border border-slate-100">
            <img 
              src="https://i.ibb.co/kVHH6kR8/Whats-App-Image-2026-02-09-at-14-58-09.jpg" 
              alt="E-book Aventuras Coloridas" 
              className="rounded-2xl w-full h-auto object-cover"
            />
            {/* Overlay illustration placeholder */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 p-4 rounded-full shadow-lg border-4 border-white animate-pulse">
              <span className="text-3xl text-white">🖍️</span>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
