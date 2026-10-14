import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Screenshot from '@/components/Screenshot';
import SiteNav from '@/components/SiteNav';
import { getWork, work } from '@/content/work';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const item = getWork((await params).slug);
  if (!item) return {};
  return { title: item.name, description: item.description };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-rule py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
      <h2 className="section-heading">{title}</h2>
      <div className="space-y-4 text-lg">{children}</div>
    </section>
  );
}

export default async function CaseStudy({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  const index = work.indexOf(item);
  const next = work[(index + 1) % work.length];

  return (
    <>
      <header className="on-navy bg-navy">
        <SiteNav active="work" />
        <div className="container-page pb-16 pt-10 md:pb-24 md:pt-16">
          <p className="display text-2xl italic text-cyan">No. {String(index + 1).padStart(2, '0')}</p>
          <h1
            className="display mt-4 text-paper"
            style={{ fontSize: 'clamp(2.75rem, 5vw + 1rem, 5rem)', lineHeight: 0.95 }}
          >
            {item.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-ice">{item.description}</p>
          <dl className="mt-10 grid gap-6 border-t border-navy-line pt-6 text-sm sm:grid-cols-3">
            {[
              ['Context', item.context],
              ['Role', item.role],
              ['Stack', item.stack.join(' · ')],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="eyebrow text-cyan">{term}</dt>
                <dd className="mt-2 text-base text-paper">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main id="main" className="container-page py-16 md:py-24">
        <Screenshot shot={item.screenshots[0]} label={item.name} />

        <div className="mt-16">
          <Section title="The problem">
            <p>{item.problem}</p>
          </Section>

          <Section title="What I built">
            {item.builtIntro && <p>{item.builtIntro}</p>}
            <ul className="list-disc space-y-2 pl-6 marker:text-brand">
              {item.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Section>

          {item.interesting.length > 0 && (
            <Section title="The interesting parts">
              {item.interesting.map((part) => (
                <p key={part.title}>
                  <em className="display text-2xl text-brand">{part.title}</em> {part.body}
                </p>
              ))}
            </Section>
          )}

          {item.screenshots.length > 1 && (
            <div className="grid gap-6 border-t border-rule py-12 md:grid-cols-2">
              {item.screenshots.slice(1).map((shot) => (
                <Screenshot key={shot.src} shot={shot} label={item.name} />
              ))}
            </div>
          )}

          <Section title="What I learned">
            <p>{item.learned}</p>
          </Section>
        </div>

        <nav aria-label="Case studies" className="flex flex-wrap items-center justify-between gap-6 border-t border-rule pt-10">
          <Link href="/#work" className="text-link font-bold text-brand">
            <span aria-hidden="true">← </span>All selected work
          </Link>
          <Link href={`/work/${next.slug}/`} className="text-link font-bold text-brand">
            Next: {next.name} <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </main>

      <Footer />
    </>
  );
}
