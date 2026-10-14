import type { SideProject } from '@/content/projects';

export default function ArchiveRow({ project }: { project: SideProject }) {
  const links = [
    { label: 'Code', href: project.code },
    { label: 'Live', href: project.live },
  ].filter((l) => l.href);

  return (
    <li className="grid gap-3 border-t border-rule py-8 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,2fr)_120px] md:gap-8">
      <p className="text-sm font-medium text-muted md:pt-2">{project.year}</p>
      <div>
        <h2 className="display text-3xl leading-tight">{project.name}</h2>
        <span className="mt-2 inline-block rounded-full bg-ice px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-navy">
          {project.type}
        </span>
      </div>
      <div>
        <p>{project.description}</p>
        <p className="mt-2 text-sm font-medium text-muted">{project.stack}</p>
      </div>
      <ul className="flex gap-5 md:flex-col md:gap-1 md:pt-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-link font-bold text-brand">
              {l.label} <span aria-hidden="true">↗</span>
              <span className="sr-only"> for {project.name} (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
