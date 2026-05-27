import { industryData, toolData } from '../data.js'

export default function Charts() {
  return (
    <div className="fade-up grid gap-4 mb-10" style={{ animationDelay:'0.6s', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
      {/* Donut */}
      <div className="rounded-xl p-5" style={{ background:'#1a1a1f', border:'1px solid rgba(255,255,255,0.07)' }}>
        <div className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color:'#7a7870' }}>Industry experience</div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 rounded-full relative" style={{
            width:90, height:90,
            background:'conic-gradient(#c8f060 0% 40%,#60d4f0 40% 65%,#f060a0 65% 80%,#2a2a28 80% 100%)'
          }}>
            <div className="absolute rounded-full" style={{ inset:20, background:'#1a1a1f' }} />
          </div>
          <div className="flex flex-col gap-2">
            {industryData.map((d,i) => (
              <div key={i} className="flex items-center gap-2 font-mono" style={{ fontSize:'0.63rem', color:'#7a7870' }}>
                <span className="rounded-full flex-shrink-0" style={{ width:7, height:7, background:d.color }} />
                {d.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="rounded-xl p-5" style={{ background:'#1a1a1f', border:'1px solid rgba(255,255,255,0.07)' }}>
        <div className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color:'#7a7870' }}>Tooling proficiency</div>
        <div className="flex flex-col gap-3">
          {toolData.map((t,i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-mono text-xs flex-shrink-0" style={{ color:'#7a7870', minWidth:64 }}>{t.label}</span>
              <div className="flex-1 rounded-full overflow-hidden" style={{ height:4, background:'rgba(255,255,255,0.07)' }}>
                <div className="skill-bar h-full rounded-full" style={{ width:`${t.pct}%`, background:t.color, animationDelay:`${0.8+i*0.1}s` }} />
              </div>
              <span className="font-mono text-xs" style={{ color:'#7a7870', minWidth:28, textAlign:'right' }}>{t.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
