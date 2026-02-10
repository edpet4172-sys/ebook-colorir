
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center rotate-3">
                <span className="text-white font-black">A</span>
              </div>
              <span className="text-xl font-black text-slate-900 uppercase tracking-tighter">Aventuras Coloridas</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed italic handwritten">
              Criado por pais artistas, para pais que buscam o melhor desenvolvimento para seus filhos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-6">Ajuda</h4>
              <nav className="flex flex-col gap-3 text-slate-500 text-sm font-bold">
                <a href="#faq" className="hover:text-orange-500 transition-colors">Dúvidas Comuns</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Suporte WhatsApp</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Rastrear Pedido</a>
              </nav>
            </div>
            <div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-6">Legal</h4>
              <nav className="flex flex-col gap-3 text-slate-500 text-sm font-bold">
                <a href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Reembolso</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            <p>© {new Date().getFullYear()} Aventuras Coloridas Digital. Todos os direitos reservados.</p>
            <p className="mt-1">ESTE É UM PRODUTO DIGITAL. NADA SERÁ ENVIADO PELOS CORREIOS.</p>
          </div>
          <div className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed">
            <img src="https://logodownload.org/wp-content/uploads/2014/07/visa-logo-1.png" className="h-3" alt="Visa" />
            <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" className="h-4" alt="Master" />
            <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo.png" className="h-3" alt="Pix" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
