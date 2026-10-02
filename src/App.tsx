import { withBase, routePath } from './paths'
import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { Footer, Header, Button } from './components/Layout'
import { projects } from './data/projects'
import Home from './pages/Home'
import Project from './pages/Project'
import './App.css'

// Two routes, with native links and browser back/forward support.
export default function App() {
  const [location, setLocation] = useState(() => window.location.pathname + window.location.hash)
  const pathname = routePath(location.split('#')[0])
  const project = projects.find(item => pathname === `/projetos/${item.slug}`)

  useEffect(() => {
    const updateLocation = () => setLocation(window.location.pathname + window.location.hash)
    window.addEventListener('popstate', updateLocation)
    window.addEventListener('hashchange', updateLocation)
    return () => {
      window.removeEventListener('popstate', updateLocation)
      window.removeEventListener('hashchange', updateLocation)
    }
  }, [])

  useEffect(() => {
    document.title = project ? `${project.title} — Marcos Paulo` : pathname === '/' ? 'Marcos Paulo — Designer Gráfico' : 'Página não encontrada — Marcos Paulo'
    const hash = location.split('#')[1]
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash)?.scrollIntoView()
      else window.scrollTo({ top: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [location, pathname, project])

  function navigate(event: MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]')
    if (!link || link.target || link.hasAttribute('download')) return
    const url = new URL(link.href)
    if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return
    event.preventDefault()
    window.history.pushState(null, '', url.pathname + url.hash)
    setLocation(url.pathname + url.hash)
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }

  return <div onClick={navigate}>
    <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
    <Header />
    <main id="main-content" tabIndex={-1}>
      {pathname === '/' ? <Home /> : project ? <Project project={project} /> : (
        <section className="not-found container"><h1>Página não encontrada.</h1><p>Este projeto não está disponível.</p><Button href={withBase('/#trabalhos')}>Voltar aos trabalhos</Button></section>
      )}
    </main>
    <Footer />
  </div>
}
