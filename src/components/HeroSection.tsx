import VSLPlayer from './VSLPlayer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function HeroSection() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-48 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-[120px]" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-red-800 rounded-full filter blur-[120px]" />
      </div>

      <img
        src="/images/hero-sniper.webp"
        alt="Icone"
        className={`absolute top-10 inset-x-0 mx-auto w-48 z-20 mix-blend-screen ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      />

      <div
        ref={elementRef}
        className={`relative z-10 max-w-5xl mx-auto px-6 pt-64 pb-20 text-center opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
      >
        <VSLPlayer videoUrl="https://lpj-hoqoanid.on.adaptive.ai/cdn/gUcAi4q9pwLhmUaLHgHqBRkAKnFzWLfm-lpj-social-proof.mp4" />

        <h1 className="text-[30px] leading-[35px] md:text-[60px] font-black md:leading-[60px] text-[#ED002A] uppercase tracking-[2.5px]" >
          Por que eles dominam o jogo?
        </h1>

        <p className="text-[30px] leading-[35px] md:text-[60px] mb-4 font-bold max-w-4xl mx-auto md:leading-[60px] text-white uppercase font-bebas tracking-[2.5px]">
          Descubra como conquistar qualquer mulher nos próximos dias.
        </p>

        <p className="text-[18px] leading-snug md:text-[24px] text-white mb-12 max-w-3xl mx-auto md:leading-[30px]">
          O Manual Sujo da Conquista expõe as regras que ninguém nunca te contaram por que caras “legais” são ignorados, como alguns homens despertam desejo sem esforço e o que mudar agora para sair da friend zone e virar o jogo.
        </p>
      </div>
    </section>
  );
}
