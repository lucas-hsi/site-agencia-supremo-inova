import { Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'
import { About } from './pages/About'
import Services from './pages/Services'
import { Cases } from './pages/Cases'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

import { Contact } from './pages/Contact'
import Hub from './pages/Hub'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import ContactModal from './components/ui/ContactModal'
import { useScrollToTopOnRouteChange } from './hooks/useScrollToTopOnRouteChange'

function App() {
  useScrollToTopOnRouteChange()
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <ScrollProgressBar />
      <Header />
      <main className="pt-20 page-content"> {/* Offset for fixed header + centrado apenas na área da página */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/contato" element={<Contact />} />
          <Route path="/hub-negocios" element={<Hub />} />
        </Routes>
      </main>
      <Footer />
      {/* Modal global de contato */}
      <ContactModal />
      {/* Scroll to top button global */}
      <ScrollToTopButton />
    </div>
  )
}

export default App