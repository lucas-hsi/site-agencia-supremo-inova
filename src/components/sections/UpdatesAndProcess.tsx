import { motion } from 'framer-motion'
import { Calendar, ArrowRight, FileText, Code, Rocket, CheckCircle } from 'lucide-react'
import { useContactModal } from '../../hooks/useContactModal'
import { Link } from 'react-router-dom'

const updates = [
  {
    date: '15 Jan 2024',
    title: 'Integração completa com WhatsApp Business API',
    description: 'Sistema avançado de automação e atendimento via WhatsApp para empresas.',
    category: 'Integração',
    slug: 'integracao-whatsapp-business-api'
  },
  {
    date: '08 Jan 2024',
    title: 'Sistema interno de análise e rastreio de performance',
    description: 'Dashboards inteligentes para monitoramento em tempo real de métricas e KPIs.',
    category: 'Sistema',
    slug: 'sistema-analise-rastreio-performance'
  },
  {
    date: '22 Dez 2023',
    title: 'Novas automações de funil e notificações inteligentes',
    description: 'Fluxos automatizados personalizados com notificações baseadas em comportamento.',
    category: 'Automação',
    slug: 'automacoes-funil-notificacoes-inteligentes'
  },
  {
    date: '10 Fev 2024',
    title: 'SEO local e agendamento online para eventos',
    description: 'Autoridade local, páginas otimizadas e agendamentos com maior conversão.',
    category: 'SEO',
    slug: 'seo-local-agendamento-eventos-chacara-recanto-dos-pinheiros'
  },
  {
    date: '12 Mar 2024',
    title: 'Automação com IA em marketplaces: DL Auto Peças',
    description: 'Geração automática de anúncios, CRM integrado e governança de dados.',
    category: 'Automação',
    slug: 'automacao-ia-marketplaces-dl-auto-pecas'
  },
  {
    date: '05 Abr 2024',
    title: 'Branding e UX/UI para e-commerce: Majubella',
    description: 'Identidade, UX orientada à conversão e operação omnichannel escalável.',
    category: 'Produto',
    slug: 'branding-ux-ecommerce-majubella'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Briefing e Diagnóstico',
    description: 'Entendemos seu cenário e identificamos o que precisa ser automatizado.',
    icon: FileText,
    details: ['Análise do cenário atual', 'Identificação de gargalos', 'Mapeamento de oportunidades', 'Definição de prioridades']
  },
  {
    step: '02',
    title: 'Desenvolvimento',
    description: 'Construímos soluções sob medida, testadas e escaláveis.',
    icon: Code,
    details: ['Arquitetura personalizada', 'Desenvolvimento ágil', 'Testes rigorosos', 'Integração completa']
  },
  {
    step: '03',
    title: 'Sucesso e Monitoramento',
    description: 'Garantimos estabilidade, suporte e evolução contínua.',
    icon: Rocket,
    details: ['Deploy seguro', 'Monitoramento ativo', 'Suporte técnico', 'Evolução contínua']
  }
]

export function UpdatesAndProcess() {
  const { openModal } = useContactModal()
  return (
    <>
      {/* Updates Section */}
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
                Atualizações e novidades
              </h2>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
                Estamos sempre evoluindo. Confira algumas das últimas melhorias nos projetos e integrações:
              </p>
            </motion.div>

            <div className="space-y-6">
              {updates.map((update, index) => (
                <Link key={update.title} to={`/blog/${update.slug}`} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-surface border border-border rounded-xl p-6 hover:border-border-hover transition-all duration-300 linear-glow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-text-muted font-light">
                            {update.date}
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md">
                            {update.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-[#f7f8f8] mb-2 group-hover:text-accent transition-colors">
                          {update.title}
                        </h3>
                        <p className="text-sm text-text-muted font-light leading-relaxed">
                          {update.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Link className="linear-button-ghost text-sm" to="/blog">
                <span>Ver todas as atualizações</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-4 text-center">
                Como trabalhamos
              </h2>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
                Seguimos um processo simples, técnico e eficiente para transformar ideias em sistemas reais:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-surface border border-border rounded-xl p-6 linear-glow group hover:border-border-hover transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <span className="text-xs text-text-muted font-light">
                            Etapa {step.step}
                          </span>
                          <h3 className="text-lg font-medium text-[#f7f8f8]">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-xs text-text-muted">
                            <CheckCircle className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Connection line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border transform -translate-y-1/2">
                        <div className="absolute right-0 top-1/2 w-2 h-2 bg-accent rounded-full transform translate-x-1 -translate-y-1/2" />
                      </div>
                    )}
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
                <h3 className="text-lg font-medium text-[#f7f8f8] mb-2">
                  Pronto para começar?
                </h3>
                <p className="text-sm text-text-muted font-light mb-4">
                  Vamos conversar sobre como podemos acelerar o crescimento do seu negócio.
                </p>
                <a
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition ease-in-out duration-200 hover:brightness-110 hover:-translate-y-[2px]"
                  href="#"
                  onClick={(e) => { e.preventDefault(); openModal() }}
                >
                  <span>Iniciar projeto</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}