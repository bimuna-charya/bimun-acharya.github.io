import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader.jsx';
import TiltCard from './common/TiltCard.jsx';
import { skillGroups } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I have used while studying, building, and experimenting."
          description="Some are stronger than others, but each one has helped me understand a different part of IT work."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = Icons[group.icon] || Icons.code;
            return (
              <motion.div
                key={group.category}
                className="gsap-reveal"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.62, delay: index * 0.07 }}
              >
                <TiltCard className="skill-card glass-card h-full p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-white">{group.category}</h3>
                    </div>
                    <div
                      className="grid h-14 w-14 place-items-center rounded-2xl border text-xl shadow-glow"
                      style={{
                        borderColor: `${group.accent}55`,
                        backgroundColor: `${group.accent}17`,
                        color: group.accent,
                      }}
                    >
                      <Icon />
                    </div>
                  </div>

                  <p className="mt-5 min-h-[56px] text-sm leading-7 text-slate-400">{group.summary}</p>

                  <div className="mt-6 space-y-5">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="font-mono text-xs text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${group.accent}, #a855f7)`,
                              boxShadow: `0 0 22px ${group.accent}66`,
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: 'easeOut', delay: index * 0.04 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
