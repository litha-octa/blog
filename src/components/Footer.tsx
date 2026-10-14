import { contactLinks } from '@/content/site';

export default function Footer({ onNavy = false }: { onNavy?: boolean }) {
  const isExternal = (href: string) => href.startsWith('http');
  return (
    <footer
      id="contact"
      className={onNavy ? 'on-navy border-t border-navy-line text-paper' : 'on-navy bg-navy text-paper'}
    >
      <div className="container-page flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <h2 className="display" style={{ fontSize: 'clamp(3rem, 5vw + 1rem, 4.5rem)', lineHeight: 1 }}>
          Let&apos;s talk.
        </h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lg">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-link text-ice"
                {...(isExternal(link.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
                {isExternal(link.href) && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
