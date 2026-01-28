import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function OfferSection() {
  const { elementRef: card1Ref, isVisible: card1Visible } = useIntersectionObserver();
  const { elementRef: card2Ref, isVisible: card2Visible } = useIntersectionObserver();

  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offer-section" className="relative py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[41px] leading-[49.2px] md:text-[54px] md:leading-[54px] tracking-[1.8px] md:tracking-[2.5px] font-black mb-2 uppercase text-[#ED002A]">
            CHEGA DE SER UM BETA!
          </h2>

          <p className="text-lg md:text-[22px] leading-[28px] text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            O Manual Sujo da Conquista não é um gasto, é um <span className="text-white font-bold">INVESTIMENTO</span>. Agora está em suas mãos decidir se você quer continuar sendo apenas um coadjuvante ou dominar o Jogo.
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
                DESPERTAR
              </h3>
              <p className="text-gray-400 text-lg md:text-[18px] leading-[18px]">Sua Jornada Começa Aqui</p>
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
                <span className="text-gray-300">O Manual Sujo da Conquista</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Bônus: Anti-Friend Zone</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Acesso liberado instantaneamente</span>
              </div>
            </div>

            <button
              onClick={scrollToOffer}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold text-lg px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              START
            </button>

            <div className="flex justify-center mt-4">
              <img
                src="/images/selo-seguranca.png"
                alt="Formas de Pagamento"
                className="h-6 object-contain grayscale"
              />
            </div>
          </div>

          <div
            ref={card2Ref}
            className={`rounded-2xl p-8 shadow-2xl border border-[#ed002a] relative opacity-0 ${card2Visible ? 'animate-slide-up' : ''}`}
            style={{ backgroundColor: '#181818' }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-[16px] uppercase">
                MAIS VENDIDO
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                DOMINAÇÃO
              </h3>
              <p className="text-gray-400 text-lg md:text-[18px] leading-[18px]">A transformação completa que você precisa</p>
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
                <span className="text-gray-300 font-semibold">O Manual Sujo da Conquista</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Como Ser um Leão no Carnaval</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Bônus: Anti-Friend Zone</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Bônus: A Estratégia que eles Não te Contam</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Acesso liberado instantaneamente</span>
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

            <div className="flex justify-center mt-4">
              <img
                src="/images/selo-seguranca.png"
                alt="Formas de Pagamento"
                className="h-6 object-contain grayscale"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
