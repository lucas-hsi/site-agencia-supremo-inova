import React from 'react'
import { Hero } from '../components/sections/Hero'
import { Specialties } from '../components/sections/Specialties'
import { ClientResults } from '../components/sections/ClientResults'
import ProjectUpdates from '../components/sections/ProjectUpdates'
import { Testimonials } from '../components/sections/Testimonials'
import { Integrations } from '../components/sections/Integrations'
import { UpdatesAndProcess } from '../components/sections/UpdatesAndProcess'

export default function Home() {
  return (
    <section className="home-section">
      <main className="min-h-screen relative overflow-x-hidden bg-[#0a0a0f]">
        <div className="hero-glow" aria-hidden />
        <Hero />
        <Specialties />
        <ClientResults />
        <ProjectUpdates />
        <Testimonials />
        <Integrations />
        <UpdatesAndProcess />
      </main>
    </section>
  )
}