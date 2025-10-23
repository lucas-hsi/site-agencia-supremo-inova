import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Cases', href: '/cases' },
  ],
  services: [
    { name: 'Desenvolvimento Web', href: '/servicos#web' },
    { name: 'Design UI/UX', href: '/servicos#design' },
    { name: 'Marketing Digital', href: '/servicos#marketing' },
    { name: 'Consultoria', href: '/servicos#consultoria' },
  ],
  social: [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
  ],
}

const contact = {
  email: 'contato@supremoinova.com',
  phone: '+55 (11) 99999-9999',
  address: 'São Paulo, SP - Brasil',
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <img
                src={'/Logo principal/Logo .png'}
                alt="Supremo Inova - Ícone"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-sm group-hover:brightness-110 transition"
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
              />
              {/* Texto removido para manter apenas a logo */}
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Transformamos ideias em experiências digitais extraordinárias. 
              Sua agência digital de alta performance.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-11 h-11 md:w-10 md:h-10 bg-border rounded-lg flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent transition-all duration-200"
                    aria-label={item.name}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Navegação</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-text-secondary hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-6">Serviços</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-text-secondary hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-text-secondary hover:text-white transition-colors duration-200 text-sm"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-text-secondary hover:text-white transition-colors duration-200 text-sm"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-text-secondary text-sm">
                  {contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 md:py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-white text-sm font-medium mb-1">
              Performance. Estratégia. Presença digital, sem enrolação.
            </p>
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} Supremo Inova. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacidade"
              className="text-text-secondary hover:text-white transition-colors duration-200 text-sm"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos"
              className="text-text-secondary hover:text-white transition-colors duration-200 text-sm"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}