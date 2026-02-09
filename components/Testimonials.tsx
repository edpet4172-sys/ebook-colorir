
import React from 'react';

const reviews = [
  {
    name: "Mariana Silva",
    child: "Mãe do Leo (5 anos)",
    text: "O melhor investimento que fiz este mês. O Leo fica horas concentrado e as cores estão ficando lindas!",
    avatar: "https://picsum.photos/seed/m1/100"
  },
  {
    name: "Clara Guedes",
    child: "Mãe da Bia (3 anos)",
    text: "Amei que posso imprimir só o desenho que ela quer no dia. Economizo muito com livros de banca!",
    avatar: "https://picsum.photos/seed/m2/100"
  },
  {
    name: "Renata Costa",
    child: "Mãe do Pedro (7 anos)",
    text: "Os traços são ótimos. Ele está desenvolvendo muito a paciência e o foco.",
    avatar: "https://picsum.photos/seed/m3/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">O que as Mamães estão dizendo...</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-sky-50 relative flex flex-col items-center text-center">
              <div className="absolute -top-6 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-8 mb-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-700 italic mb-6">"{rev.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-slate-900">{rev.name}</p>
                <p className="text-sm text-slate-500">{rev.child}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
