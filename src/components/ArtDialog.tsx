'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { Artwork } from '@/content/art';

type Props = {
  artwork: Artwork | null;
  onClose: () => void;
};

// Native modal <dialog>: the browser makes the rest of the page inert (focus stays inside)
// and closes it on Esc. Focus goes back to the thumbnail that opened it.
export default function ArtDialog({ artwork, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (artwork && !dialog.open) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
    } else if (!artwork && dialog.open) {
      dialog.close();
    }
  }, [artwork]);

  const handleClose = () => {
    onClose();
    returnFocus.current?.focus();
  };

  return (
    <dialog
      ref={ref}
      onClose={handleClose}
      onClick={(e) => {
        // Click on the backdrop (the dialog element itself, outside its content) closes it.
        if (e.target === ref.current) ref.current?.close();
      }}
      aria-labelledby="art-dialog-title"
      className="m-auto max-h-[95vh] w-[min(960px,calc(100vw-32px))] max-w-none rounded-2xl bg-navy p-0 text-paper backdrop:bg-navy/90"
    >
      {artwork && (
        <div className="on-navy flex flex-col gap-4 p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 id="art-dialog-title" className="display text-3xl">
              {artwork.title} <span className="text-lg text-art-muted">{artwork.year}</span>
            </h2>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="btn-outline min-h-[44px] shrink-0 px-5 text-sm"
              autoFocus
            >
              Close
            </button>
          </div>
          <Image
            src={artwork.src}
            alt={artwork.alt}
            width={artwork.width}
            height={artwork.height}
            className="mx-auto h-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </dialog>
  );
}
