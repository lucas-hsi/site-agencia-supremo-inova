import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Empresário',
    company: 'Empresa Local',
    content: 'Finalmente encontrei uma equipe que entende tanto de marketing quanto de tecnologia.',
    rating: 5,
    avatar: 'CS'
  },
  {
    name: 'Ana Santos',
    role: 'Proprietária',
    company: 'Negócio Digital',
    content: 'Tudo foi automatizado, meu tempo e custo caíram pela metade.',
    rating: 5,
    avatar: 'AS'
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8] mb-4 text-center">
              O que nossos clientes dizem
            </h2>
            <p className="text-base text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
              ⭐️⭐️⭐️⭐️⭐️ — Clientes reais satisfeitos com entregas técnicas e suporte humanizado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface border border-border rounded-xl p-7 md:p-6 linear-glow group hover:border-border-hover transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-accent">
                        {testimonial.avatar}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2">
                      <div className="flex space-x-1 mr-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 md:w-4 md:h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <Quote className="w-4 h-4 text-text-muted" />
                    </div>
                    <p className="text-sm text-text-muted font-light leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-text-muted font-light">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-surface border border-border rounded-full">
              <div className="flex -space-x-2 mr-3">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center border-2 border-background"
                  >
                    <span className="text-xs font-medium text-accent">
                      {testimonial.avatar}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-text-muted font-light">
                +50 empresas confiam em nosso trabalho
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}