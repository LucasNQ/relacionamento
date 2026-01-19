export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-48 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-[120px]" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-red-800 rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-64 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight text-red-600 uppercase tracking-tight">
          CHEGA DE SER O INVISÍVEL!
        </h1>

        <p className="text-3xl md:text-4xl lg:text-5xl mb-8 font-bold max-w-4xl mx-auto leading-tight text-white uppercase">
          Descubra como virar o jogo e ter qualquer mulher aos seus pés em 30 dias.
        </p>

        <p className="text-base md:text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          Este não é mais um cursinho de autoajuda. É o maior método proibido, que já transformou mais de 30 mil alunos e vai te transformar no homem que elas imploram para ter, mesmo que você seja um zero à esquerda hoje.
        </p>
      </div>
    </section>
  );
}
