export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-900/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xl font-bold text-white mb-4">
            Aprenda de uma vez por todas a virar um Homem de Verdade!
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-red-500 transition-colors">Políticas de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Termos de uso</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500 leading-relaxed text-center max-w-4xl mx-auto">
            © 2026 TYE – Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
