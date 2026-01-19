import { MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black to-red-950/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase text-red-600">
          Ficou com alguma dúvida?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Em vez um FAQ (que ninguém lê) ou um chat que ninguém responde, me chama no WhatsApp que eu te ajudo.
        </p>

        <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-6 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-600/50 inline-flex items-center gap-3">
          <MessageCircle className="w-6 h-6" />
          ENTRAR EM CONTATO
        </button>
      </div>
    </section>
  );
}
