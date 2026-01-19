import { Shield } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              <span className="text-red-600">MINHA GARANTIA É<br />SIMPLES:</span> <span className="text-white">OU VOCÊ SE<br />TORNA UM PREDADOR,<br />OU SEU DINHEIRO VOLTA!</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Se em <span className="text-red-500 font-bold">30 dias</span> você não estiver <span className="text-red-500 font-bold">CONQUISTANDO mulheres</span> e sentindo o poder em suas mãos, eu devolvo cada centavo. Sem letras miúdas. Sem desculpas. Eu confio tanto no meu método que o risco é <span className="text-red-500 font-bold">100% meu</span>. Você tem coragem de aceitar o desafio?
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border-4 border-red-600 rounded-full flex items-center justify-center">
                <div className="absolute inset-4 border-2 border-red-600 rounded-full"></div>
                <div className="text-6xl font-black text-red-600">7</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-xs font-bold text-red-600 uppercase tracking-widest">
                  7 DIAS DE GARANTIA
                </div>
              </div>
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="pb-2 text-xs font-bold text-red-600 uppercase tracking-widest">
                  GARANTIA SEGURA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
