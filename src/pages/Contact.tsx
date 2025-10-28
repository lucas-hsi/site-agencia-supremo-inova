import { motion } from 'framer-motion'

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const projeto = Array.from(document.querySelectorAll("input[name='projeto']:checked")).map(
      (el) => (el as HTMLInputElement).value
    ).join(', ')
    const objetivo = Array.from(document.querySelectorAll("input[name='objetivo']:checked")).map(
      (el) => (el as HTMLInputElement).value
    ).join(', ')
    const estagio = (document.querySelector("input[name='estagio']:checked") as HTMLInputElement | null)?.value || ''
    const urgencia = (document.querySelector("input[name='urgencia']:checked") as HTMLInputElement | null)?.value || ''
    const orcamento = (document.querySelector('#orcamento') as HTMLInputElement | null)?.value || ''

    if (!projeto || !objetivo || !estagio || !urgencia || !orcamento.trim()) {
      alert('Por favor, preencha todas as informações obrigatórias antes de enviar.')
      return
    }

    const mensagem = encodeURIComponent(
      `Olá, equipe Supremo Inova! 🚀\n\n` +
      `💡 *Tipo de projeto:* ${projeto}\n` +
      `🎯 *Objetivo:* ${objetivo}\n` +
      `🏁 *Estágio atual:* ${estagio}\n` +
      `⏱️ *Urgência:* ${urgencia}\n` +
      `💰 *Orçamento aproximado:* ${orcamento}\n\n` +
      `Gostaria de conversar sobre uma proposta personalizada.`
    )

    window.open(`https://wa.me/5541997864760?text=${mensagem}`, '_blank')
  }

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
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            {/* 1. Tipo de projeto (checkbox múltiplo) */}
            <motion.fieldset
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <legend className="mb-3 text-base font-medium text-white">Qual tipo de projeto você deseja iniciar?</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Criação de marca',
                  'Sistema / Plataforma web',
                  'Automação com IA',
                  'Estratégia de marketing',
                  'Outro',
                ].map((label) => (
                  <label key={label} className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/90 transition-transform hover:scale-[1.02]">
                    <input type="checkbox" name="projeto" value={label} className="h-4 w-4 rounded-sm border-white/20 bg-black/40" />
                    <span className="font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </motion.fieldset>

            {/* 2. Objetivo (checkbox múltiplo) */}
            <motion.fieldset
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <legend className="mb-3 text-base font-medium text-white">Qual é o principal objetivo com esse projeto?</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Aumentar vendas',
                  'Melhorar gestão / operação',
                  'Posicionar a marca',
                  'Reduzir custos',
                  'Outro',
                ].map((label) => (
                  <label key={label} className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/90 transition-transform hover:scale-[1.02]">
                    <input type="checkbox" name="objetivo" value={label} className="h-4 w-4 rounded-sm border-white/20 bg-black/40" />
                    <span className="font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </motion.fieldset>

            {/* 3. Estágio (radio group) */}
            <motion.fieldset
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <legend className="mb-3 text-base font-medium text-white">Em que estágio sua empresa ou projeto está hoje?</legend>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Iniciando agora',
                  'Já possui presença online',
                  'Já possui sistemas ou automações',
                  'Empresa consolidada em expansão',
                ].map((label) => (
                  <label key={label} className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/90 transition-transform hover:scale-[1.02]">
                    <input type="radio" name="estagio" value={label} className="h-4 w-4 rounded-full border-white/20 bg-black/40" />
                    <span className="font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </motion.fieldset>

            {/* 4. Urgência (radio group) */}
            <motion.fieldset
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <legend className="mb-3 text-base font-medium text-white">Qual seu nível de urgência?</legend>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Quero começar o quanto antes',
                  'Em até 30 dias',
                  'Em até 3 meses',
                  'Só quero entender valores',
                ].map((label) => (
                  <label key={label} className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/90 transition-transform hover:scale-[1.02]">
                    <input type="radio" name="urgencia" value={label} className="h-4 w-4 rounded-full border-white/20 bg-black/40" />
                    <span className="font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </motion.fieldset>

            {/* 5. Orçamento (input texto) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <label htmlFor="orcamento" className="mb-2 block text-base font-medium text-white">
                Você tem um orçamento aproximado em mente?
              </label>
              <input
                id="orcamento"
                type="text"
                placeholder="ex: até 5 mil, 10–20 mil, sem definição ainda"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            </motion.div>

            {/* Botão final */}
            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-900/30"
              >
                Enviar e Falar com Especialista
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  )
}