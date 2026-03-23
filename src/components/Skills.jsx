import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper, { fadeUp, stagger, slideLeft } from './SectionWrapper'
import { skillCategories } from '../data/portfolioData'

function SkillBar({ name, level, color, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { delay: index * 0.06 } },
      }}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.06 + 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  )
}

export default function Skills({ setActiveSection }) {
  const [active, setActive] = useState(skillCategories[0].id)
  const current = skillCategories.find(c => c.id === active)

  return (
    <SectionWrapper id="skills" setActiveSection={setActiveSection}>
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
            What I work with
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle max-w-xl mx-auto">
            A curated set of tools and technologies I use to build full-stack and AI-powered products.
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={fadeUp}
              onClick={() => setActive(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === cat.id
                  ? 'text-white shadow-glow'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {active === cat.id && (
                <motion.div
                  layoutId="tab-bg"
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cat.color}`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skill bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10 }}
            className="max-w-2xl mx-auto grid sm:grid-cols-1 gap-5"
          >
            {current.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={current.color}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech pill cloud */}
        <motion.div
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.p variants={fadeUp} className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-mono">
            Also experienced with
          </motion.p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'GraphQL','Redis','Prisma','tRPC','Stripe','Socket.io',
              'Jest','Cypress','Storybook','Webpack','Vite','Three.js',
              'Kubernetes','Terraform','Nginx','Vercel','Supabase',
            ].map((tech, i) => (
              <motion.span
                key={tech}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-lg glass text-slate-400 text-xs font-mono
                           hover:text-primary-300 hover:border-primary-500/30 cursor-default
                           transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bg glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full
                      bg-accent/5 blur-[100px] pointer-events-none -z-10" />
    </SectionWrapper>
  )
}
