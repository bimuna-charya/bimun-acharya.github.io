import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader.jsx';
import { contactEmail, cvUrl, location, phoneNumber, socials } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

const Download = Icons.download;
const PaperPlane = Icons.paperPlane;
const Location = Icons.location;

const contactMethods = [
  {
    label: location,
    value: 'Location',
    href: 'https://www.google.com/maps/search/?api=1&query=Godawari%2C%20Lalitpur%2C%20Nepal',
    icon: Location,
  },
  {
    label: phoneNumber,
    value: 'Phone',
    href: 'tel:+9779843023149',
    icon: Icons.phone,
  },
  {
    label: 'Download Bimun Acharya CV',
    value: 'Resume',
    href: cvUrl,
    icon: Download,
    download: true,
  },
  ...socials.map((social) => ({
    label: social.handle,
    value: social.label,
    href: social.href,
    icon: Icons[social.icon],
  })),
];

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    const fallbackEmail = import.meta.env.VITE_CONTACT_EMAIL || contactEmail;

    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });

        if (!response.ok) throw new Error('Formspree request failed');
      } else if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, form, { publicKey });
      } else {
        const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
        window.open(`mailto:${fallbackEmail}?subject=${subject}&body=${body}`, '_blank', 'noreferrer');
      }

      setStatus('sent');
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section-pad pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Want to talk about IT, web projects, cloud, or security?"
          description="I am based in Godawari, Lalitpur. You can download my CV, call me, or reach me through Gmail and social profiles below."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const content = (
                <motion.div
                  className="gsap-reveal glass-card flex items-center gap-4 p-5 transition hover:border-cyan-300/30 hover:shadow-glow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{method.value}</p>
                    <p className="font-semibold text-white">{method.label}</p>
                  </div>
                </motion.div>
              );

              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="interactive block"
                  target={method.download ? undefined : '_blank'}
                  rel={method.download ? undefined : 'noreferrer'}
                  download={method.download ? 'Bimun-Acharya-CV.pdf' : undefined}
                >
                  {content}
                </a>
              );
            })}
          </div>

          <motion.form
            className="gsap-reveal glass-card p-5 sm:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                <span>Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="field-label">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="field-label mt-5">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                required
                rows="7"
                placeholder="Tell me about the project, role, or technical challenge..."
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button className="btn-primary interactive" type="submit" disabled={status === 'sending'}>
                <PaperPlane />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              <p className="min-h-[24px] text-sm text-slate-400">
                {status === 'sent' ? 'Thanks, your message is ready.' : null}
                {status === 'error' ? 'Something went wrong. Please try email directly.' : null}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
