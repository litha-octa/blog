import { site } from '@/content/site';

export default function Hero() {
  return (
    <div className="container-page grid items-end gap-12 pb-20 pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,340px)] md:pb-28 md:pt-16">
      <div>
        <p className="eyebrow text-cyan">Frontend developer · Jakarta</p>
        <h1
          className="display mt-6 text-paper"
          style={{ fontSize: 'clamp(3rem, 6vw + 1rem, 6rem)', lineHeight: 0.95 }}
        >
          I build interfaces people <em className="text-cyan">actually use</em> every day.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ice md:text-[19px]">
          From hospital queue kiosks to government portals. React, Next.js, React Native.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="btn-primary">
            See my work
          </a>
          <a href={site.cv} className="btn-outline" download>
            Download CV
          </a>
        </div>
      </div>

      {/* Arch-shaped slot for Litha's own illustration. Replace the inner placeholder with an <Image>. */}
      <div
        className="mx-auto flex aspect-[4/5] w-full max-w-[340px] items-center justify-center border-2 border-dashed border-ice/70 p-8 text-center md:mx-0"
        style={{ borderRadius: '180px 180px 24px 24px' }}
        role="img"
        aria-label="Placeholder for Litha's illustration"
      >
        <span className="text-sm text-ice" aria-hidden="true">
          [Illustration]
        </span>
      </div>
    </div>
  );
}
