import { socials } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-center text-sm text-slate-500 sm:text-left">
          Designed & Developed by <span className="font-semibold text-cyan-100">Bimun Acharya</span>
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = Icons[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                className="interactive grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-100 hover:shadow-glow"
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
