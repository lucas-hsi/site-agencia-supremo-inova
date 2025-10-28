export type BlogPost = {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  excerpt: string
  content: string
  readingTime?: string
  author?: string
  references?: { label: string; url: string }[]
}

export const posts: BlogPost[] = [
  {
    slug: 'integracao-whatsapp-business-api',
    title: 'Integração completa com WhatsApp Business API',
    date: '2024-01-15',
    category: 'Integração',
    tags: ['WhatsApp', 'API', 'Automação', 'Atendimento'],
    excerpt:
      'Sistema avançado de automação e atendimento via WhatsApp, integrado ao seu ecossistema digital.',
    content:
      'Implementamos uma integração robusta com a WhatsApp Business API, conectando CRM, qualificação de leads e automações de atendimento. O fluxo contempla mensagens transacionais, catálogos, templates aprovados e regras de negócio que reduzem filas e aumentam a eficiência. Toda a jornada é monitorada com eventos e métricas para otimização contínua.',
    readingTime: '4 min',
    author: 'Equipe Supremo Inova',
    references: [
      { label: 'WhatsApp: Pricing (2025)', url: 'https://developers.facebook.com/docs/whatsapp/pricing/' },
      { label: 'Cloud API Overview', url: 'https://developers.facebook.com/docs/whatsapp/cloud-api/' },
      { label: 'HubSpot: State of Marketing 2025', url: 'https://www.hubspot.com/state-of-marketing' },
    ],
  },
  {
    slug: 'seo-local-agendamento-eventos-chacara-recanto-dos-pinheiros',
    title: 'SEO local e agendamento online para eventos',
    date: '2024-02-10',
    category: 'SEO',
    tags: ['SEO Local', 'Eventos', 'Agendamento'],
    excerpt:
      'Como a Chácara Recanto dos Pinheiros conquistou autoridade local e aumentou agendamentos.',
    content:
      'Construímos presença digital com foco em SEO local, páginas otimizadas e sistema de agendamento fluido. A estratégia elevou visibilidade orgânica, gerou leads qualificados (+35%) e aumentou conversões em agendamentos (+22%). Branding e conteúdo alinhados ao público garantiram reputação e avaliações de qualidade.',
    readingTime: '3 min',
    author: 'Gestão da Chácara',
    references: [
      { label: 'Think with Google (Local)', url: 'https://www.thinkwithgoogle.com/intl/pt-br/insights/local/' },
      { label: 'Google Business Profile', url: 'https://support.google.com/business/' },
      { label: 'Moz: Guia de Local SEO', url: 'https://moz.com/learn/seo/local-seo' },
    ],
  },
  {
    slug: 'automacao-ia-marketplaces-dl-auto-pecas',
    title: 'Automação com IA em marketplaces: o case DL Auto Peças',
    date: '2024-03-12',
    category: 'Automação',
    tags: ['IA', 'Marketplaces', 'CRM'],
    excerpt:
      'Arquitetura escalável com geração automática de anúncios, CRM integrado e governança.',
    content:
      'Integramos fornecedores, marketplaces e CRM com automações inteligentes. A IA prepara anúncios (incluindo remoção de fundo), qualifica leads e melhora atendimento. A operação reduziu 25% do tempo operacional, com dados organizados e performance estável para crescer sem fricção.',
    readingTime: '5 min',
    author: 'Board DL',
    references: [
      { label: 'Amazon Selling Partner API', url: 'https://developer-docs.amazon.com/sp-api' },
      { label: 'Gartner: Automação', url: 'https://www.gartner.com/en/insights/automation' },
      { label: 'McKinsey: Potencial da IA generativa', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-economic-potential-of-generative-ai' },
    ],
  },
  {
    slug: 'branding-ux-ecommerce-majubella',
    title: 'Branding e UX/UI para e-commerce infantil: Majubella',
    date: '2024-04-05',
    category: 'Produto',
    tags: ['E-commerce', 'UX/UI', 'Omnichannel'],
    excerpt:
      'Do zero ao omnichannel: branding, UX e estratégia digital integrada em moda infantil.',
    content:
      'Lançamos o e-commerce com identidade visual, precificação e UX orientada à conversão. A estratégia multicanal conectou redes sociais, tráfego e CRM, refletindo em +18% de conversão e +32% de crescimento em vendas. Operação omnichannel consistente e escalável.',
    readingTime: '4 min',
    author: 'Equipe Majubella',
    references: [
      { label: 'Shopify: Commerce Trends', url: 'https://www.shopify.com/enterprise/commerce-trends' },
      { label: 'Baymard Institute: Usabilidade em e-commerce', url: 'https://baymard.com/ecommerce-usability' },
      { label: 'Statista: Varejo online', url: 'https://www.statista.com/topics/871/online-shopping/' },
    ],
  },
  {
    slug: 'sistema-analise-rastreio-performance',
    title: 'Sistema interno de análise e rastreio de performance',
    date: '2023-12-28',
    category: 'Sistema',
    tags: ['Dashboards', 'KPIs', 'Monitoramento', 'Data'],
    excerpt:
      'Dashboards inteligentes com métricas em tempo real e rastreio de performance por processos.',
    content:
      'Desenhamos um sistema interno focado em governança de dados e performance operacional. KPIs críticos são acompanhados em tempo real com alertas e relatórios automatizados. O rastreio por processo expõe gargalos, melhora lead time e dá visibilidade executiva para decisões rápidas. Integração com BI garante histórico e comparativos por período.',
    readingTime: '3 min',
    author: 'Equipe Supremo Inova',
    references: [
      { label: 'Google Analytics 4 (GA4)', url: 'https://support.google.com/analytics/answer/11995278' },
      { label: 'Looker Studio', url: 'https://support.google.com/looker-studio' },
      { label: 'DORA Metrics', url: 'https://dora.dev/' },
    ],
  },
  {
    slug: 'automacoes-funil-notificacoes-inteligentes',
    title: 'Novas automações de funil e notificações inteligentes',
    date: '2023-12-22',
    category: 'Automação',
    tags: ['Funil', 'Notificações', 'Comportamento', 'CRM'],
    excerpt:
      'Fluxos automatizados de funil com notificações baseadas em comportamento e regras de negócio.',
    content:
      'Implementamos automações que ativam notificações contextuais em cada etapa do funil, reduzindo perdas e aumentando conversão. As regras consideram tempo de inatividade, score de lead e canais preferidos. A orquestração integra CRM, e-mail, WhatsApp e push, com métricas de abertura, resposta e avanço de funil para otimização contínua.',
    readingTime: '4 min',
    author: 'Equipe Supremo Inova',
    references: [
      { label: 'HubSpot: Workflows', url: 'https://knowledge.hubspot.com/workflows/create-workflows' },
      { label: 'Braze: User Guide', url: 'https://www.braze.com/docs/user_guide/' },
      { label: 'Segment: Protocols', url: 'https://segment.com/docs/protocols/' },
    ],
  },
  {
    slug: 'tendencias-tecnologia-2025-agencias',
    title: 'Tendências de tecnologia 2025 para PMEs e agências',
    date: '2025-01-08',
    category: 'Mercado',
    tags: ['Tendências', 'Agências', 'PMEs', 'Tecnologia'],
    excerpt:
      'Panorama de tendências em automação, IA, dados e canais para 2025.',
    content:
      'Mapeamos movimentos relevantes para agências e PMEs: IA aplicada à operação e marketing, automações cross-channel, governança de dados, personalização em escala e integrações nativas com plataformas líderes. O foco é eficiência, mensuração e crescimento sustentado, conectando estratégia com tecnologia prática.',
    readingTime: '4 min',
    author: 'Equipe Supremo Inova',
    references: [
      { label: 'Gartner: Top Strategic Technology Trends', url: 'https://www.gartner.com/en/information-technology/insights/top-strategic-technology-trends' },
      { label: 'McKinsey: Technology Trends Outlook 2025', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-top-trends-in-tech' },
      { label: 'HubSpot: State of Marketing 2025', url: 'https://www.hubspot.com/state-of-marketing' },
    ],
  },
  {
    slug: 'crescimento-crm-automacoes-dados',
    title: 'Crescimento com CRM e automações orientadas a dados',
    date: '2025-01-10',
    category: 'Mercado',
    tags: ['CRM', 'Dados', 'Automação', 'Crescimento'],
    excerpt:
      'Como arquiteturas de dados e CRM aumentam conversão e lifetime value.',
    content:
      'Exploramos práticas para elevar eficiência comercial: padronização de dados, integrações em tempo real, score de leads, cadências automáticas e ativação por eventos. O resultado são ciclos mais curtos, previsibilidade e consistência em crescimento com mensuração clara de ROI.',
    readingTime: '3 min',
    author: 'Equipe Supremo Inova',
    references: [
      { label: 'Salesforce: State of CRM', url: 'https://www.salesforce.com/resources/research-reports/state-of-crm/' },
      { label: 'MIT Sloan: Analytics & Performance', url: 'https://sloanreview.mit.edu/tag/analytics/' },
      { label: 'Forrester: B2B Marketing', url: 'https://www.forrester.com/b2b-marketing/' },
    ],
  },
]