import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ServiceBlock from './ServiceBlock'

type Item = { title: string; subtitle: string; description: string; icon?: any; impact?: string }

type AnimatedSectionProps = {
  id?: string
  title: string
  subtitle?: string
  items: Item[]
}

export default function AnimatedSection({ id, title, subtitle, items }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -24])

  return (
    <section id={id} ref={ref} className="mt-16">
      <motion.header style={{ y }} className="mb-6">
        <h2 className="text-2xl md:text-3xl font-light text-[#f7f8f8]">{title}</h2>
        {subtitle && (
          <p className="text-text-muted text-sm md:text-base mt-1">{subtitle}</p>
        )}
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {items.map((item) => (
          <ServiceBlock
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            icon={item.icon}
            impact={item.impact}
          />
        ))}
      </motion.div>
    </section>
  )
}