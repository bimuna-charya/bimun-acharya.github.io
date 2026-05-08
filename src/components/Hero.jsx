import { motion } from 'framer-motion';
import { cvUrl, profileImage, roles, socials } from '../data/portfolio';
import { useTypingText } from '../hooks/useTypingText';
import { Icons } from '../utils/icons.jsx';

const Download = Icons.download;
const Rocket = Icons.rocket;
const Terminal = Icons.terminal;

export default function Hero() {
  const typedRole = useTypingText(roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10">
          <motion.div
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100 shadow-glow backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.8)]" />
            Godawari, Lalitpur based IT graduate
          </motion.div>

          <motion.h1
            className="max-w-5xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          >
            Bimun
            <span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Acharya
            </span>
          </motion.h1>

          <motion.div
            className="mt-7 min-h-[44px] font-mono text-lg font-semibold text-cyan-100 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
          >
            <span className="text-slate-500">role:</span>{' '}
            <span className="text-white">{typedRole}</span>
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-cyan-300" />
          </motion.div>

          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
          >
            I like working close to the practical side of technology: fixing problems,
            building web projects, learning cloud tools, and understanding how systems stay secure.
            This portfolio is a small picture of that journey so far.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            <a href="#projects" className="btn-primary interactive">
              <Rocket />
              View Projects
            </a>
            <a href={cvUrl} download="Bimun-Acharya-CV.pdf" className="btn-secondary interactive">
              <Download />
              Download CV
            </a>
            <a href="#contact" className="btn-ghost interactive">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
          >
            {socials.map((social) => {
              const Icon = Icons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100 hover:shadow-glow"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px] lg:mr-0"
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: 'easeOut' }}
        >
          <div className="profile-shell rotating-border">
            <img
              src={profileImage}
              alt="Bimun Acharya at Tserko Ri in the Himalayas"
              className="profile-photo relative z-10 h-full w-full rounded-[1.1rem] object-cover"
              fetchPriority="high"
              onError={(event) => {
                event.currentTarget.src = '/assets/holographic-profile.svg';
              }}
            />
          </div>

          <motion.div
            className="hero-terminal glass-card absolute -bottom-8 left-0 w-[min(92vw,330px)] p-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="mb-3 flex items-center gap-2 text-cyan-100">
              <Terminal />
              <span className="font-mono text-xs uppercase tracking-[0.24em]">deploy log</span>
            </div>
            <div className="space-y-2 font-mono text-xs text-slate-300">
              <p><span className="text-purple-300">$</span> npm run build</p>
              <p className="text-emerald-300">deployment successful</p>
              <p className="text-cyan-200">portfolio online</p>
            </div>
          </motion.div>

          <motion.div
            className="glass-card absolute -right-2 top-12 hidden w-48 p-4 sm:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">
              focus stack
            </p>
            <div className="mt-3 space-y-2 text-sm font-semibold text-white">
              <p>Cloud</p>
              <p>Cybersecurity</p>
              <p>Full Stack</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-xs uppercase tracking-[0.28em] text-slate-500 sm:block">
        scroll to explore
      </div>
    </section>
  );
}
