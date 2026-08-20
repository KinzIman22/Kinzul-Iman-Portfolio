import { projects, moreLinks } from '../data/resume'
import useFadeIn from '../hooks/useFadeIn'

export default function Projects() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn()
  const moreRef = useFadeIn()

  return (
    <section id="projects" className="py-[72px] md:py-[120px]">
      <div className="max-w-[1080px] mx-auto px-5 md:px-8">
        <div className="eyebrow fade-in" ref={headRef}>
          Projects
        </div>
        <h2 className="font-display font-medium text-[27px] md:text-[34px] mb-11">
          Selected work
        </h2>

        <div
          className="fade-in grid grid-cols-1 md:grid-cols-2 gap-px bg-border-soft border border-border-soft"
          ref={gridRef}
        >
          {projects.map((project) => (
            <div className="bg-bg p-8 flex flex-col min-h-[230px]" key={project.num}>
              <div className="font-mono text-xs text-text-muted mb-4">{project.num}</div>
              <h3 className="font-display font-medium text-xl mb-2.5">{project.title}</h3>
              <p className="text-sm text-text-secondary mb-5 grow">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-[18px]">
                {project.stack.map((tech) => (
                  <span
                    className="font-mono text-[11px] text-accent border border-accent-dim px-2.5 py-[3px] rounded-[2px]"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                className="font-mono text-[13px] text-text inline-flex items-center gap-1.5 w-fit border-b border-border hover:text-accent hover:border-accent"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        <div
          className="fade-in mt-9 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[13px] text-text-secondary"
          ref={moreRef}
        >
          {moreLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
