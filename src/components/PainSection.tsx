export default function PainSection() {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Desktop Background Image - Absolute Right */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[60%] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img
          src="/images/pain-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="space-y-8 text-base leading-snug md:text-[24px] md:leading-[30px]">
            <p className="text-white">
              Você é o <span className="text-white uppercase">fracassado</span> que assiste de camarote enquanto outro cara leva a mulher que você <span className="text-white uppercase">deseja</span>. Você é o troféu de consolação, o amiguinho gay que ela usa pra desabafar sobre o cafajeste que a ignora, isso quando você consegue ser amigo dela.
            </p>

            <p className="text-white">
              Sua vida amorosa é um cemitério de oportunidades perdidas. Você é um fantasma no radar feminino, um zero à esquerda que nem sequer é notado. Dói, não dói? A verdade é que você é <span className="text-white uppercase">invisível</span>, um nada para elas.
            </p>

            <p className="text-white">
              Quantas vezes você foi o palhaço da turma, tentando fazer graça pra chamar a atenção dela, e ela só ria <span className="text-white uppercase">de você</span>, não <span className="text-white uppercase">com você</span>?
            </p>

            <p className="text-white">
              Quantas vezes você já foi isolado, esquecido, nunca foi um pensamento na cabeça dela.
            </p>

            <p className="text-white">
              Você está desperdiçando sua juventude, sua energia, sua vida, por medo de uma palavra. O tempo está passando, e você continua sendo o mesmo perdedor de sempre.
            </p>

            <button
              onClick={scrollToOffer}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-[31px] leading-[31px] px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              DEIXAR DE SER INVISÍVEL!
            </button>
          </div>
        </div>

        {/* Mobile Image - Full Width Block */}
        <div className="md:hidden mt-8 relative mx-[-24px] w-[calc(100%+48px)]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="/images/pain-bg.jpg"
            alt=""
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent z-10" />
    </section>
  );
}
