import { profile } from '../data/resume'
import useFadeIn from '../hooks/useFadeIn'

export default function Contact() {
  const ref = useFadeIn()

  return (
    <section id="contact" className="py-[72px] md:py-[120px]">
      <div className="fade-in max-w-[1080px] mx-auto px-5 md:px-8 text-left" ref={ref}>
        <div className="eyebrow">Contact</div>
        <h2 className="font-display font-medium text-[27px] md:text-[34px] mb-5">
          Let's build something.
        </h2>
        <p className="text-text-secondary max-w-[480px] mb-11">
          Open to internships, freelance work, and collaborations — mobile, web, or anything in
          between.
        </p>
        <a
          className="font-display font-medium text-[26px] md:text-[44px] text-text inline-block border-b border-border pb-2 mb-11 hover:text-accent hover:border-accent"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>
        <div className="flex flex-wrap gap-9 font-mono text-[13px] text-text-secondary">
          <div>
            <span className="block text-text-muted text-[11px] uppercase tracking-[.08em] mb-1.5">
              Phone
            </span>
            <a href={`tel:${profile.phoneHref}`} className="hover:text-accent">
              {profile.phone}
            </a>
          </div>
          <div>
            <span className="block text-text-muted text-[11px] uppercase tracking-[.08em] mb-1.5">
              Location
            </span>
            <span>{profile.location}</span>
          </div>
          <div>
            <span className="block text-text-muted text-[11px] uppercase tracking-[.08em] mb-1.5">
              GitHub
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {profile.githubLabel}
            </a>
          </div>
          <div>
            <span className="block text-text-muted text-[11px] uppercase tracking-[.08em] mb-1.5">
              Resume
            </span>
            <a href="/resume.pdf" download className="hover:text-accent">
              Download PDF ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
