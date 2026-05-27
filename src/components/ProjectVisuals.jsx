// Mini visual mockups for each project card

export function QMSVisual() {
  return (
    <div style={{ width:'100%', height:'100%', padding:10, display:'flex', flexDirection:'column', gap:6 }}>
      <div style={{ display:'flex', gap:5, alignItems:'center' }}>
        <div style={{ width:6, height:6, borderRadius:'50%', background:'#c8f060' }} />
        <div style={{ flex:1, height:5, background:'rgba(255,255,255,0.07)', borderRadius:3, overflow:'hidden' }}>
          <div style={{ width:'55%', height:'100%', background:'rgba(200,240,96,0.4)', borderRadius:3 }} />
        </div>
        <div style={{ width:6, height:6, borderRadius:'50%', background:'rgba(255,255,255,0.12)' }} />
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:5, flex:1 }}>
        {[{num:'A-042',label:'Now serving',color:'#c8f060'},{num:'18',label:'In queue',color:'#60d4f0'},{num:'4m',label:'Avg wait',color:'#f060a0'}].map((p,i) => (
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:4, padding:5 }}>
            <div style={{ width:'60%', height:3, background:'rgba(255,255,255,0.12)', borderRadius:2, marginBottom:3 }} />
            <div style={{ fontFamily:'DM Mono,monospace', fontSize:'0.75rem', fontWeight:500, color:p.color }}>{p.num}</div>
            <div style={{ fontFamily:'DM Mono,monospace', fontSize:'0.42rem', color:'#7a7870' }}>{p.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
        {[{num:'A-043',w:'85%',c:'rgba(200,240,96,0.5)',tc:'#c8f060'},{num:'A-044',w:'60%',c:'rgba(255,255,255,0.15)',tc:'#7a7870'},{num:'A-045',w:'35%',c:'rgba(255,255,255,0.1)',tc:'#7a7870'}].map((r,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:3 }}>
            <div style={{ fontFamily:'DM Mono,monospace', fontSize:'0.5rem', color:r.tc, background:'rgba(255,255,255,0.06)', padding:'1px 3px', borderRadius:2, minWidth:18, textAlign:'center' }}>{r.num}</div>
            <div style={{ flex:1, height:3, background:'rgba(255,255,255,0.07)', borderRadius:2, overflow:'hidden' }}>
              <div style={{ width:r.w, height:'100%', background:r.c, borderRadius:2 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PhoneVisual() {
  return (
    <>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 60%,rgba(240,96,160,0.1),transparent 70%)' }} />
      <div style={{ width:56, height:96, border:'1.5px solid rgba(255,255,255,0.12)', borderRadius:10, background:'#0c0c0e', padding:'6px 5px', display:'flex', flexDirection:'column', gap:4, position:'relative', zIndex:1 }}>
        <div style={{ width:16, height:3, background:'rgba(255,255,255,0.12)', borderRadius:2, margin:'0 auto 2px' }} />
        <div style={{ height:4, background:'rgba(200,240,96,0.4)', borderRadius:2 }} />
        <div style={{ fontFamily:'DM Mono,monospace', fontSize:4, color:'#7a7870', textAlign:'center' }}>Rate your experience</div>
        <div style={{ display:'flex', gap:2, justifyContent:'center' }}>
          {[1,2,3,4,5].map(i => <div key={i} style={{ width:7, height:7, background:'#c8f060', borderRadius:1, opacity: i===5 ? 0.2 : 0.9 }} />)}
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
          {[100,70,100].map((w,i) => <div key={i} style={{ height:3, width:`${w}%`, background:'rgba(255,255,255,0.07)', borderRadius:1 }} />)}
        </div>
        <div style={{ height:8, background:'rgba(200,240,96,0.25)', border:'1px solid rgba(200,240,96,0.3)', borderRadius:2, marginTop:2, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ fontFamily:'DM Mono,monospace', fontSize:4, color:'#c8f060' }}>Submit</span>
        </div>
      </div>
    </>
  )
}

export function GovVisual() {
  return (
    <>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 40%,rgba(96,212,240,0.1),transparent 70%)' }} />
      <div style={{ width:'100%', height:'100%', padding:10, display:'flex', flexDirection:'column', gap:5 }}>
        <div style={{ height:14, background:'rgba(96,212,240,0.15)', borderRadius:3, display:'flex', alignItems:'center', padding:'0 6px', gap:4 }}>
          <div style={{ width:10, height:7, borderRadius:1, overflow:'hidden', display:'flex', flexDirection:'column' }}>
            <div style={{ flex:1, background:'#CC0001' }} /><div style={{ flex:1, background:'#f0eee8' }} />
          </div>
          <span style={{ fontFamily:'DM Mono,monospace', fontSize:'0.42rem', color:'#60d4f0' }}>INA.go.id · Government Portal</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, flex:1 }}>
          {['rgba(96,212,240,0.3)','rgba(200,240,96,0.25)','rgba(255,255,255,0.1)','rgba(240,96,160,0.2)'].map((c,i) => (
            <div key={i} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:3, padding:4 }}>
              <div style={{ height:3, background:c, borderRadius:2, marginBottom:3 }} />
              <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
                {[100,80,60].map((w,j) => <div key={j} style={{ height:2, width:`${w}%`, background:'rgba(255,255,255,0.12)', borderRadius:1 }} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export function DayaVisual() {
  const bars = [40,60,35,70,50]
  return (
    <>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 50%,rgba(240,96,160,0.1),transparent 70%)' }} />
      <div style={{ width:'100%', height:'100%', padding:10, display:'flex', flexDirection:'column', gap:5 }}>
        <div style={{ display:'flex', gap:4 }}>
          {['Tanya Ahli','Pelatihan','Produk'].map((t,i) => (
            <div key={i} style={{ fontFamily:'DM Mono,monospace', fontSize:'0.4rem', padding:'1px 5px', borderRadius:2, border:`1px solid ${i===0?'rgba(240,96,160,0.4)':'rgba(255,255,255,0.12)'}`, color:i===0?'#f060a0':'#7a7870' }}>{t}</div>
          ))}
        </div>
        <div style={{ flex:1, display:'flex', alignItems:'flex-end', gap:4, paddingTop:4 }}>
          {bars.map((h,i) => (
            <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:2 }}>
              <div style={{ width:'100%', height:h, borderRadius:'2px 2px 0 0', background:`rgba(240,96,160,${0.4+i*0.06})` }} />
              <span style={{ fontFamily:'DM Mono,monospace', fontSize:'0.38rem', color:'#7a7870' }}>{['J','F','M','A','M'][i]}</span>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', gap:6 }}>
          {[{num:'1.2k',label:'Sessions',c:'#f060a0'},{num:'94%',label:'Uptime',c:'#c8f060'},{num:'6',label:'Modules',c:'#60d4f0'}].map((k,i) => (
            <div key={i} style={{ flex:1, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:3, padding:'3px 4px' }}>
              <div style={{ fontFamily:'DM Mono,monospace', fontSize:'0.6rem', fontWeight:500, color:k.c }}>{k.num}</div>
              <div style={{ fontFamily:'DM Mono,monospace', fontSize:'0.38rem', color:'#7a7870' }}>{k.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export function ShopVisual() {
  return (
    <>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 50%,rgba(96,212,240,0.08),transparent 70%)' }} />
      <div style={{ fontSize:'2.2rem', opacity:0.25, position:'relative', zIndex:1 }}>🛒</div>
    </>
  )
}

export function TVVisual() {
  return (
    <>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 40%,rgba(96,212,240,0.1),transparent 70%)' }} />
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:3, position:'relative', zIndex:1 }}>
        <div style={{ width:110, height:70, border:'2px solid rgba(255,255,255,0.12)', borderRadius:6, background:'#0c0c0e', padding:6, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'Syne,sans-serif', fontSize:'1.3rem', fontWeight:800, color:'#60d4f0', lineHeight:1 }}>A-042</div>
            <div style={{ fontFamily:'DM Mono,monospace', fontSize:'0.38rem', color:'#7a7870', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:3 }}>Now serving</div>
            <div style={{ width:50, height:1, background:'rgba(255,255,255,0.12)', margin:'3px auto' }} />
            <div style={{ fontFamily:'DM Mono,monospace', fontSize:'0.4rem', color:'#c8f060' }}>Loket 3 · 18 in queue</div>
          </div>
        </div>
        <div style={{ width:20, height:5, background:'rgba(255,255,255,0.12)', borderRadius:'0 0 3px 3px' }} />
        <div style={{ width:36, height:2, background:'rgba(255,255,255,0.12)', borderRadius:1 }} />
      </div>
    </>
  )
}
