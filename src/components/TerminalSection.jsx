import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader.jsx';
import { terminalLines } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

const Terminal = Icons.terminal;

export default function TerminalSection() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="System Check"
          title="A small build log for the journey."
          description="Because every project feels better when it finally runs, builds, and goes online."
          align="center"
        />

        <motion.div
          className="gsap-reveal terminal-window mx-auto mt-12 max-w-4xl overflow-hidden border border-cyan-300/20 bg-slate-950/80 shadow-card backdrop-blur-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="font-mono text-xs text-slate-400">bimun@portfolio:~</span>
            </div>
            <Terminal className="text-cyan-200" />
          </div>
          <div className="space-y-5 p-5 font-mono text-sm sm:p-8">
            {terminalLines.map((line, index) => (
              <motion.div
                key={line.command}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.16 }}
              >
                <p className="text-slate-300"><span className="text-purple-300">$</span> {line.command}</p>
                <p className="mt-1 text-cyan-200">:: {line.result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
