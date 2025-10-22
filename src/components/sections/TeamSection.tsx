import { motion } from 'framer-motion'
import { Heart, Code, Zap, Users, ArrowRight } from 'lucide-react'

const teamValues = [
  {
    icon: Code,
    title: 'Engenharia de sistemas e automações avançadas',
    description: 'Desenvolvemos soluções técnicas robustas e escaláveis'
  },
  {
    icon: Users,
    title: 'Conexão entre marketing, vendas e operação',
    description: 'Integramos todos os setores em um ecossistema unificado'
  },
  {
    icon: Zap,
    title: 'Desenvolvimento com foco em escalabilidade e dados',
    description: 'Cada solução é pensada para crescer junto com seu negócio'
  }
]

export function TeamSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-6 text-center">
                Equipe e propósito
              </h2>
              
              <p className="text-base text-text-muted font-light leading-relaxed mb-8">
                Somos uma equipe movida por resultado e eficiência.
                Cada linha de código, automação ou campanha tem um único objetivo: fazer o sistema da sua empresa trabalhar por você.
              </p>

              <div className="space-y-6 mb-8">
                {teamValues.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#f7f8f8] mb-1">
                          {value.title}
                        </h3>
                        <p className="text-sm text-text-muted font-light leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a className="group linear-button text-base flex items-center justify-center gap-2 linear-glow-strong" href="#contato-equipe">
                  <span>Fale com nossa equipe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                
                <a className="group linear-button-ghost text-base flex items-center justify-center gap-2" href="#time">
                  <Users className="w-4 h-4" />
                  <span>Conheça nosso time</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-surface border border-border rounded-2xl p-8 linear-glow">
                <div className="grid grid-cols-2 gap-6">
                  {/* Team member cards */}
                  {[1, 2, 3, 4].map((member, index) => (
                    <motion.div
                      key={member}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-background border border-border rounded-xl p-4 text-center"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-sm font-medium text-accent">
                          {['LS', 'MR', 'JC', 'AS'][index]}
                        </span>
                      </div>
                      <h4 className="text-xs font-medium text-[#f7f8f8] mb-1">
                        {['Lucas Silva', 'Maria Rosa', 'João Carlos', 'Ana Santos'][index]}
                      </h4>
                      <p className="text-xs text-text-muted font-light">
                        {['Full Stack', 'UI/UX Design', 'DevOps', 'Marketing'][index]}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-3 py-2 bg-accent/10 rounded-full">
                    <Heart className="w-4 h-4 text-accent mr-2" />
                    <span className="text-sm font-medium text-accent">
                      +10 especialistas dedicados
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"
              >
                <Code className="w-4 h-4 text-accent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center"
              >
                <Zap className="w-3 h-3 text-accent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}