import type { Project } from '../data/projects'
import { Eyebrow } from './Layout'
import ProjectMedia from './ProjectMedia'

export default function ProjectGallery({ project }: { project: Project }) {
  return <div className="case-gallery container">
    <section className="case-gallery-section" aria-label="Identidade e linguagem visual">
      <div className="gallery-heading"><Eyebrow>Identidade e linguagem visual</Eyebrow>{project.mainImage.placeholder && <p className="editorial-note">Galeria editável / substitua pelas imagens finais</p>}</div>
      <div className="identity-grid">
        <ProjectMedia showCaption={false} image={project.images[0]} className="identity-board" />
        <div className="identity-details">
          {project.images.slice(1).map(image => <ProjectMedia showCaption={false} key={image.src} image={image} className="identity-detail" />)}
          {project.mainImage.placeholder && <figure className="project-media project-media--dark palette">
            <div className="palette-swatches" role="img" aria-label="Paleta de referência: laranja, cinza claro e grafite."><span /><span /><span /></div>
          </figure>}
        </div>
      </div>
    </section>
    <section className="case-gallery-section" aria-label="A identidade em contexto"><Eyebrow>A identidade em contexto</Eyebrow><ProjectMedia showCaption={false} image={project.applications} className="case-applications" /></section>
    <div className="mockup-grid">{project.mockups.map(image => <ProjectMedia showCaption={false} key={image.src} image={image} className="case-mockup" />)}</div>
  </div>
}
