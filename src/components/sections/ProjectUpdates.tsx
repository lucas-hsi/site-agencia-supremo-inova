import { motion } from 'framer-motion'
import { useState } from 'react'

// Logos served from Vite publicDir (configured to 'Logos').
// Use absolute paths like '/1.png' to reference images in the Logos folder.
const baseLogos = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png']

export default function ProjectUpdates() {
  const [dimmed, setDimmed] = useState(false)

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[28px] md:text-[36px] font-semibold tracking-[-0.01em] text-[#f7f8f8] mb-3 text-center">
              Parceiros de sucesso
            </h2>
            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              Nossa experiência comprovada pelos clientes que confiam em nosso trabalho.
            </p>
          </motion.div>

          {/* Ícones sobre card de vidro com ofuscamento ao clique */}
          <div className="relative max-w-6xl mx-auto">
            {/* Card de vidro ao fundo */}
            <div
              className={`absolute inset-0 rounded-2xl bg-surface/30 border border-border backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-xl transition-all ${dimmed ? 'opacity-40' : 'opacity-100'}`}
              aria-hidden
            />
            {/* Área interativa com ícones */}
            <div
              className={`relative z-10 select-none ${dimmed ? 'pointer-events-none cursor-default' : 'cursor-pointer'}`}
              role="button"
              tabIndex={0}
              aria-pressed={dimmed}
              aria-disabled={dimmed}
              aria-label="Ativar ofuscamento do card de fundo"
              onClick={() => {
                if (!dimmed) setDimmed(true)
              }}
              onKeyDown={(e) => {
                if (!dimmed && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault()
                  setDimmed(true)
                }
              }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center p-6 md:p-8">
                {baseLogos.map((src, idx) => (
                  <img
                    key={`icon-${idx}`}
                    src={src}
                    alt={`Parceiro ${idx + 1}`}
                    className="h-14 md:h-16 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Ambient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}