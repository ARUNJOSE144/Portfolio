import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiSend, FiMail, FiPhone, FiMapPin,
  FiGithub, FiLinkedin, FiTwitter,
} from 'react-icons/fi'
import SectionWrapper, { fadeUp, stagger, slideLeft, slideRight } from './SectionWrapper'
import { contactData } from '../data/portfolioData'

const socialIcons = {
  github:   FiGithub,
  linkedin: FiLinkedin,
  twitter:  FiTwitter,
}

const contactInfo = [
  { icon: FiMail,    label: 'Email',    value: contactData.email    },
  { icon: FiPhone,   label: 'Phone',    value: contactData.phone    },
  { icon: FiMapPin,  label: 'Location', value: contactData.location },
]

function InputField({ label, id, type = 'text', placeholder, value, onChange, rows }) {
  const Tag = rows ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required
        className="w-full px-4 py-3 rounded-xl bg-dark-700/60 border border-white/10
                   text-slate-200 placeholder-slate-600 text-sm
                   focus:outline-none focus:border-primary-500/60 focus:bg-dark-700
                   transition-all duration-200 resize-none"
      />
    </div>
  )
}

export default function Contact({ setActiveSection }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <SectionWrapper id="contact" setActiveSection={setActiveSection}>
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
            Let's work together
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle max-w-xl mx-auto">
            Have a project in mind or want to chat? I'm always open to new opportunities.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — contact info */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={slideLeft}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-500/20
                                flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-0.5">{label}</p>
                  <p className="text-slate-200 text-sm font-medium">{value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={slideLeft} className="mt-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-4">Follow me</p>
              <div className="flex gap-3">
                {contactData.socials.map(({ label, href, icon }) => {
                  const Icon = socialIcons[icon]
                  return (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl glass text-slate-400 hover:text-white
                                 hover:border-primary-500/40 transition-colors"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              variants={slideLeft}
              className="glass rounded-xl p-4 flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-emerald-400">Available</span> for freelance & full-time roles
              </p>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  label="Your Name"
                  id="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
                <InputField
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <InputField
                label="Message"
                id="message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                rows={5}
              />

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className={`w-full btn-primary justify-center py-3.5 ${
                  status !== 'idle' ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {status === 'idle' && (
                  <><FiSend size={16} /> Send Message</>
                )}
                {status === 'sending' && (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                )}
                {status === 'sent' && (
                  <><span className="text-emerald-300">✓</span> Message Sent!</>
                )}
                {status === 'error' && (
                  <>Something went wrong. Try again.</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
    </SectionWrapper>
  )
}
