import { motion } from 'framer-motion';
import { cvUrl, heroProfileImage, sidebarProfileImage, roles, socials } from '../data/portfolio';
import { useTypingText } from '../hooks/useTypingText';
import { Icons } from '../utils/icons.jsx';

const Download = Icons.download;
const Rocket = Icons.rocket;

export default function Hero() {
  const typedRole = useTypingText(roles);

  return (
    <section id="home" className="classic-hero">
      <div className="classic-hero-overlay" />
      <div className="classic-hero-layout">
        <div className="classic-hero-content">
          <motion.p
            className="classic-hero-kicker"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            IT Graduate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          >
            Bimun Acharya
          </motion.h1>

          <motion.div
            className="classic-typed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            I'm <span>{typedRole}</span>
            <i />
          </motion.div>

          <motion.p
            className="classic-hero-text"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
          >
            I build practical web projects, learn cloud tools, explore cybersecurity,
            and enjoy solving real IT problems step by step.
          </motion.p>

          <motion.div
            className="classic-hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.64 }}
          >
            <a href="#projects" className="btn-primary interactive">
              <Rocket />
              View Projects
            </a>
            <a href={cvUrl} download="Bimun-Acharya-CV.pdf" className="btn-secondary interactive">
              <Download />
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="classic-hero-socials"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.74 }}
          >
            {socials.map((social) => {
              const Icon = Icons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive"
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
          className="classic-hero-photo-card"
          initial={{ opacity: 0, x: 28, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.42, ease: 'easeOut' }}
        >
          <img
            src={heroProfileImage}
            alt="Bimun Acharya"
            data-fallback="hero"
            onError={(event) => {
              const image = event.currentTarget;

              if (image.dataset.fallback === 'hero') {
                image.dataset.fallback = 'sidebar';
                image.src = sidebarProfileImage;
                return;
              }

              image.dataset.fallback = 'placeholder';
              image.src = '/assets/holographic-profile.svg';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
