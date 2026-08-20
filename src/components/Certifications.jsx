import { certifications } from '../data/resume'
import useFadeIn from '../hooks/useFadeIn'

export default function Certifications() {
  const ref = useFadeIn()

  return (
    <section id="certifications" className="py-[72px] md:py-[120px]">
      <div className="fade-in max-w-[1080px] mx-auto px-5 md:px-8" ref={ref}>
        <div className="eyebrow">Certifications</div>
        <h2 className="font-display font-medium text-[27px] md:text-[34px] mb-11">
          Coursework &amp; workshops
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5">
          {certifications.map((cert) => (
            <div
              className="flex justify-between py-3.5 border-b border-border-soft text-[14.5px] text-text-secondary"
              key={cert}
            >
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
