export type RespostasContato = {
  projeto: string
  objetivo: string
  estagio: string
  urgencia: string
  orcamento: string
}

export function redirectToWhatsApp(respostas: RespostasContato) {
  const mensagem = encodeURIComponent(
    `Olá, equipe Supremo Inova! 🚀\n\n` +
      `💡 *Tipo de projeto:* ${respostas.projeto}\n` +
      `🎯 *Objetivo:* ${respostas.objetivo}\n` +
      `🏁 *Estágio:* ${respostas.estagio}\n` +
      `⏱️ *Urgência:* ${respostas.urgencia}\n` +
      `💰 *Orçamento:* ${respostas.orcamento}\n\n` +
      `Enviado através do site oficial.`
  )

  window.open(`https://wa.me/5541997864760?text=${mensagem}`, '_blank')
}