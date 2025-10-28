import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 140)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={handleClick}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] min-h-[44px] min-w-[44px] h-11 w-11 md:h-12 md:w-12 rounded-full flex items-center justify-center bg-surface/80 border border-border text-text-secondary shadow-lg backdrop-blur-xs hover:text-white md:hover:bg-background focus-ring"
        >
          <ChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}