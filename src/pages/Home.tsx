import { Hero } from '../components/sections/Hero'
import { Specialties } from '../components/sections/Specialties'
import { ClientResults } from '../components/sections/ClientResults'
import ProjectUpdates from '../components/sections/ProjectUpdates'
import { Testimonials } from '../components/sections/Testimonials'
import { Integrations } from '../components/sections/Integrations'
import { TeamSection } from '../components/sections/TeamSection'
import { UpdatesAndProcess } from '../components/sections/UpdatesAndProcess'
import { CasesPreview } from '../components/sections/CasesPreview'
import { Cloud, Cpu, Server, Megaphone, ShoppingCart, MessageSquare, Zap, Globe, Shield, BarChart } from 'lucide-react'
import referenceDashboard from '../../Logos/reference-dashboard.svg'

export function Home() {
  return (
    <main>
      <Hero />


      <Specialties />
      <ClientResults />



      <ProjectUpdates />

      {/* Removido: Nova seção de cases com gráfico interativo */}
      {/* Removido: <CasesPreview /> */}

      <Testimonials />
      <Integrations />
      <TeamSection />
      <UpdatesAndProcess />
    </main>
  )
}