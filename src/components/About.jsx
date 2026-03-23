import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import SectionWrapper, { fadeUp, fadeIn, stagger, slideLeft, slideRight } from './SectionWrapper'
import { aboutData } from '../data/portfolioData'

export default function About({ setActiveSection }) {
  return (
    <SectionWrapper id="about" setActiveSection={setActiveSection} className="bg-dark-800/30">
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
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — bio */}
          <motion.div
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {aboutData.bio.map((para, i) => (
              <motion.p
                key={i}
                variants={slideLeft}
                className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5 last:mb-0"
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={slideLeft} className="mt-8">
              <a
                href={aboutData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutData.highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={slideRight}
                whileHover={{ scale: 1.04, y: -4 }}
                className="card text-center group"
              >
                <div className="text-4xl font-extrabold gradient-text mb-2 group-hover:scale-110 transition-transform">
                  {item.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full
                        bg-primary-900/20 blur-[80px] pointer-events-none -z-10" />
      </div>
    </SectionWrapper>
  )
}
