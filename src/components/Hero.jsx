import { useEffect, lazy, Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import {
  FiArrowRight, FiExternalLink,
  FiGithub, FiLinkedin,
} from 'react-icons/fi'
import { heroData } from '../data/portfolioData'

const ParticleBackground = lazy(() => import('./ParticleBackground'))

// Build the sequence for react-type-animation: [text, pause, text, pause …]
const typeSequence = heroData.roles.flatMap(r => [r, 2000])

const orbVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.3, 0.55, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

const socialIcons = {
  github:   FiGithub,
  linkedin: FiLinkedin,
}

export default function Hero({ setActiveSection }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-40% 0px -40% 0px' })

  useEffect(() => {
    if (inView) setActiveSection('hero')
  }, [inView, setActiveSection])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Particle layer */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Ambient glow orbs */}
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full
                   bg-primary-600/20 blur-[100px] pointer-events-none"
      />
      <motion.div
        variants={orbVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full
                   bg-accent/15 blur-[100px] pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-padding w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Text block ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full
                         glass text-xs font-mono text-primary-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              Senior Tech Lead · 9+ Years Experience
            </motion.div>

            {/* Greeting + name */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-400 text-lg font-medium mb-2"
            >
              {heroData.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-none"
            >
              <span className="gradient-text">{heroData.name}</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 h-10"
            >
              <span className="text-slate-500 text-xl">—</span>
              <span className="text-xl sm:text-2xl font-semibold text-slate-200 font-mono">
                <TypeAnimation
                  sequence={typeSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl
                         mx-auto lg:mx-0 mb-10 text-balance"
            >
              {heroData.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link to="contact" smooth duration={600} offset={-64}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                >
                  {heroData.cta.primary.label}
                  <FiArrowRight size={16} />
                </motion.button>
              </Link>

              <Link to="projects" smooth duration={600} offset={-64}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                >
                  <FiExternalLink size={16} />
                  {heroData.cta.secondary.label}
                </motion.button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {Object.entries(heroData.socials).map(([key, href]) => {
                const Icon = socialIcons[key]
                return (
                  <motion.a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl glass text-slate-400 hover:text-white
                               hover:border-primary-500/40 transition-colors duration-200"
                    aria-label={key}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          {/* ── Visual block ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Spinning ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-primary-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-accent/20"
              />

              {/* Avatar placeholder */}
              <div className="absolute inset-8 rounded-full overflow-hidden
                              bg-gradient-to-br from-primary-600/40 via-primary-800/60 to-dark-800
                              border-2 border-primary-500/30 shadow-glow
                              flex items-center justify-center">
                <span className="text-6xl font-extrabold gradient-text select-none">AJ</span>
              </div>

              {/* Floating badges */}
              {[
                { label: 'React', pos: '-top-2 -right-4', delay: 0 },
                { label: 'AI/ML', pos: '-bottom-2 -left-4', delay: 0.2 },
                { label: 'Spring Boot', pos: 'top-1/2 -right-14', delay: 0.4 },
              ].map(({ label, pos, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + delay, type: 'spring', bounce: 0.4 }}
                  className={`absolute ${pos} glass px-3 py-1 rounded-full
                               text-xs font-mono text-primary-300 whitespace-nowrap`}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
