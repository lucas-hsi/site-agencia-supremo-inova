export function Contact() {
  return (
    <main className="min-h-screen pt-20 relative bg-background">
      <div className="bg-waves" />
      <div className="container section-padding">
        <h1 className="text-4xl font-bold text-on-glass mb-8">Entre em Contato</h1>
        <p className="muted-on-glass">
          Página em desenvolvimento...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card-primary p-6">
            <h3 className="text-on-glass font-semibold">Fale conosco</h3>
            <p className="muted-on-glass mt-3">Preencha o formulário para iniciar uma conversa.</p>
          </div>
          <div className="glass-card-secondary p-6">
            <h3 className="text-on-glass font-semibold">Informações</h3>
            <p className="muted-on-glass mt-3">E-mail, telefone e redes sociais.</p>
          </div>
        </div>
      </div>
    </main>
  )
}