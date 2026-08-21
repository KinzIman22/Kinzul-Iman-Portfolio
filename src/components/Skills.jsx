import { projects, moreLinks } from '../data/resume'
import useFadeIn from '../hooks/useFadeIn'

export default function Projects() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn()
  const moreRef = useFadeIn()

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-[1080px] mx-auto px-5 md:px-8">
        <div className="eyebrow fade-in" ref={headRef}>
          Projects
        </div>
        <h2 className="font-display font-bold text-[32px] md:text-[42px] mb-11 text-text">
          Selected work
        </h2>

        <div
          className="fade-in grid grid-cols-1 md:grid-cols-2 gap-6"
          ref={gridRef}
        >
          {projects.map((project) => (
            <div 
              className="bg-bg-alt border border-border-soft rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/10 group" 
              key={project.num}
            >
              <div>
                {/* Project Image Box */}
                <div className="mb-6 overflow-hidden rounded-xl border border-border-soft aspect-video bg-bg flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-mono text-xs text-text-muted">No Image Available</span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-text-muted">{project.num}</span>
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-2.5 text-text group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      className="font-mono text-[11px] text-[#D4AF37] border border-[#D4AF37]/30 px-2.5 py-[3px] rounded-[2px] bg-bg"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  className="font-mono text-[13px] text-text inline-flex items-center gap-1.5 w-fit border-b border-border hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Links / Other Projects in Center Golden Buttons */}
        <div
          className="fade-in mt-12 flex flex-wrap justify-center items-center gap-3 font-mono text-[13px]"
          ref={moreRef}
        >
          {moreLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-[#D4AF37]/50 bg-bg-alt text-text hover:bg-[#D4AF37] hover:text-bg hover:border-[#D4AF37] transition-all duration-300 shadow-md shadow-[#D4AF37]/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}