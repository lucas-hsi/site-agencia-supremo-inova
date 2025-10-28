import { motion } from 'framer-motion'
import ContactForm from '../components/ui/ContactForm'

export function Contact() {
  

  return (
    <main className="min-h-screen relative">
      {/* Fundo escuro com gradiente leve */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#0b0b0f_0%,_#101015_70%)]" />
        {/* leve movimento para sensação de parallax */}
        <motion.div
          aria-hidden
          className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[conic-gradient(from_90deg,_#3b82f6_20%,_transparent_60%)] blur-[80px] opacity-20"
          initial={{ y: -8, opacity: 0.15 }}
          animate={{ y: 8, opacity: 0.25 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </div>

      {/* Hero */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-[34px] md:text-[46px] font-semibold tracking-[-0.02em] text-white">
              Vamos conversar sobre seu próximo projeto?
            </h1>
            <p className="mt-3 text-lg text-white/70">
              Preencha algumas informações rápidas e fale diretamente com nossa equipe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Card/Formulário central */}
      <section className="pb-24">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}