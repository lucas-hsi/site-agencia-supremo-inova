import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

type ServiceBlockProps = {
  title: string
  subtitle: string
  description: string
  icon?: any
  impact?: string
}

export default function ServiceBlock({ title, subtitle, description, icon: Icon, impact }: ServiceBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [showImpact, setShowImpact] = useState(false)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="group relative"
    >
      {/* Card principal com efeito de vidro */}
      <div className="glass-card-secondary p-4 md:p-5">
        {Icon && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 16 }}
            className="w-12 h-12 mb-3 flex items-center justify-center"
          >
            <Icon className="w-6 h-6 text-[#5c6aff]" />
          </motion.div>
        )}

        <h3 className="text-sm md:text-base font-semibold text-[#f7f8f8]">{title}</h3>
        <p className="text-[12px] md:text-sm text-text-secondary">{subtitle}</p>

        <p className="muted-on-glass text-xs md:text-sm leading-relaxed mt-2">{description}</p>

        <button
          type="button"
          onClick={() => setShowImpact((v) => !v)}
          className="mt-3 inline-flex items-center gap-2 text-[12px] text-text-secondary hover:text-[#f7f8f8] transition-colors"
        >
          <span className="px-2 py-1 rounded-md bg-accent/10 text-accent">ver impacto real</span>
        </button>
      </div>

      {/* Ao clicar, abrir card secundário com o impacto */}
      <AnimatePresence>
        {showImpact && impact && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3"
          >
            <div className="glass-card-secondary p-4">
              <p className="text-xs md:text-sm text-[#f7f8f8]">{impact}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}