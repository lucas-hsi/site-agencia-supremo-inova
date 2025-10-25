import { Hero } from '../components/sections/Hero'
import { Specialties } from '../components/sections/Specialties'
import { ClientResults } from '../components/sections/ClientResults'
import ProjectUpdates from '../components/sections/ProjectUpdates'
import { Testimonials } from '../components/sections/Testimonials'
import { Integrations } from '../components/sections/Integrations'
// import { TeamSection } from '../components/sections/TeamSection' // removido
import { UpdatesAndProcess } from '../components/sections/UpdatesAndProcess'

export function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="bg-waves" />
      <Hero />
      <Specialties />
      <ClientResults />
      <ProjectUpdates />

      {/* Removido: Nova seção de cases com gráfico interativo */}
      {/* Removido: <CasesPreview /> */}

      <Testimonials />
      <Integrations />
      {/* Conheça minha equipe - seção removida */}
      {/* Removido: <TeamSection /> */}
      <UpdatesAndProcess />
    </main>
  )
}