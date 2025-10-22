import { motion } from 'framer-motion'
import { Target, Users, Code, TrendingUp } from 'lucide-react'

const differentials = [
  {
    icon: Target,
    title: 'Personalização total.',
    description: 'Cada projeto é único. Desenvolvemos soluções sob medida que se alinham perfeitamente aos seus objetivos de negócio.',
    color: 'from-blue-500/20 to-blue-600/5'
  },
  {
    icon: Users,
    title: 'Cases que falam por si.',
    description: 'Resultados reais e mensuráveis que comprovam nosso compromisso com o seu sucesso.',
    color: 'from-green-500/20 to-green-600/5'
  },
  {
    icon: Code,
    title: 'Equipe apaixonada por tech.',
    description: 'Time multidisciplinar com expertise em marketing, tecnologia e automação para entregar excelência em cada projeto.',
    color: 'from-purple-500/20 to-purple-600/5'
  },
  {
    icon: TrendingUp,
    title: 'Foco em resultado mensurável.',
    description: 'Focamos em construir bases sólidas para um crescimento consistente e duradouro do seu negócio.',
    color: 'from-orange-500/20 to-orange-600/5'
  }
]



export function Differentials() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#f7f8f8] mb-4 tracking-tight text-center">
            Por que escolher a <span className="text-accent">Supremo Inova</span>?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Combinamos experiência, tecnologia e criatividade para entregar resultados excepcionais
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="linear-card p-8 h-full transition-all duration-300 hover:linear-glow-strong">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/15 transition-all duration-200">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-medium text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-text-muted mb-6 text-sm">
            Pronto para transformar seu negócio?
          </p>
          <a className="linear-button" href="#contato">
            <span>Vamos conversar</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}