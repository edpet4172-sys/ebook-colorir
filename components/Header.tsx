
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-yellow-300 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
            Aventuras Coloridas
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="font-semibold text-slate-600 hover:text-pink-500 transition-colors">Benefícios</a>
          <a href="#preview" className="font-semibold text-slate-600 hover:text-pink-500 transition-colors">Espiada</a>
          <a href="#faq" className="font-semibold text-slate-600 hover:text-pink-500 transition-colors">Dúvidas</a>
        </nav>

        <a 
          href="#oferta" 
          className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-200 active:scale-95 text-sm md:text-base"
        >
          Garantir Agora
        </a>
      </div>
    </header>
  );
};

export default Header;
