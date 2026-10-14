import { Link } from 'react-router-dom'
import { projects } from '../data.js'
import { QMSVisual, PhoneVisual, GovVisual, DayaVisual, ShopVisual, TVVisual } from './ProjectVisuals.jsx'

const tagColor = {
  green: { border:'rgba(200,240,96,0.3)', color:'#c8f060' },
  blue:  { border:'rgba(96,212,240,0.3)',  color:'#60d4f0' },
  pink:  { border:'rgba(240,96,160,0.3)',  color:'#f060a0' },
  '':    { border:'rgba(255,255,255,0.12)', color:'#7a7870' },
}
const featureAccent = { blue:'#60d4f0', pink:'#f060a0', ''  :'#c8f060' }

const visuals = { qms: QMSVisual, phone: PhoneVisual, gov: GovVisual, daya: DayaVisual, shop: ShopVisual, tv: TVVisual }

function Tag({ label, color }) {
  const s = tagColor[color] || tagColor['']
  return (
    <span className="font-mono uppercase" style={{ fontSize:'0.58rem', padding:'0.22rem 0.55rem', borderRadius:3, border:`1px solid ${s.border}`, color:s.color, letterSpacing:'0.04em' }}>
      {label}
    </span>
  )
}

function Feature({ text, color }) {
  return (
    <div className="flex items-center gap-2 font-mono" style={{ fontSize:'0.64rem', color:'#7a7870' }}>
      <span style={{ width:4, height:4, borderRadius:'50%', background:featureAccent[color], flexShrink:0 }} />
      {text}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const Visual = visuals[project.visual]
  const delay = `${0.05 + index * 0.07}s`

  if (project.featured) {
    return (
      <Link to={`/project/${project.slug}`} className="card-hover fade-up rounded-xl p-5" style={{ gridColumn:'span 2', display:'grid', gridTemplateColumns:'1fr 200px', gap:'1.5rem', alignItems:'start',
          background:'#1a1a1f', border:'1px solid rgba(200,240,96,0.2)', animationDelay: delay, textDecoration:'none', color:'inherit', cursor:'pointer' }}>
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase mb-3 rounded px-2 py-0.5"
            style={{ background:'rgba(200,240,96,0.12)', color:'#c8f060', border:'1px solid rgba(200,240,96,0.25)', letterSpacing:'0.06em' }}>
            <span className="badge-dot w-1.5 h-1.5 rounded-full" style={{ background:'#c8f060' }} />
            {project.label}
          </div>
          <div className="font-mono text-xs mb-2" style={{ color:'#7a7870', letterSpacing:'0.1em' }}>{project.id} · {project.category}</div>
          <div className="font-syne font-bold text-lg mb-2 leading-snug" style={{ letterSpacing:'-0.02em', color:'#f0eee8' }}>{project.title}</div>
          <p className="font-mono mb-4 leading-relaxed" style={{ fontSize:'0.68rem', color:'#7a7870' }}>{project.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((t,i) => <Tag key={i} {...t} />)}
          </div>
          <div className="flex flex-col gap-1.5">
            {project.features.map((f,i) => <Feature key={i} {...f} />)}
          </div>
          <span className="inline-flex items-center gap-1 font-mono text-xs uppercase mt-4"
            style={{ color:'#c8f060', letterSpacing:'0.04em', fontSize:'0.62rem' }}>
            View details <span>&rarr;</span>
          </span>
        </div>
        <div className="rounded-lg overflow-hidden flex items-center justify-center relative" style={{ height:160, background:'#131316', border:'1px solid rgba(255,255,255,0.07)' }}>
          <div className="card-visual w-full h-full flex items-center justify-center">{Visual && <Visual />}</div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/project/${project.slug}`} className="card-hover fade-up rounded-xl p-5" style={{ background:'#1a1a1f', border:'1px solid rgba(255,255,255,0.07)', animationDelay: delay, textDecoration:'none', color:'inherit', cursor:'pointer', display:'block' }}>
      <div className="rounded-lg overflow-hidden flex items-center justify-center relative mb-4" style={{ height:110, background:'#131316', border:'1px solid rgba(255,255,255,0.07)' }}>
        <div className="card-visual w-full h-full flex items-center justify-center">{Visual && <Visual />}</div>
      </div>
      <div className="font-mono text-xs mb-1.5" style={{ color:'#7a7870', letterSpacing:'0.1em' }}>{project.id} · {project.label}</div>
      <div className="font-syne font-bold text-base mb-2 leading-snug" style={{ letterSpacing:'-0.02em', color:'#f0eee8' }}>{project.title}</div>
      <p className="font-mono mb-3 leading-relaxed" style={{ fontSize:'0.68rem', color:'#7a7870' }}>{project.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((t,i) => <Tag key={i} {...t} />)}
      </div>
      <div className="flex flex-col gap-1.5">
        {project.features.map((f,i) => <Feature key={i} {...f} />)}
      </div>
      <span className="inline-flex items-center gap-1 font-mono text-xs uppercase mt-3"
        style={{ color:'#c8f060', letterSpacing:'0.04em', fontSize:'0.62rem' }}>
        View details <span>&rarr;</span>
      </span>
    </Link>
  )
}

export default function Projects() {
  return (
    <section id="work" className="fade-up mb-10" style={{ animationDelay:'0.5s' }}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-4" style={{ color:'#7a7870' }}>
        Selected work
        <span className="flex-1" style={{ height:1, background:'rgba(255,255,255,0.07)', display:'block' }} />
      </div>
      <div className="grid gap-4" style={{ gridTemplateColumns:'repeat(2,1fr)' }}>
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </section>
  )
}
