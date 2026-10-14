export default function Navbar() {
  return (
    <nav className="fade-up flex items-center justify-between mb-12 pb-4 border-b border-white/[0.07]" style={{ animationDelay: '0.1s' }}>
      <div className="font-syne font-extrabold text-lg tracking-tight" style={{ color: '#f0eee8' }}>
        litha<span style={{ color: '#c8f060' }}>.</span>dev
      </div>
      <ul className="hidden md:flex gap-6 list-none">
        {['work', 'skills', 'contact'].map((item) => (
          <li key={item}>
            <a href={`#${item}`} className="font-mono text-xs uppercase tracking-widest transition-colors duration-200" style={{ color: '#7a7870', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = '#c8f060'}
              onMouseLeave={e => e.target.style.color = '#7a7870'}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
