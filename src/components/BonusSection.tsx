import { Hand, Eye } from 'lucide-react';

export default function BonusSection() {


  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[41px] leading-[49.2px] md:text-[64px] md:leading-[64px] tracking-[2.5px] font-black uppercase text-white mb-2">
            Bônus <span className="text-[#ED002A]">EXCLUSIVOS</span>
          </h2>
        </div>

        <div className="space-y-8 mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-red-600 p-8 rounded-lg hover:border-red-500 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center">
                  <Hand className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white uppercase">
                    Bônus 1: O SEGREDO DA MASSAGEM ERÓTICA QUE ENLOUQUECE QUALQUER MULHER!
                  </h3>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-500 line-through text-lg">DE R$197,00</span>
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">GRÁTIS</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Descubra como transformar o toque em uma arma de sedução. Aprenda técnicas secretas para despertar o prazer feminino e fazer com que ela implore por mais. Não é apenas uma massagem, é uma experiência que vai ficar gravada na memória dela para sempre. Prepare-se para ser o homem que ela nunca mais vai esquecer na cama.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-red-600 p-8 rounded-lg hover:border-red-500 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white uppercase">
                    Bônus 2: LEITURA FRIA: A ARTE DE LER A ALMA DELA SEM ELA PERCEBER!
                  </h3>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-500 line-through text-lg">DE R$147,00</span>
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">GRÁTIS</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Domine a técnica de Leitura Fria e faça com que qualquer mulher acredite que você a conhece profundamente, mesmo que seja a primeira vez que a vê. Aprenda a "adivinhar" seus pensamentos, desejos e medos, criando uma conexão instantânea e inexplicável. Ela vai se abrir para você como nunca se abriu para ninguém, porque sentirá que você é o único que realmente a entende. Este é o atalho para a intimidade e o controle da mente feminina.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Image Column - Left on Desktop, Bottom on Mobile */}
          <div className="relative order-2 md:order-1 w-full md:max-w-none flex justify-center md:justify-end">
            <div className="relative w-full md:w-[700px] aspect-square rounded-[60px] overflow-hidden shadow-2xl border border-white/10">

              <img
                src="/images/bonus-bed.jpg"
                alt="Bonus Especial"
                className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

          </div>

          {/* Text Column - Right on Desktop, Top on Mobile */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h3 className="text-[41px] leading-[49.2px] font-bebas md:text-[64px] md:leading-[64px] tracking-[2.5px] text-[#ED002A] mb-4 uppercase">
              PENSE BEM
            </h3>
            <p className="text-lg md:text-[24px] leading-[30px] text-white leading-relaxed mb-0">
              Chega de ser o coadjuvante. O ASSUNTO INFINITO não é um gasto, é um INVESTIMENTO na sua nova vida, na sua nova identidade. E o preço para ter o poder de conquistar qualquer mulher é ridículo perto do que você vai ganhar.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
