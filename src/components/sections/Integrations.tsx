import { motion } from 'framer-motion'
import { Zap, Globe, MessageSquare, ShoppingCart, Database, Cloud, Code, Smartphone, Bot, Webhook } from 'lucide-react'

const integrations = [
  {
    name: 'Shopify',
    icon: ShoppingCart,
    description: 'E-commerce',
    category: 'Vendas'
  },
  {
    name: 'Mercado Livre',
    icon: ShoppingCart,
    description: 'Marketplace',
    category: 'Vendas'
  },
  {
    name: 'WhatsApp API',
    icon: MessageSquare,
    description: 'Mensagens',
    category: 'Comunicação'
  },
  {
    name: 'RD Station',
    icon: Database,
    description: 'Marketing',
    category: 'CRM'
  },
  {
    name: 'OpenAI',
    icon: Bot,
    description: 'IA Generativa',
    category: 'Inteligência'
  },
  {
    name: 'FastAPI',
    icon: Code,
    description: 'Backend APIs',
    category: 'Desenvolvimento'
  },
  {
    name: 'Next.js',
    icon: Globe,
    description: 'Frontend',
    category: 'Desenvolvimento'
  },
  {
    name: 'PyTrustNFe',
    icon: Database,
    description: 'Nota Fiscal',
    category: 'Fiscal'
  },
  {
    name: 'Webhooks Customizados',
    icon: Webhook,
    description: 'Integrações',
    category: 'Automação'
  }
]

export function Integrations() {
  return (
    <section className="py-24 bg-background-subtle relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-4 text-center">
              Nossas integrações
            </h2>
            <p className="text-base text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Trabalhamos com as principais plataformas e APIs do mercado para conectar todo o seu ecossistema digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group card card-integration linear-glow p-5 md:p-4"
                >
                  <div className="text-center">
                    <div className="w-14 h-14 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 md:w-6 md:h-6 text-accent" />
                    </div>
                    <h3 className="text-sm font-medium text-[#f7f8f8] mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-xs text-text-muted font-light mb-2">
                      {integration.description}
                    </p>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-background border border-border rounded-md text-text-secondary">
                      {integration.category}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-surface border border-border rounded-xl p-6 linear-glow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-[#f7f8f8]">
                  Integração personalizada
                </h3>
              </div>
              <p className="text-sm text-text-muted font-light leading-relaxed mb-4">
                Não encontrou a integração que precisa? Desenvolvemos conexões customizadas para qualquer API ou sistema.
              </p>
              <div className="flex justify-center">
                <a className="linear-button-ghost text-sm w-full sm:w-auto min-h-[44px]" href="#integracao-customizada">
                  <span>Solicitar integração customizada</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}