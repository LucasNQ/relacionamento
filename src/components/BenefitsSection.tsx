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
    <section className="relative py-20 md:py-32 bg-red-600 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2)',
          backgroundPosition: 'left center',
          backgroundSize: 'cover'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white">
              O que você vai dominar com o <span className="text-white">ASSUNTO INFINITO</span>
            </h2>

            <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
              Você não vai apenas conversar; você vai <span className="font-black">COMANDAR</span>. Você não vai apenas atrair; você vai <span className="font-black">CONQUISTAR</span>.
            </p>
          </div>

          <div className="md:col-span-1 space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <h3 className="text-xl md:text-2xl font-black mb-2 text-white uppercase">
                  {benefit.title}
                </h3>
                <p className="text-base text-white/95 leading-relaxed">
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
