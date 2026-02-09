
import React from 'react';

const previews = [
  "https://i.ibb.co/93r8hq5s/1.jpg",
  "https://i.ibb.co/BVwKcTZp/2.jpg",
  "https://i.ibb.co/4nLLLj0N/9f4aaa89f30c76aaca49e06d08ae3423.jpg",
  "https://i.ibb.co/0pRTJW8w/014ab09a4d97b7134255a6e5795ae089.jpg"
];

const Preview: React.FC = () => {
  // Doubling the array to ensure seamless infinite scroll
  const doublePreviews = [...previews, ...previews, ...previews, ...previews];

  return (
    <section id="preview" className="py-24 bg-pink-50/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Veja por dentro!</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dê uma espiada na qualidade dos nossos desenhos. Traços perfeitos para a diversão!
          </p>
        </div>
      </div>

      <div className="space-y-8 marquee-container">
        {/* Row 1: Left to Right (Reverse animation logic) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-6 px-3">
            {doublePreviews.map((src, idx) => (
              <div key={`row1-${idx}`} className="flex-none w-64 md:w-80 h-auto bg-white p-2 rounded-2xl shadow-md rotate-1 transform hover:rotate-0 transition-all duration-300">
                <img 
                  src={src} 
                  alt={`Preview ${idx + 1}`} 
                  className="rounded-xl w-full h-auto object-cover border border-slate-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-6 px-3">
            {doublePreviews.map((src, idx) => (
              <div key={`row2-${idx}`} className="flex-none w-64 md:w-80 h-auto bg-white p-2 rounded-2xl shadow-md -rotate-1 transform hover:rotate-0 transition-all duration-300">
                <img 
                  src={src} 
                  alt={`Preview ${idx + 1}`} 
                  className="rounded-xl w-full h-auto object-cover border border-slate-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center container mx-auto px-4">
        <p className="text-xl font-semibold text-slate-700 italic">"Os desenhos são lindos e fáceis de colorir!" - Mãe do Arthur, 4 anos</p>
      </div>
    </section>
  );
};

export default Preview;
