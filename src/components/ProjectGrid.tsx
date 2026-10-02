import { withBase } from '../paths'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { Arrow, Eyebrow } from './Layout'
import ProjectMedia from './ProjectMedia'

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <a href={withBase(`/projetos/${project.slug}`)} aria-label={`Ver ${project.title} — ${project.category}`}>
      <ProjectMedia image={project.cover} className="project-cover" />
      <div className="project-card-info">
        <div><h3>{project.title}</h3><p>{project.category}</p></div>
        <span className="project-card-link">Ver projeto<Arrow /></span>
      </div>
    </a>
  </article>
}

export default function ProjectGrid() {
  return <section id="trabalhos" className="work-section container" aria-labelledby="work-title">
    <div className="work-intro">
      <div className="section-title"><Eyebrow>Seleção de projetos</Eyebrow><h2 id="work-title">Meus trabalhos</h2></div>
      <div className="work-description">
        <p>Identidade visual, design gráfico, campanhas e comunicação visual. Ideias que ganham forma, do impresso aos projetos digitais.</p>
        <p className="editorial-note">As imagens abaixo são placeholders para seus projetos.</p>
      </div>
    </div>
    <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
  </section>
}
