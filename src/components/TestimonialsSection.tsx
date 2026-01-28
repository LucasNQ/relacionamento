

export default function TestimonialsSection() {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-[46px] leading-[46px] tracking-[1.5px] font-black mb-16 text-center uppercase text-white">
          Feedbacks <span className="text-[#ED002A]">dos alunos</span>
        </h2>

        <div className="flex justify-center mb-16">
          <img
            src="/images/depoimento-print.png"
            alt="Depoimentos de alunos"
            className="w-full max-w-xs rounded-lg shadow-2xl border border-red-900/30"
          />
        </div>

        <div className="text-center">
          <div className="relative inline-block group isolate">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e80029] to-[#4c000e] rounded-sm animate-radar -z-10"></div>
            <button
              onClick={scrollToOffer}
              className="bg-gradient-to-br from-[#e80029] to-[#4c000e] hover:brightness-110 text-white font-bold text-[22px] md:text-[22px] leading-[22px] px-10 py-5 md:px-10 md:py-5 rounded-sm transition-all duration-300 transform hover:scale-105 relative z-10"
            >
              HORA DE MUDAR O JOGO!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
