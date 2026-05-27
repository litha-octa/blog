import { useParams, Link } from 'react-router-dom'
import { projects } from '../data.js'
import { QMSVisual, PhoneVisual, GovVisual, DayaVisual, ShopVisual, TVVisual } from '../components/ProjectVisuals.jsx'
import { useEffect, useRef, useState } from 'react'

const visuals = { qms: QMSVisual, phone: PhoneVisual, gov: GovVisual, daya: DayaVisual, shop: ShopVisual, tv: TVVisual }

const tagColor = {
  green: { border:'rgba(200,240,96,0.3)', color:'#c8f060' },
  blue:  { border:'rgba(96,212,240,0.3)',  color:'#60d4f0' },
  pink:  { border:'rgba(240,96,160,0.3)',  color:'#f060a0' },
  '':    { border:'rgba(255,255,255,0.12)', color:'#7a7870' },
}

function useScrollReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function RevealSection({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    }}>
      {children}
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  if (!project) {
    return (
      <div style={{ position:'relative', zIndex:1, maxWidth:1100, margin:'0 auto', padding:'2rem 1.5rem 4rem' }}>
        <div className="font-mono text-center" style={{ color:'#7a7870', padding:'4rem 0' }}>
          <div className="text-2xl mb-4" style={{ color:'#f0eee8' }}>Project not found</div>
          <Link to="/" style={{ color:'#c8f060', textDecoration:'none' }}>Back to home</Link>
        </div>
      </div>
    )
  }

  const Visual = visuals[project.visual]
  const d = project.details

  return (
    <div style={{ position:'relative', zIndex:1, maxWidth:1100, margin:'0 auto', padding:'2rem 1.5rem 4rem' }}>
      {/* Back button */}
      <div className="fade-up mb-8" style={{ animationDelay:'0.05s' }}>
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase transition-all duration-200"
          style={{ color:'#7a7870', textDecoration:'none', letterSpacing:'0.04em' }}
          onMouseEnter={e => e.currentTarget.style.color='#c8f060'}
          onMouseLeave={e => e.currentTarget.style.color='#7a7870'}>
          <span style={{ fontSize:'0.9rem' }}>&larr;</span> Back to projects
        </Link>
      </div>

      {/* Header */}
      <div className="fade-up mb-6" style={{ animationDelay:'0.1s' }}>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase" style={{ color:'#7a7870', letterSpacing:'0.1em' }}>
            {project.id} · {project.label}
          </span>
          {project.badge && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase rounded px-2 py-0.5"
              style={{ background:'rgba(200,240,96,0.12)', color:'#c8f060', border:'1px solid rgba(200,240,96,0.25)', letterSpacing:'0.06em', fontSize:'0.6rem' }}>
              <span className="badge-dot w-1.5 h-1.5 rounded-full" style={{ background:'#c8f060' }} />
              Latest
            </span>
          )}
        </div>
        <h1 className="font-syne font-bold text-3xl mb-3" style={{ letterSpacing:'-0.02em', color:'#f0eee8', lineHeight:1.2 }}>
          {project.title}
        </h1>
        <p className="font-mono leading-relaxed" style={{ fontSize:'0.75rem', color:'#7a7870', maxWidth:700 }}>
          {project.desc}
        </p>
      </div>

      {/* Meta cards */}
      <div className="fade-up grid gap-3 mb-8" style={{ animationDelay:'0.15s', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))' }}>
        {[
          { label: 'Role', value: d.role, color: '#c8f060' },
          { label: 'Duration', value: d.duration, color: '#60d4f0' },
          { label: 'Team', value: d.team, color: '#f060a0' },
        ].map((m, i) => (
          <div key={i} className="rounded-lg p-4" style={{ background:'#1a1a1f', border:'1px solid rgba(255,255,255,0.07)' }}>
            <div className="font-mono text-xs uppercase mb-1" style={{ color:'#7a7870', letterSpacing:'0.08em', fontSize:'0.6rem' }}>{m.label}</div>
            <div className="font-mono text-sm font-medium" style={{ color: m.color }}>{m.value}</div>
          </div>
        ))}
      </div>

      {/* Visual */}
      <RevealSection className="rounded-xl overflow-hidden mb-8 flex items-center justify-center relative" delay={0.1}
        style={{ height: 220, background:'#1a1a1f', border:'1px solid rgba(255,255,255,0.07)' }}>
        {Visual && <Visual />}
      </RevealSection>

      {/* Overview */}
      <RevealSection className="mb-8" delay={0.1}>
        <h2 className="font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-3" style={{ color:'#7a7870' }}>
          Overview
          <span className="flex-1" style={{ height:1, background:'rgba(255,255,255,0.07)' }} />
        </h2>
        <p className="font-mono leading-relaxed" style={{ fontSize:'0.72rem', color:'#a0a090', lineHeight:1.8 }}>
          {d.overview}
        </p>
      </RevealSection>

      {/* Key Highlights */}
      <RevealSection className="mb-8" delay={0.1}>
        <h2 className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color:'#7a7870' }}>
          Key Highlights
          <span className="flex-1" style={{ height:1, background:'rgba(255,255,255,0.07)' }} />
        </h2>
        <div className="flex flex-col gap-3">
          {d.highlights.map((h, i) => (
            <div key={i} className="flex gap-3 items-start rounded-lg p-4 highlight-card"
              style={{ background:'#1a1a1f', border:'1px solid rgba(255,255,255,0.07)', transition:'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor='rgba(200,240,96,0.25)'
                e.currentTarget.style.transform='translateX(6px)'
                e.currentTarget.style.boxShadow='0 4px 20px rgba(200,240,96,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'
                e.currentTarget.style.transform='translateX(0)'
                e.currentTarget.style.boxShadow='none'
              }}>
              <span className="font-mono text-xs font-bold mt-0.5" style={{ color:'#c8f060', minWidth:20 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono leading-relaxed" style={{ fontSize:'0.7rem', color:'#a0a090' }}>
                {h}
              </span>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Tech Stack */}
      <RevealSection className="mb-8" delay={0.1}>
        <h2 className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color:'#7a7870' }}>
          Tech Stack
          <span className="flex-1" style={{ height:1, background:'rgba(255,255,255,0.07)' }} />
        </h2>
        <div className="flex flex-wrap gap-2">
          {d.stack.map((s, i) => {
            const colors = ['#c8f060', '#60d4f0', '#f060a0']
            const c = colors[i % colors.length]
            return (
              <span key={i} className="font-mono uppercase stack-tag"
                style={{
                  fontSize:'0.62rem', padding:'0.35rem 0.75rem', borderRadius:5,
                  border:`1px solid ${c}33`, color: c, letterSpacing:'0.04em',
                  transition:'all 0.25s ease', cursor:'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background=`${c}15`
                  e.currentTarget.style.borderColor=`${c}66`
                  e.currentTarget.style.transform='translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background='transparent'
                  e.currentTarget.style.borderColor=`${c}33`
                  e.currentTarget.style.transform='translateY(0)'
                }}>
                {s}
              </span>
            )
          })}
        </div>
      </RevealSection>

      {/* Tags */}
      <RevealSection className="mb-10" delay={0.1}>
        <h2 className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color:'#7a7870' }}>
          Tags
          <span className="flex-1" style={{ height:1, background:'rgba(255,255,255,0.07)' }} />
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t, i) => {
            const s = tagColor[t.color] || tagColor['']
            return (
              <span key={i} className="font-mono uppercase"
                style={{ fontSize:'0.58rem', padding:'0.22rem 0.55rem', borderRadius:3, border:`1px solid ${s.border}`, color:s.color, letterSpacing:'0.04em' }}>
                {t.label}
              </span>
            )
          })}
        </div>
      </RevealSection>

      {/* Navigation */}
      <RevealSection delay={0.1} style={{ borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:'2rem' }}>
        <div className="flex justify-between items-center">
          {(() => {
            const idx = projects.findIndex(p => p.slug === slug)
            const prev = idx > 0 ? projects[idx - 1] : null
            const next = idx < projects.length - 1 ? projects[idx + 1] : null
            return (
              <>
                {prev ? (
                  <Link to={`/project/${prev.slug}`} className="font-mono text-xs uppercase transition-all duration-200 flex items-center gap-2"
                    style={{ color:'#7a7870', textDecoration:'none', letterSpacing:'0.04em' }}
                    onMouseEnter={e => e.currentTarget.style.color='#c8f060'}
                    onMouseLeave={e => e.currentTarget.style.color='#7a7870'}>
                    <span>&larr;</span> {prev.title}
                  </Link>
                ) : <span />}
                {next ? (
                  <Link to={`/project/${next.slug}`} className="font-mono text-xs uppercase transition-all duration-200 flex items-center gap-2"
                    style={{ color:'#7a7870', textDecoration:'none', letterSpacing:'0.04em' }}
                    onMouseEnter={e => e.currentTarget.style.color='#c8f060'}
                    onMouseLeave={e => e.currentTarget.style.color='#7a7870'}>
                    {next.title} <span>&rarr;</span>
                  </Link>
                ) : <span />}
              </>
            )
          })()}
        </div>
      </RevealSection>
    </div>
  )
}
