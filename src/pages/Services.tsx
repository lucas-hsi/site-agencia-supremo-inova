import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Zap, Database, Smartphone, ArrowRight, MessageCircle, Target, Sparkles, Brain, BarChart3 } from 'lucide-react'
import AnimatedSection from '../components/sections/AnimatedSection'
import TechParticles from '../components/sections/TechParticles'
import { useContactModal } from '../hooks/useContactModal'
 

export default function Services() {
  const { openModal } = useContactModal()
  const [selected, setSelected] = useState<ServiceKey | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (isDesktop && selected) {
      document.body.classList.add('services-open')
    } else {
      document.body.classList.remove('services-open')
    }
    return () => document.body.classList.remove('services-open')
  }, [isDesktop, selected])

  const open = (key: ServiceKey) => setSelected(key)
  const close = () => setSelected(null)

  return (
    <section className="py-24 bg-background-subtle relative overflow-hidden">
      {/* Background waves decor */}
      <div className="bg-waves" />
      {/* Tech particles background for desktop */}
      <TechParticles />
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-light text-[#f7f8f8] mb-4">Serviços</h1>
          <p className="text-base text-text-muted font-light leading-relaxed max-w-3xl mx-auto">
            Transforme seu negócio com soluções digitais integradas, desenvolvidas para potencializar sua marca e acelerar resultados. Na Supremo Inova, combinamos tecnologia de ponta, criatividade e experiência real para entregar valor extraordinário, sempre focando o diferencial que faz seu projeto sair do comum.
          </p>
          <div className="mt-8 flex justify-center">
            <AnimatedHeader />
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon
            const isSelected = selected === item.key
            return (
              <motion.button
                type="button"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                onClick={() => open(item.key)}
                className="group glass-card-primary card-hover p-6 text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 transition-transform duration-300 hover:-translate-y-0.5 hover:ring-1 hover:ring-accent/30 hover:shadow-md"
              >
                <div className="icon-container w-12 h-12 mb-4 rounded-xl">
                  <Icon className="icon-premium w-6 h-6 text-[#f7f8f8]" />
                </div>
                <h3 className="text-on-glass text-base font-medium mb-1">{item.title}</h3>
                <p className="muted-on-glass text-sm">{item.desc}</p>
                {/* Indicador de clique */}
                <div className="mt-3 inline-flex items-center gap-2 text-[13px] text-text-secondary group-hover:text-[#f7f8f8] transition-colors">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
                {/* Inline expansion preview on mobile */}
                <AnimatePresence>
                  {!isDesktop && isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 pt-6 border-t border-border"
                    >
                      <ServiceAnimation k={item.key} />
                      <p className="muted-on-glass text-sm mt-4">{item.descLong}</p>
                      <div className="mt-6">
                        <h4 className="text-on-glass text-sm font-medium mb-3">Etapas</h4>
                        <div className="flex flex-wrap items-center gap-2">
                          {item.steps.map((s, i) => (
                            <div key={s} className="flex items-center gap-2">
                              <span className="text-xs text-text-secondary bg-secondary/40 border border-border rounded-full px-3 py-1">{s}</span>
                              {i < item.steps.length - 1 && <ArrowRight className="w-4 h-4 text-text-secondary" />}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-on-glass text-sm font-medium mb-3">Casos reais</h4>
                        <div className="space-y-3">
                          {item.testimonials.map((t, i) => (
                            <div key={i} className="group glass-card-secondary p-3">
                              <div className="flex items-start gap-2">
                                <MessageCircle className="w-4 h-4 text-text-secondary mt-1" />
                                <div>
                                  <p className="muted-on-glass text-xs">“{t.text}”</p>
                                  <p className="text-[11px] text-text-secondary mt-1">{t.author}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); openModal() }}
                          className="inline-flex items-center gap-2 min-h-[40px] rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition ease-in-out duration-200 hover:brightness-110 hover:-translate-y-[2px]"
                        >
                          Quero esse serviço
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); openModal() }}
                          className="inline-flex items-center gap-2 min-h-[40px] rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition ease-in-out duration-200 hover:brightness-110 hover:-translate-y-[2px]"
                        >
                          Falar com especialista
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </div>

        {/* Desktop overlay details */}
        <AnimatePresence>
          {isDesktop && selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60]">
              <button aria-label="Fechar" onClick={close} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                className="md:fixed md:right-0 md:top-0 md:h-full md:w-[520px] md:rounded-l-xl glass-card-primary p-6 overflow-y-auto relative w-full max-w-2xl mx-auto mt-6"
              >
                {(() => {
                  const item = services.find((s) => s.key === selected)!
                  const Icon = item.icon
                  return (
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="icon-container w-12 h-12 rounded-xl">
                            <Icon className="icon-premium w-6 h-6 text-[#f7f8f8]" />
                          </div>
                          <div>
                            <h3 className="text-on-glass text-base font-medium">{item.title}</h3>
                            <p className="muted-on-glass text-xs">{item.desc}</p>
                          </div>
                        </div>
                        <button onClick={close} className="linear-button-ghost px-3 py-2 text-xs">Fechar</button>
                      </div>

                      <div className="mt-6">
                        <ServiceAnimation k={item.key} />
                      </div>

                      <p className="muted-on-glass text-sm mt-4">{item.descLong}</p>

                      <div className="mt-6">
                        <h4 className="text-on-glass text-sm font-medium mb-3">Etapas</h4>
                        <div className="flex flex-wrap items-center gap-2">
                          {item.steps.map((s, i) => (
                            <div key={s} className="flex items-center gap-2">
                              <span className="text-xs text-text-secondary bg-secondary/40 border border-border rounded-full px-3 py-1">{s}</span>
                              {i < item.steps.length - 1 && <ArrowRight className="w-4 h-4 text-text-secondary" />}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-on-glass text-sm font-medium mb-3">Casos reais</h4>
                        <div className="space-y-3">
                          {item.testimonials.map((t, i) => (
                            <div key={i} className="group glass-card-secondary p-3">
                              <div className="flex items-start gap-2">
                                <MessageCircle className="w-4 h-4 text-text-secondary mt-1" />
                                <div>
                                  <p className="muted-on-glass text-xs">“{t.text}”</p>
                                  <p className="text-[11px] text-text-secondary mt-1">{t.author}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); openModal() }}
                          className="inline-flex items-center gap-2 min-h-[40px] rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition ease-in-out duration-200 hover:brightness-110 hover:-translate-y-[2px]"
                        >
                          Quero esse serviço
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); openModal() }}
                          className="inline-flex items-center gap-2 min-h-[40px] rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition ease-in-out duration-200 hover:brightness-110 hover:-translate-y-[2px]"
                        >
                          Falar com especialista
                        </a>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Seções refatoradas com parallax, microanimações e storytelling */}
        <AnimatedSection
          id="solucoes-estrategicas"
          title="Soluções estratégicas"
          subtitle="Posicionamento, branding e crescimento com visão e método"
          items={[
            {
              title: 'Identidade e Posicionamento de Marca',
              subtitle: 'Direção clara para presença e autoridade',
              description:
                'Definimos essência, voz e diferenciais da marca com pesquisa e estratégia. Posicionamento consistente em todos os canais para aumentar reconhecimento e preferência.',
              icon: Target,
              impact:
                'Aumenta reconhecimento e preferência, simplifica a decisão do cliente e melhora taxas de conversão com proposta de valor cristalina.'
            },
            {
              title: 'Branding Estratégico e Storytelling de Impacto',
              subtitle: 'Narrativas que conectam e geram valor percebido',
              description:
                'Criamos sistemas visuais e histórias fortes que elevam confiança, memória e diferenciação competitiva — reforçando valor e alinhamento com o negócio.',
              icon: Sparkles,
              impact:
                'Eleva autoridade e memorabilidade, fortalece diferenciação competitiva e aumenta engajamento orgânico com narrativa coerente e consistente.'
            },
            {
              title: 'Consultoria para Expansão Digital',
              subtitle: 'Estratégia prática para crescer com previsibilidade',
              description:
                'Identificamos oportunidades, priorizamos iniciativas e desenhamos rotas de crescimento com planos acionáveis, métricas e KPIs claros para acelerar resultados.',
              icon: Brain,
              impact:
                'Reduz custo de oportunidade, acelera aquisição priorizando por ROI e traz previsibilidade de crescimento com métricas acionáveis.'
            },
            {
              title: 'CRM e Gestão Operacional Inteligente',
              subtitle: 'Governança de processos e dados acionáveis',
              description:
                'Orquestramos CRMs, funis e automações com métricas e visibilidade ponta-a-ponta, aumentando eficiência, consistência e conversão em todo o ciclo.',
              icon: BarChart3,
              impact:
                'Aumenta eficiência dos funis, reduz retrabalho, melhora tempo de resposta e viabiliza decisões mais rápidas com dados confiáveis.'
            }
          ]}
        />

        <AnimatedSection
          id="tecnologia-e-automacao"
          title="Tecnologia e automação"
          subtitle="Integrações, IA e desenvolvimento sob medida com performance"
          items={[
            {
              title: 'Automação com IA e Fluxos Inteligentes',
              subtitle: 'Operações mais rápidas e escaláveis, com menos esforço',
              description:
                'Implementamos automações integradas a sistemas, CRMs e IA generativa que reduzem tempo operacional e elevam a eficiência da sua empresa.'
            },
            {
              title: 'Sistemas e Integrações Personalizadas',
              subtitle: 'Arquiteturas sob medida para seu cenário',
              description:
                'Construímos APIs, pipelines de dados e integrações confiáveis entre plataformas, com segurança, observabilidade e documentação que escalam.'
            },
            {
              title: 'Atendimento Automatizado com IA e Chatbots',
              subtitle: 'Escala no relacionamento com experiência premium',
              description:
                'Chatbots e assistentes com NLP e regras que qualificam leads, reduzem filas e aumentam satisfação, integrados aos seus sistemas e canais.'
            },
            {
              title: 'Desenvolvimento Sob Medida (Frontend + Backend)',
              subtitle: 'Produtos sólidos, performáticos e escaláveis',
              description:
                'Aplicações web e serviços com código limpo, SEO técnico e QA contínuo, alinhados ao seu negócio e preparados para evolução.'
            }
          ]}
        />

        
      </div>
    </section>
  )
}

// duplicates removed (remoção de bloco duplicado para corrigir compilação)

// Cabeçalho animado SVG (rede/linhas premium)
function AnimatedHeader() {
  return (
    <motion.svg
      viewBox="0 0 420 120"
      className="w-[320px] md:w-[420px] h-[120px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Linha central com animação de cor */}
      <motion.line
        x1="30"
        y1="60"
        x2="390"
        y2="60"
        stroke="#ffffff"
        strokeWidth="2"
        animate={{ stroke: ['#ffffff', '#7289DA', '#ffffff'] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* Nó à esquerda com movimento */}
      <motion.circle cx="30" cy="60" r="10" fill="#7289DA" />
      <motion.circle
        cx="30"
        cy="60"
        r="4"
        fill="#B3C7FF"
        animate={{ cx: [30, 390, 30] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />

      {/* Nós superiores/inferiores conectando como rede */}
      <motion.circle cx="110" cy="30" r="6" fill="rgba(114,137,218,0.8)" />
      <motion.circle cx="200" cy="20" r="5" fill="rgba(179,199,255,0.9)" />
      <motion.circle cx="290" cy="35" r="7" fill="rgba(114,137,218,0.8)" />
      <motion.circle cx="110" cy="90" r="6" fill="rgba(114,137,218,0.8)" />
      <motion.circle cx="200" cy="100" r="5" fill="rgba(179,199,255,0.9)" />
      <motion.circle cx="290" cy="85" r="7" fill="rgba(114,137,218,0.8)" />

      {/* Linhas conectando nós (pulsando) */}
      <motion.line x1="110" y1="30" x2="200" y2="20" stroke="rgba(179,199,255,0.6)" strokeWidth="2" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }} />
      <motion.line x1="200" y1="20" x2="290" y2="35" stroke="rgba(179,199,255,0.6)" strokeWidth="2" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} />
      <motion.line x1="110" y1="90" x2="200" y2="100" stroke="rgba(179,199,255,0.6)" strokeWidth="2" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} />
      <motion.line x1="200" y1="100" x2="290" y2="85" stroke="rgba(179,199,255,0.6)" strokeWidth="2" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }} />
    </motion.svg>
  )
}

// Removed duplicate top-level 'Resultados' and CTA block that caused JSX parse error
type ServiceKey = 'web' | 'automation' | 'integration' | 'mobile'

type ServiceItem = {
  key: ServiceKey
  title: string
  icon: any
  desc: string
  descLong: string
  steps: string[]
  testimonials: { author: string; role?: string; text: string }[]
}

function WebAnimation() {
  return (
    <motion.svg viewBox="0 0 200 120" className="w-full h-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.rect x="10" y="10" width="180" height="100" rx="12" className="fill-secondary/60" stroke="rgba(94,106,210,0.3)" />
      <motion.rect x="20" y="24" width="70" height="12" rx="6" className="fill-accent/70" animate={{ x: [20, 90, 20] }} transition={{ repeat: Infinity, duration: 4 }} />
      <motion.rect x="20" y="44" width="160" height="10" rx="5" className="fill-border" />
      <motion.rect x="20" y="62" width="140" height="10" rx="5" className="fill-border" />
      <motion.rect x="20" y="80" width="120" height="10" rx="5" className="fill-border" />
    </motion.svg>
  )
}

function AutomationAnimation() {
  return (
    <motion.svg viewBox="0 0 200 120" className="w-full h-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.circle cx="70" cy="60" r="24" className="fill-secondary/60" stroke="rgba(94,106,210,0.3)" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: 'linear' }} />
      <motion.circle cx="130" cy="60" r="18" className="fill-secondary/60" stroke="rgba(94,106,210,0.3)" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }} />
      <motion.rect x="40" y="20" width="120" height="12" rx="6" className="fill-border" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} />
    </motion.svg>
  )
}

function IntegrationAnimation() {
  return (
    <motion.svg viewBox="0 0 200 120" className="w-full h-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.circle cx="50" cy="60" r="18" className="fill-secondary/60" stroke="rgba(94,106,210,0.3)" />
      <motion.circle cx="150" cy="60" r="18" className="fill-secondary/60" stroke="rgba(94,106,210,0.3)" />
      <motion.path d="M68 60 H132" stroke="rgba(94,106,210,0.5)" strokeWidth="3" />
      <motion.circle cx="68" cy="60" r="5" className="fill-accent/80" animate={{ cx: [68, 132, 68] }} transition={{ repeat: Infinity, duration: 3 }} />
    </motion.svg>
  )
}

function MobileAnimation() {
  return (
    <motion.svg viewBox="0 0 120 200" className="w-full h-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.rect x="30" y="10" width="60" height="180" rx="18" className="fill-secondary/60" stroke="rgba(94,106,210,0.3)" />
      <motion.rect x="40" y="30" width="40" height="12" rx="6" className="fill-border" />
      <motion.rect x="40" y="52" width="40" height="12" rx="6" className="fill-border" />
      <motion.rect x="40" y="74" width="40" height="12" rx="6" className="fill-border" />
      <motion.circle cx="60" cy="170" r="6" className="fill-border" />
      <motion.rect x="40" y="30" width="40" height="12" rx="6" className="fill-accent/60" animate={{ y: [30, 74, 30] }} transition={{ repeat: Infinity, duration: 4 }} />
    </motion.svg>
  )
}

const services: ServiceItem[] = [
  {
    key: 'web',
    title: 'Aplicações Web',
    icon: Code2,
    desc: 'Sites e sistemas com performance e SEO técnico.',
    descLong:
      'Projetamos e desenvolvemos aplicações web de alto desempenho com arquitetura moderna, acessibilidade e SEO técnico. Entregas iterativas, código limpo e experiências premium.',
    steps: ['Briefing', 'UI/UX', 'Desenvolvimento', 'QA', 'Deploy'],
    testimonials: [
      { author: 'Carla — PM', text: 'A entrega foi impecável: rápido, seguro e com UX consistente.' },
      { author: 'Eduardo — Founder', text: 'Sistema web escalável e com SEO técnico que trouxe resultado.' },
    ],
  },
  {
    key: 'automation',
    title: 'Automações',
    icon: Zap,
    desc: 'Bots e fluxos integrados: WhatsApp, CRM, ERP, e-commerce.',
    descLong:
      'Automatizamos processos chave com integrações entre canais e sistemas. Reduza o trabalho manual e aumente sua eficiência com fluxos robustos e observáveis.',
    steps: ['Mapeamento', 'Flow/Script', 'Integrações', 'Monitoramento'],
    testimonials: [
      { author: 'Lívia — Ops', text: 'Automação de WhatsApp + CRM eliminou tarefas repetitivas.' },
      { author: 'Rafael — Vendas', text: 'Integrações fluidas entre ERP e e-commerce, sem retrabalho.' },
    ],
  },
  {
    key: 'integration',
    title: 'Integrações',
    icon: Database,
    desc: 'APIs e pipelines de dados robustos.',
    descLong:
      'Criamos integrações confiáveis com APIs e pipelines de dados. Segurança, autenticação, mapeamento e sincronização contínua com observabilidade.',
    steps: ['API Discovery', 'Auth', 'Mapeamento', 'Sincronização', 'Observabilidade'],
    testimonials: [
      { author: 'Paula — Tech Lead', text: 'Pipelines estáveis e integrações bem documentadas.' },
      { author: 'Bruno — Data', text: 'Sincronização de dados em tempo quase real com alertas.' },
    ],
  },
  {
    key: 'mobile',
    title: 'Mobile & PWA',
    icon: Smartphone,
    desc: 'Aplicativos modernos com conversão e experiência.',
    descLong:
      'Apps mobile e PWAs responsivos com foco em conversão, performance e offline-first. Publicação assistida e evolução contínua.',
    steps: ['Protótipo', 'Dev', 'Offline/PWA', 'Publicação'],
    testimonials: [
      { author: 'Marina — Marketing', text: 'PWA leve aumentou retenção sem precisar de loja.' },
      { author: 'Tiago — Produto', text: 'Experiência mobile moderna e fluida, com performance.' },
    ],
  },
]

function ServiceAnimation({ k }: { k: ServiceKey }) {
  switch (k) {
    case 'web':
      return <WebAnimation />
    case 'automation':
      return <AutomationAnimation />
    case 'integration':
      return <IntegrationAnimation />
    case 'mobile':
      return <MobileAnimation />
    default:
      return null
  }
}