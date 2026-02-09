
import React, { useState } from 'react';

const faqItems = [
  {
    question: "Como vou receber o produto?",
    answer: "Após a confirmação do pagamento, você receberá um link de download automaticamente no seu e-mail cadastrado. O acesso é imediato para pagamentos via Cartão ou Pix."
  },
  {
    question: "Posso imprimir quantas vezes eu quiser?",
    answer: "Sim! Uma das maiores vantagens do arquivo digital é que você pode imprimir o mesmo desenho várias vezes para o seu filho treinar ou se divertir novamente."
  },
  {
    question: "O produto serve para qual idade?",
    answer: "Os desenhos foram selecionados para crianças entre 3 e 8 anos, com traços variando de simples a levemente mais detalhados para acompanhar o desenvolvimento deles."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos Cartão de Crédito (com parcelamento), Pix e Boleto Bancário através de nossa plataforma de pagamento segura."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-800">{item.question}</span>
                <span className={`text-2xl transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
