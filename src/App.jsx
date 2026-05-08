import { lazy, Suspense, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundFX from './components/BackgroundFX.jsx';
import BackToTop from './components/BackToTop.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import FloatingSocialSidebar from './components/FloatingSocialSidebar.jsx';
import Hero from './components/Hero.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import { navItems } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import { useGsapReveal } from './hooks/useGsapReveal';

const SECTION_IDS = navItems.map((item) => item.id);

const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Journey = lazy(() => import('./components/Journey.jsx'));
const Certifications = lazy(() => import('./components/Certifications.jsx'));
const TerminalSection = lazy(() => import('./components/TerminalSection.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

function SectionFallback() {
  return (
    <div className="mx-auto flex min-h-[260px] max-w-7xl items-center justify-center px-4">
      <div className="h-2 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-shimmer rounded-full bg-cyan-300/70" />
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1450);
    return () => clearTimeout(timer);
  }, []);

  useGsapReveal(!loading);

  return (
    <>
      <BackgroundFX />
      <CursorGlow />
      <ScrollProgress />
      <FloatingSocialSidebar />
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
      <Navbar activeSection={activeSection} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Certifications />
          <TerminalSection />
          <Contact />
          <Footer />
        </Suspense>
      </motion.main>
      <BackToTop />
    </>
  );
}
