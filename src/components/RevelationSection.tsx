import { Infinity } from 'lucide-react';

export default function RevelationSection() {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-0 pb-20 md:py-32 bg-black overflow-hidden">

      {/* Background Image Container */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Desktop Image Styling - Left aligned */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[60%]">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black z-10" />
          <img
            src="/images/revelation-bg.webp"
            alt=""
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>

        {/* Mobile Image Styling - Starts below top, behind text */}
        <div className="lg:hidden absolute left-0 right-0 bottom-0 top-0 block">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
          <img
            src="/images/revelation-bg.webp"
            alt=""
            className="w-full h-full object-cover opacity-50 grayscale"
          />
        </div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-8 md:pt-0">
        <div className="space-y-4 text-[18px] leading-[22px] md:text-[22px] md:leading-[24px] text-white mb-8">
          <p>
            CHEGA! talvez você já perceba que não é falta de atitude nem azar. O problema nasce no JEITO INVISÍVEL como você se posiciona, nas micro decisões que parecem inofensivas e destroem a tensão antes mesmo dela surgir.
          </p>

          <p>
            Enquanto você TENTA AGRADAR, outros conduzem o ritmo sem pedir permissão, e isso muda tudo.
          </p>
        </div>

        <div className="mb-6 h-8 w-full bg-transparent">

        </div>

        <p className="text-[18px] leading-[20px] md:text-[22px] md:leading-[24px] text-white mb-4 leading-relaxed">
          O MANUAL SUJO DA CONQUISTA entra exatamente aí, mostrando como assumir presença, gerar impacto e fazer com que a dinâmica mude a seu favor logo nas primeiras interações.
        </p>

        <p className="text-[18px] leading-[21px] md:text-[22px] md:leading-[24px] text-white mb-8 leading-relaxed">
          Isso não foi feito para quem quer se sentir confortável. Serve para homens DISPOSTOS a esmagar a timidez, abandonar o papel de bonzinho até se tornarem impossíveis de ignorar por QUALQUER MULHER QUE DESEJAREM.
        </p>

      </div>
    </section>
  );
}
