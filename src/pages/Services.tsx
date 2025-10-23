import { motion } from 'framer-motion'
import { Code2, Zap, Workflow, Rocket, Settings, Users, Database, Smartphone, Target } from 'lucide-react'

export default function Services() {
  return (
    <section className="py-24 bg-background-subtle relative overflow-hidden">
      {/* Background waves decor */}
      <div className="bg-waves" />
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-light text-[#f7f8f8] mb-4">
            Serviços premium
          </h1>
          <p className="text-base text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
            Implementamos soluções sob medida com tecnologia moderna, UX impecável e foco em resultado.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[
            { title: 'Aplicações Web', icon: Code2, desc: 'Sites e sistemas com performance e SEO técnico.' },
            { title: 'Automações', icon: Zap, desc: 'Bots e fluxos integrados: WhatsApp, CRM, ERP, e-commerce.' },
            { title: 'Integrações', icon: Database, desc: 'APIs e pipelines de dados robustos.' },
            { title: 'Mobile & PWA', icon: Smartphone, desc: 'Aplicativos modernos com conversão e experiência.' },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="glass-card-primary card-hover p-6"
              >
                <div className="icon-container w-12 h-12 mb-4 rounded-xl">
                  <Icon className="icon-premium w-6 h-6 text-[#f7f8f8]" />
                </div>
                <h3 className="text-on-glass text-base font-medium mb-1">
                  {item.title}
                </h3>
                <p className="muted-on-glass text-sm">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-light text-[#f7f8f8] mb-6">Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'UX impecável', icon: Users, desc: 'Interfaces consistentes, acessíveis e fluidas.' },
              { title: 'Processo robusto', icon: Workflow, desc: 'Discovery, entregas iterativas e rastreabilidade.' },
              { title: 'Execução premium', icon: Settings, desc: 'Padrões técnicos, automação e qualidade visual.' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="glass-card-secondary card-hover p-6">
                  <div className="icon-container w-10 h-10 mb-3 rounded-xl">
                    <Icon className="icon-premium w-5 h-5 text-[#f7f8f8]" />
                  </div>
                  <h3 className="text-on-glass text-sm font-medium mb-1">{item.title}</h3>
                  <p className="muted-on-glass text-xs">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-light text-[#f7f8f8] mb-6">Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { title: 'Discovery', icon: Target, desc: 'Diagnóstico e plano de ação com clareza.' },
              { title: 'Design & UX', icon: Users, desc: 'Prototipação e validações com usuários.' },
              { title: 'Dev & QA', icon: Code2, desc: 'Implementação, testes e qualidade contínua.' },
              { title: 'Go-live', icon: Rocket, desc: 'Deploy, monitoramento e evolução.' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="glass-card-secondary card-hover p-6">
                  <div className="icon-container w-10 h-10 mb-3 rounded-xl">
                    <Icon className="icon-premium w-5 h-5 text-[#f7f8f8]" />
                  </div>
                  <h3 className="text-on-glass text-sm font-medium mb-1">{item.title}</h3>
                  <p className="muted-on-glass text-xs">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card-primary p-8 inline-block">
            <p className="muted-on-glass text-sm mb-4">
              Pronto para elevar seu produto com visual premium e tecnologia de ponta?
            </p>
            <a href="#contato" className="linear-button-ghost min-h-[44px]">
              Falar com especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}