import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, XCircle, Network, TrendingUp, BarChart3, Cpu, Users, Activity } from 'lucide-react'

export default function Hub() {
  return (
    <div className="center-all min-h-screen bg-[#0A0B0E] text-white overflow-x-hidden">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Onde Propósito, Performance e Prosperidade se Encontram</h1>
            <p className="mt-4 text-lg text-white/80">Isto não é uma agência ou um grupo de networking comum. É um ecossistema vivo de negócios orientado por propósito e visão estratégica.</p>
            <div className="mt-8 flex items-center justify-center gap-3 text-accent">
              <Network size={32} />
              <span className="text-white/90">Ecossistema de co-criação e prosperidade</span>
            </div>
            <div className="mt-8 flex justify-center">
              <Link to="/contato" className="group linear-button min-h-[44px] px-4 linear-glow-strong">Eu quero fazer parte</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-white/10 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">O Mercado Entrega Serviços. Nós Entregamos Transformação.</h2>
            <p className="text-white/85">
              Percebemos que muitos empresários brilhantes trabalham de forma isolada, sem estrutura ou propósito coletivo. O Hub nasce para corrigir isso, criando um sistema onde cada negócio cresce ajudando o outro, unindo liderança com propósito e execução com alma.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {(() => {
              const items = [
                { Icon: BarChart3, title: 'Inteligência de Mercado', desc: 'Estratégia e visão para identificar oportunidades e alinhar a gestão.' },
                { Icon: Cpu, title: 'Tecnologia Aplicada', desc: 'Integração inteligente e automação para uma execução precisa e com alma.' },
                { Icon: Users, title: 'Desenvolvimento Humano', desc: 'Formação de líderes conscientes e fortalecimento de uma mentalidade de crescimento contínuo.' },
              ]
              return items.map((item, idx) => {
                const Icon = item.Icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/10 h-32 flex flex-col justify-center"
                  >
                    <div className="flex justify-center mb-2" aria-hidden>
                      <Icon className="text-accent w-6 h-6" />
                    </div>
                    <h3 className="font-medium text-center text-sm">{item.title}</h3>
                    <p className="text-white/75 text-xs mt-2 text-center">{item.desc}</p>
                  </motion.div>
                )
              })
            })()}
          </div>
        </div>
      </section>

      {/* Este Ecossistema é para Você? */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">Este Ecossistema é para Você?</h2>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-white/10 h-80 flex flex-col">
            <div className="flex items-center justify-center gap-3 mb-6"><CheckCircle2 className="text-accent w-6 h-6" /><span className="font-medium text-lg">Sim, se você:</span></div>
            <ul className="space-y-4 text-white/85 flex-1 flex flex-col justify-center">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Busca propósito e solidez no crescimento.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Deseja prosperar de forma sustentável, humana e inteligente.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Está pronto para alinhar visão, gestão e significado.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-white/10 h-80 flex flex-col">
            <div className="flex items-center justify-center gap-3 mb-6"><XCircle className="text-red-400 w-6 h-6" /><span className="font-medium text-lg">Não é para você se:</span></div>
            <ul className="space-y-4 text-white/85 flex-1 flex flex-col justify-center">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Busca apenas networking ou soluções mágicas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Não está disposto a colaborar e crescer coletivamente.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Não está comprometido com a excelência e a execução.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.svg
            className="w-full h-full opacity-10"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ y: 0 }}
            animate={{ y: [-120, 0, -120] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 120 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={10 + (i * 17) % 800}
                cy={10 + ((i * 23) % 600)}
                r={(i % 3) === 0 ? 2 : 1}
                fill="rgba(255,255,255,0.8)"
              />
            ))}
          </motion.svg>
        </div>
        <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">Como funciona</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {(() => {
            const stepIcons = [Activity, Cpu, Users, BarChart3]
            return [
              { title: '1. Diagnóstico e Alinhamento', desc: 'Analisamos sua visão, gestão e o “porquê” do seu negócio para entender seu ponto de partida.' },
              { title: '2. Integração Estratégica', desc: 'Integramos tecnologia, inteligência de mercado e processos para dar solidez à sua operação.' },
              { title: '3. Crescimento Colaborativo', desc: 'Você entra em um ecossistema vivo, onde cresce ajudando outros a crescer, impulsionado por um propósito coletivo.' },
              { title: '4. Legado e Expansão', desc: 'Construímos prosperidade compartilhada, impacto mensurável e preparamos seu negócio para o futuro.' },
            ].map((item, idx) => {
              const Icon = stepIcons[idx]
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/10"
                >
                  <div className="flex justify-center mb-2" aria-hidden>
                    <Icon className="text-accent" />
                  </div>
                  <h3 className="mt-1 font-medium text-center">{item.title}</h3>
                  <p className="mt-2 text-white/75 text-sm">{item.desc}</p>
                </motion.div>
              )
            })
          })()}
        </div>
      </section>

      {/* Benefícios em Destaque */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">Benefícios em Destaque</h2>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {[
            'Saia do Isolamento: Tenha acesso a um networking focado em propósito e crescimento coletivo, não em troca de cartões.',
            'Tecnologia com Alma: Integre sua operação com a inteligência de mercado e a tecnologia aplicada do Grupo DL.',
            'Liderança com Propósito: Desenvolva a si mesmo e sua equipe com mentorias focadas em gestão humana e inteligente.',
          ].map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 ring-1 ring-white/10"
            >
              <span>{b}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Histórias e Resultados */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">Histórias e Resultados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/10"
          >
            <p className="text-white/85">“A integração de tecnologia e gestão com propósito mudou nosso jogo.”</p>
            <footer className="mt-3 text-white/60 text-sm">— Nome/Empresa</footer>
          </motion.blockquote>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
              {[
                { label: 'Empresas Engajadas', value: 120 },
                { label: '+15 Anos de Trajetória', value: 15 },
                { label: '5+ Negócios de Sucesso', value: 5 },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/10 text-center"
                >
                  <div className="text-3xl font-bold text-accent/90 flex items-center justify-center gap-2">
                    <TrendingUp aria-hidden />
                    {m.value}
                  </div>
                  <div className="text-white/80 mt-2 text-sm">{m.label}</div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Responsável (Dilsomar) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden min-h-screen flex items-center justify-center">
         <div className="absolute inset-0 pointer-events-none">
           <motion.svg
             className="w-full h-full opacity-10"
             viewBox="0 0 800 600"
             xmlns="http://www.w3.org/2000/svg"
             initial={{ y: 0 }}
             animate={{ y: [-100, 0, -100] }}
             transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
           >
            {Array.from({ length: 90 }).map((_, i) => (
              <motion.circle
                key={`rs-${i}`}
                cx={20 + (i * 19) % 800}
                cy={20 + ((i * 29) % 600)}
                r={(i % 4) === 0 ? 2 : 1}
                fill="rgba(255,255,255,0.6)"
              />
            ))}
          </motion.svg>
        </div>
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/10 flex flex-col gap-6 max-w-3xl w-full mx-auto">
          <h3 className="text-xl font-semibold text-center">O Arquiteto da Visão</h3>
          <blockquote className="text-white/85 italic">“A visão é o início, mas a execução é o legado. Quem entende o porquê, descobre o como.” — Dilsomar Pereira</blockquote>
          <p className="text-white/80 text-sm">A trajetória de Dilsomar começou do zero, fundando a DL Auto Peças e transformando-a em uma das maiores do Sul do Brasil. Ele percebeu que o verdadeiro sucesso não estava em crescer sozinho, mas em construir um ecossistema. Hoje, sua missão é inspirar empresários a crescer com propósito, autenticidade e excelência em cada detalhe.</p>
          <div className="flex justify-center">
            <Link to="/contato" className="group linear-button min-h-[44px] px-4 linear-glow-strong">Agendar uma Conversa de Visão</Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-white/10 text-center">
          <h2 className="text-2xl font-semibold">Você está pronto para deixar a média e viver o extraordinário?</h2>
          <p className="mt-3 text-white/80">O Hub não é para todos. É para líderes que buscam transformação real e estão prontos para executar com alma. Se você busca crescimento sólido, significado e prosperidade compartilhada, seu lugar é aqui.</p>
          <div className="mt-6 flex items-center justify-center">
            <Link to="/contato" className="group linear-button min-h-[44px] px-4 linear-glow-strong">Aplicar para o Hub</Link>
          </div>
        </div>
      </section>

      {/* Espaço final */}
      <div className="h-16" />
    </div>
  )
}