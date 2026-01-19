export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-900/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xl font-bold text-white mb-4">
            NS Corporations © 2025 | Todos os direitos reservados
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-red-500 transition-colors">Políticas de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Termos de uso</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500 leading-relaxed text-center max-w-4xl mx-auto">
            <span className="font-bold text-gray-400">ESTE SITE NÃO É do FACEBOOK:</span> Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc. A NS Corporation LTDA é uma empresa com o objetivo de ajudar pessoas a obterem resultados de habilidades sociais utilizando o poder da internet através de cursos digitais. Não reivindicamos ou declaramos que ao usar o método, você terá todas as habilidades sociais que necessita. Os depoimentos mostrados são os resultados dos alunos vão variar com base no seu esforço, no conhecimento que você adquirir.
          </p>
        </div>
      </div>
    </footer>
  );
}
