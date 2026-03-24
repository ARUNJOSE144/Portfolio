import { motion } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi2'
import SectionWrapper, { fadeUp, stagger } from './SectionWrapper'
import { experiences } from '../data/portfolioData'

function TimelineItem({ exp, index, isLast }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex items-start gap-4 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

      {/* Desktop: left half content */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isEven ? -50 : 50 },
          show: { opacity: 1, x: 0, transition: { delay: index * 0.15, duration: 0.6 } },
        }}
        className="hidden md:block md:w-[calc(50%-2rem)] md:pr-8"
        style={{ textAlign: isEven ? 'right' : 'left' }}
      >
        {isEven && (
          <ExperienceCard exp={exp} align="right" />
        )}
      </motion.div>

      {/* Center dot */}
      <div className="relative flex flex-col items-center flex-shrink-0 z-10
                      md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.1, type: 'spring', bounce: 0.4 }}
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.color}
                      flex items-center justify-center shadow-glow flex-shrink-0`}
        >
          <HiBriefcase size={16} className="text-white" />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
            className="hidden md:block w-0.5 h-full bg-gradient-to-b from-primary-500/40 to-transparent mt-2 origin-top"
            style={{ minHeight: '80px' }}
          />
        )}
      </div>

      {/* Mobile + desktop right half */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isEven ? 50 : -50 },
          show: { opacity: 1, x: 0, transition: { delay: index * 0.15, duration: 0.6 } },
        }}
        className={`flex-1 md:w-[calc(50%-2rem)] ${isEven ? 'md:pl-8' : 'md:pr-8'}`}
      >
        {(!isEven || true) && (
          <div className="md:block">
            {/* Mobile: always show. Desktop: show on correct side */}
            <div className={`md:hidden`}>
              <ExperienceCard exp={exp} align="left" />
            </div>
            <div className={`hidden md:block`}>
              {!isEven && <ExperienceCard exp={exp} align="left" />}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

function ExperienceCard({ exp, align }) {
  return (
    <div
      className={`card mb-8 group hover:scale-[1.02] hover:shadow-glow transition-all duration-300
                  ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      <div className={`flex items-center gap-2 mb-1 ${align === 'right' ? 'justify-end' : ''}`}>
        <span className={`text-xs font-mono px-2 py-0.5 rounded-full
                          bg-gradient-to-r ${exp.color} bg-opacity-20 text-white`}>
          {exp.type}
        </span>
        <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
      </div>

      <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-primary-200 transition-colors">
        {exp.role}
      </h3>
      <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
        {exp.company}
      </p>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {exp.description}
      </p>

      <ul className={`space-y-1.5 mb-4 ${align === 'right' ? 'text-right' : ''}`}>
        {exp.achievements.map((ach, i) => (
          <li key={i} className={`flex items-start gap-2 text-xs text-slate-400
                                  ${align === 'right' ? 'flex-row-reverse' : ''}`}>
            <span className="text-primary-400 mt-0.5 flex-shrink-0">▹</span>
            {ach}
          </li>
        ))}
      </ul>

      <div className={`flex flex-wrap gap-1.5 ${align === 'right' ? 'justify-end' : ''}`}>
        {exp.tech.map(t => (
          <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono
                                   bg-dark-700/80 border border-white/5 text-slate-500">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience({ setActiveSection }) {
  return (
    <SectionWrapper id="experience" setActiveSection={setActiveSection} className="bg-dark-800/30">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-3">
            My journey
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle max-w-xl mx-auto">
            9+ years at 6D Technologies — from Junior Developer to Senior Tech Lead.
          </motion.p>
        </motion.div>

        {/* Mobile timeline (stacked) */}
        <div className="md:hidden space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { delay: i * 0.15 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative pl-8 pb-8 border-l border-white/10 last:border-transparent"
            >
              <div className={`absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full
                               bg-gradient-to-br ${exp.color}`} />
              <ExperienceCard exp={exp} align="left" />
            </motion.div>
          ))}
        </div>

        {/* Desktop alternating timeline */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="hidden md:block relative"
        >
          {/* Center line */}
          <div className="absolute left-1/2 top-5 bottom-5 w-0.5 -translate-x-1/2
                          bg-gradient-to-b from-primary-600/50 via-primary-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={i}
                isLast={i === experiences.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full
                      bg-primary-900/10 blur-[100px] pointer-events-none -z-10" />
    </SectionWrapper>
  )
}
