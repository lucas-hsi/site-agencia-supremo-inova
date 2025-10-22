import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-medium text-lg">S</span>
            </div>
            <span className="text-xl font-light text-white">Supremo Inova</span>
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
            className="md:hidden p-3 min-h-[44px] min-w-[44px] rounded-lg text-text-secondary hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border mt-4 pt-4 pb-6"
            >
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
                <Link to="/contato" className="group linear-button text-base w-full min-h-[44px] flex items-center justify-center gap-2 linear-glow-strong">
                  <span>Orçamento</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}