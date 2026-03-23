import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { navLinks } from '../data/portfolioData'

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="hero" smooth duration={600} className="cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent
                                flex items-center justify-center font-bold text-white text-sm shadow-glow">
                  A
                </div>
                <span className="font-bold text-white tracking-tight">
                  Arun<span className="gradient-text">Jose</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth
                    duration={600}
                    offset={-64}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium cursor-pointer
                               transition-colors duration-200
                               text-slate-400 hover:text-white"
                  >
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/8 border border-white/10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className={`relative z-10 ${activeSection === link.id ? 'text-white' : ''}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-400 hover:text-white
                           hover:bg-white/8 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
              </motion.button>

              <Link to="contact" smooth duration={600} offset={-64}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex btn-primary py-2 px-5 text-xs"
                >
                  Hire Me
                </motion.button>
              </Link>

              {/* Mobile hamburger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(o => !o)}
                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white
                           hover:bg-white/8 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden
                       bg-dark-800/95 backdrop-blur-xl border-b border-white/10"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.id}
                    smooth
                    duration={600}
                    offset={-64}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium cursor-pointer
                                transition-colors duration-200
                                ${activeSection === link.id
                                  ? 'text-white bg-primary-500/15 border border-primary-500/20'
                                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="pt-2"
              >
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-64}
                  onClick={() => setMenuOpen(false)}
                  className="block btn-primary text-center"
                >
                  Hire Me
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
