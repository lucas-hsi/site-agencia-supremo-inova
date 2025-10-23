import { motion } from 'framer-motion'
import { Code2, Zap, TrendingUp, Users, Database, Smartphone, Target, Link } from 'lucide-react'

const services = [
  { title: 'Desenvolvimento Web', icon: Code2, description: 'Sites e aplicações com foco em performance e SEO avançado.' },
  { title: 'Automação & Bots', icon: Zap, description: 'Automatize processos e escalabilidade: WhatsApp, CRM, e-commerce.' },
  { title: 'Growth & Analytics', icon: TrendingUp, description: 'Estratégias guiadas por dados e experimentos contínuos.' },
  { title: 'UX/UI & Branding', icon: Users, description: 'Experiências premium com consistência visual e performance.' },
  { title: 'Data & Integrations', icon: Database, description: 'Pipelines de dados e integrações com APIs robustas.' },
  { title: 'Mobile & PWA', icon: Smartphone, description: 'Aplicativos modernos e PWAs com foco em conversão.' },
  { title: 'SEO Técnico', icon: Target, description: 'Implementações avançadas para visibilidade orgânica.' },
  { title: 'Integrações Custom', icon: Link, description: 'Conexões sob demanda entre sistemas e plataformas.' },
]

export function Specialties() {
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
          <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-4">
            Especialidades
          </h2>
          <p className="text-base text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
            Soluções sob medida com tecnologia moderna, escala e UX impecável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group glass-card-primary card-hover p-6"
              >
                <div className="icon-container w-12 h-12 mb-4 rounded-xl">
                  <Icon className="icon-premium w-6 h-6 text-[#f7f8f8]" />
                </div>
                <h3 className="text-on-glass text-base font-medium mb-1">
                  {service.title}
                </h3>
                <p className="muted-on-glass text-sm">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}