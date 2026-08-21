import { motion } from 'framer-motion'
import { education, highlights, beyondCode } from '../data/resume'
import ucpCampus from '../assets/ucp.png'
import kipsCampus from '../assets/kips.png'

const eduImages = { ucp: ucpCampus, kips: kipsCampus }

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function About() {
  return (
    <section id="about" className="py-[72px] md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-10 items-start">

          {/* ---------- left: intro ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow">Why work with me</div>

            <h2 className="font-display font-bold tracking-[-0.02em] text-[34px] md:text-[46px] leading-[1.08] mb-6">
              I build products
              <br />
              that actually ship.
            </h2>

            <p className="text-text-secondary max-w-[500px] mb-4 leading-relaxed">
              I'm a Software Engineering student and full-stack developer with hands-on
              experience across web, mobile, and machine learning. From REST APIs to React
              Native apps, I care about writing scalable, well-architected code and building
              interfaces that are genuinely easy to use.
            </p>

            <p className="text-text-secondary max-w-[500px] mb-8 leading-relaxed">
              I've worked alongside senior developers in real project settings, and I'm
              continuously deepening my skills — most recently in machine learning, applying it
              to real predictive projects.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center font-mono text-[13px] px-7 py-[13px] rounded-[6px] bg-accent text-bg font-medium mb-10"
            >
              Let's talk →
            </motion.a>

            {/* education — floating cards with institute background art */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4 + i * 0.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.4
                    }}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.03 }}
                    className="relative overflow-hidden rounded-2xl border border-border-soft min-h-[150px] flex flex-col justify-end p-4"
                    style={{
                      backgroundImage: `url(${eduImages[edu.image]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/20" />
                    <div className="relative">
                      <span className="text-lg leading-none mb-2 block">🎓</span>
                      <div className="text-[13.5px] font-medium text-text leading-snug">
                        {edu.degree}
                      </div>
                      <div className="text-[12px] text-text-secondary mt-1">{edu.school}</div>
                      <div className="font-mono text-[10.5px] text-text-muted mt-1">
                        {edu.years}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* availability */}
            <div className="flex items-start gap-2 font-mono text-[13px] text-text mb-8">
              <span className="w-[7px] h-[7px] rounded-full bg-[#5CB85C] shadow-[0_0_0_3px_rgba(92,184,92,0.15)] mt-1.5 shrink-0"></span>
              <span>
                Open to internships, jobs &amp; freelance work — websites, mobile apps, and
                everything in between.
              </span>
            </div>

            {/* beyond code — floating tags, headline-style motion */}
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[.1em] text-text-muted mb-3">
                Beyond code — my domain is IT, but I also enjoy
              </div>
              <div className="flex flex-wrap gap-2">
                {beyondCode.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      opacity: { delay: 0.05 * i, duration: 0.4 },
                      y: {
                        duration: 2.6 + i * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.25
                      }
                    }}
                    whileHover={{
                      scale: 1.06,
                      borderColor: 'var(--color-accent)',
                      color: 'var(--color-accent)'
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="font-mono text-[12px] text-text-secondary border border-border-soft rounded-full px-3.5 py-1.5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---------- right: highlight cards ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)' }}
                className="bg-bg-alt border border-border-soft rounded-2xl p-6 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xl">{h.icon}</span>
                  <h3 className="font-display font-semibold text-[17px] text-text">
                    {h.title}
                  </h3>
                </div>
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  {h.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}