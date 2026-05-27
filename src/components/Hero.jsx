import { stats } from '../data.js'

const colorMap = { accent: '#c8f060', accent2: '#60d4f0', accent3: '#f060a0' }

export default function Hero() {
  return (
    <section className="grid gap-8 mb-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'start' }}>
      {/* Left */}
      <div className="fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-3" style={{ color: '#c8f060' }}>
          <span style={{ display: 'inline-block', width: 18, height: 1, background: '#c8f060' }} />
          Available for freelance
        </div>
        <h1 className="font-syne font-extrabold leading-none tracking-tight mb-5" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', color: '#f0eee8' }}>
          Frontend<br />
          <span style={{ color: '#c8f060' }}>Developer.</span>
        </h1>
        <p className="font-mono mb-7 leading-relaxed" style={{ fontSize: '0.88rem', color: '#7a7870', maxWidth: 420 }}>
          3+ years crafting high-quality UIs with React, Next.js &amp; TypeScript.
          Specialized in fintech, SaaS dashboards, gov portals &amp; mobile apps.
          Based in Indonesia · Remote-first.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="https://www.upwork.com/freelancers/~011be56c4f1c7b23cf" target="_blank" rel="noreferrer"
            className="font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded flex items-center gap-2 transition-all duration-200"
            style={{ background: '#c8f060', color: '#0c0c0e', border: '1px solid #c8f060', fontWeight: 500, textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b8e040'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#c8f060'; e.currentTarget.style.transform = 'translateY(0)' }}>
            <i className="fab fa-upwork" /> Hire on Upwork
          </a>
          <a href="mailto:lithaoctadelistia@gmail.com"
            className="font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded flex items-center gap-2 transition-all duration-200"
            style={{ background: 'transparent', color: '#7a7870', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#f0eee8'; e.currentTarget.style.borderColor = '#f0eee8' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7a7870'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}>
            Get in touch →
          </a>
        </div>
      </div>

      {/* Right: Stats */}
      <div className="fade-up flex flex-col gap-4" style={{ animationDelay: '0.3s' }}>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg p-4 top-accent"
              style={{ background: '#1a1a1f', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="font-syne font-extrabold text-4xl leading-none mb-1" style={{ color: colorMap[s.color] }}>{s.num}</div>
              <div className="font-mono text-xs uppercase tracking-widest" style={{ color: '#7a7870' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-lg p-3.5" style={{ background: '#1a1a1f', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="w-2 h-2 rounded-full flex-shrink-0 pulse-dot" style={{ background: '#c8f060' }} />
          <div className="font-mono text-sm" style={{ color: '#f0eee8' }}>
            Open to new contracts
            <span className="block text-xs mt-0.5" style={{ color: '#7a7870' }}>React · Next.js · React Native</span>
          </div>
        </div>
      </div>
    </section>
  )
}
