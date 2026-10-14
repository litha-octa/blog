'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Artwork } from '@/content/art';
import ArtDialog from './ArtDialog';

export default function ArtGrid({ items }: { items: Artwork[] }) {
  const [open, setOpen] = useState<Artwork | null>(null);

  return (
    <>
      <ul className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {items.map((art, i) => (
          <li key={art.src} className="mb-8 break-inside-avoid">
            <figure>
              <button
                type="button"
                onClick={() => setOpen(art)}
                className="block w-full overflow-hidden rounded-xl"
                aria-label={`View larger: ${art.title}, ${art.year}`}
              >
                <Image
                  src={art.src}
                  alt={art.alt}
                  width={art.width}
                  height={art.height}
                  className="h-auto w-full transition-opacity hover:opacity-90"
                  priority={i < 3}
                />
              </button>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm">
                <span className="font-medium text-paper">{art.title}</span>
                <span className="text-art-muted">{art.year}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <ArtDialog artwork={open} onClose={() => setOpen(null)} />
    </>
  );
}
