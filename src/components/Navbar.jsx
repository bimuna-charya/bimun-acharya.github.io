import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

const Bars = Icons.bars;
const Times = Icons.times;

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleNavClick(id) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink/72 shadow-card backdrop-blur-2xl' : 'bg-transparent'
      }`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          className="interactive group flex items-center gap-3"
          onClick={() => handleNavClick('home')}
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-black text-cyan-100 shadow-glow">
            BA
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-bold text-white">Bimun Acharya</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Godawari, Lalitpur
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`interactive relative rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeSection === item.id ? (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-cyan-300/10 shadow-glow"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <button
          className="interactive grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <Times /> : <Bars />}
        </button>
      </nav>

      {open ? (
        <motion.div
          className="mx-4 mb-4 rounded-2xl border border-white/10 bg-night/95 p-2 shadow-card backdrop-blur-2xl lg:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                activeSection === item.id ? 'bg-cyan-300/10 text-cyan-100' : 'text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      ) : null}
    </motion.header>
  );
}
