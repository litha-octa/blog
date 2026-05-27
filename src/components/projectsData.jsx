// ── Visual sub-components ──────────────────────────────────────────────────

function QMSVisual() {
  return (
    <div className="w-full h-full p-2.5 flex flex-col gap-1.5">
      <div className="flex gap-1.5 items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <div className="flex-1 h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
          <div className="h-full w-[55%] rounded-full bg-accent/40" />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/[0.12]" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {[
          { val: 'A-042', sub: 'Now serving', color: 'text-accent' },
          { val: '18', sub: 'In queue', color: 'text-accent-2' },
          { val: '4m', sub: 'Avg wait', color: 'text-accent-3' },
        ].map(({ val, sub, color }) => (
          <div key={sub} className="bg-white/[0.04] border border-white/[0.07] rounded p-1.5 flex flex-col gap-1">
            <div className="w-3/5 h-[3px] bg-white/[0.12] rounded" />
            <div className={`font-mono text-xs font-medium ${color}`}>{val}</div>
            <div className="font-mono text-[0.42rem] text-muted">{sub}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {[['A-043', '85%', 'text-accent', 'bg-accent/50'], ['A-044', '60%', 'text-muted', 'bg-white/15'], ['A-045', '35%', 'text-muted', 'bg-white/10']].map(([num, w, tc, bc]) => (
          <div key={num} className="flex items-center gap-1.5">
            <div className={`font-mono text-[0.5rem] ${tc} bg-white/[0.06] px-1 py-px rounded min-w-[18px] text-center`}>{num}</div>
            <div className="flex-1 h-[3px] bg-white/[0.07] rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${bc}`} style={{ width: w }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhoneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(240,96,160,0.1),transparent_70%)]" />
      <div className="w-14 h-24 border border-white/[0.12] rounded-xl bg-bg p-1.5 flex flex-col gap-1 relative z-10" style={{ borderWidth: '1.5px' }}>
        <div className="w-4 h-[3px] bg-white/[0.12] rounded mx-auto" />
        <div className="h-1 bg-accent/40 rounded" />
        <div className="font-mono text-center text-[4px] text-muted">Rate your experience</div>
        <div className="flex gap-0.5 justify-center">
          {[0,1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-accent rounded-sm" />)}
          <div className="w-1.5 h-1.5 bg-accent/20 rounded-sm" />
        </div>
        <div className="flex flex-col gap-0.5 mt-0.5">
          <div className="h-[3px] bg-white/[0.07] rounded" />
          <div className="h-[3px] bg-white/[0.07] rounded w-[70%]" />
          <div className="h-[3px] bg-white/[0.07] rounded" />
        </div>
        <div className="h-2 bg-accent/25 border border-accent/30 rounded flex items-center justify-center mt-0.5">
          <span className="font-mono text-[4px] text-accent">Submit</span>
        </div>
      </div>
    </div>
  )
}

function GovVisual() {
  return (
    <div className="w-full h-full p-2.5 flex flex-col gap-1.5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(96,212,240,0.1),transparent_70%)]" />
      <div className="h-3.5 bg-accent-2/15 rounded flex items-center px-1.5 gap-1 relative z-10">
        <div className="w-2.5 h-[7px] rounded-sm overflow-hidden flex flex-col flex-shrink-0">
          <div className="flex-1 bg-[#CC0001]" />
          <div className="flex-1 bg-ink" />
        </div>
        <span className="font-mono text-[0.42rem] text-accent-2">INA.go.id · Government Portal</span>
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1 relative z-10">
        {[
          'bg-accent-2/30', 'bg-accent/25', 'bg-white/[0.07]', 'bg-accent-3/20'
        ].map((bar, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/[0.07] rounded p-1">
            <div className={`h-[3px] ${bar} rounded mb-1.5`} />
            <div className="flex flex-col gap-0.5">
              <div className="h-0.5 bg-white/[0.12] rounded" />
              <div className="h-0.5 bg-white/[0.12] rounded w-4/5" />
              <div className="h-0.5 bg-white/[0.12] rounded w-3/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DayaVisual() {
  const bars = [40, 60, 35, 70, 50]
  return (
    <div className="w-full h-full p-2.5 flex flex-col gap-1.5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(240,96,160,0.1),transparent_70%)]" />
      <div className="flex gap-1 relative z-10">
        {['Tanya Ahli', 'Pelatihan', 'Produk'].map((t, i) => (
          <div key={t} className={`font-mono text-[0.4rem] px-1.5 py-px rounded border ${i === 0 ? 'border-accent-3/40 text-accent-3' : 'border-white/[0.12] text-muted'}`}>{t}</div>
        ))}
      </div>
      <div className="flex items-end gap-1 flex-1 pt-1 relative z-10">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
            <div className="w-full rounded-t" style={{ height: `${h}px`, background: `rgba(240,96,160,${0.4 + i * 0.06})` }} />
            <div className="font-mono text-[0.38rem] text-muted">{['Jan','Feb','Mar','Apr','May'][i]}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-1 relative z-10">
        {[['1.2k','Sessions','text-accent-3'], ['94%','Uptime','text-accent'], ['6','Modules','text-accent-2']].map(([val, lbl, c]) => (
          <div key={lbl} className="flex-1 bg-white/[0.03] border border-white/[0.07] rounded p-1">
            <div className={`font-mono text-[0.6rem] font-medium ${c}`}>{val}</div>
            <div className="font-mono text-[0.38rem] text-muted">{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TVVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(96,212,240,0.1),transparent_70%)]" />
      <div className="flex flex-col items-center gap-0.5 relative z-10">
        <div className="w-28 h-[70px] border-2 border-white/[0.12] rounded-md bg-bg p-1.5 flex items-center justify-center">
          <div className="text-center">
            <div className="font-syne font-extrabold text-xl text-accent-2 leading-none">A-042</div>
            <div className="w-12 h-px bg-white/[0.12] mx-auto my-1" />
            <div className="font-mono text-[0.38rem] text-muted uppercase tracking-wider">Now serving</div>
            <div className="font-mono text-[0.4rem] text-accent mt-0.5">Loket 3 · 18 in queue</div>
          </div>
        </div>
        <div className="w-5 h-1.5 bg-white/[0.12] rounded-b" />
        <div className="w-9 h-0.5 bg-white/[0.12] rounded" />
      </div>
    </div>
  )
}

function ShopVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(96,212,240,0.08),transparent_70%)]" />
      <div className="text-4xl opacity-25 relative z-10">🛒</div>
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'qms',
    num: '01',
    badge: 'Latest · 2024–2025',
    context: 'Featured',
    title: 'Queue Management System',
    desc: 'Real-time multi-app monorepo for clinic & hospital queue management. Three frontend apps — Admin Dashboard, User Portal kiosk, and TV Display — with live updates and integrated thermal printer.',
    tags: [
      { label: 'React.js', color: 'green' }, { label: 'Vite', color: 'green' },
      { label: 'Pusher.js', color: 'blue' }, { label: 'WebSocket', color: 'blue' },
      { label: 'Turborepo', color: '' }, { label: 'Kiosk · Android', color: 'pink' },
      { label: 'Thermal Printer', color: '' },
    ],
    features: [
      { text: '3 apps: Admin Dashboard · User Portal · TV Display', color: '' },
      { text: 'Real-time queue via Pusher.js + Laravel Echo', color: 'blue' },
      { text: 'Kiosk lockdown mode (Device Owner + Lock Task)', color: 'pink' },
    ],
    featured: true,
    Visual: QMSVisual,
  },
  {
    id: 'feedback',
    num: '02',
    context: 'Freelance',
    title: 'User Feedback App',
    desc: 'Kiosk-mode React Native app for capturing post-service feedback. Full-screen lockdown with multi-step rating form and auto-reset between sessions.',
    tags: [
      { label: 'React Native', color: 'pink' }, { label: 'Kiosk Mode', color: 'pink' },
      { label: 'Expo', color: 'green' }, { label: 'Android', color: 'blue' },
      { label: 'Multi-step Form', color: '' },
    ],
    features: [
      { text: 'Full-screen kiosk lockdown', color: 'pink' },
      { text: 'Star rating + free-text feedback', color: '' },
      { text: 'Auto-reset after submission', color: 'blue' },
    ],
    Visual: PhoneVisual,
  },
  {
    id: 'ina',
    num: '03',
    context: 'PT Salt Indonesia',
    title: 'INA.go.id',
    desc: 'Official government portal built with Next.js. Focus on accessibility, performance optimization, and pixel-perfect responsive layout across devices.',
    tags: [
      { label: 'Next.js', color: 'green' }, { label: 'TypeScript', color: 'blue' },
      { label: 'A11y', color: 'pink' }, { label: 'Gov Portal', color: '' },
      { label: 'SSR', color: 'green' },
    ],
    features: [
      { text: 'Accessibility-first (WCAG standards)', color: 'blue' },
      { text: 'SSR + performance optimization', color: '' },
      { text: 'Responsive across all breakpoints', color: 'pink' },
    ],
    Visual: GovVisual,
  },
  {
    id: 'daya',
    num: '04',
    context: 'PT Salt Indonesia',
    title: 'Daya.id',
    desc: 'Analytics dashboard system for UMKM empowerment platform. Complex JS modules with date-range filtering, Chart.js visualizations, and multi-section API integration.',
    tags: [
      { label: 'JavaScript', color: 'pink' }, { label: 'Chart.js', color: 'pink' },
      { label: 'Pimcore / PHP', color: '' }, { label: 'REST API', color: 'blue' },
      { label: 'Date Filtering', color: '' },
    ],
    features: [
      { text: '6 report modules (Tanya Ahli, Pelatihan, dll)', color: 'pink' },
      { text: 'Dynamic date-range filter + Chart.js', color: '' },
      { text: 'Multi-endpoint API integration', color: 'blue' },
    ],
    Visual: DayaVisual,
  },
  {
    id: 'umkm',
    num: '05',
    context: 'PT Salt Indonesia',
    title: 'UMKMall.id',
    desc: 'E-commerce platform for Indonesian SMEs with SSR, dynamic product catalog, and mobile-first responsive layout.',
    tags: [
      { label: 'Next.js', color: 'green' }, { label: 'TypeScript', color: 'blue' },
      { label: 'SSR', color: '' }, { label: 'Tailwind', color: 'green' },
    ],
    features: [
      { text: 'SSR + dynamic product catalog', color: '' },
      { text: 'Mobile-first responsive layout', color: 'blue' },
    ],
    Visual: ShopVisual,
  },
  {
    id: 'tv',
    num: '06',
    context: 'Part of QMS',
    title: 'TV Queue Display',
    desc: 'Real-time fullscreen TV display for clinic waiting rooms. Live queue numbers via WebSocket, optimized for large screens.',
    tags: [
      { label: 'React.js', color: 'green' }, { label: 'WebSocket', color: 'blue' },
      { label: 'Vite', color: 'green' }, { label: 'Fullscreen', color: '' },
    ],
    features: [
      { text: 'Live updates via Pusher.js', color: 'blue' },
      { text: 'Optimized for TV / large display', color: '' },
    ],
    Visual: TVVisual,
  },
]
