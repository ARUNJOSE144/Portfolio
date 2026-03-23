import { useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Wraps each section with scroll-spy ID tracking + fade-in animation.
 */
export default function SectionWrapper({
  id,
  children,
  className = '',
  setActiveSection,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-40% 0px -40% 0px' })

  useEffect(() => {
    if (inView && setActiveSection) setActiveSection(id)
  }, [inView, id, setActiveSection])

  return (
    <section id={id} ref={ref} className={`relative py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  )
}

// ─── Shared animation variants used across sections ───────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.7 } },
}

export const stagger = (delayChildren = 0.1) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delayChildren } },
})

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
