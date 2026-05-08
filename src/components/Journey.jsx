import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader.jsx';
import { journey } from '../data/portfolio';

export default function Journey() {
  return (
    <section id="journey" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Journey"
          title="A learning path from IT foundations to cloud, security, and professional systems."
          description="The timeline captures education, exploration, project building, and current professional growth."
        />

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-cyan-300 via-purple-400 to-transparent md:block" />
          <div className="space-y-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                className="gsap-reveal relative grid gap-4 md:grid-cols-[120px_1fr]"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.62, delay: index * 0.08 }}
              >
                <div className="hidden md:block">
                  <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full border border-cyan-300/40 bg-ink shadow-glow">
                    <span className="h-2 w-2 rounded-full bg-cyan-200" />
                  </span>
                </div>
                <div className="glass-card p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/70">{item.date}</p>
                  <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
