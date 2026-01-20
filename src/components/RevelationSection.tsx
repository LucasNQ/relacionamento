import { Infinity } from 'lucide-react';

export default function RevelationSection() {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">

      {/* Background Image Container */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Desktop Image Styling - Left aligned */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-[60%]">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black z-10" />
          <img
            src="/images/revelation-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Mobile Image Styling - Starts below top, behind text */}
        <div className="md:hidden absolute left-0 right-0 bottom-0 top-[100px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
          <img
            src="/images/revelation-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-4 text-base leading-snug md:text-[24px] md:leading-[30px] text-white mb-8">
          <p>
            BASTA! Você está prestes a descobrir a VERDADE CRUA sobre a mente feminina. Não é sobre ser bonitinho, rico ou shaipado. É sobre PODER, CONTROLE e MANIPULAÇÃO da atração.
          </p>

          <p>
            Existe um ALGORITMO SECRETO que desvenda o desejo feminino. Uma vez que você o domina, elas se tornam PREVISÍVEIS, e você, IRRESISTÍVEL.
          </p>
        </div>

        <div className="mb-6 flex justify-center">
          <Infinity className="w-20 h-20 text-red-600" strokeWidth={2} />
        </div>

        <p className="text-base leading-snug md:text-[24px] md:leading-[30px] text-white mb-4 leading-relaxed">
          APRESENTO O ASSUNTO INFINITO O sistema que vai te transformar de presa em caçador, e te dar o controle total sobre suas interações com mulheres.
        </p>

        <p className="text-sm leading-snug md:text-[24px] md:leading-[30px] text-white mb-8 leading-relaxed">
          Este não é para os fracos. É para os homens que estão dispostos a esmagar a timidez e tomar o que é deles por direito: QUALQUER MULHER QUE DESEJAREM.
        </p>

        <button
          onClick={scrollToOffer}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-[31px] leading-[31px] px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          DEIXAR DE SER INVISÍVEL!
        </button>
      </div>
    </section>
  );
}
