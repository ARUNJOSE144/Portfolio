import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { navLinks } from '../data/portfolioData'
import { contactData } from '../data/portfolioData'

const socialIcons = {
  github:   FiGithub,
  linkedin: FiLinkedin,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-900 border-t border-white/5 pt-12 pb-8 overflow-hidden">
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="section-padding">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent
                              flex items-center justify-center font-bold text-white text-sm shadow-glow">
                A
              </div>
              <span className="font-bold text-white tracking-tight">
                Arun<span className="gradient-text">Jose</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Senior Tech Lead crafting scalable enterprise web solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth
                    duration={600}
                    offset={-64}
                    className="text-slate-400 text-sm hover:text-primary-300 cursor-pointer transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-4">Connect</p>
            <div className="flex gap-3">
              {contactData.socials.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon]
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="p-2.5 rounded-xl glass text-slate-400 hover:text-white
                               hover:border-primary-500/30 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {year} Arun Jose. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <FiHeart size={12} className="text-rose-500" /> using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>

      {/* Bg glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-32 rounded-full
                      bg-primary-900/20 blur-[60px] pointer-events-none" />
    </footer>
  )
}
