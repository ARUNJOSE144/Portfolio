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
    'Senior Tech Lead',
    'Full Stack Developer',
    'Spring Boot Developer',
    'React Specialist',
    'Problem Solver',
  ],
  description:
    'Senior Tech Lead with 9+ years of experience building scalable web applications. Passionate about clean code, robust backend systems, and delivering high-quality solutions.',
  cta: {
    primary: { label: 'Hire Me',       href: '#contact'  },
    secondary:{ label: 'View Projects', href: '#projects' },
  },
  socials: {
    github:   'https://github.com/ARUNJOSE144',
    linkedin: 'https://www.linkedin.com/in/arun-jose-5422b0133/',
  },
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const aboutData = {
  bio: [
    "I'm a Senior Tech Lead with 9+ years of experience at 6D Technologies Private Limited, building scalable web applications and enterprise solutions using Java, Spring Boot, and React.",
    "I thrive at the intersection of great design and robust engineering — writing code that is clean, performant, and maintainable. I have grown from a junior developer to leading technical teams, delivering impactful solutions for clients.",
  ],
  highlights: [
    { value: '9+',   label: 'Years Experience'  },
    { value: '30+',  label: 'Projects Delivered' },
    { value: '15+',  label: 'Happy Clients'      },
    { value: '99%',  label: 'Client Satisfaction' },
  ],
  resumeLink: 'https://drive.google.com/file/d/1ftXuVCqrOm94Ii_MZUciGk7K5tX6TLPU/view?usp=drive_link',
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
      { name: 'JavaScript',  level: 92 },
      { name: 'jQuery',      level: 90 },
      { name: 'CSS',         level: 88 },
      { name: 'Bootstrap',   level: 85 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Spring Boot', level: 95 },
      { name: 'Java',        level: 92 },
      { name: 'Python',      level: 75 },
      { name: 'SQL',         level: 90 },
      { name: 'Oracle',      level: 85 },
      { name: 'REST API',    level: 92 },
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
    role: 'Senior Tech Lead',
    company: '6D Technologies Private Limited',
    period: '2016 – Present',
    type: 'Full-time',
    description:
      'Started as a Junior Developer and grew through the ranks to Senior Tech Lead over 9+ years. Leading end-to-end development of enterprise-grade web applications, architecting scalable backend systems, and mentoring cross-functional development teams.',
    achievements: [
      'Promoted from Junior Developer to Senior Tech Lead within the same organization over 9+ years',
      'Architected and delivered 30+ enterprise projects using Spring Boot, Java, React, and Oracle',
      'Led a team of developers, driving agile practices and reducing delivery timelines by 40%',
      'Designed RESTful API platforms serving thousands of concurrent users with high availability',
      'Implemented CI/CD pipelines and DevOps practices that reduced deployment time by 50%',
    ],
    tech: ['Spring Boot', 'Java', 'React', 'Oracle', 'SQL', 'REST API', 'Docker', 'AWS'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    role: 'Tech Lead',
    company: '6D Technologies Private Limited',
    period: '2020 – 2022',
    type: 'Full-time',
    description:
      'Led multiple product teams in delivering scalable backend services and modern frontend interfaces. Established coding standards, conducted code reviews, and collaborated with stakeholders to translate business requirements into technical solutions.',
    achievements: [
      'Led development of a high-traffic enterprise portal used by 100k+ users',
      'Introduced automated testing frameworks reducing production defects by 60%',
      'Mentored junior and mid-level developers, improving team productivity by 30%',
    ],
    tech: ['Spring Boot', 'React', 'SQL', 'Bootstrap', 'REST API', 'Git'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    role: 'Senior Developer',
    company: '6D Technologies Private Limited',
    period: '2018 – 2020',
    type: 'Full-time',
    description:
      'Designed and developed scalable full-stack web applications for enterprise clients. Responsible for backend API design, database optimization, and frontend development.',
    achievements: [
      'Developed RESTful APIs consumed by mobile and web clients with 99.9% uptime',
      'Optimized Oracle database queries improving application performance by 45%',
      'Built reusable UI component library using React, Bootstrap, and jQuery',
    ],
    tech: ['Java', 'Spring Boot', 'Oracle', 'React', 'jQuery', 'CSS'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: '6D Technologies Private Limited',
    period: '2016 – 2018',
    type: 'Full-time',
    description:
      'Began my career at 6D Technologies, contributing to full-stack web development projects. Gained hands-on experience with Java, Spring, and frontend technologies.',
    achievements: [
      'Contributed to 10+ client projects within the first two years',
      'Developed responsive UI components using HTML, CSS, Bootstrap, and jQuery',
      'Built and maintained SQL and Oracle database schemas for enterprise applications',
    ],
    tech: ['Java', 'Spring', 'SQL', 'jQuery', 'Bootstrap', 'HTML', 'CSS'],
    color: 'from-orange-500 to-rose-600',
  },
]

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const contactData = {
  email: 'arun.jose144@gmail.com',
  phone: '+91 8891784776',
  location: 'Ernakulam, India',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/ARUNJOSE144',                        icon: 'github'   },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arun-jose-5422b0133/',      icon: 'linkedin' },
  ],
}
