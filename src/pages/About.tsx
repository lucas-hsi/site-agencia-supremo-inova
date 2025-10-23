import { motion } from 'framer-motion'
import { Globe, Lightbulb, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

export function About() {
  const values = [
    {
      icon: Globe,
      title: 'Visão',
      description:
        'Acreditamos que toda empresa pode ser grande. Nossa visão é expandir horizontes, revelando o potencial oculto de cada cliente com estratégias precisas e inovação tecnológica.'
    },
    {
      icon: Lightbulb,
      title: 'Propósito',
      description:
        'Ser o motor por trás da evolução dos nossos parceiros, conectando desafios a soluções, tornando cada meta alcançável através do marketing e da automação.'
    },
    {
      icon: Rocket,
      title: 'Valor',
      description:
        'Comprometimento total em criar valor real. Trabalhamos com ética, eficiência e criatividade — entregamos mais do que o esperado, sempre buscando o impacto positivo.'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-waves" />
        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Descubra o Poder da Transformação Empresarial
              </h1>
              <p className="text-text-secondary font-light leading-relaxed">
                Aqui, soluções inovadoras encontram ambição. Nossa missão é alavancar empresas para novos patamares, integrando marketing, automação e tecnologia — tudo guiado por ciência e emoção.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contato" className="linear-button text-base">
                  Solicite uma análise personalizada
                </Link>
                <Link to="/servicos" className="linear-button-ghost text-base">
                  Conheça nossas soluções
                </Link>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card-primary p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="glass-card-secondary p-4"
                    >
                      <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-sm font-medium text-[#f7f8f8]">{['MK', 'AU', 'TEC', 'DS'][i]}</span>
                      </div>
                      <p className="muted-on-glass text-xs font-light text-center">
                        {['Marketing', 'Automação', 'Tecnologia', 'Dados'][i]}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* floating tech lines/elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISÃO | PROPÓSITO | VALOR */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-10 text-center">
            Visão, Propósito e Valor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group glass-card-primary p-6"
                >
                  <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="icon-premium w-6 h-6 text-[#f7f8f8] group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-on-glass text-base font-medium mb-2">{item.title}</h3>
                  <p className="muted-on-glass text-sm font-light leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* STORYTELLING */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-6 text-center"
            >
              De solucionador a acelerador de negócios.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card-primary p-8"
            >
              <div className="space-y-4">
                <p className="muted-on-glass font-light leading-relaxed">
                  Desde o primeiro dia, minha missão foi encarar problemas como oportunidades. Fundar a Supremo Inova nasceu do desejo de transformar desafios em conquistas e fazer com que cada empresa enxergue além do óbvio — enxergue o extraordinário.
                </p>
                <p className="muted-on-glass font-light leading-relaxed">
                  Nossa jornada é construída por histórias reais: empresas que, ao confiar em nosso olhar estratégico, descobriram caminhos antes invisíveis. Junto ao nosso time multidisciplinar, usamos princípios de psicologia e neurociência para entender a fundo o que realmente move pessoas e mercados.
                </p>
                <p className="muted-on-glass font-light leading-relaxed">
                  Acreditamos que, ao alinhar emoção, razão e tecnologia, aceleramos evoluções. E é assim que você, cliente, se sentirá com a gente: confiante, motivado e pronto para bater suas metas, porque sabemos que toda empresa é grande — ela só precisa de alguém para revelar isso.
                </p>
              </div>
            </motion.div>
          </div>

          {/* elementos translúcidos flutuantes */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 left-10 w-10 h-10 rounded-full bg-accent/10"
          />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-8 right-16 w-12 h-12 rounded-full bg-primary/10"
          />
        </div>
      </section>

      {/* TIME & DIFERENCIAIS */}
      {/* Removido: <TeamSection /> */}

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-4">
              Pronto para descobrir o que sua empresa pode ser?
            </h3>
            <p className="text-text-secondary font-light mb-8">
              Vamos juntos transformar desafios em impulsos para o crescimento.
            </p>
            <Link to="/contato" className="linear-button text-base inline-flex items-center justify-center">
              Solicite uma análise personalizada
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}