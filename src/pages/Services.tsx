import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Monitor, ShoppingCart, Palette, Rocket, Bot, BarChart3, Plug, ChevronRight } from 'lucide-react'
import { CasesPreview } from '../components/sections/CasesPreview'

const services = [
  {
    title: 'Desenvolvimento Web & Ecommerce',
    icon: Monitor,
    description: 'Sistemas, portais e lojas sob medida. Garantimos arquitetura escalável, segurança e experiência premium.',
    timeline: '15-60 dias',
    impact: 'Presença digital sólida que converte visitantes em clientes.'
  },
  {
    title: 'Design UI/UX & Identidade Visual',
    icon: Palette,
    description: 'Criação da marca, interfaces e jornadas que geram conexão, autoridade e retenção.',
    timeline: '10-30 dias',
    impact: 'Reconhecimento instantâneo e engajamento acima da média.'
  },
  {
    title: 'Marketing Digital & Performance',
    icon: Rocket,
    description: 'Gestão de tráfego pago, inbound marketing, campanhas multiplataforma, SEO e inteligência de dados.',
    timeline: 'Mensal/contínuo',
    impact: 'Geração de leads qualificados e aumento consistente nas vendas.'
  },
  {
    title: 'Automação de Processos & CRM',
    icon: Bot,
    description: 'WhatsApp, e-mail, plataformas, fluxos automáticos. Otimizamos tempo e custo, eliminando tarefas repetitivas.',
    timeline: '7-30 dias',
    impact: 'Produtividade, escala e controle total dos dados.'
  },
  {
    title: 'Consultoria de Estratégia & Diagnóstico',
    icon: BarChart3,
    description: 'Mapeamento, diagnóstico personalizado, plano tático e estratégico. Transformamos dados em decisões seguras.',
    timeline: '5-20 dias (ou recorrente)',
    impact: 'Clareza, foco e crescimento sustentável.'
  },
  {
    title: 'Integrações Avançadas & APIs',
    icon: Plug,
    description: 'Integramos Shopify, RD Station, Mercado Livre, WhatsApp, IA generativa e criamos APIs customizadas.',
    timeline: 'Variável',
    impact: 'Ecossistema conectado, sem limites para automação.'
  }
]

const differentiators = [
  { title: 'Suporte humanizado 24/7', description: 'Equipe disponível e próxima, em todos os canais.' },
  { title: 'Time multidisciplinar e certificado', description: 'Marketing, design, tecnologia e dados em sinergia.' },
  { title: 'Entregas ágeis, sem enrolação', description: 'Sprints objetivos, comunicação clara e previsibilidade.' },
  { title: 'Monitoramento ativo e evolução contínua', description: 'Métricas, dashboards e melhoria constante.' }
]

const workflow = [
  { step: 'Briefing e Diagnóstico personalizado', description: 'Entendemos objetivos, mapeamos dores e oportunidades.', icon: ChevronRight },
  { step: 'Proposta transparente e prazo definido', description: 'Escopo claro, cronograma realista e custos honestos.', icon: ChevronRight },
  { step: 'Desenvolvimento ágil e acompanhamento', description: 'Sprints com entrega de valor e checkpoints frequentes.', icon: ChevronRight },
  { step: 'Deploy, testes e monitoramento', description: 'Qualidade validada, performance medida e observabilidade.', icon: ChevronRight },
  { step: 'Suporte, manutenção e evolução', description: 'Roadmap contínuo e novas melhorias incrementais.', icon: ChevronRight }
]

export function Services() {
  return (
    <main className="min-h-screen pt-24 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#22c55e]/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <section className="relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-surface/60 backdrop-blur-xl border border-border rounded-2xl px-6 py-6 linear-glow">
              <h1 className="text-2xl md:text-4xl font-light text-[#f7f8f8] mb-3">
                Soluções Integradas para Crescer e Transformar
              </h1>
              <p className="text-base md:text-lg text-text-muted font-light max-w-3xl mx-auto">
                Uma agência completa, focada em resultados reais, automação, tecnologia avançada e marketing de alta performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8]">Nossos Serviços</h2>
            <p className="text-sm text-text-muted font-light mt-2">Cards interativos com efeito de glassmorphism, ícones animados e interação hover/tap.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="linear-card p-6 group hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/15">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-sm md:text-base font-medium text-[#f7f8f8]">{service.title}</h3>
                    </div>
                    <span className="text-xs bg-background border border-border px-2 py-1 rounded-md text-text-muted">{service.timeline}</span>
                  </div>
                  <p className="text-sm text-text-muted font-light leading-relaxed mb-3">{service.description}</p>
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <span className="text-xs text-text-muted">Impacto</span>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-md">{service.impact}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8]">Diferenciais</h2>
            <p className="text-sm text-text-muted font-light mt-2">Ícones menores flutuantes e animação sutil em volta dos cards.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="linear-card p-6 relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-14 h-14 bg-accent/10 rounded-full blur-xl" />
                <h3 className="text-base font-medium text-[#f7f8f8] mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="relative z-10">
        <CasesPreview />
      </section>

      {/* Workflow */}
      <section className="py-20 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8]">Fluxo de Trabalho</h2>
            <p className="text-sm text-text-muted font-light mt-2">Timeline horizontal com etapas em cards, mobile-first.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflow.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="linear-card p-5 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/15">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-xs text-text-muted">Etapa {idx + 1}</span>
                  </div>
                  <div className="text-sm text-[#f7f8f8] mb-1">{item.step}</div>
                  <p className="text-xs text-text-muted font-light">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative z-10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center gap-4 bg-surface border border-border rounded-2xl px-6 py-6 linear-glow"
          >
            <p className="text-base md:text-lg text-text-muted font-light">
              Pronto para escalar seus resultados com tecnologia e estratégia?
            </p>
            <Link to="/contato" className="linear-button w-full sm:w-auto min-h-[44px]">
              <span>Solicite um orçamento personalizado</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}