import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'

const About      = lazy(() => import('./components/About'))
const Skills     = lazy(() => import('./components/Skills'))
const Projects   = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Contact    = lazy(() => import('./components/Contact'))
const Footer     = lazy(() => import('./components/Footer'))

const SectionFallback = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
  </div>
)

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <AnimatePresence>
      <motion.div
        className="relative min-h-screen bg-dark-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ScrollProgress />
        <Navbar
          activeSection={activeSection}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main>
          <Hero setActiveSection={setActiveSection} />

          <Suspense fallback={<SectionFallback />}>
            <About    setActiveSection={setActiveSection} />
            <Skills   setActiveSection={setActiveSection} />
            <Projects setActiveSection={setActiveSection} />
            <Experience setActiveSection={setActiveSection} />
            <Contact  setActiveSection={setActiveSection} />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}
