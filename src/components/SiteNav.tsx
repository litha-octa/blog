import Link from 'next/link';
import { navLinks, type NavKey } from '@/content/site';

export default function SiteNav({ active }: { active?: NavKey }) {
  return (
    <nav aria-label="Main" className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6">
      <Link href="/" className="display text-3xl leading-none text-paper">
        Litha<span className="text-cyan">.</span>
      </Link>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-base font-medium sm:gap-x-8">
        {navLinks.map((link) => {
          const isActive = link.key === active;
          return (
            <li key={link.key}>
              <Link
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-block py-2 text-ice underline-offset-8 hover:underline ${
                  isActive ? 'underline decoration-cyan decoration-2' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
