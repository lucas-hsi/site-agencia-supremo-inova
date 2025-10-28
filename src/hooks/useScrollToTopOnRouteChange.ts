import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Rola suavemente ao topo sempre que a rota muda
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
}