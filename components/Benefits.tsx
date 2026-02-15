
import React from 'react';

const benefits = [
  {
    icon: '🖍️',
    title: 'Adeus Tédio',
    description: 'Mais de 200 páginas que prendem a atenção. O tempo de tela diminui naturalmente enquanto eles mergulham nas cores.',
    tag: 'Foco & Calma',
    color: 'border-blue-200'
  },
  {
    icon: '🖨️',
    title: 'Imprima e Repita',
    description: 'Errou? Borrou? Sem problemas. Imprima a mesma página quantas vezes quiser sem gastar com novos livros.',
    tag: 'Economia',
    color: 'border-pink-200'
  },
  {
    icon: '🧠',
    title: 'Habilidades Motoras',
    description: 'Traços desenvolvidos para ajudar na preensão do lápis e na firmeza da mãozinha, preparando para a escrita.',
    tag: 'Educativo',
    color: 'border-yellow-200'
  },
  {
    icon: '📩',
    title: 'Entrega a Jato',
    description: 'Não espere o correio. Receba o PDF segundos após a compra e comece a diversão hoje mesmo.',
    tag: 'Praticidade',
    color: 'border-green-200'
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Por que escolher nosso material?
          </h2>
          <p className="text-slate-500 text-lg">
            Diferente de livrinhos de banca com papel ruim e desenhos repetitivos, nosso material foi criado para ser uma experiência real de arte.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className={`bg-white p-8 rounded-[2rem] border-b-8 shadow-sm hover:shadow-xl transition-all ${benefit.color} group relative overflow-hidden`}>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-4xl mb-6 relative z-10">{benefit.icon}</div>
              
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                {benefit.tag}
              </span>
              
              <h3 className="text-xl font-black mb-3 text-slate-800">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
