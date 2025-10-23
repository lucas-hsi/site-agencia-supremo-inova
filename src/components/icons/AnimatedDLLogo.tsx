import { useEffect, useRef } from 'react'
import '../../styles/dl-logo.css'

type Props = {
  size?: number // px
  className?: string
  title?: string
}

export default function AnimatedDLLogo({ size = 64, className, title = 'Supremo Inova' }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const timeout = setTimeout(() => {
      el.classList.add('assembled')
    }, 1400)
    return () => clearTimeout(timeout)
  }, [])

  const classes = `dl-logo${className ? ` ${className}` : ''}`

  return (
    <div className={classes} style={{ ['--size' as any]: `${size}px` }} aria-label={title} role="img">
      <div className="logo-wrap" ref={wrapRef}>
        {/* white corners */}
        <div className="corner tl" aria-hidden="true">
          <div className="h" />
          <div className="v" />
        </div>
        <div className="corner br" aria-hidden="true">
          <div className="h" />
          <div className="v" />
        </div>
        {/* diagonal tiles */}
        <div className="tile t0" aria-hidden="true" />
        <div className="tile t1" aria-hidden="true" />
        <div className="tile t2" aria-hidden="true" />
        <div className="tile t3" aria-hidden="true" />
        <div className="tile t4" aria-hidden="true" />
        <div className="tile t5" aria-hidden="true" />
      </div>
    </div>
  )
}