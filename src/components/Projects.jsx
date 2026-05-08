import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader.jsx';
import TiltCard from './common/TiltCard.jsx';
import { projects } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

const Github = Icons.github;
const External = Icons.external;

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Projects that helped me practice real technical thinking."
          description="These are the kinds of builds where I learned by testing ideas, breaking things, fixing them, and improving the result."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="gsap-reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <TiltCard className="project-card glass-card h-full overflow-hidden">
                <div className="project-media">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      className="mini-button interactive"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github />
                      GitHub
                    </a>
                    <a
                      className="mini-button interactive"
                      href={project.live}
                      target={project.live.startsWith('http') ? '_blank' : undefined}
                      rel={project.live.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <External />
                      Live Demo
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
