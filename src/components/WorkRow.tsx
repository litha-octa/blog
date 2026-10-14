import Link from 'next/link';
import type { WorkItem } from '@/content/work';
import Screenshot from './Screenshot';

export default function WorkRow({ item, index }: { item: WorkItem; index: number }) {
  const number = String(index + 1).padStart(2, '0');
  return (
    <li className="border-t border-rule py-12 first:border-t-0 first:pt-4 md:py-16">
      <Link
        href={`/work/${item.slug}/`}
        className="group grid items-center gap-8 rounded-2xl md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-12"
      >
        <Screenshot shot={item.screenshots[0]} label={item.name} />
        <div>
          <p className="display text-2xl italic text-brand">No. {number}</p>
          <h3 className="display mt-2 text-4xl leading-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8 md:text-[44px]">
            {item.name}
          </h3>
          <p className="mt-4 text-lg">{item.description}</p>
          <p className="mt-4 text-sm font-medium text-muted">{item.stack.join(' · ')}</p>
          <p className="mt-6 font-bold text-brand">
            Read the case study <span aria-hidden="true">→</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
