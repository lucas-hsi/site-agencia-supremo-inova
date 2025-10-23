import { useEffect, useState } from 'react'

interface AnimatedSupremoLogoProps {
  className?: string
  title?: string
}

export default function AnimatedSupremoLogo({ className, title = 'Supremo Inova' }: AnimatedSupremoLogoProps) {
  const [shouldFallback, setShouldFallback] = useState(false)

  useEffect(() => {
    // Fallback se navegador não suporta SMIL ou se usuário prefere reduzir animações
    const supportsSMIL = typeof (window as any).SVGAnimateElement !== 'undefined'
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setShouldFallback(!supportsSMIL || prefersReducedMotion)
  }, [])

  if (shouldFallback) {
    return (
      <img
        src={'/Logos/supremo-extendida.png'}
        alt={title}
        className={className}
        loading="eager"
        decoding="async"
      />
    )
  }

  // SVG puro com efeito de montagem (quadrados aparecendo gradualmente)
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>
      <rect x="10" y="10" width="35" height="10" fill="#fff" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0s" fill="freeze" />
      </rect>
      <rect x="10" y="10" width="10" height="35" fill="#fff" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.2s" fill="freeze" />
      </rect>
      <rect x="10" y="55" width="35" height="10" fill="#fff" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.4s" fill="freeze" />
      </rect>
      <rect x="55" y="10" width="10" height="35" fill="#fff" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.6s" fill="freeze" />
      </rect>
      <rect x="10" y="80" width="10" height="10" fill="#D3DCF6" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.8s" fill="freeze" />
      </rect>
      <rect x="80" y="10" width="10" height="10" fill="#D3DCF6" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1s" fill="freeze" />
      </rect>
      <rect x="25" y="25" width="10" height="10" fill="#3DAAFF" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.2s" fill="freeze" />
      </rect>
      <rect x="35" y="35" width="10" height="10" fill="#3DAAFF" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.4s" fill="freeze" />
      </rect>
      <rect x="45" y="45" width="10" height="10" fill="#3DAAFF" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.6s" fill="freeze" />
      </rect>
      <rect x="55" y="55" width="10" height="10" fill="#3DAAFF" rx="2">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.8s" fill="freeze" />
      </rect>
    </svg>
  )
}