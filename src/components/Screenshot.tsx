import Image from 'next/image';
import type { Screenshot as Shot } from '@/content/work';

// Ice-colored frame around a project screenshot, or a placeholder when none exists yet.
export default function Screenshot({ shot, label }: { shot?: Shot; label: string }) {
  return (
    <div className="rounded-2xl bg-ice p-3 sm:p-4">
      {shot ? (
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          className="h-auto w-full rounded-lg"
        />
      ) : (
        <div
          className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed border-muted/40 text-sm text-muted"
          role="img"
          aria-label={`Screenshot placeholder for ${label}`}
        >
          <span aria-hidden="true">[Screenshot]</span>
        </div>
      )}
    </div>
  );
}
