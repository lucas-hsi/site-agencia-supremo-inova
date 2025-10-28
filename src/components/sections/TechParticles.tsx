import Particles from 'react-tsparticles'
import { useMemo, useEffect, useState } from 'react'
import type { ISourceOptions, MoveDirection, OutMode } from 'tsparticles-engine'

export default function TechParticles() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) setEnabled(false)
  }, [])

  const options: ISourceOptions = useMemo(() => ({
    fpsLimit: 60,
    detectRetina: true,
    background: { color: 'transparent' },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: false, mode: 'push' },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 60, density: { enable: true, area: 900 } },
      color: { value: ['#5c6aff', '#B3C7FF', '#ffffff'] },
      links: { enable: true, color: '#7289DA', distance: 130, opacity: 0.18, width: 1 },
      move: { enable: true, speed: 0.8, direction: 'none' as MoveDirection, outModes: { default: 'out' as OutMode } },
      opacity: { value: 0.35 },
      size: { value: { min: 1, max: 3 } },
      shape: { type: 'circle' },
    },
  }), [])

  if (!enabled) return null

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none hidden md:block">
      <Particles id="tech-particles" options={options} />
    </div>
  )
}