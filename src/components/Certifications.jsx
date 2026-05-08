import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader.jsx';
import TiltCard from './common/TiltCard.jsx';
import { certifications } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

const Graduation = Icons.graduation;

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Learning areas I am continuing to improve."
          description="These cards can be replaced with real certificates as each course, exam, or training milestone is completed."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              className="gsap-reveal"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.56, delay: index * 0.07 }}
            >
              <TiltCard className="shine-card glass-card h-full p-5">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-purple-300/20 bg-purple-300/10 text-purple-100 shadow-purple">
                  <Graduation />
                </div>
                <h3 className="text-xl font-black text-white">{certificate.title}</h3>
                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">{certificate.type}</p>
                <p className="mt-5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300">
                  {certificate.status}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
