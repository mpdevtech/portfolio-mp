import { projects } from '../data/projects'
import type { Project as ProjectData } from '../data/projects'
import { Arrow, Eyebrow } from '../components/Layout'
import ProjectMedia from '../components/ProjectMedia'
import ProjectGallery from '../components/ProjectGallery'

export default function Project({ project }: { project: ProjectData }) {
  const index = projects.findIndex(item => item.slug === project.slug)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  return <>
    <section className="case-opening container" aria-labelledby="case-title">
      <a className="back-link" href="/#trabalhos"><Arrow name="back" />Voltar aos trabalhos</a>
      <div className="case-intro">
        <Eyebrow>Template de projeto • Conteúdo editável</Eyebrow>
        <h1 id="case-title">{project.title}</h1>
        <dl className="case-info">
          <div><dt>Categoria</dt><dd>{project.category}</dd></div><div><dt>Ano</dt><dd>{project.year}</dd></div><div><dt>Sobre o projeto</dt><dd>{project.description}</dd></div>
        </dl>
      </div>
      <ProjectMedia image={project.mainImage} className="case-main" eager />
    </section>
    <ProjectGallery project={project} />
    <nav className="project-navigation" aria-label="Navegação entre projetos"><div className="container project-navigation-inner">
      <a href={`/projetos/${previous.slug}`}><Arrow name="previous" /><span><span className="project-navigation-label">Projeto anterior</span><span className="project-navigation-title">{previous.title}</span></span></a>
      <a href={`/projetos/${next.slug}`}><span><span className="project-navigation-label">Próximo projeto</span><span className="project-navigation-title">{next.title}</span></span><Arrow name="next" /></a>
    </div></nav>
  </>
}
