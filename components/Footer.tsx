
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-xl font-bold">Aventuras Coloridas</span>
          </div>
          
          <div className="flex gap-8 text-slate-500 font-medium text-sm">
            <a href="#" className="hover:text-pink-500">Termos de Uso</a>
            <a href="#" className="hover:text-pink-500">Privacidade</a>
            <a href="#" className="hover:text-pink-500">Suporte</a>
          </div>

          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Pinterest'].map(social => (
              <a key={social} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 hover:border-pink-300 hover:text-pink-500 transition-all shadow-sm">
                <span className="text-xs font-bold uppercase">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center text-slate-400 text-xs border-t border-slate-200 pt-8">
          <p>© {new Date().getFullYear()} Aventuras Coloridas. Todos os direitos reservados.</p>
          <p className="mt-2">O conteúdo deste e-book é para uso pessoal e não comercial. A reprodução total ou parcial é proibida.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
