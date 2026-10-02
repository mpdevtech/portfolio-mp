import { withBase } from '../paths'
import type { ProjectImage } from '../data/projects'

export default function ProjectMedia({ image, className = '', eager = false }: { image: ProjectImage; className?: string; eager?: boolean }) {
  return <figure className={`project-media project-media--${image.tone} ${className}`}>
    <div className="project-media-art"><img src={withBase(image.src)} alt={image.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" /></div>
    <figcaption><span>{image.caption}</span>{image.placeholder && <span>Placeholder</span>}</figcaption>
  </figure>
}
