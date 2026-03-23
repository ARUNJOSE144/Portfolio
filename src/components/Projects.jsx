import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import SectionWrapper, { fadeUp, stagger } from './SectionWrapper'
import { projects } from '../data/portfolioData'

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6 } },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      className={`relative glass-dark rounded-2xl overflow-hidden
                  border ${project.border}
                  hover:border-primary-500/40
                  transition-all duration-300 group cursor-default`}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace('/20','/80').replace('/10','/60')}`} />

      {/* Card body */}
      <div className={`p-6 bg-gradient-to-br ${project.gradient}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                               bg-primary-500/20 border border-primary-500/30
                               text-primary-300 text-[10px] font-semibold uppercase tracking-wider">
                <HiSparkles size={10} />
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="p-2 rounded-lg glass text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="p-2 rounded-lg glass text-slate-400 hover:text-white transition-colors"
              aria-label="Live demo"
            >
              <FiExternalLink size={16} />
            </a>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-200 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-dark-700/80 border border-white/5
                         text-slate-400 text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: '0 0 30px rgba(99,102,241,0.15) inset' }}
      />
    </motion.article>
  )
}

export default function Projects({ setActiveSection }) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.filter(p => p.featured)

  return (
    <SectionWrapper id="projects" setActiveSection={setActiveSection} className="bg-dark-800/20">
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
            What I've built
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle max-w-xl mx-auto">
            A selection of projects I'm proud of — from AI tools to full-stack platforms.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(v => !v)}
            className="btn-outline"
          >
            {showAll ? 'Show Less' : `View All ${projects.length} Projects`}
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full
                      bg-primary-900/10 blur-[120px] pointer-events-none -z-10" />
    </SectionWrapper>
  )
}
