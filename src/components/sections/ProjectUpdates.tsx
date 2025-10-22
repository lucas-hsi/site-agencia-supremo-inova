import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

// Logos served from Vite publicDir (configured to 'Logos').
// Use absolute paths like '/1.png' to reference images in the Logos folder.
const baseLogos = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png']

export default function ProjectUpdates() {
  const [showAll, setShowAll] = useState(false)
  // Duplicate logos to enable seamless marquee loop
  const marqueeLogos = useMemo(() => [...baseLogos, ...baseLogos], [])

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
            <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-3 text-center">
              Parceiros de sucesso
            </h2>
            <p className="text-base text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Nossa experiência comprovada pelos clientes que confiam em nosso trabalho.
            </p>
          </motion.div>

          {/* Logos Marquee */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 md:w-auto md:left-auto md:translate-x-0">
            <div className="bg-surface border border-border rounded-none md:rounded-xl p-4 md:p-6 linear-glow overflow-hidden relative">
              {/* Gradientes laterais (mobile) para suavizar entrada/saída dos logos */}
              <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-surface to-transparent md:hidden pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-surface to-transparent md:hidden pointer-events-none" />

              <div className="logo-marquee">
                <div className="logo-track">
                  {marqueeLogos.map((src, idx) => (
                    <div key={`marquee-${idx}`} className="logo-item">
                      <img
                        src={src}
                        alt={`Logo ${idx + 1}`}
                        className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain mx-auto"
                      />
                    </div>
                  ))}
                </div>
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