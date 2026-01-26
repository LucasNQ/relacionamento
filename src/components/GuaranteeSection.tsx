

export default function GuaranteeSection() {
  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-[41px] md:text-[46px] leading-[46px] tracking-[1.5px] md:leading-[46px] md:tracking-[2.5px] font-black mb-4 md:mb-6">
              <span className="text-[#ED002A]">GARANTIA INCONDICIONAL<br />DE 7 DIAS: </span><span className="text-white">OU VOCÊ APRENDE<br />OU DEVOLVEMOS SEU DINHEIRO!</span>
            </h2>

            <p className="text-lg md:text-[20px] leading-snug md:leading-[28px] text-gray-300 mb-6">
              Se em 7 dias você sentir que não é pra você, te devolvemos 100% do valor. Sem letra miúda. Sem questionamento. Você entra com confiança. E se não sentir que é pra você — sai sem prejuízo.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/guarantee-seal.webp"
              alt="Garantia de 7 Dias"
              className="w-64 h-64 md:w-80 md:h-80 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
