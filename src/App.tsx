import { Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Cases } from './pages/Cases'
import { Partner } from './pages/Partner'
import { Contact } from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Header />
      <main className="pt-20"> {/* Offset for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/parceiro" element={<Partner />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App