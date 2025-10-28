import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { redirectToWhatsApp } from '../../hooks/redirectToWhatsApp'

type ContactFormProps = {
  onSubmitted?: () => void
}

export function ContactForm({ onSubmitted }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    const projeto = Array.from(form.querySelectorAll("input[name='projeto']:checked")).map(
      (el) => (el as HTMLInputElement).value
    ).join(', ')
    const objetivo = Array.from(form.querySelectorAll("input[name='objetivo']:checked")).map(
      (el) => (el as HTMLInputElement).value
    ).join(', ')
    const estagio = (form.querySelector("input[name='estagio']:checked") as HTMLInputElement | null)?.value || ''
    const urgencia = (form.querySelector("input[name='urgencia']:checked") as HTMLInputElement | null)?.value || ''
    const orcamento = (form.querySelector('#orcamento') as HTMLInputElement | null)?.value || ''

    if (!projeto || !objetivo || !estagio || !urgencia || !orcamento.trim()) {
      alert('Por favor, preencha todas as informações obrigatórias antes de enviar.')
      return
    }

    redirectToWhatsApp({ projeto, objetivo, estagio, urgencia, orcamento })
    onSubmitted?.()
  }

  return (
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
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition ease-in-out duration-200"
        >
          <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
          Enviar e Falar com Especialista
        </motion.button>
      </div>
    </motion.form>
  )
}

export default ContactForm