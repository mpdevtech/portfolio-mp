import type { ReactNode } from 'react'

const currentYear = new Date().getFullYear()

export function Arrow({ name = 'card' }: { name?: 'card' | 'button' | 'contact' | 'back' | 'previous' | 'next' }) {
  return <img className={`arrow arrow--${name}`} src={`/images/arrow-${name}.svg`} alt="" aria-hidden="true" />
}

export function Header() {
  return <header className="site-header container">
    <a className="brand" href="/">Marcos Paulo</a>
    <nav aria-label="Navegação principal"><a href="/#trabalhos">Trabalhos</a><a href="/#sobre">Sobre</a><a href="/#contato">Contato</a></nav>
  </header>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

export function Button({ href, children }: { href: string; children: ReactNode }) {
  return <a className="button" href={href}>{children}<Arrow name="button" /></a>
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <p>Marcos Paulo — Designer Gráfico</p><p>© {currentYear} Marcos Paulo</p>
  </div></footer>
}
