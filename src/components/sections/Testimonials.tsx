import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Chácara Recanto dos Pinheiros',
    role: 'Gestão de Eventos',
    company: 'Chácara Recanto dos Pinheiros',
    content:
      'SEO local e agendamento online elevaram nossa presença: mais visibilidade, leads qualificados (+35%) e conversões em agendamentos (+22%). Atendimento digital fluido e marca alinhada ao público.',
    rating: 5,
  },
  {
    name: 'DL Auto Peças',
    role: 'Board',
    company: 'DL Auto Peças',
    content:
      'Ecossistema escalável com IA e integrações robustas. Anúncios automáticos, CRM integrado e redução de 25% no tempo operacional com performance estável.',
    rating: 5,
  },
  {
    name: 'Majubella',
    role: 'E-commerce',
    company: 'Majubella',
    content:
      'Branding, UX/UI e estratégia multicanal entregaram aumento de conversão (+18%) e crescimento em vendas (+32%), com operação omnichannel consistente.',
    rating: 5,
  },
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
              + 30 empresas satisfeita com nossos resultados
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}