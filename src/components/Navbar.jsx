import { useState } from 'react';
import { motion } from 'framer-motion';
import { cvUrl, navItems, profileImage, sidebarImage, socials } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

const Bars = Icons.bars;
const Times = Icons.times;
const Download = Icons.download;
const avatarSources = [
  sidebarImage,
  '/assets/profile-graduation.jpeg',
  '/assets/profile-graduation.png',
  '/assets/profile-graduation.webp',
  profileImage,
  '/assets/profile-bimun.jpeg',
  '/assets/profile-bimun.png',
  '/assets/holographic-profile.svg',
];

const navIcons = {
  home: Icons.rocket,
  about: Icons.graduation,
  skills: Icons.tools,
  projects: Icons.code,
  journey: Icons.network,
  certifications: Icons.database,
  contact: Icons.email,
};

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [avatarIndex, setAvatarIndex] = useState(0);

  function handleNavClick(id) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <button
        className="classic-menu-button interactive lg:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
      >
        {open ? <Times /> : <Bars />}
      </button>

      <motion.aside
        className={`classic-sidebar ${open ? 'is-open' : ''}`}
        initial={{ x: -320, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className="classic-sidebar-inner">
          <button
            className="interactive mx-auto block"
            onClick={() => handleNavClick('home')}
            aria-label="Go to home"
          >
            <img
              src={avatarSources[avatarIndex]}
              alt="Bimun Acharya"
              className="classic-avatar"
              onError={() => {
                setAvatarIndex((index) => Math.min(index + 1, avatarSources.length - 1));
              }}
            />
          </button>

          <h1 className="classic-sidebar-name mt-4 text-center text-2xl font-black">Bimun Acharya</h1>
          <p className="classic-sidebar-role mt-2 text-center text-sm">IT Graduate</p>

          <div className="mt-5 flex justify-center gap-2">
            {socials.map((social) => {
              const Icon = Icons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="classic-social interactive"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <a href={cvUrl} download="Bimun-Acharya-CV.pdf" className="classic-cv-button interactive">
            <Download />
            Download CV
          </a>

          <nav className="mt-8 space-y-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const Icon = navIcons[item.id] || Icons.code;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`classic-nav-link interactive ${
                    activeSection === item.id ? 'is-active' : ''
                  }`}
                >
                  <Icon />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </motion.aside>

      {open ? <button className="classic-backdrop lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu" /> : null}
    </>
  );
}
