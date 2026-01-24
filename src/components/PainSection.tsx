export default function PainSection() {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Desktop Background Image - Absolute Right */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[60%] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img
          src="/images/pain-bg.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="space-y-8 text-base leading-snug md:text-[18px] md:leading-[24px]">
            <p className="text-white">
              Você já cansou de assistir de fora enquanto outro cara <span className="text-white uppercase">leva</span> a mulher que você queria. De ser o amigo que escuta, apoia, faz tudo certo… e mesmo assim <span className="text-white uppercase">nunca</span> é escolhido. Não porque você é inútil, mas porque ninguém nunca te ensinou como o jogo realmente funciona.
            </p>

            <p className="text-white">
              A verdade dói: caras “legais” não são rejeitados por serem bons, mas por não despertarem <span className="text-white uppercase">desejo</span>. Enquanto alguns homens parecem conseguir pegar qualquer mulher sem esforço, você fica preso na friend zone, invisível, tentando entender como eles conseguem e você não.
            </p>

            <p className="text-white">
              O Manual Sujo da Conquista revela as regras que nunca te contaram: por que certos comportamentos afastam mulheres, o que realmente cria atração e o que você precisa mudar agora para virar o jogo.
            </p>

            <p className="text-white">
              Não é sobre virar outra pessoa é sobre parar de jogar errado e finalmente conquistar qualquer mulher nos próximos dias.
            </p>

            <div className="text-center md:text-left">
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e80029] to-[#4c000e] rounded-sm animate-radar -z-10"></div>
                <button
                  onClick={scrollToOffer}
                  className="bg-gradient-to-br from-[#e80029] to-[#4c000e] hover:brightness-110 text-[22px] font-bold text-lg md:text-[22px] leading-[22px] px-10 py-5 md:px-6 md:py-4 rounded-sm transition-all duration-300 transform hover:scale-105 relative z-10"
                >
                  DEIXAR DE SER INVISÍVEL!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image - Full Width Block */}
        <div className="lg:hidden mt-8 relative mx-[-24px] w-[calc(100%+48px)] block">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="/images/pain-bg.webp"
            alt=""
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent z-10" />
    </section>
  );
}
