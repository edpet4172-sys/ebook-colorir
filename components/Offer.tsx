
import React, { useState, useEffect } from 'react';

const Offer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const themes = [
    "Dinossauros 🦖", "Evangélica 🙏", "Bobbie Goods ✨", "Nostalgia 📺", 
    "Cactos 🌵", "Frutas 🍎", "Animais 🐶"
  ];

  return (
    <section id="oferta" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-500 text-white font-bold text-sm mb-6 animate-pulse uppercase tracking-widest">
            Oferta Especial por Tempo Limitado
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Escolha o Pacote Perfeito</h2>
          <div className="flex items-center justify-center gap-4 text-orange-400 font-bold">
            <span className="flex items-center gap-1">⏱️ O tempo está acabando:</span>
            <span className="bg-slate-800 px-4 py-1 rounded-lg text-2xl font-mono border border-slate-700">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Básico */}
          <div className="bg-slate-800 rounded-[2.5rem] p-8 md:p-12 border-2 border-slate-700 hover:border-slate-600 transition-all flex flex-col shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Pacote Básico</h3>
            <p className="text-slate-400 mb-8">Ideal para uma tarde de diversão</p>
            
            <div className="mb-8">
              <span className="text-slate-400 line-through text-lg">De R$ 29,90</span>
              <div className="flex items-start gap-1">
                <span className="text-xl font-bold mt-2 text-orange-400">R$</span>
                <span className="text-6xl font-black">10,90</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <div className="bg-green-500/20 text-green-400 p-1 rounded-full text-xs">✓</div>
                <span className="font-bold">20 Desenhos Selecionados</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-500/20 text-green-400 p-1 rounded-full text-xs">✓</div>
                <span>Arquivo PDF de Alta Qualidade</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-500/20 text-green-400 p-1 rounded-full text-xs">✓</div>
                <span>Acesso Imediato</span>
              </li>
            </ul>

            <a 
              href="https://pay.cakto.com.br/cuzs4ct_731108" 
              target="_blank"
              className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-2xl font-bold text-xl text-center transition-all"
            >
              Escolher Básico
            </a>
          </div>

          {/* Plano Plus */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border-4 border-orange-500 relative flex flex-col shadow-[0_20px_50px_rgba(249,115,22,0.3)] transform md:scale-105 group">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-1 rounded-full font-black text-white uppercase tracking-widest text-xs shadow-lg">
              MAIS VENDIDO ⭐
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Mega Pacote Plus</h3>
            <p className="text-slate-500 mb-8 font-bold">A maior biblioteca de colorir da internet</p>
            
            <div className="mb-8">
              <span className="text-slate-400 line-through text-lg">De R$ 67,00</span>
              <div className="flex items-start gap-1">
                <span className="text-xl font-bold mt-2 text-orange-500">R$</span>
                <span className="text-6xl font-black text-slate-900">18,90</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow text-slate-700">
              <li className="flex items-center gap-3">
                <div className="bg-orange-100 text-orange-600 p-1 rounded-full text-xs">✓</div>
                <span className="font-bold text-orange-600">Mais de 200 Imagens Exclusivas</span>
              </li>
              <li className="flex flex-wrap gap-2 py-2">
                {themes.map((theme, i) => (
                  <span key={i} className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded-md text-slate-600">
                    {theme}
                  </span>
                ))}
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-yellow-100 text-yellow-600 p-1 rounded-full text-xs">🎁</div>
                <span className="font-bold">+ Desenhos de Bônus Semanais</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-100 text-orange-600 p-1 rounded-full text-xs">✓</div>
                <span>Acesso Vitalício & Atualizações</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-100 text-orange-600 p-1 rounded-full text-xs">✓</div>
                <span>Certificado de Pequeno Artista</span>
              </li>
            </ul>

            <a 
              href="https://pay.cakto.com.br/phhf74s_732699" 
              target="_blank"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-2xl text-center transition-all shadow-xl hover:shadow-orange-200 group-hover:scale-105 shadow-[0_10px_0_0_#c2410c] active:shadow-none active:translate-y-2"
            >
              QUERO AS 200+ IMAGENS! 🚀
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest">Pagamento 100% Seguro</p>
          <div className="flex items-center justify-center gap-6 opacity-60 grayscale brightness-200">
            <img src="https://logodownload.org/wp-content/uploads/2014/07/visa-logo-1.png" className="h-4" alt="Visa" />
            <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" className="h-6" alt="Master" />
            <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo.png" className="h-4" alt="Pix" />
          </div>
          <p className="mt-8 text-slate-500 text-sm flex items-center justify-center gap-2">
            🛡️ 7 dias de garantia incondicional
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
