
export default function BonusSection() {


  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[41px] leading-[49.2px] md:text-[48px] md:leading-[48px] tracking-[2.5px] font-black uppercase text-white">
            Bônus <span className="text-[#ED002A]">EXCLUSIVOS</span>
          </h2>
        </div>

        <div className="space-y-8 mb-16">
          {/* Card 1 */}
          <div className="bg-[#181818] border-t-2 border-red-600 rounded-2xl p-8 text-center md:w-[70%] md:mx-auto">
            <h3 className="font-bebas text-[34px] leading-[40.8px] md:text-[39px] md:leading-[39px] tracking-[2.5px] uppercase text-white mb-4">
              <span className="text-[#ED002A]">BÔNUS 1:</span> ANTI FRIEND-ZONE DEIXE DE SER UM CARA "BONZINHO" <span className="text-[#ED002A]">- DE <span className="line-through decoration-white">R$ 27,90</span> POR R$0,00</span>
            </h3>
            <p className="text-gray-300 md:text-[18px] leading-relaxed max-w-4xl mx-auto">
              Pare de ser um cara "bonzinho" que faz de tudo por ela e no final acaba sendo apenas mais um amigo dela.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#181818] border-t-2 border-red-600 rounded-2xl p-8 text-center md:w-[70%] md:mx-auto">
            <h3 className="font-bebas text-[34px] leading-[40.8px] md:text-[39px] md:leading-[39px] tracking-[2.5px] uppercase text-white mb-4">
              <span className="text-[#ED002A]">BÔNUS 2:</span> A ESTRATÉGIA QUE ELES NÃO TE CONTAM <span className="text-[#ED002A]">- DE <span className="line-through decoration-white">R$ 47,00</span> POR R$0,00</span>
            </h3>
            <p className="text-gray-300 md:text-[18px] leading-relaxed max-w-4xl mx-auto">
              Aprenda detadalhamente o porque de caras "cafajestes" pegam mulheres facilmente e domine as técnicas usadas por eles.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col md:grid md:grid-cols-2 gap-0 items-center mb-12 min-h-[300px] md:min-h-0">
          {/* Image Column - Left Absolute on Mobile, Left Grid on Desktop */}
          <div className="absolute left-0 bottom-0 translate-y-16 md:translate-y-0 md:static w-[45%] md:w-full flex justify-start md:justify-end z-0 md:z-auto pointer-events-none md:pointer-events-auto">
            <img
              src="/images/bonus-red-girl.webp"
              alt="Bonus Especial"
              className="w-full max-w-[180px] md:max-w-[250px] h-auto object-contain md:hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Text Column - Shifted Right on Mobile, Right on Desktop */}
          <div className="w-[65%] ml-auto md:w-full md:ml-0 text-center md:text-left relative z-10 px-4 md:px-0">
            <h3 className="text-[41px] leading-[49.2px] font-bebas md:text-[64px] md:leading-[64px] tracking-[2.5px] text-[#ED002A] uppercase">
              REFLITA
            </h3>
            <p className="text-lg md:text-[24px] leading-[30px] text-white leading-relaxed mb-0">
              Até quando você só vai passar vontade ou não vai conseguir desenrolar com uma mulher? Nosso principal papel como homem é ser homem suficiente para que mulheres sintam atração por nós. Se você não tomar atitude agora talvez amanhã possa ser tarde demais.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
