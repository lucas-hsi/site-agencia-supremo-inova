import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-subtle to-background opacity-60" />
      
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.01%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%220.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface border border-border text-text-secondary text-sm font-medium mb-8 linear-glow"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse-online" />
              Agência Digital
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-6"
            >
              <span className="text-foreground font-medium">
                Agência de marketing, automação e tecnologia aplicada a resultados reais
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-lg text-text-muted font-light mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Transformamos processos, comunicação e vendas em sistemas que funcionam de verdade — integrando marketing, dados e inteligência automatizada em um só ecossistema.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a className="group linear-button text-base w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 linear-glow-strong" href="#contato">
                <span>Solicitar diagnóstico gratuito</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              
              <a className="group linear-button-ghost text-base w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2" href="#especialista">
                <span>Falar com um especialista</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-text-muted"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}