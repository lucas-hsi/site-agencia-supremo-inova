export function Cases() {
  return (
    <main className="min-h-screen pt-20 relative bg-background">
      <div className="bg-waves" />
      <div className="container section-padding">
        <h1 className="text-4xl font-bold text-on-glass mb-8">Cases de Sucesso</h1>
        <p className="muted-on-glass">
          Página em desenvolvimento...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card-primary p-6">
            <div className="flex items-center gap-3">
              <div className="icon-container w-10 h-10">
                {/* ícone placeholder */}
                <span className="icon-premium w-6 h-6 block bg-white/20 rounded-md" />
              </div>
              <h3 className="text-on-glass font-semibold">Case em destaque</h3>
            </div>
            <p className="muted-on-glass mt-3">Breve descrição do projeto e resultados alcançados.</p>
          </div>

          <div className="glass-card-secondary p-6">
            <h3 className="text-on-glass font-semibold">Case secundário</h3>
            <p className="muted-on-glass mt-3">Descrição e métricas principais.</p>
          </div>
        </div>
      </div>
    </main>
  )
}