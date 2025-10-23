import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Head de Marketing',
    company: 'TechNova',
    content: 'A Supremo Inova elevou nosso funil de aquisição com integrações e automações inteligentes. Resultados além do esperado.',
    rating: 5,
  },
  {
    name: 'Bruno Costa',
    role: 'CTO',
    company: 'RetailX',
    content: 'Integrações sólidas e um time extremamente profissional. A experiência foi premium do início ao fim.',
    rating: 5,
  },
  {
    name: 'Carla Mendes',
    role: 'COO',
    company: 'FinPro',
    content: 'A solução entregue trouxe performance e confiabilidade em produção. Excelente padrão técnico e visual.',
    rating: 5,
  }
]

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background circles decor */}
      <div className="bg-decor-circles" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-4 text-center">
            Depoimentos de clientes
          </h2>
          <p className="text-base text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
            Experiências reais de empresas que confiam na Supremo Inova.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group glass-card-primary card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container w-12 h-12 rounded-xl">
                  <span className="icon-premium w-6 h-6 text-amber-400">★</span>
                </div>
                <div>
                  <h3 className="text-on-glass text-base font-medium leading-tight">
                    {t.name}
                  </h3>
                  <p className="muted-on-glass text-xs">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
              <p className="muted-on-glass text-sm leading-relaxed">
                “{t.content}”
              </p>
              <div className="mt-4 flex">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass-card-secondary p-6 inline-block">
            <p className="muted-on-glass text-sm">
              +50 empresas satisfeitas com resultados concretos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}