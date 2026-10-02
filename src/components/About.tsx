import { withBase } from '../paths'
import { Eyebrow } from './Layout'

export default function About() {
  return <section id="sobre" className="about-section" aria-labelledby="about-title">
    <div className="about-inner container">
      <figure className="about-portrait">
        <div className="about-photo-frame"><div className="about-photo-crop"><img src={withBase('/images/marcos-about.png')} alt="Retrato de Marcos Paulo usando camisa azul escura." loading="lazy" /></div></div>
        <figcaption>Marcos Paulo / Designer Gráfico</figcaption>
      </figure>
      <div className="about-copy">
        <Eyebrow>Sobre mim</Eyebrow>
        <h2 id="about-title">Clareza no olhar.<br />Personalidade<br />na forma.</h2>
        <p>Sou designer gráfico e trabalho transformando ideias em soluções visuais que comunicam com clareza, personalidade e propósito. Minha experiência envolve identidade visual, comunicação de marca e criação de experiências digitais.</p>
        <span className="signature-line" aria-hidden="true" />
      </div>
    </div>
  </section>
}
