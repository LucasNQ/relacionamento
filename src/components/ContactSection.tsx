

export default function ContactSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black to-red-950/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-[34px] leading-tight md:text-[50px] md:leading-tight tracking-[2.5px] font-black uppercase text-[#ED002A]">
          Ficou com alguma dúvida?
        </h2>

        <p className="text-lg md:text-[24px] leading-[30px] text-white mb-4 leading-relaxed">
          Em vez um FAQ (que ninguém lê) ou um chat que ninguém responde, me chama no WhatsApp que eu te ajudo.
        </p>

        <button className="md:text-[31px] md:leading-[31px] bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-6 py-2 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-600/50 inline-flex items-center gap-3">
          <img src="/images/whatsapp-icon.webp" alt=" WhatsApp" className="w-12 h-12" />
          ENTRAR EM CONTATO
        </button>
      </div>
    </section>
  );
}
