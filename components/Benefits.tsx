
import React from 'react';

const benefits = [
  {
    icon: '✨',
    title: 'Diversão Sem Limites',
    description: 'Imprima quantas vezes quiser! Se o seu filho borrar ou quiser repetir o desenho, você tem o arquivo sempre à mão.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: '🚀',
    title: 'Acesso Instantâneo',
    description: 'Nada de esperar dias pela entrega. Comprou, baixou, imprimiu! Diversão garantida em menos de 5 minutos.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: '🎨',
    title: 'Traços Perfeitos',
    description: 'Desenhos com linhas nítidas e espaços ideais para crianças pequenas desenvolverem a coordenação motora.',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: '💰',
    title: 'Economia Real',
    description: 'Muito mais barato que livros de banca. Você paga uma vez e tem um acervo para usar o ano todo.',
    color: 'bg-green-100 text-green-600'
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Por que escolher nosso material?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Criamos cada página pensando no desenvolvimento criativo e na alegria de colorir, facilitando a vida dos pais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-[2.5rem] bg-white border-2 border-slate-50 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all text-center group">
              <div className={`w-16 h-16 rounded-2xl ${benefit.color} mx-auto flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-800">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;