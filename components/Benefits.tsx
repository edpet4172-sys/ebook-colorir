
import React from 'react';

const benefits = [
  {
    icon: '📄',
    title: 'Arquivo PDF Digital',
    description: 'Acesso imediato no seu e-mail após a compra. Nada de esperar pelo correio!',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: '🖨️',
    title: 'Pronto para Imprimir',
    description: 'Imprima em casa ou em qualquer gráfica, quantas vezes quiser.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: '♾️',
    title: 'Uso Ilimitado',
    description: 'Seu filho errou a cor? Imprima de novo! Diversão sem fim.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: '🧠',
    title: 'Desenvolvimento',
    description: 'Melhora comprovada da concentração e motricidade fina.',
    color: 'bg-orange-100 text-orange-600'
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Por que escolher nosso E-book?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Pensado pedagogicamente para transformar o tempo livre em aprendizado e alegria.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all text-center group">
              <div className={`w-16 h-16 rounded-2xl ${benefit.color} mx-auto flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
