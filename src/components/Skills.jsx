import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../data/resume'
import useFadeIn from '../hooks/useFadeIn'

export default function Skills() {
  const ref = useFadeIn()
  const [activeCategory, setActiveCategory] = useState(skills[0]?.category || '')

  const selectedGroup = skills.find((g) => g.category === activeCategory) || skills[0]

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="fade-in max-w-[1080px] mx-auto px-5 md:px-8 text-center" ref={ref}>
        <div className="eyebrow inline-block mb-1">Skills</div>
        <h2 className="font-display font-bold text-[32px] md:text-[42px] mb-8 text-text tracking-tight">
          Our Core <span className="text-[#D4AF37]">Tech</span> Skills
        </h2>

        {/* Category Buttons / Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {skills.map((group) => {
            const isActive = group.category === activeCategory
            return (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={`font-mono text-[13px] px-5 py-2.5 rounded-full transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#D4AF37] text-bg font-semibold border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-bg-alt text-text-secondary border-border-soft hover:border-[#D4AF37]/50 hover:text-text'
                }`}
              >
                {group.category}
              </button>
            )
          })}
        </div>

        {/* Selected Skill Card View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGroup.category}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-bg-alt border border-border-soft rounded-2xl p-6 md:p-8 mb-6 text-left"
          >
            <div className="flex items-center gap-3.5 mb-3">
              <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                {/* Code/Tech Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-[20px] text-text">
                  {selectedGroup.category} Development
                </h3>
                <p className="text-[13.5px] text-text-secondary mt-0.5">
                  Core technologies and tools in my daily workflow.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-6 pt-6 border-t border-border-soft">
              {selectedGroup.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[13.5px] text-text-secondary border border-border-soft rounded-full px-4 py-2 bg-bg hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Development Philosophy Card */}
        <div className="bg-bg-alt border border-border-soft rounded-2xl p-6 md:p-8 text-left">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
              {/* Curly Brackets Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-10H7a2 2 0 00-2 2v6a2 2 0 002 2h6m-3-10v12" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[.08em] uppercase text-[#D4AF37] font-semibold">
                DEVELOPMENT PHILOSOPHY
              </div>
              <h3 className="font-display font-semibold text-[20px] md:text-[22px] text-text mt-0.5">
                The right tools for the right problem.
              </h3>
            </div>
          </div>
          <p className="text-[14px] text-text-secondary mt-3 leading-relaxed">
            I choose technology based on project requirements, scalability, performance, and long term maintainability, not trends.
          </p>
        </div>

      </div>
    </section>
  )
}