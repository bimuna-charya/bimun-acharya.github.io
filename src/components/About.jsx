import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader.jsx';
import TiltCard from './common/TiltCard.jsx';
import { stats } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

const Graduation = Icons.graduation;
const Cloud = Icons.cloud;
const Security = Icons.security;
const Code = Icons.code;

const highlights = [
  {
    icon: Graduation,
    title: 'BSc IT Graduate',
    text: 'Completed a Bachelor degree in BSc IT from the University of Sunderland through ISMT College Nepal.',
  },
  {
    icon: Cloud,
    title: 'Cloud Mindset',
    text: 'Exploring AWS, Azure, deployment workflows, systems administration, and infrastructure fundamentals.',
  },
  {
    icon: Security,
    title: 'Security Curious',
    text: 'Learning cybersecurity fundamentals, Kali Linux, networking concepts, secure registration flows, and defensive thinking.',
  },
  {
    icon: Code,
    title: 'Builder Energy',
    text: 'Enjoys creating real projects with React, Python, FastAPI, WordPress, SQL, MongoDB, and JavaScript.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="I am still learning, but I like learning by building things."
          description="My background is in IT, and my interest has slowly grown toward cloud, cybersecurity, databases, networking, and web development."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="gsap-reveal glass-card p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-9 text-slate-300">
              I completed my Bachelor degree in BSc IT from the University of Sunderland
              through ISMT College Nepal, with a focus on Computer System Engineering.
              During that time, I became more interested in how real systems are designed,
              deployed, protected, and maintained.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-300">
              I enjoy learning through small but useful projects. I have worked with AWS,
              Azure, Oracle SQL, MongoDB, HTML, CSS, JavaScript, React, WordPress, Java,
              Python, FastAPI, Windows, Linux basics, and cybersecurity fundamentals.
            </p>
            <div className="mt-7 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4 font-mono text-sm text-cyan-100">
              current goal: become better at building and supporting clean, secure, useful systems.
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="gsap-reveal"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <TiltCard className="glass-card h-full p-5">
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-glow">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="gsap-reveal glass-card p-5"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <p className="bg-gradient-to-r from-cyan-200 to-purple-300 bg-clip-text text-4xl font-black text-transparent">
                {stat.value}
              </p>
              <h3 className="mt-3 font-bold text-white">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
