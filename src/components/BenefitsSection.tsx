export default function BenefitsSection() {
  const benefits = [
    {
      title: 'ATRAIA COMO UM "CAFAJESTE"',
      description: 'Aprenda o porque muitos "cafajestes" pegam mulheres facilmente e use isso a seu favor.'
    },
    {
      title: 'SAIA DA FRIEND ZONE',
      description: 'Aprenda a sair da friend zone sem acabar com a amizade.'
    },
    {
      title: 'SER UM LEÃO NO CARNAVAL',
      description: 'Conquiste qualquer mulher no carnaval.'
    },
    {
      title: 'COMO GERAR PRESENÇA',
      description: 'Aprenda a gerar presença e fazer com que as mulheres se conectem com você.'
    },
    {
      title: 'APRENDA A SER REJEITADO',
      description: 'Não se importe com a rejeição e aprenda a lidar com ela.'
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
            <h2 className="text-4xl md:text-[40px] lg:text-[48px] leading-tight tracking-[1.5px] font-black mb-6 uppercase text-white">
              O que você vai dominar com o MANUAL SUJO DA CONQUISTA:
            </h2>
          </div>

          {/* Right Column - Benefits List */}
          <div className="space-y-12 text-center md:text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-2xl md:text-[26px] leading-tight font-black text-white uppercase tracking-wide">
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
