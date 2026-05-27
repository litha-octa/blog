import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const links = [
    { href:'https://github.com/litha-octa', icon:'fab fa-github', label:'litha-octa' },
    { href:'https://www.upwork.com/freelancers/~011be56c4f1c7b23cf', icon:'fab fa-upwork', label:'Upwork' },
    { href:'https://www.linkedin.com/in/lithaoctadelistia', icon:'fab fa-linkedin', label:'LinkedIn' },
    { href:'mailto:lithaoctadelistia@gmail.com', icon:'fas fa-envelope', label:'Email' },
  ]

  const footerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <footer ref={footerRef} id="contact" className="pt-8 flex items-center justify-between flex-wrap gap-4"
      style={{
        borderTop:'1px solid rgba(255,255,255,0.07)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>
      <div className="font-mono leading-relaxed"
        style={{
          fontSize:'0.7rem', color:'#7a7870',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
        }}>
        Let's build something great together.<br />
        <a href="mailto:lithaoctadelistia@gmail.com" style={{ color:'#c8f060', textDecoration:'none' }}>lithaoctadelistia@gmail.com</a><br />
        Indonesia · UTC+7 · Remote-first
      </div>
      <div className="flex flex-col items-end gap-3">
        <div className="flex gap-2">
          {links.map((l,i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer"
              className="footer-link flex items-center gap-2 font-mono text-xs uppercase"
              style={{
                height:34, padding:'0 0.9rem',
                border:'1px solid rgba(255,255,255,0.12)', borderRadius:5,
                color:'#7a7870', textDecoration:'none', letterSpacing:'0.04em',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.4s ease ${0.3 + i * 0.1}s, transform 0.4s ease ${0.3 + i * 0.1}s, color 0.2s, border-color 0.2s, box-shadow 0.2s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color='#c8f060'
                e.currentTarget.style.borderColor='#c8f060'
                e.currentTarget.style.transform='translateY(-3px)'
                e.currentTarget.style.boxShadow='0 4px 15px rgba(200,240,96,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color='#7a7870'
                e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'
                e.currentTarget.style.transform='translateY(0)'
                e.currentTarget.style.boxShadow='none'
              }}>
              <i className={l.icon} style={{ fontSize:'0.82rem' }} /> {l.label}
            </a>
          ))}
        </div>
        <span className="font-mono" style={{
          fontSize:'0.6rem', color:'#7a7870', opacity: visible ? 0.5 : 0,
          transition: 'opacity 0.5s ease 0.7s',
        }}>
          © 2025 Litha Octa Delistia · All rights reserved
        </span>
      </div>
    </footer>
  )
}
