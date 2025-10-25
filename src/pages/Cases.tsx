import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, TrendingUp, Users, Zap, Code, Sparkles, X } from 'lucide-react'
import '../styles/cases-page.css'

const casesData = [
  {
    id: 'majubella',
    name: 'Majubella',
    category: 'E-commerce',
    gradientClass: 'case-rosa',
    tagline: 'E-commerce de moda infantil criado do zero',
    description: 'Branding, identidade visual, UX/UI do e-commerce e estratégia digital integrada.',
    link: 'https://majubella.com/',
    metrics: [
      { icon: TrendingUp, label: 'Crescimento em vendas online', value: '+32%' },
      { icon: Zap, label: 'Melhoria na conversão', value: '+18%' },
      { icon: Users, label: 'Recorrência de clientes', value: '+20%' },
    ],
    tech: ['Shopify', 'React', 'WhatsApp API', 'Analytics'],
    testimonial: {
      author: 'Equipe Majubella',
      text: 'Experiência digital consistente que conectou produto, venda e comunicação de forma eficiente.'
    },
    details: {
      story: 'E-commerce lançado do zero com branding, precificação e UX/UI orientados a conversão. Estratégia multicanal conectando redes sociais, tráfego e CRM.',
      differentials: ['Abordagem consultiva', 'UX premium com foco em conversão', 'Integração produto-venda-comunicação', 'Operação omnichannel estruturada'],
      results: ['Aumento sustentável em vendas com base em dados', 'Maior previsibilidade de receita', 'Melhor percepção de marca e experiência do usuário']
    }
  },
  {
    id: 'dl-auto-pecas',
    name: 'DL Auto Peças',
    category: 'Marketplace',
    gradientClass: 'case-teal',
    tagline: 'Automação total e gestão inteligente com IA',
    description: 'Integração de marketplaces, CRM com IA, anúncios automáticos e atendimento inteligente.',
    link: 'https://www.dlautopecas.com.br/',
    metrics: [
      { icon: Users, label: 'Peças em estoque', value: '30k+' },
      { icon: Code, label: 'Anúncios gerados/mês', value: '1.2k+' },
      { icon: Zap, label: 'Redução de tempo operacional', value: '−25%' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'IA', 'APIs'],
    testimonial: {
      author: 'Board DL',
      text: 'Ecossistema escalável e integrado que transformou performance e governança de operação.'
    },
    details: {
      story: 'Ecommerce automotivo com integração entre fornecedores, marketplaces e CRM. IA aplicada na geração de anúncios (com remoção automática de fundo), qualificação de leads e atendimento.',
      differentials: ['Arquitetura escalável', 'Automação ponta-a-ponta', 'Integrações robustas via APIs', 'Governança e dados para decisão'],
      results: ['Escalabilidade de catálogo sem comprometer performance', 'Time focado em estratégia, não em tarefas repetitivas', 'Melhor taxa de resposta e conversão em canais digitais']
    }
  },
  {
    id: 'chacara-recanto-dos-pinheiros',
    name: 'Chácara Recanto dos Pinheiros',
    category: 'Eventos',
    gradientClass: 'case-azul',
    tagline: 'Autoridade local com SEO e agendamento online',
    description: 'Marca, identidade visual e site com sistema de agendamento para eventos.',
    link: undefined,
    metrics: [
      { icon: TrendingUp, label: 'Leads qualificados', value: '+35%' },
      { icon: Sparkles, label: 'Avaliações 5 estrelas', value: 'Alta' },
      { icon: Zap, label: 'Conversão em agendamentos', value: '+22%' },
    ],
    tech: ['Site institucional', 'SEO local', 'Agendamento online'],
    testimonial: {
      author: 'Gestão da Chácara',
      text: 'Posicionamento Google e atendimento digital eficiente geraram autoridade e conversões.'
    },
    details: {
      story: 'Construção de presença digital local com SEO e sistema de agendamento. Atendimento personalizado orientado a experiência.',
      differentials: ['Estratégia de SEO local', 'Jornada de agendamento fluida', 'Branding alinhado ao público'],
      results: ['Maior visibilidade orgânica', 'Aumento de solicitações qualificados', 'Melhoria nas avaliações e reputação']
    }
  },
  {
    id: 'construtora-jellus',
    name: 'Construtora Jellus',
    category: 'Construção',
    gradientClass: 'case-verde',
    tagline: 'Ressignificação de marca e portfólio avançado',
    description: 'Criação de logo, portfólio e consultoria em Google Meu Negócios.',
    link: undefined,
    metrics: [
      { icon: TrendingUp, label: 'Busca por orçamentos', value: '+150%' },
      { icon: Users, label: 'Novos contatos mensais', value: '+40%' },
      { icon: Sparkles, label: 'Percepção de marca', value: 'Alta' },
    ],
    tech: ['Branding', 'Site institucional', 'Google Meu Negócios'],
    testimonial: {
      author: 'Diretoria Jellus',
      text: 'Transformação digital com impacto real na geração de demanda e reputação.'
    },
    details: {
      story: 'Projeto de reposicionamento e presença digital com foco em credibilidade e captação. Site está temporariamente fora do ar (restauração em andamento).',
      differentials: ['Abordagem consultiva', 'Portfólio visual orientado a credibilidade', 'Otimização de presença no Google'],
      results: ['Crescimento sólido em contatos', 'Aumento de orçamentos qualificados', 'Fortalecimento de marca no mercado']
    }
  },
  {
    id: 'lady-lord-ahu',
    name: 'Lady&Lord Ahú',
    category: 'Beleza',
    gradientClass: 'case-rosa',
    tagline: 'Retenção e recorrência com estratégia de atendimento',
    description: 'Consultoria de atendimento e marketing digital focada em fidelização e serviços de alto valor.',
    link: undefined,
    metrics: [
      { icon: Users, label: 'Recorrência de clientes', value: '+28%' },
      { icon: Sparkles, label: 'Satisfação percebida', value: '+15%' },
      { icon: TrendingUp, label: 'Taxa de retenção', value: '+22%' },
    ],
    tech: ['Consultoria', 'Playbooks de atendimento', 'Campanhas de recorrência'],
    testimonial: {
      author: 'Gestão do Salão',
      text: 'Equipe preparada e estratégia de retenção elevaram a recorrência com foco em experiência.'
    },
    details: {
      story: 'Diagnóstico e preparação da equipe com playbooks e campanhas de recorrência. Estratégia para serviços de alto valor e fidelização.',
      differentials: ['Abordagem consultiva contínua', 'Treinamento e processos', 'Marketing orientado à retenção'],
      results: ['Mais clientes fidelizados', 'Aumento da receita recorrente', 'Melhor jornada de atendimento']
    }
  },
  {
    id: 'dicolore',
    name: 'Dicolore (Cosméticos)',
    category: 'Cosméticos',
    gradientClass: 'case-azul',
    tagline: 'Prospecção digital e networking comercial',
    description: 'Biolink estratégico e portfólio digital para captar salões de beleza profissionais.',
    link: undefined,
    metrics: [
      { icon: TrendingUp, label: 'Prospecção digital', value: '+30%' },
      { icon: Users, label: 'Contatos qualificados/mês', value: '50+' },
      { icon: Zap, label: 'Alcance orgânico', value: '+40%' },
    ],
    tech: ['Biolink', 'Portfólio Digital', 'CRM'],
    testimonial: {
      author: 'Representante Estadual',
      text: 'Abordagem digital estruturada gerou networking comercial e aumento de oportunidades.'
    },
    details: {
      story: 'Planejamento e execução de presença digital voltada à captação B2B, com biolink e portfólio prático.',
      differentials: ['Estratégia orientada a captação', 'Ferramentas enxutas e eficazes', 'CRM para qualificação'],
      results: ['Mais leads qualificados', 'Aumento de conversas comerciais', 'Presença digital alinhada a objetivos']
    }
  }
]

export function Cases() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.case-card'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const index = Number(el.dataset.index || '0')
            el.style.transitionDelay = `${index * 0.1}s`
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '-100px' }
    )

    cards.forEach((card, idx) => {
      card.dataset.index = String(idx)
      observer.observe(card)
    })

    const hero = document.querySelector('.cases-hero') as HTMLElement | null
    if (hero) hero.classList.add('visible')

    const glow = document.querySelector('.hero-glow') as HTMLElement | null
    const onScroll = () => {
      const y = window.scrollY * 0.04
      if (glow) glow.style.transform = `translate3d(0, ${y}px, 0)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [selectedCase, setSelectedCase] = useState<any | null>(null)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedCase(null) }
    window.addEventListener('keydown', onKeyDown)
    if (selectedCase) { document.body.style.overflow = 'hidden' } else { document.body.style.overflow = '' }
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [selectedCase])

  return (
    <main className="cases-page min-h-screen bg-[#0a0a0f] relative overflow-x-hidden">
      <section className="cases-hero container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="hero-glow" aria-hidden />
        <div className="flex flex-col items-center text-center">
          <div className="badge-portfolio">Portfolio</div>
          <h1 className="title-wow">Cases de <span className="gradient-text">Sucesso</span></h1>
          <p className="subtitle-premium">Projetos com visual premium, arquitetura sólida e resultados palpáveis.</p>
          <div className="stats-box">
            <div className="stat-item">
              <TrendingUp className="stat-icon" />
              <div>
                <div className="stat-value">+22%</div>
                <div className="stat-label">Crescimento médio</div>
              </div>
            </div>
            <div className="stat-item">
              <Sparkles className="stat-icon" />
              <div>
                <div className="stat-value">140+</div>
                <div className="stat-label">Projetos entregues</div>
              </div>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" />
              <div>
                <div className="stat-value">95%</div>
                <div className="stat-label">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {casesData.map((c) => (
            <article key={c.id} className={`case-card ${c.gradientClass}`}>
              <div className="card-glow" aria-hidden />
              <div className="card-header">
                <span className="case-badge">{c.category}</span>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="external-link" aria-label={`Abrir site de ${c.name}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                ) : (
                  <span className="external-link disabled" title="Projeto confidencial">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                )}
              </div>
              <h3 className="case-title">{c.name}</h3>
              <p className="case-tagline">{c.tagline}</p>
              <p className="case-desc">{c.description}</p>
              <div className="metrics">
                {c.metrics.map((m, i) => (
                  <div key={i} className="metric">
                    <m.icon className="metric-icon" />
                    <div>
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tech-tags">
                {c.tech.map((t, i) => (<span key={i} className="tech-tag">{t}</span>))}
              </div>
              <blockquote className="testimonial">
                <p className="testimonial-text">“{c.testimonial.text}”</p>
                <footer className="testimonial-author">{c.testimonial.author}</footer>
              </blockquote>
              <div className="card-cta">
                <button className="cta-button-case" onClick={() => setSelectedCase(c)}>
                  <span>Ver mais</span>
                  <ArrowUpRight className="cta-arrow" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedCase && (
        <>
          <div className={`overlay-backdrop ${selectedCase ? 'open' : ''}`} onClick={() => setSelectedCase(null)} />
          <aside className={`case-overlay ${selectedCase ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label={`Detalhes do case ${selectedCase.name}`}>
            <div className="overlay-header">
              <span className="case-badge">{selectedCase.category}</span>
              <button className="overlay-close" onClick={() => setSelectedCase(null)} aria-label="Fechar">
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="overlay-title">{selectedCase.name}</h3>
            <p className="overlay-subtitle">{selectedCase.tagline}</p>
            <div className="overlay-section">
              <h4 className="overlay-heading">História</h4>
              <p className="overlay-text">{selectedCase.details?.story}</p>
            </div>
            <div className="overlay-section">
              <h4 className="overlay-heading">Diferenciais Supremo Inova</h4>
              <ul className="overlay-list">
                {selectedCase.details?.differentials?.map((d: string, i: number) => (
                  <li key={i} className="overlay-list-item">{d}</li>
                ))}
              </ul>
            </div>
            <div className="overlay-section">
              <h4 className="overlay-heading">Resultados</h4>
              <ul className="overlay-list">
                {selectedCase.details?.results?.map((r: string, i: number) => (
                  <li key={i} className="overlay-list-item">{r}</li>
                ))}
              </ul>
            </div>
            <div className="overlay-section">
              <h4 className="overlay-heading">Tecnologias</h4>
              <div className="tech-tags">
                {selectedCase.tech?.map((t: string, i: number) => <span key={i} className="tech-tag">{t}</span>)}
              </div>
            </div>
            {selectedCase.link && (
              <div className="overlay-actions">
                <a className="overlay-link" href={selectedCase.link} target="_blank" rel="noopener noreferrer">
                  Visitar site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </aside>
        </>
      )}

      <section className="cta-final">
        <div className="cta-gradient-line" aria-hidden />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="cta-title">Pronto para o Próximo Case de Sucesso?</h2>
          <p className="cta-subtitle">Vamos construir algo memorável: visual premium, arquitetura sólida e impacto mensurável.</p>
          <Link to="/contato" className="cta-primary">
            <Sparkles className="w-5 h-5" />
            <span>Iniciar Projeto</span>
          </Link>
        </div>
      </section>
    </main>
  )
}