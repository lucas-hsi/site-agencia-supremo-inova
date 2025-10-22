import { motion } from 'framer-motion'
import { Code2, Zap, TrendingUp, Users, Database, Smartphone, Target, Link } from 'lucide-react'

const specialties = [
  {
    icon: Code2,
    title: 'Aplicações e Sistemas',
    description: 'Portais, integrações e sistemas customizados para controle interno e vendas.',
    color: 'blue'
  },
  {
    icon: Zap,
    title: 'Automações Inteligentes',
    description: 'Fluxos de WhatsApp, CRM, ERP, e-commerce e notificações automáticas.',
    color: 'purple'
  },
  {
    icon: TrendingUp,
    title: 'Performance e Tráfego Pago',
    description: 'Estratégias que geram vendas reais, sem promessas vazias.',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Posicionamento de Marca',
    description: 'Identidade e comunicação que fortalecem a autoridade da sua empresa.',
    color: 'orange'
  },
  {
    icon: Target,
    title: 'Consultoria e Estratégia',
    description: 'Diagnóstico e plano de ação com base em dados e oportunidades.',
    color: 'red'
  },
  {
    icon: Link,
    title: 'Integrações de Plataformas',
    description: 'Shopify, RD Station, Mercado Livre, APIs e IA generativa.',
    color: 'cyan'
  }
]

export function Specialties() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-4 text-center">
              O que fazemos
            </h2>
            <p className="text-base text-text-muted font-light leading-relaxed">
              Especializados em unir marketing e tecnologia para empresas que querem escalar com previsibilidade. 
              Criamos soluções sob medida — da automação de vendas ao desenvolvimento de sistemas e fluxos inteligentes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-surface border border-border rounded-xl hover:border-border-hover transition-all duration-300 linear-glow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-[#f7f8f8] mb-2">
                      {specialty.title}
                    </h3>
                    <p className="text-sm text-text-muted font-light leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}