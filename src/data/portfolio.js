export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const roles = [
  'IT Enthusiast',
  'Cloud Administrator',
  'Cybersecurity Learner',
  'Full Stack Developer',
  'Networking & Systems Explorer',
  'Tech Problem Solver',
];

export const stats = [
  { value: '10+', label: 'Projects Completed', detail: 'College, personal, and practice projects' },
  { value: '20+', label: 'Technologies Learned', detail: 'Tools picked up by building and testing' },
  { value: '2', label: 'Certificates', detail: 'Java programming and WordPress development' },
  { value: '4+', label: 'Years of Learning', detail: 'From BSc IT classes to hands-on projects' },
];

export const skillGroups = [
  {
    category: 'Frontend',
    accent: '#22d3ee',
    icon: 'frontend',
    summary: 'Clean pages, responsive layouts, and interfaces that feel simple to use.',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'JavaScript', level: 86 },
      { name: 'React', level: 84 },
      { name: 'Tailwind', level: 88 },
    ],
  },
  {
    category: 'Backend',
    accent: '#a855f7',
    icon: 'backend',
    summary: 'API basics, backend structure, and practical server-side problem solving.',
    skills: [
      { name: 'Python', level: 84 },
      { name: 'FastAPI', level: 78 },
      { name: 'Java', level: 74 },
      { name: 'Node.js basics', level: 62 },
    ],
  },
  {
    category: 'Database',
    accent: '#38bdf8',
    icon: 'database',
    summary: 'Schema design, SQL queries, NoSQL collections, and data comparison work.',
    skills: [
      { name: 'Oracle SQL', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 74 },
    ],
  },
  {
    category: 'Cloud',
    accent: '#7c3aed',
    icon: 'cloud',
    summary: 'Cloud platform basics, deployment thinking, and a growing interest in admin work.',
    skills: [
      { name: 'AWS', level: 76 },
      { name: 'Azure', level: 72 },
      { name: 'Docker basics', level: 64 },
    ],
  },
  {
    category: 'Cybersecurity',
    accent: '#67e8f9',
    icon: 'security',
    summary: 'Security fundamentals, networking concepts, and curiosity about safer systems.',
    skills: [
      { name: 'Kali Linux', level: 72 },
      { name: 'Networking', level: 80 },
      { name: 'Security Fundamentals', level: 76 },
    ],
  },
  {
    category: 'Tools',
    accent: '#c084fc',
    icon: 'tools',
    summary: 'Daily tools for coding, testing APIs, version control, and WordPress work.',
    skills: [
      { name: 'GitHub', level: 86 },
      { name: 'VS Code', level: 90 },
      { name: 'WordPress', level: 78 },
      { name: 'Postman', level: 74 },
      { name: 'Linux basics', level: 72 },
    ],
  },
];

export const projects = [
  {
    title: 'MealMate App',
    description: 'An Android application built with Java concepts, form validation, local storage, and smooth navigation.',
    image: '/assets/projects/mealmate.svg',
    technologies: ['Android', 'UI/UX', 'Database', 'Planning'],
    github: 'https://bimuna-charya.github.io',
    live: '#contact',
  },
  {
    title: 'AI Solutions Website',
    description: 'A business website built around AI services, landing pages, and a clear service presentation.',
    image: '/assets/projects/ai-solutions.svg',
    technologies: ['React', 'WordPress', 'Tailwind', 'SEO'],
    github: 'https://bimuna-charya.github.io',
    live: '#contact',
  },
  {
    title: 'Secure Registration System',
    description: 'A web security project focused on password strength, CAPTCHA, vulnerability checks, and safer account flows.',
    image: '/assets/projects/secure-registration.svg',
    technologies: ['JavaScript', 'Security', 'CAPTCHA', 'Validation'],
    github: 'https://bimuna-charya.github.io',
    live: '#contact',
  },
  {
    title: 'CCTV Status Management System',
    description: 'A FastAPI dashboard concept for checking CCTV status, uptime, and device information.',
    image: '/assets/projects/cctv-dashboard.svg',
    technologies: ['FastAPI', 'Python', 'Dashboard', 'Monitoring'],
    github: 'https://bimuna-charya.github.io',
    live: '#contact',
  },
  {
    title: 'Oracle + MongoDB Database Project',
    description: 'A database management project using Oracle SQL and MongoDB for relational and NoSQL data handling.',
    image: '/assets/projects/database-lab.svg',
    technologies: ['Oracle SQL', 'MongoDB', 'Data Modeling', 'Queries'],
    github: 'https://bimuna-charya.github.io',
    live: '#contact',
  },
];

export const journey = [
  {
    date: 'Foundation',
    title: 'Milestone International College',
    text: 'Completed Management (+2), building discipline, communication, and the base that led into IT studies.',
  },
  {
    date: 'Degree',
    title: 'University of Sunderland',
    text: 'Studied BSc.IT Computer System Engineering from Dec 2022 to Oct 2025 through ISMT College Nepal.',
  },
  {
    date: 'Exploration',
    title: 'Cloud and Cybersecurity',
    text: 'Spent more time with AWS, Azure, networking, security basics, Kali Linux, and infrastructure concepts.',
  },
  {
    date: 'Build Phase',
    title: 'Developer Journey',
    text: 'Built projects with React, FastAPI, WordPress, SQL, MongoDB, Python, and JavaScript to learn by doing.',
  },
  {
    date: 'Now',
    title: 'Professional Growth',
    text: 'Now focused on becoming a dependable IT professional who can learn quickly and support real systems.',
  },
];

export const certifications = [
  { title: 'Java Programming', type: 'Software development foundation', status: 'Certificate completed' },
  { title: 'WordPress Development', type: 'Themes, plugins, and website building', status: 'Certificate completed' },
  { title: 'Cybersecurity', type: 'Website vulnerability assessment and basic penetration testing', status: 'Learning area' },
  { title: 'Database', type: 'Oracle SQL and MongoDB', status: 'Project experience' },
  { title: 'Cloud Deployment', type: 'Azure and AWS practice', status: 'Project experience' },
];

export const terminalLines = [
  { command: 'npm run build', result: 'vite production bundle generated' },
  { command: 'check contact-links', result: 'social profiles connected' },
  { command: 'deploy --target netlify', result: 'deployment successful' },
  { command: 'portfolio status', result: 'portfolio online' },
];

export const contactEmail = 'bimunacharya9@gmail.com';
export const phoneNumber = '977-9843023149';
export const location = 'Godawari, Lalitpur, Nepal';
export const cvUrl = '/Bimun-Acharya-CV.pdf';
export const cvHtmlUrl = '/Bimun-Acharya-CV.html';
export const sidebarProfileImage = '/assets/profile-graduation.jpg';
export const heroProfileImage = '/assets/profile-hero.jpg';
export const profileImage = sidebarProfileImage;

export const socials = [
  {
    label: 'Gmail',
    icon: 'gmail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bimunacharya9@gmail.com',
    handle: 'bimunacharya9@gmail.com',
  },
  {
    label: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/itsmebimun',
    handle: 'itsmebimun',
  },
  {
    label: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/bimunacharya/',
    handle: '@bimunacharya',
  },
  {
    label: 'GitHub',
    icon: 'github',
    href: 'https://bimuna-charya.github.io',
    handle: 'bimuna-charya.github.io',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/bimun-acharya-254162381/',
    handle: 'bimun-acharya',
  },
];
