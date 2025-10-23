import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Cases', href: '/cases' },
  { name: 'Parceiro', href: '/parceiro' },
  { name: 'Contato', href: '/contato' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`app-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 grid grid-cols-3 items-center md:flex md:items-center md:justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center md:justify-start group col-start-2 justify-self-center md:justify-self-start">
            <img
              src={'/Logos/supremo-extendida.png'}
              alt="Supremo Inova - Logo extendida"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-sm group-hover:brightness-110 transition"
              width={144}
              height={36}
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  location.pathname === item.href
                    ? 'text-accent'
                    : 'text-text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contato" className="group linear-button text-base flex items-center justify-center gap-2 linear-glow-strong">
              <span>Orçamento</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden col-start-3 justify-self-end p-3 min-h-[44px] min-w-[44px] rounded-lg text-text-secondary hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed left-0 right-0 top-20 bottom-0 z-40 overflow-y-auto pt-6 pb-24 bg-background/60 backdrop-blur-xl ring-1 ring-white/10"
            >
              {/* Frosted glass texture overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_45%)]" />

              <div className="container px-4 sm:px-6 lg:px-8">
                {/* Centered logo inside mobile menu */}
                <div className="flex justify-center items-center pb-6">
                  <img
                    src={'/Logos/supremo-extendida.png'}
                    alt="Supremo Inova - Logo extendida"
                    className="h-16 w-auto sm:h-20"
                    loading="eager"
                    decoding="async"
                    width={320}
                    height={100}
                  />
                </div>

                {/* Navigation links */}
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block py-3 min-h-[44px] text-base font-medium transition-colors duration-200 hover:text-accent ${
                        location.pathname === item.href
                          ? 'text-accent'
                          : 'text-text-secondary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Contact & address — mobile only */}
                <div className="mt-8 border-t border-white/10 pt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-accent" />
                    <a
                      href="mailto:contato@supremoinova.com"
                      className="text-text-secondary hover:text-white transition-colors text-sm"
                    >
                      contato@supremoinova.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent" />
                    <a
                      href="tel:+55 (11) 99999-9999"
                      className="text-text-secondary hover:text-white transition-colors text-sm"
                    >
                      +55 (11) 99999-9999
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-accent" />
                    <span className="text-text-secondary text-sm">
                      São Paulo, SP - Brasil
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}