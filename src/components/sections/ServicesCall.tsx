import { motion } from 'framer-motion'
import { Sparkles, Target, Zap, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContactModal } from '../../hooks/useContactModal'

const services = [
  {
    icon: Target,
    title: 'Marketing Digital',
    description: 'Estratégias data-driven.'
  },
  {
    icon: Zap,
    title: 'Automação',
    description: 'Sistemas que trabalham para você.'
  },
  {
    icon: Sparkles,
    title: 'Tecnologia',
    description: 'Desenvolvimento e integrações sob demanda.'
  },
  {
    icon: Brain,
    title: 'Consultoria',
    description: 'Inteligência para acelerar resultados.'
  }
]

export function ServicesCall() {
  const { openModal } = useContactModal()
  return (
    <section className="py-24 bg-background relative">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-4 text-center">
              Nossos serviços
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Oferecemos soluções completas em marketing digital, automação e tecnologia 
              para acelerar o crescimento do seu negócio.
            </p>
          </motion.div>
          
          {/* Services preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="border border-border rounded-lg p-6 hover:border-border-hover transition-colors duration-200">
                    <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-base font-medium text-[#f7f8f8] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
          
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-light text-[#f7f8f8] mb-4">
                Vamos construir algo novo?
              </h3>
              <p className="text-text-muted text-base mb-8">
                Fale com nossos especialistas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/servicos"
                  className="linear-button"
                >
                  <span>Conhecer serviços</span>
                </Link>
                <Link
                  to="#"
                  onClick={(e) => { e.preventDefault(); openModal() }}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition ease-in-out duration-200 hover:brightness-110 hover:-translate-y-[2px]"
                >
                  <span>Solicitar proposta</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}