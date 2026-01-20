export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-48 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-[120px]" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-red-800 rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-64 pb-20 text-center">
        <h1 className="text-[40px] leading-[35px] md:text-[64px] font-black mb-4 md:leading-[64px] text-[#ED002A] uppercase tracking-[2.5px]" >
          CHEGA DE SER O INVISÍVEL!
        </h1>

        <p className="text-[40px] leading-[35px] md:text-[64px] mb-8 font-bold max-w-4xl mx-auto md:leading-[64px] text-white uppercase font-bebas tracking-[2.5px]">
          Descubra como virar o jogo e ter qualquer mulher aos seus pés em 30 dias.
        </p>

        <p className="text-[20px] leading-snug md:text-[24px] text-white mb-12 max-w-3xl mx-auto md:leading-[30px]">
          Este não é mais um cursinho de autoajuda. É o maior método proibido, que já transformou mais de 30 mil alunos e vai te transformar no homem que elas imploram para ter, mesmo que você seja um zero à esquerda hoje.
        </p>
      </div>
    </section>
  );
}
