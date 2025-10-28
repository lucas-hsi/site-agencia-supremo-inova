import { Link } from 'react-router-dom'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import LogoSVG from '../icons/LogoSVG'

export function Footer() {
  return (
    <footer className="bg-[#0A0B0E] text-white/80 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top grid: brand + navigations */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start md:items-stretch gap-y-8 md:gap-x-12 lg:gap-x-16">
          {/* Brand / Info */}
          <div className="h-full flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {/* Mobile logo */}
              <div className="md:hidden block" aria-hidden>
                <LogoSVG size={56} className="drop-shadow-sm" />
              </div>
              {/* Desktop logo */}
              <div className="hidden md:block" aria-hidden>
                <LogoSVG size={84} className="drop-shadow-lg" />
              </div>
              <span className="sr-only">Supremo Inova</span>
            </div>
            <p className="mt-3 text-sm text-white/80">
              Inovação que conecta estratégia, tecnologia e resultado.
            </p>
            <div className="mt-4 text-sm text-white/70">
              <div>
                <span className="font-medium text-white">Endereço:</span> Curitiba/PR
              </div>
              <div className="mt-1 leading-relaxed">
                <span className="font-medium text-white">Horário de atendimento:</span>
                <div>Segunda a sexta: 8h30–17h30</div>
                <div>Sábado: 8h30–12h00</div>
              </div>
            </div>
          </div>

          {/* Navegação principal */}
          <div className="h-full flex flex-col gap-3">
            <h4 className="text-white font-medium">Navegação</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/cases">Cases</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          {/* Navegação Hub de Negócios */}
          <div className="h-full flex flex-col gap-3">
            <h4 className="text-white font-medium">Hub de Negócios</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/hub-negocios">Conheça o Hub</Link></li>
              <li><Link to="/contato">Aplicar para o Hub</Link></li>
              <li><Link to="/contato">Agendar conversa</Link></li>
            </ul>
          </div>

          
        </div>

        {/* Ícones fixos de conexão direta */}
        <div className="mt-8 flex items-center gap-6">
          <a
            href="https://wa.me/5541997864760"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp oficial Supremo Inova"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition transform duration-200 hover:scale-110"
          >
            <FaWhatsapp className="w-5 h-5 text-green-500" />
          </a>
          <a
            href="https://www.instagram.com/agenciasupremoinova/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram oficial Supremo Inova"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition transform duration-200 hover:scale-110"
          >
            <FaInstagram className="w-5 h-5" style={{ color: 'rgb(131,58,180)' }} />
          </a>
        </div>

        <div className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} Supremo Inova. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}