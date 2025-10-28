import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/blog'
import { useContactModal } from '../hooks/useContactModal'

export default function BlogPost() {
  const { slug } = useParams()
  const { openModal } = useContactModal()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl font-semibold mb-4">Post não encontrado</h1>
        <p className="text-text-muted">O conteúdo que você procura pode ter sido movido.</p>
        <div className="mt-6">
          <Link to="/blog" className="linear-button">Voltar ao Blog</Link>
        </div>
      </section>
    )
  }

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
      <header className="mb-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
          </svg>
          <span>Voltar</span>
        </Link>
        <h1 className="text-2xl md:text-3xl font-semibold mt-4">{post.title}</h1>
        <div className="mt-2 text-sm text-text-muted flex items-center gap-2">
          <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
          <span>•</span>
          <span>{post.category}</span>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>
      </header>

      <section className="prose prose-invert max-w-none">
        <p className="text-text-muted leading-relaxed">{post.excerpt}</p>
        <div className="mt-4 text-[#f7f8f8] leading-relaxed whitespace-pre-line">{post.content}</div>
        {post.references && post.references.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-[#f7f8f8] mb-2">Referências</h3>
            <ul className="list-disc pl-5 text-sm text-text-muted space-y-1">
              {post.references.map((ref) => (
                <li key={ref.url}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <footer className="mt-8 flex items-center justify-between border-t border-border pt-6">
        <div className="text-sm text-text-muted">Tags: {post.tags.join(', ')}</div>
        <button
          onClick={() => openModal()}
          className="inline-flex items-center gap-2 min-h-[40px] rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition ease-in-out duration-200 hover:brightness-110 hover:-translate-y-[2px]"
        >
          Falar sobre este tema
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </footer>
    </article>
  )
}