import { education } from '../data/resume'
import useFadeIn from '../hooks/useFadeIn'

export default function About() {
  const textRef = useFadeIn()
  const eduRef = useFadeIn()

  return (
    <section id="about" className="py-[72px] md:py-[120px]">
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-[70px]">
        <div className="fade-in" ref={textRef}>
          <div className="eyebrow">About</div>
          <p className="text-text-secondary max-w-[560px] mb-[18px]">
            I'm a Software Engineering student and full stack developer with hands-on experience
            building both web and mobile applications — including cross-platform apps in React
            Native. My foundation spans frontend, backend, database design, and REST API
            integration, and I've worked alongside senior developers in collaborative, real-world
            project settings.
          </p>
          <p className="text-text-secondary max-w-[560px] mb-[18px]">
            Alongside development, I've been building a growing foundation in machine learning —
            completing coursework and applying it to a real predictive project. I care about
            writing scalable, well-architected code and building interfaces that are genuinely
            easy to use.
          </p>
          <p className="text-text-secondary max-w-[560px] mb-[18px]">
            Currently deepening my machine learning skill set while continuing to ship full stack
            and mobile projects.
          </p>
          <div className="flex items-center gap-2 font-mono text-[13px] text-text mt-2">
            <span className="w-[7px] h-[7px] rounded-full bg-[#5CB85C] shadow-[0_0_0_3px_rgba(92,184,92,0.15)]"></span>
            Open to work — internships &amp; freelance projects
          </div>
        </div>

        <div className="fade-in" ref={eduRef}>
          <div className="eyebrow">Education</div>
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`border-t border-border-soft py-5 ${
                i === education.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="text-[15px] text-text mb-1">{edu.degree}</div>
              <div className="text-[13px] text-text-secondary">{edu.school}</div>
              <div className="font-mono text-xs text-text-muted mt-1.5">{edu.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
