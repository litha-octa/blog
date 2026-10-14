import type { Metadata } from 'next';
import ArtGrid from '@/components/ArtGrid';
import Footer from '@/components/Footer';
import SiteNav from '@/components/SiteNav';
import { art, artIntroStyle } from '@/content/art';
import { instagramUrl } from '@/content/site';

export const metadata: Metadata = {
  title: 'Art',
  description: 'Digital illustrations by Litha Octa Delistia.',
};

export default function ArtPage() {
  return (
    <div className="on-navy min-h-screen bg-navy text-paper">
      <header>
        <SiteNav active="art" />
        <div className="container-page pb-14 pt-10 md:pb-20 md:pt-16">
          <h1 className="display" style={{ fontSize: 'clamp(3rem, 6vw + 1rem, 6rem)', lineHeight: 0.95 }}>
            Art<em className="text-cyan">, after hours.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ice md:text-[19px]">
            Digital illustrations I draw when I&apos;m not writing code. {artIntroStyle}
          </p>
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-8">
              More on Instagram <span aria-hidden="true">&nbsp;↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </header>

      <main id="main" className="container-page pb-16 md:pb-24">
        <ArtGrid items={art} />
      </main>

      <Footer onNavy />
    </div>
  );
}
