import { withBase } from '../paths'
import { Button, Eyebrow } from './Layout'

export default function Hero() {
  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-art">
      <img className="hero-circle" src={withBase('/images/portrait-circle.svg')} alt="" aria-hidden="true" />
      <img className="hero-portrait" src={withBase('/images/marcos-hero.png')} alt="Marcos Paulo, designer gráfico, sorrindo." fetchPriority="high" />
    </div>
    <div className="hero-copy">
      <Eyebrow>Designer Gráfico</Eyebrow>
      <h1 id="hero-title">Design que<br />transforma ideias<br />em marcas<br /><span>memoráveis.</span></h1>
      <p className="hero-description">Estratégia e expressão visual para dar forma ao que torna cada marca única.</p>
      <Button href={withBase('/#contato')}>Entre em contato</Button>
    </div>
    <div className="hero-base"><p>Identidade • Comunicação • Digital</p><a href="#trabalhos">Explore os trabalhos ↓</a></div>
  </section>
}
