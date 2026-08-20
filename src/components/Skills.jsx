import { skills } from '../data/resume'
import useFadeIn from '../hooks/useFadeIn'

export default function Skills() {
  const ref = useFadeIn()

  return (
    <section id="skills" className="py-[72px] md:py-[120px]">
      <div className="fade-in max-w-[1080px] mx-auto px-5 md:px-8" ref={ref}>
        <div className="eyebrow">Skills</div>
        <h2 className="font-display font-medium text-[27px] md:text-[34px] mb-11">
          What I work with
        </h2>

        {skills.map((group, i) => (
          <div
            key={group.category}
            className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2.5 sm:gap-6 py-4.5 border-t border-border-soft ${
              i === skills.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className="font-mono text-xs tracking-[.08em] uppercase text-text-muted pt-[3px]">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2">
              {group.items.map((item) => (
                <span className="tag text-[13.5px] text-text-secondary py-1.5" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
