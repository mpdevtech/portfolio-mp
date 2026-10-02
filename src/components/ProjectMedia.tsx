import { withBase } from '../paths'
import type { ProjectImage } from '../data/projects'

export default function ProjectMedia({ image, className = '', eager = false, showCaption = true }: { image: ProjectImage; className?: string; eager?: boolean; showCaption?: boolean }) {
  return <figure className={`project-media project-media--${image.tone} ${className}`}>
    <div className="project-media-art"><img src={/^[a-z][a-z\d+.-]*:/i.test(image.src) ? image.src : withBase(image.src)} alt={image.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" /></div>
    {showCaption && <figcaption><span>{image.caption}</span>{image.placeholder && <span>Placeholder</span>}</figcaption>}
  </figure>
}
