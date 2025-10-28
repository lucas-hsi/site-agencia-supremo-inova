import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronLeft, Mail, Phone, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import LogoSVG from '../icons/LogoSVG'
import AnimatedDLLogo from '../icons/AnimatedDLLogo'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Hub de Negócios', href: '/hub-negocios' },
  { name: 'Cases', href: '/cases' },
  { name: 'Contato', href: '/contato' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)
  // removed menuQuery state
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current
      const threshold = 4
      if (currentY <= 10) {
        setShowHeader(true)
      } else if (delta > threshold) {
        setShowHeader(false)
      } else if (delta < -threshold) {
        setShowHeader(true)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Bloqueia scroll do corpo quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // removed filteredNavigation (no search filtering)

  return (
    <motion.header
      initial={false}
      animate={showHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={`app-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-background/60 backdrop-blur-md'
      } ${showHeader ? '' : 'pointer-events-none'}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 grid grid-cols-3 items-center md:flex md:items-center md:justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center md:justify-start group col-start-2 justify-self-center md:justify-self-start">
            <LogoSVG size={72} className="drop-shadow-lg" />
            <span className="sr-only">Supremo Inova</span>
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

        {/* Mobile Navigation via Portal (full-screen above everything) */}
        {isOpen && createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[999] overflow-y-auto bg-background/90 backdrop-blur-xl ring-1 ring-white/10"
              role="dialog"
              aria-modal="true"
            >
              {/* Frosted glass texture overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_45%)]" />

              {/* Wrapper full height */}
              <div className="relative z-10 min-h-screen flex flex-col">
                {/* Top controls */}
                <div className="px-4 sm:px-6 lg:px-8 py-3 border-b border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => { navigate(-1); setIsOpen(false) }}
                    className="min-h-[44px] px-3 py-2 rounded-lg text-text-secondary hover:text-white hover:bg-surface transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft size={20} />
                    <span>Voltar</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="min-h-[44px] px-3 py-2 rounded-lg text-text-secondary hover:text-white hover:bg-surface transition-colors"
                    aria-label="Fechar menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="px-4 sm:px-6 lg:px-8">
                  {/* Logo */}
                  <div className="flex justify-center items-center pb-4">
                    <AnimatedDLLogo
                      size={80}
                      className="drop-shadow-sm"
                      title="Supremo Inova"
                    />
                  </div>

                  {/* Navigation links */}
                  <div className="flex flex-col space-y-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block py-3 min-h-[44px] text-base font-medium transition-colors duration-200 hover:text-accent ${
                          location.pathname === item.href ? 'text-accent' : 'text-text-secondary'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* CTA Orçamento */}
                  <div className="mt-4">
                    <Link to="/contato" className="group linear-button text-base w-full min-h-[44px] flex items-center justify-center gap-2 linear-glow-strong">
                      <span>Orçamento</span>
                    </Link>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 space-y-3 pb-8">
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
                      <Instagram size={18} className="text-accent" />
                      <a
                        href="https://www.instagram.com/agenciasupremoinova/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-white transition-colors text-sm"
                      >
                        Instagram
                      </a>
                    </div>
                    <div className="flex items-center justify-center py-6">
                      <LogoSVG size={88} className="drop-shadow-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
      </nav>
    </motion.header>
  )
}