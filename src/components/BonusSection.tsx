import { Gift, Hand, Eye } from 'lucide-react';

export default function BonusSection() {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
            Bônus <span className="text-red-600">EXCLUSIVOS</span>
          </h2>
          <p className="text-xl text-gray-400">
            Ferramentas extras para dominar completamente o jogo
          </p>
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3807758/pexels-photo-3807758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          <div className="text-left">
            <h3 className="text-3xl font-bold text-red-600 mb-4 uppercase">PENSE BEM</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Chega de ser o coadjuvante. O <span className="text-white font-bold">ASSUNTO INFINITO</span> não é um gasto, é um <span className="text-white font-bold">INVESTIMENTO</span> na sua nova vida, na sua nova identidade. E o preço para ter o poder de conquistar qualquer mulher é ridículo perto do que você vai ganhar.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
