import { socials } from '../data/portfolio';
import { Icons } from '../utils/icons.jsx';

export default function FloatingSocialSidebar() {
  return (
    <aside className="floating-social hidden md:flex" aria-label="Social links">
      {socials.map((social) => {
        const Icon = Icons[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="interactive floating-social-link"
            aria-label={social.label}
            title={social.label}
          >
            <Icon />
          </a>
        );
      })}
    </aside>
  );
}
