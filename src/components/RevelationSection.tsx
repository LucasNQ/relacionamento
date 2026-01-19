import { Infinity } from 'lucide-react';

export default function RevelationSection() {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" style={{ zIndex: 1 }} />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            <span className="text-white">BASTA!</span>
          </h2>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-300 mb-8 max-w-3xl mx-auto">
            <p>
              Você está prestes a descobrir a <span className="text-red-500 font-bold">VERDADE CRUA</span> sobre a mente feminina. Não é sobre ser bonitinho, rico ou shaipado. É sobre <span className="text-red-500 font-bold">PODER, CONTROLE e MANIPULAÇÃO</span> da atração.
            </p>

            <p className="text-lg md:text-xl font-bold text-white">
              Existe um <span className="text-red-600">ALGORITMO SECRETO</span> que desvenda o desejo feminino.
            </p>

            <p>
              Uma vez que você o domina, elas se tornam <span className="text-red-500 font-bold">PREVISÍVEIS</span>, e você, <span className="text-red-500 font-bold">IRRESISTÍVEL</span>.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block mb-6">
            <Infinity className="w-20 h-20 text-red-600 mx-auto" strokeWidth={2} />
          </div>

          <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase">
            <span className="text-white">Apresento o </span>
            <span className="text-red-600">ASSUNTO INFINITO</span>
          </h3>

          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            O sistema que vai te transformar de presa em caçador, e te dar o controle total sobre suas interações com mulheres.
          </p>

          <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Este não é para os fracos. É para os homens que estão dispostos a esmagar a timidez e tomar o que é deles por direito: <span className="text-red-500 font-bold">QUALQUER MULHER QUE DESEJAREM</span>.
          </p>

          <button
            onClick={scrollToOffer}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/50"
          >
            DEIXAR DE SER INVISÍVEL!
          </button>
        </div>
      </div>
    </section>
  );
}
