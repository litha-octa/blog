import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Charts from './components/Charts.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div style={{ position:'relative', zIndex:1, maxWidth:1100, margin:'0 auto', padding:'2rem 1.5rem 4rem' }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Charts />
      <Footer />
    </div>
  )
}
