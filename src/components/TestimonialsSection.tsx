import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: 'Lucas M.',
      text: 'Cara, mudou minha vida completamente. Agora as mulheres ME procuram.',
      rating: 5
    },
    {
      name: 'Pedro S.',
      text: 'Finalmente entendi o jogo. Em 3 semanas já estava saindo com 5 mulheres diferentes.',
      rating: 5
    },
    {
      name: 'Rafael T.',
      text: 'Eu era invisível. Hoje sou o cara que elas querem. Valeu cada centavo.',
      rating: 5
    },
    {
      name: 'Bruno A.',
      text: 'Método brutal e direto. Sem enrolação. Resultados em dias.',
      rating: 5
    },
    {
      name: 'Mateus R.',
      text: 'Transformação total. De rejeitado a escolhido. Inacreditável.',
      rating: 5
    },
    {
      name: 'Thiago L.',
      text: 'Se você está em dúvida, pare de perder tempo. Funciona MESMO.',
      rating: 5
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-[64px] leading-[64px] tracking-[2.5px] font-black mb-16 text-center uppercase text-white">
          O que <span className="text-[#ED002A]">os alunos</span> acham
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-red-900/30 p-6 rounded-lg hover:border-red-600/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-red-500 font-bold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="relative inline-block group isolate">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e80029] to-[#4c000e] rounded-sm animate-radar -z-10"></div>
            <button
              onClick={scrollToOffer}
              className="bg-gradient-to-br from-[#e80029] to-[#4c000e] hover:brightness-110 text-white font-bold text-[22px] md:text-[31px] leading-[31px] px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 relative z-10"
            >
              DEIXAR DE SER INVISÍVEL!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
