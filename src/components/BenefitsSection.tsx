export default function BenefitsSection() {
  const benefits = [
    {
      title: 'DESTRUA A TIMIDEZ',
      description: 'Aborde qualquer mulher, em qualquer lugar, e faça ela implorar por sua atenção.'
    },
    {
      title: 'MANIPULE O DESEJO',
      description: 'Acenda a chama da atração em segundos e faça ela se curvar ao seu charme.'
    },
    {
      title: 'CONTROLE A CONVERSA',
      description: 'Guie a interação para onde você quiser, transformando um simples "oi" em um convite para a cama.'
    },
    {
      title: 'SEJA A OBSESSÃO DELA',
      description: 'Torne-se o homem que ela não consegue tirar da cabeça, o pesadelo dos outros caras.'
    },
    {
      title: 'ELIMINE A REJEIÇÃO',
      description: 'A rejeição será uma piada. Você terá tantas opções que ela se tornará irrelevante.'
    },
    {
      title: 'DOMINE A MENTE FEMININA',
      description: 'Entenda os gatilhos psicológicos que fazem as mulheres se renderem ao seu poder.'
    }
  ];

  return (

    <section className="relative py-20 md:py-32 bg-red-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/benefits-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/90 via-red-900/90 to-black/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column - Title & Subtitle */}
          <div className="text-center md:text-right">
            <h2 className="text-4xl md:text-[56px] lg:text-[64px] leading-tight tracking-[2.5px] font-black mb-6 uppercase text-white">
              O que você vai dominar com o ASSUNTO INFINITO:
            </h2>

            <p className="text-lg md:text-[24px] leading-[30px] text-white font-regular leading-relaxed md:ml-auto">
              Você não vai apenas conversar; você vai COMANDAR. Você não vai apenas atrair; você vai CONQUISTAR.
            </p>
          </div>

          {/* Right Column - Benefits List */}
          <div className="space-y-12 text-center md:text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-2xl md:text-[32px] leading-tight font-black text-white uppercase tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-[20px] leading-relaxed text-white/90 font-medium max-w-xl mx-auto md:mx-0">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
