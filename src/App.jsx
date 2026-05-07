import React, { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Highlights from './components/Highlights/Highlights'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import LoginModal from './components/Navbar/LoginModal'
import './index.css'
import Certifications from './components/Certifications/Certifications'

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <ThemeProvider>
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <main>
        <Home />
        <About />
        <Skills />
        <Highlights />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer style={{
        background: '#060210',
        padding: '50px 40px 25px',
        borderTop: '1px solid rgba(124, 92, 252, 0.1)',
        textAlign: 'center',
        marginTop: '0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
      <div>
        <h2 style={{ fontSize: '1.5rem', background: 'linear-gradient(135deg, #fff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Dravid Kumar M</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>Software Developer & Automation Engineer</p>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>© 2025 Dravid Kumar M. All rights reserved.</p>
      </div>
        <div>
        <h3 style={{ color: '#fff', marginBottom: '15px' }}>Quick Links</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          <a href="#home" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>About</a>
          <a href="#skills" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Skills</a>
          <a href="#highlights" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Highlights</a>
          <a href="#experience" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Experience</a>
          <a href="#education" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Education</a>
          <a href="#certifications" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Certifications</a>
          <a href="#contact" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
      <div>
        <h3 style={{ color: '#fff', marginBottom: '15px' }}>Contact</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>📞 +91 83008 34860</p>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>✉️ dravidkumar180@gmail.com</p>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>📍 Bengaluru, Karnataka, India</p>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(124,92,252,0.1)', paddingTop: '25px' }}>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem' }}>Built with ♥ by Dravid Kumar M</p>
    </div>
  </div>
      </footer>
    </ThemeProvider>
  )
}