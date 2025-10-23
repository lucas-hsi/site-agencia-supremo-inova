import { Hero } from '../components/sections/Hero'
import { Specialties } from '../components/sections/Specialties'
import { ClientResults } from '../components/sections/ClientResults'
import ProjectUpdates from '../components/sections/ProjectUpdates'
import { Testimonials } from '../components/sections/Testimonials'
import { Integrations } from '../components/sections/Integrations'
// import { TeamSection } from '../components/sections/TeamSection' // removido
import { UpdatesAndProcess } from '../components/sections/UpdatesAndProcess'
import { CasesPreview } from '../components/sections/CasesPreview'
import { Cloud, Cpu, Server, Megaphone, ShoppingCart, MessageSquare, Zap, Globe, Shield, BarChart } from 'lucide-react'
import referenceDashboard from '../../Logos/reference-dashboard.svg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Brain, Bot, LayoutDashboard, LineChart } from 'lucide-react'

export function Home() {
  return (
    <main className="min-h-screen bg-background relative">
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