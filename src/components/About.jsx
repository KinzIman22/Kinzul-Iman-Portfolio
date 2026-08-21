import { motion } from 'framer-motion'
import { highlights, beyondCode } from '../data/resume'
import ucpCampus from '../assets/ucp.png' // Sirf UCP ki image import ki hai

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  })
}

// Helper function to render specific golden SVG icons for each highlight card
const renderHighlightIcon = (index) => {
  switch (index) {
    case 0: // Full-Stack MERN (Zap/Lightning)
      return (
        <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 1: // React Native Apps (Mobile)
      return (
        <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    case 2: // Machine Learning (CPU/Chip)
      return (
        <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 3: // Clean, Scalable Code (Code brackets)
    default:
      return (
        <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
  }
}

export default function About() {
  return (
    <section id="about" className="py-10 md:py-16">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        
        {/* Top Section: Left Bio Card & Right 4 Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-stretch mb-8">

          {/* ---------- Left: About Me Card ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-bg-alt border border-border-soft rounded-2xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  {/* Golden User Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-[20px] text-text">
                  About Me
                </h3>
              </div>
              <p className="text-[14.5px] text-text-secondary leading-relaxed mb-4">
                I'm a Software Engineering student and Full-Stack MERN & React Native Developer based in Lahore. I specialize in building high-performance web applications and cross-platform mobile apps using clean code and modern tools like Expo and Tailwind CSS.
              </p>
              <p className="text-[14.5px] text-text-secondary leading-relaxed mb-6">
                I've worked alongside senior developers in real project settings, and I'm continuously deepening my skills — most recently in machine learning, applying it to real predictive projects.
              </p>
            </div>
            
            <div>
              <a
                href="#contact"
                className="inline-flex items-center font-mono text-[13px] text-[#D4AF37] font-medium hover:underline"
              >
                Read More 
              </a>
            </div>
          </motion.div>

          {/* ---------- Right: 4 Highlight Cards (Grid) ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -4, borderColor: '#D4AF37' }}
                className="bg-bg-alt border border-border-soft rounded-2xl p-6 transition-colors flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/10">
                    {renderHighlightIcon(i)}
                  </div>
                  <h3 className="font-display font-semibold text-[16px] text-text">
                    {h.title}
                  </h3>
                </div>
                <p className="text-[13.5px] text-text-secondary leading-relaxed">
                  {h.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Section: Education (Left) & Beyond Code (Right) - Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-stretch">
          
          {/* Education Card (Only UCP) */}
          <div className="bg-bg-alt border border-border-soft rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                {/* Golden Graduation Cap Icon */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[18px] text-text">
                Education
              </h3>
            </div>
            
            {/* UCP Image Card - Expands to fill available space */}
            <div 
              className="relative overflow-hidden rounded-xl border border-border-soft flex-1 min-h-[150px] flex flex-col justify-end p-5"
              style={{
                backgroundImage: `url(${ucpCampus})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/90 to-bg/10" />
              <div className="relative z-10">
                <div className="text-[15px] font-semibold text-text leading-snug">
                  Bachelor of Science in Software Engineering
                </div>
                <div className="text-[13px] text-text-secondary mt-1.5">
                  University of Central Punjab
                </div>
                <div className="font-mono text-[11.5px] text-[#D4AF37] mt-1.5">
                  2023 - 2027 - Ongoing
                </div>
              </div>
            </div>
          </div>

          {/* Beyond Code Card */}
          <div className="bg-bg-alt border border-border-soft rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  {/* Golden Heart/Like Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-[18px] text-text">
                  Beyond Code
                </h3>
              </div>
              <p className="font-mono text-[13px] text-text-secondary mb-5">
                My interests beyond coding:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {beyondCode.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.06,
                      borderColor: '#D4AF37',
                      color: '#D4AF37'
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="font-mono text-[12.5px] text-text-secondary border border-border-soft rounded-full px-4 py-2 bg-bg transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}