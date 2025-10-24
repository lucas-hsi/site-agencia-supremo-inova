import { motion } from 'framer-motion'
import { Zap, Globe, MessageSquare, ShoppingCart, Database, Code, Bot, Webhook } from 'lucide-react'

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
      {/* Background waves decor */}
      <div className="bg-waves" />
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f7f8f8] mb-6">
              Nossas Integrações
            </h2>
            <p className="text-lg text-text-muted font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Conectamos seu ecossistema digital com as principais plataformas e APIs do mercado, 
              garantindo integração perfeita e automação inteligente.
            </p>
            
            {/* Texto de Integração Personalizada */}
            <div className="text-center mt-8 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#f7f8f8] mb-4">
                Integração Personalizada
              </h3>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-lg mx-auto">
                Desenvolvemos conexões customizadas para qualquer API ou sistema. 
                Sua solução única, perfeitamente integrada ao seu ecossistema.
              </p>
            </div>
          </motion.div>

          {/* Grid responsivo: 2 colunas no mobile, 4 no desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group glass-card-secondary card-hover p-4 md:p-6 h-56 w-full flex flex-col hover:scale-105 transition-all duration-300"
                >
                  {/* Container do ícone com gradiente */}
                  <div className="relative mb-4 flex justify-center">
                    <div className="icon-container w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Nome da integração */}
                  <h3 className="text-sm md:text-base font-semibold text-on-glass mb-3 leading-tight text-center group-hover:text-accent transition-colors duration-300">
                    {integration.name}
                  </h3>
                  
                  {/* Descrição - área flexível */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <p className="text-xs md:text-sm muted-on-glass font-light leading-relaxed text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {integration.description}
                    </p>
                  </div>
                  
                  {/* Badge da categoria - sempre no final */}
                  <div className="text-center">
                    <span className="inline-block px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300">
                      {integration.category}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>


        </div>
      </div>
    </section>
  )
}