// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const navLinks = [
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'projects',   label: 'Projects'   },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact'    },
]

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const heroData = {
  greeting: "Hi, I'm",
  name: 'Arun Jose',
  roles: [
    'Full Stack Developer',
    'AI Engineer',
    'React Specialist',
    'Node.js Developer',
    'Problem Solver',
  ],
  description:
    'I craft modern web experiences and intelligent systems that scale. Passionate about clean code, beautiful UIs, and AI-powered solutions.',
  cta: {
    primary: { label: 'Hire Me',       href: '#contact'  },
    secondary:{ label: 'View Projects', href: '#projects' },
  },
  socials: {
    github:   'https://github.com/',
    linkedin: 'https://linkedin.com/',
    twitter:  'https://twitter.com/',
  },
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const aboutData = {
  bio: [
    "I'm a Full Stack Developer and AI Engineer with 4+ years of experience building scalable web applications and integrating machine learning into production systems.",
    "I thrive at the intersection of great design and robust engineering — writing code that is clean, performant, and maintainable. When I'm not shipping features, I'm exploring the latest in AI/ML and open-source tooling.",
  ],
  highlights: [
    { value: '4+',   label: 'Years Experience'  },
    { value: '30+',  label: 'Projects Delivered' },
    { value: '15+',  label: 'Happy Clients'      },
    { value: '99%',  label: 'Client Satisfaction' },
  ],
  resumeLink: '#',
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'React',       level: 95 },
      { name: 'TypeScript',  level: 88 },
      { name: 'Next.js',     level: 85 },
      { name: 'Tailwind CSS',level: 92 },
      { name: 'Framer Motion',level: 80 },
      { name: 'Vue.js',      level: 72 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Node.js',     level: 90 },
      { name: 'Express',     level: 88 },
      { name: 'Python',      level: 85 },
      { name: 'FastAPI',     level: 80 },
      { name: 'PostgreSQL',  level: 82 },
      { name: 'MongoDB',     level: 78 },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'LangChain',   level: 82 },
      { name: 'OpenAI API',  level: 90 },
      { name: 'TensorFlow',  level: 70 },
      { name: 'PyTorch',     level: 68 },
      { name: 'Hugging Face',level: 75 },
      { name: 'Vector DBs',  level: 78 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    color: 'from-orange-500 to-rose-600',
    skills: [
      { name: 'Git / GitHub',level: 95 },
      { name: 'Docker',      level: 82 },
      { name: 'AWS',         level: 75 },
      { name: 'CI/CD',       level: 78 },
      { name: 'Figma',       level: 70 },
      { name: 'Linux',       level: 80 },
    ],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'AI Code Review Assistant',
    description:
      'A GPT-4 powered code review tool that analyzes PRs, detects bugs, suggests improvements, and explains complex logic inline.',
    tags: ['React', 'Node.js', 'OpenAI', 'GitHub API', 'PostgreSQL'],
    github: 'https://github.com/',
    live: '#',
    featured: true,
    gradient: 'from-violet-600/20 to-purple-600/10',
    border: 'border-violet-500/20',
  },
  {
    id: 2,
    title: 'Real-time Collaboration Platform',
    description:
      'Notion-like collaborative editor with live cursors, rich text, version history, and AI writing suggestions.',
    tags: ['Next.js', 'WebSockets', 'Yjs', 'Tailwind', 'Redis'],
    github: 'https://github.com/',
    live: '#',
    featured: true,
    gradient: 'from-cyan-600/20 to-blue-600/10',
    border: 'border-cyan-500/20',
  },
  {
    id: 3,
    title: 'E-Commerce Analytics Dashboard',
    description:
      'Full-stack analytics dashboard with real-time sales data, ML-powered forecasting, and automated reports.',
    tags: ['React', 'FastAPI', 'TensorFlow', 'D3.js', 'MongoDB'],
    github: 'https://github.com/',
    live: '#',
    featured: true,
    gradient: 'from-emerald-600/20 to-teal-600/10',
    border: 'border-emerald-500/20',
  },
  {
    id: 4,
    title: 'LLM-Powered Document Q&A',
    description:
      'Upload any PDF or doc and get instant intelligent answers using RAG architecture with semantic search.',
    tags: ['Python', 'LangChain', 'Pinecone', 'FastAPI', 'React'],
    github: 'https://github.com/',
    live: '#',
    featured: false,
    gradient: 'from-orange-600/20 to-rose-600/10',
    border: 'border-orange-500/20',
  },
  {
    id: 5,
    title: 'DevOps Pipeline Visualizer',
    description:
      'Interactive drag-and-drop CI/CD pipeline builder with real-time log streaming and Kubernetes integration.',
    tags: ['React', 'Node.js', 'Docker', 'Kubernetes', 'WebSockets'],
    github: 'https://github.com/',
    live: '#',
    featured: false,
    gradient: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/20',
  },
  {
    id: 6,
    title: 'Smart Finance Tracker',
    description:
      'Personal finance app with AI-powered transaction categorization, budget forecasting, and spending insights.',
    tags: ['React Native', 'Node.js', 'OpenAI', 'PostgreSQL', 'Plaid API'],
    github: 'https://github.com/',
    live: '#',
    featured: false,
    gradient: 'from-pink-600/20 to-rose-600/10',
    border: 'border-pink-500/20',
  },
]

// ─── EXPERIENCE ────────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechVision Labs',
    period: 'Jan 2023 – Present',
    type: 'Full-time',
    description:
      'Leading development of AI-integrated web platforms. Architected a microservices system serving 200k+ users, reduced API latency by 40%, and mentored a team of 5 engineers.',
    achievements: [
      'Reduced page load time by 60% via code splitting & CDN optimization',
      'Built real-time collaboration features used by Fortune 500 clients',
      'Integrated GPT-4 into core product, boosting user engagement by 35%',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'InnovateSoft Inc.',
    period: 'Jun 2021 – Dec 2022',
    type: 'Full-time',
    description:
      'Built and maintained 10+ client-facing applications. Delivered e-commerce solutions with advanced search, payment processing, and inventory management.',
    achievements: [
      'Delivered 8 projects on time with 98% client satisfaction',
      'Built custom CMS used by 50+ non-technical team members',
      'Introduced automated testing, reducing production bugs by 50%',
    ],
    tech: ['Vue.js', 'Express', 'MongoDB', 'Redis', 'Stripe'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'PixelCraft Agency',
    period: 'Aug 2020 – May 2021',
    type: 'Full-time',
    description:
      'Developed pixel-perfect, responsive UI components for agency clients. Collaborated closely with designers to translate Figma mockups into production code.',
    achievements: [
      'Built a design system adopted across 12 client projects',
      'Improved Lighthouse scores from 60 to 95+ on key projects',
      'Reduced development time by 30% with reusable component library',
    ],
    tech: ['React', 'SCSS', 'TypeScript', 'Storybook', 'Figma'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    role: 'Junior Developer (Intern → FTE)',
    company: 'StartupHub',
    period: 'Jan 2020 – Jul 2020',
    type: 'Internship → Full-time',
    description:
      'Joined as intern, converted to full-time within 3 months. Worked on the core product dashboard and mobile-responsive redesign.',
    achievements: [
      'Completed 6-month internship project in 3 months',
      'Redesigned the main dashboard improving usability scores by 45%',
      'Contributed to open-source component library with 300+ stars',
    ],
    tech: ['JavaScript', 'React', 'CSS', 'REST APIs'],
    color: 'from-orange-500 to-rose-600',
  },
]

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const contactData = {
  email: 'arun.jose@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/',    icon: 'github'   },
    { label: 'LinkedIn', href: 'https://linkedin.com/',  icon: 'linkedin' },
    { label: 'Twitter',  href: 'https://twitter.com/',   icon: 'twitter'  },
  ],
}
