import VSLPlayer from './VSLPlayer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function HeroSection() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-48 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-[120px]" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-red-800 rounded-full filter blur-[120px]" />
      </div>

      <div
        ref={elementRef}
        className={`relative z-10 max-w-5xl mx-auto px-6 pt-16 md:pt-32 pb-20 text-center opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
      >
        <h1 className="text-[32px] leading-[30px] tracking-[1.5px] md:text-[60px] font-black md:leading-[60px] text-[#ED002A] uppercase md:tracking-[2.5px]" >
          Por que eles dominam o jogo?
        </h1>

        <p className="text-[30px] leading-[30px] tracking-[1.5px] md:text-[60px] mb-8 font-bold max-w-4xl mx-auto md:leading-[60px] text-white uppercase font-bebas md:tracking-[2.5px]">
          Descubra como conquistar qualquer mulher nos próximos dias.
        </p>

        <p className="text-[18px] leading-snug md:text-[24px] text-white mb-12 max-w-3xl mx-auto md:leading-[30px]">
          O Manual Sujo da Conquista expõe as regras que ninguém nunca te contaram por que caras “legais” são ignorados, como alguns homens despertam desejo sem esforço e o que mudar agora para sair da friend zone e virar o jogo.
        </p>

        {/* --- AQUI ESTÁ A VSL INSERIDA --- */}
        {/* Inserimos antes do texto explicativo para reter atenção imediata */}
        <VSLPlayer />

        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e80029] to-[#4c000e] rounded-sm animate-radar -z-10"></div>
            <button
              onClick={() => document.getElementById('guarantee-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-br from-[#e80029] to-[#4c000e] hover:brightness-110 text-[20px] font-bold text-lg md:text-[22px] leading-[22px] px-10 py-5 md:px-10 md:py-5 rounded-sm transition-all duration-300 transform hover:scale-105 relative z-10"
            >
              HORA DE MUDAR O JOGO!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}