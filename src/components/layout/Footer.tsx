import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#0A0B0E] text-white/80 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold">Supremo Inova</h3>
            <p className="mt-2 text-sm text-white/70">Ecossistema de co-criação, propósito e prosperidade compartilhada.</p>
          </div>
          {/* Links essenciais focados no Hub ou neutros */}
          <div>
            <h4 className="text-white font-medium">Navegação</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/hub-negocios">Hub de Negócios</Link></li>
              <li><Link to="/cases">Cases</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Conexão</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/contato">Aplicar para o Hub</Link></li>
              <li><Link to="/contato">Agendar Conversa de Visão</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} Supremo Inova. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}