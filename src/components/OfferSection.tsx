import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function OfferSection() {
  const { elementRef: card1Ref, isVisible: card1Visible } = useIntersectionObserver();
  const { elementRef: card2Ref, isVisible: card2Visible } = useIntersectionObserver();

  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offer-section" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-red-950/30 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[41px] leading-[49.2px] md:text-[48px] md:leading-[48px] tracking-[2.5px] font-black mb-2 uppercase text-[#ED002A]">
            CHEGA DE DESCULPAS!
          </h2>

          <p className="text-lg md:text-[22px] leading-[28px] text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Chega de ser o coadjuvante. O ASSUNTO INFINITO não é um gasto, é um <span className="text-white font-bold">INVESTIMENTO</span> na sua nova vida, na sua nova identidade. E o preço para ter o poder de conquistar qualquer mulher é ridículo perto do que você vai ganhar:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          <div
            ref={card1Ref}
            className={`rounded-2xl p-8 shadow-2xl border border-[#ed002a] opacity-0 ${card1Visible ? 'animate-slide-up' : ''}`}
            style={{ backgroundColor: '#181818' }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-[30px] leading-[30px] font-bold text-white mb-2">
                Plano Básico
              </h3>
              <p className="text-gray-400 text-lg md:text-[18px] leading-[18px]">Para quem quer começar</p>
            </div>

            <div className="text-center mb-8">
              <p className="text-red-600 line-through text-lg mb-2">De R$ 49,90</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-xl">R$</span>
                <span className="text-6xl font-bold md:text-[60px] leading-[50px] text-white">12</span>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-bold text-white">,90</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-2 uppercase font-bold">
                PAGAMENTO ÚNICO
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Módulo básico do método</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Técnicas fundamentais de conversa</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Acesso por 30 dias</span>
              </div>
            </div>

            <button
              onClick={scrollToOffer}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold text-lg px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              Começar Básico
            </button>

            <p className="text-center text-green-600 text-sm mt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Acesso liberado imediatamente
            </p>
          </div>

          <div
            ref={card2Ref}
            className={`rounded-2xl p-8 shadow-2xl border border-[#ed002a] relative opacity-0 ${card2Visible ? 'animate-slide-up' : ''}`}
            style={{ backgroundColor: '#181818' }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase">
                POPULAR
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Plano Completo
              </h3>
              <p className="text-gray-400">A solução completa e definitiva</p>
            </div>

            <div className="text-center mb-8">
              <p className="text-red-600 line-through text-lg mb-2">De R$ 97,90</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-xl">R$</span>
                <span className="text-6xl md:text-[60px] leading-[50px] font-bold text-white">29</span>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-bold text-white">,90</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-2 uppercase font-bold">
                PAGAMENTO ÚNICO
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Método completo do Assunto Infinito</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Acesso ao Grupo VIP exclusivo</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Bônus: Massagem Erótica</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Bônus: Leitura Fria</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Acesso vitalício</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Suporte prioritário</span>
              </div>
            </div>

            <button
              onClick={scrollToOffer}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Quero Garantir Agora
            </button>

            <p className="text-center text-green-600 text-sm mt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Acesso liberado imediatamente
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
