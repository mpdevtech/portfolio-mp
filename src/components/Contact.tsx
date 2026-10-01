import { contactLinks } from '../data/contact'
import { Arrow, Eyebrow } from './Layout'

export default function Contact() {
  return <section id="contato" className="contact-section container" aria-labelledby="contact-title">
    <Eyebrow>Uma boa ideia começa com uma conversa</Eyebrow>
    <div className="contact-invitation"><h2 id="contact-title">Vamos criar<br />algo juntos?</h2><p>Conte sua ideia. Vamos encontrar a melhor forma de torná-la visual.</p></div>
    <div className="contact-links">{contactLinks.map(({ label, href }) => (
      <a className="contact-link" key={label} href={href} target={href.startsWith('https:') ? '_blank' : undefined} rel={href.startsWith('https:') ? 'noreferrer' : undefined}>{label}<Arrow name="contact" /></a>
    ))}</div>
  </section>
}
