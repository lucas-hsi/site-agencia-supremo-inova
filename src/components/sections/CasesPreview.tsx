import { motion } from 'framer-motion'
import { ArrowRight, Car, PartyPopper, Building2, Baby } from 'lucide-react'
import { Link } from 'react-router-dom'




import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'

// Dados reais dos 4 cases
const casesData = [
  {
    name: 'DL Auto Peças',
    value: 100,
    tech: 'Python, PostgreSQL, React, IA',
    service: 'Sistema robusto, automação inteligente, integração via APIs',
    result: 'Plataforma automatizada e integração total',
    icon: 'autopecas',
  },
  {
    name: 'Chácara Recanto dos Pinheiros',
    value: 100,
    tech: 'Site institucional, SEO, sistema de agendamento',
    service: 'Portfólio digital, agendamento online, posicionamento Google',
    result: 'Top 1 busca local para “chácara de eventos em Colombo”',
    icon: 'eventos',
  },
  {
    name: 'Construtora Jellus',
    value: 120,
    tech: 'Site institucional, SEO local',
    service: 'Portfólio digital e otimização de busca',
    result: '+120% de crescimento na procura após lançamento',
    icon: 'construcao',
  },
  {
    name: 'Majubella Infantil',
    value: 100,
    tech: 'E-commerce, gestão de redes sociais',
    service: 'Estrutura digital completa, marketing multicanal',
    result: 'E-commerce funcional e redes sociais ativas',
    icon: 'infantil',
  },
]

function CasesTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const item = payload[0].payload
    return (
      <div className="linear-card p-4 text-sm">
        <div className="font-medium text-text-primary mb-1">{item.name}</div>
        <div className="text-text-muted">Tecnologias: <span className="text-text-primary">{item.tech}</span></div>
        <div className="text-text-muted">Serviço: <span className="text-text-primary">{item.service}</span></div>
        <div className="text-text-muted">Resultado: <span className="text-accent">{item.result}</span></div>
      </div>
    )
  }
  return null
}

export function CasesPreview() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#f7f8f8] mb-4 tracking-tight text-center">
            Cases de <span className="text-accent">Sucesso</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Resultados reais em projetos de diferentes segmentos, com foco em tecnologia, automação e impacto sustentável.
          </p>
        </motion.div>

        {/* Gráfico + Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Gráfico de barras horizontais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="linear-card p-6"
          >
            <div className="text-sm text-text-muted mb-4">Impacto dos projetos</div>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={casesData} layout="vertical" margin={{ top: 8, right: 16, bottom: 8, left: 16 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis type="number" domain={[0, 130]} tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={{ stroke: '#374151' }} />
                <YAxis type="category" dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={{ stroke: '#374151' }} width={160} />
                <Tooltip content={<CasesTooltip />} cursor={{ fill: 'rgba(99,102,241,0.08)' }} />
                <Bar dataKey="value" radius={[8, 8, 8, 8]} isAnimationActive fill="url(#barGradient)">
                  {casesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.value >= 120 ? '#22c55e' : 'url(#barGradient)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="text-xs text-text-muted mt-3">Obs: valores visuais representam conquistas reais; destaque para crescimento de 120% (Construtora Jellus).</div>
          </motion.div>

          {/* Cards dos cases */}
          <div className="grid sm:grid-cols-2 gap-6">
            {casesData.map((item, index) => {
              const SegmentIcon =
                item.icon === 'autopecas' ? Car :
                item.icon === 'eventos' ? PartyPopper :
                item.icon === 'construcao' ? Building2 :
                Baby

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="linear-card p-6 h-full group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/15">
                        <SegmentIcon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">{item.name}</div>
                        <div className="text-xs text-text-muted/70">Segmento</div>
                      </div>
                    </div>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-md">Impacto</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="text-text-muted">Tecnologias: <span className="text-text-primary">{item.tech}</span></div>
                    <div className="text-text-muted">Serviço: <span className="text-text-primary">{item.service}</span></div>
                    <div className="text-text-muted">Resultado: <span className="text-accent">{item.result}</span></div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div className="text-xs text-text-muted">Detalhes</div>
                    <Link to="/cases" className="inline-flex items-center gap-2 text-text-muted group-hover:text-accent">
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/cases"
            className="linear-button inline-flex items-center gap-2"
          >
            <span>Ver todos os cases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}