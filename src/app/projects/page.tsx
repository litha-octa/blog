import type { Metadata } from 'next';
import ArchiveRow from '@/components/ArchiveRow';
import Footer from '@/components/Footer';
import SiteNav from '@/components/SiteNav';
import { projects } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Side projects, experiments and small apps by Litha Octa Delistia.',
};

export default function ProjectsPage() {
  return (
    <>
      <header className="on-navy bg-navy">
        <SiteNav active="projects" />
        <div className="container-page pb-16 pt-10 md:pb-24 md:pt-16">
          <h1 className="display text-paper" style={{ fontSize: 'clamp(3rem, 6vw + 1rem, 6rem)', lineHeight: 0.95 }}>
            Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ice md:text-[19px]">
            Side projects, experiments and small apps. Some are finished, some are still in progress, all of them
            taught me something.
          </p>
        </div>
      </header>

      <main id="main" className="container-page py-16 md:py-24">
        <div
          className="hidden gap-8 pb-4 text-sm font-bold uppercase tracking-wider text-muted md:grid md:grid-cols-[80px_minmax(0,1fr)_minmax(0,2fr)_120px]"
          aria-hidden="true"
        >
          <span>Year</span>
          <span>Project</span>
          <span>What it does</span>
          <span>Links</span>
        </div>
        <ul className="border-b border-rule">
          {projects.map((p) => (
            <ArchiveRow key={p.name} project={p} />
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}
