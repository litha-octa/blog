import Link from 'next/link';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SiteNav from '@/components/SiteNav';
import WorkRow from '@/components/WorkRow';
import { work } from '@/content/work';

const toolkit = [
  { heading: 'Build', items: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  {
    heading: 'State & data',
    items: ['Zustand', 'Redux', 'Context API', 'REST APIs', 'Axios', 'Pusher (real-time)'],
  },
  { heading: 'Styling & design', items: ['Tailwind CSS', 'Responsive layouts', 'Figma'] },
  {
    heading: 'Workflow',
    items: ['Git', 'GitLab CI/CD', 'Jira', 'Postman', 'Agile / Scrum', 'Drupal', 'Pimcore'],
  },
];

function SectionHead({ id, title, label }: { id: string; title: string; label: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-rule pb-6">
      <h2 id={id} className="section-heading">
        {title}
      </h2>
      <p className="text-sm font-medium text-muted">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="on-navy bg-navy">
        <SiteNav />
        <Hero />
      </header>

      <main id="main">
        <section id="work" aria-labelledby="work-heading" className="container-page scroll-mt-6 py-20 md:py-28">
          <SectionHead id="work-heading" title="Selected work" label="2022 — now" />
          <ol className="mt-4">
            {work.map((item, i) => (
              <WorkRow key={item.slug} item={item} index={i} />
            ))}
          </ol>
        </section>

        <section aria-labelledby="toolkit-heading" className="container-page pb-20 md:pb-28">
          <SectionHead id="toolkit-heading" title="Toolkit" label="What I reach for" />
          <div className="mt-10 grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {toolkit.map((group) => (
              <div key={group.heading}>
                <h3 className="display text-2xl italic text-brand">{group.heading}</h3>
                <ul className="mt-4 space-y-1">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="beyond-heading" className="container-page pb-20 md:pb-28">
          <h2 id="beyond-heading" className="sr-only">
            Beyond client work
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/projects/" className="group flex flex-col rounded-3xl bg-ice p-8 md:p-10">
              <span className="eyebrow text-brand">Projects</span>
              <span className="display mt-4 text-3xl leading-tight">
                Side projects, experiments and small apps I built for fun.
              </span>
              <span className="mt-8 font-bold text-brand group-hover:underline group-hover:underline-offset-4">
                Browse all projects <span aria-hidden="true">→</span>
              </span>
            </Link>
            <Link href="/art/" className="on-navy group flex flex-col rounded-3xl bg-navy p-8 text-paper md:p-10">
              <span className="eyebrow text-cyan">Art</span>
              <span className="display mt-4 text-3xl leading-tight">
                Digital illustrations I draw when I&apos;m not writing code.
              </span>
              <span className="mt-8 font-bold text-marigold group-hover:underline group-hover:underline-offset-4">
                See the gallery <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
