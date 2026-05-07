import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import profileImage from './profile.jpeg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Dravidkumar_resume_1.pdf';
    link.download = 'Dravid_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToHighlights = () => {
    const highlightsSection = document.getElementById('highlights');
    if (highlightsSection) {
      highlightsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      {/* Dark Background Elements */}
      <div className="dark-bg"></div>
      <div className="noise-overlay"></div>
      
      {/* Mouse Follower Effect */}
      <div 
        className="mouse-follower" 
        style={{ 
          left: mousePosition.x - 150, 
          top: mousePosition.y - 150 
        }}
      ></div>
      
      {/* Animated Background Particles */}
      <div className="particle-container">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 0.5}s` }}></div>
        ))}
      </div>

      {/* Animated Orbs */}
      <div className="animated-orb orb-a"></div>
      <div className="animated-orb orb-b"></div>
      <div className="animated-orb orb-c"></div>
      <div className="animated-orb orb-d"></div>

      {/* Animated Rings */}
      <div className="ring-container">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
        <div className="ring ring4"></div>
      </div>

      {/* Scanning Line */}
      <div className="scan-line"></div>

      {/* Animated Gradient Border */}
      <div className="gradient-border"></div>

      <div className="container">
        <div className={`home-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="home-grid">
            {/* Left Side - Content */}
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-text">✨ Welcome to my portfolio</span>
                <span className="badge-pulse"></span>
                <span className="badge-sparkle"></span>
              </div>
              
              <div className="hero-greeting">
                <span className="greeting-word">Hi,</span>
                <span className="greeting-wave">👋</span>
              </div>
              
              <div className="hero-name">
                <span className="name-prefix">I'm</span>
                <span className="name-highlight">
                  Dravid M
                  <span className="name-underline"></span>
                </span>
              </div>
              
              <div className="hero-role-wrapper">
                <div className="hero-role">
                  <span className="role-text">Software Developer & Automation Engineer</span>
                  <span className="role-cursor"></span>
                </div>
                <div className="role-underline"></div>
              </div>
              
              <div className="hero-desc-wrapper">
                <p className="hero-desc">
                  Dedicated software developer with 2+ years of experience in building modern, 
                  scalable solutions with passion and precision. Specialized in full-stack development, 
                  RPA, and web automation.
                </p>
                <div className="desc-glow"></div>
              </div>
              
              {/* Social Media Icons */}
              <div className="hero-socials">
                <a href="https://www.instagram.com/mr_dk.180/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                  <div className="icon-bg"></div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/dravid-kumar-63a6bb220" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <div className="icon-bg"></div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Dravidkumar180" target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <div className="icon-bg"></div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
              
              {/* Buttons */}
              <div className="hero-btns">
                <button className="btn-primary" onClick={scrollToHighlights}>
                  <span className="btn-text">View Highlights</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  <span className="btn-ripple"></span>
                </button>
                <button className="btn-secondary" onClick={scrollToContact}>
                  <span className="btn-text">Get in Touch</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 9l5 5 5-5M12 4v10"/>
                  </svg>
                  <span className="btn-ripple"></span>
                </button>
                <button className="btn-outline" onClick={handleDownloadResume}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                  <span className="btn-text">Download CV</span>
                  <span className="btn-ripple"></span>
                </button>
              </div>
            </div>
            
            {/* Right Side - Image with Animations */}
            <div className="hero-image-wrap">
              <div className="image-container">
                {/* Rotating Border */}
                <div className="rotating-border"></div>
                
                {/* Pulsing Rings */}
                <div className="pulse-ring ring-1"></div>
                <div className="pulse-ring ring-2"></div>
                <div className="pulse-ring ring-3"></div>
                <div className="pulse-ring ring-4"></div>
                
                {/* Image Frame */}
                <div className="hero-avatar-ring">
                  <div className="image-shine"></div>
                  <img src={profileImage} alt="Dravid Kumar M" className="hero-image" />
                </div>
                
                {/* Floating Badges */}
                <div className="floating-badge badge-code">
                  <div className="badge-sparkle"></div>
                  <span className="badge-icon">💻</span>
                  <span className="badge-text">Code</span>
                </div>
                <div className="floating-badge badge-qa">
                  <div className="badge-sparkle"></div>
                  <span className="badge-icon">✅</span>
                  <span className="badge-text">QA</span>
                </div>
                <div className="floating-badge badge-automation">
                  <div className="badge-sparkle"></div>
                  <span className="badge-icon">🤖</span>
                  <span className="badge-text">RPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse-wheel">
          <div className="wheel-scroll"></div>
        </div>
        <div className="scroll-arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </section>
  );
};

export default Home;