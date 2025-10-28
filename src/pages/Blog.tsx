import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/blog'

export default function Blog() {
  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category))
    return ['Tudo', ...Array.from(set)]
  }, [])

  const [activeCategory, setActiveCategory] = useState<string>('Tudo')
  const [query, setQuery] = useState<string>('')

  const filtered = posts.filter((p) => {
    const catOk = activeCategory === 'Tudo' || p.category === activeCategory
    const q = query.trim().toLowerCase()
    const qOk = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q)
    return catOk && qOk
  })

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold">Blog & Atualizações</h1>
        <p className="text-text-muted mt-2">Conteúdos técnicos, casos e novidades do ecossistema.</p>
      </header>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-3 py-1 rounded-md text-sm border ${activeCategory === c ? 'bg-accent/10 text-accent border-accent/30' : 'bg-background-subtle text-text-muted border-border'}`}
          >
            {c}
          </button>
        ))}
        <div className="ml-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar tópicos..."
            className="px-3 py-2 rounded-md bg-surface border border-border focus:border-border-hover outline-none text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article key={p.slug} className="group bg-surface border border-border rounded-xl p-6 hover:border-border-hover transition-all duration-300 linear-glow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-text-muted">{new Date(p.date).toLocaleDateString('pt-BR')}</span>
              <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md">{p.category}</span>
            </div>
            <h2 className="text-lg font-medium text-[#f7f8f8] mb-2 group-hover:text-accent transition-colors">{p.title}</h2>
            <p className="text-sm text-text-muted">{p.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div className="text-xs text-text-muted">{p.readingTime || '3 min'}</div>
              <Link to={`/blog/${p.slug}`} className="inline-flex items-center gap-2 text-text-muted group-hover:text-accent">
                <span>Ler mais</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}