import { skills } from '../data.js'

const barColor = { accent: '#c8f060', accent2: '#60d4f0', accent3: '#f060a0' }

export default function Skills() {
  return (
    <section id="skills" className="fade-up mb-10" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-4" style={{ color: '#7a7870' }}>
        Tech stack
        <span className="flex-1" style={{ height: 1, background: 'rgba(255,255,255,0.07)', display: 'block' }} />
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))' }}>
        {skills.map((s, i) => (
          <div key={i} className="card-hover rounded-md p-3.5" style={{ background: '#1a1a1f', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs" style={{ color: '#f0eee8' }}>{s.name}</span>
              <span className="font-mono text-xs" style={{ color: '#c8f060' }}>{s.pct}%</span>
            </div>
            <div className="rounded-full overflow-hidden" style={{ height: 3, background: 'rgba(255,255,255,0.07)' }}>
              <div className="skill-bar h-full rounded-full" style={{ width: `${s.pct}%`, background: barColor[s.color], animationDelay: `${0.5 + i * 0.1}s` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
