import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="dark-bg-overlay"></div>
      <div className="animated-grid"></div>
      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>
      <div className="glow-orb orb3"></div>
      
      {/* Animated Lines */}
      <div className="animated-line line1"></div>
      <div className="animated-line line2"></div>
      <div className="animated-line line3"></div>
      
      {/* Floating Shapes */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>
      <div className="floating-shape shape4"></div>

      <div className="container">
        <div className={`about-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="about-header">
            <span className="section-tag">01. ABOUT ME</span>
            <h2 className="about-title">
              <span className="title-word">Who</span>
              <span className="title-word">Am</span>
              <span className="title-word">I?</span>
            </h2>
            <div className="title-accent"></div>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                I'm <span className="highlight">Dravid Kumar M</span>, a software developer and automation engineer who specialises 
                in building modern, scalable solutions with passion and precision. Over the past 2+ years I've worked on diverse 
                projects ranging from frontend interfaces to backend systems, while maintaining high standards of code quality and performance.
              </p>
              
              <p className="about-text">
                My experience spans full-stack development, RPA automation, quality assurance, and cross-functional collaboration. 
                Whether I'm architecting APIs, optimising performance, automating workflows, or crafting pixel-perfect UIs, 
                I thrive on creating order out of complexity. I believe clean code and clear communication are the foundations 
                of any successful product, and I bring that mindset to every project I undertake.
              </p>
            </div>

            <div className="stats-wrapper">
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years of Excellence</div>
                <div className="stat-progress"></div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Delivered</div>
                <div className="stat-progress"></div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
                <div className="stat-progress"></div>
              </div>
            </div>
          </div>

          <div className="expertise-container">
            <div className="expertise-item">
              <div className="expertise-number">01</div>
              <div className="expertise-content">
                <h3 className="expertise-heading">Full-Stack Development</h3>
                <p className="expertise-description">
                  Expert in building end-to-end web applications using React, Node.js, and modern frameworks with clean, maintainable code.
                </p>
                <div className="expertise-more">
                  <span>Explore</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="expertise-item">
              <div className="expertise-number">02</div>
              <div className="expertise-content">
                <h3 className="expertise-heading">Automation & RPA</h3>
                <p className="expertise-description">
                  Skilled in Robotics Process Automation and web automation using Selenium, Cypress, Playwright, and Assist Edge RPA.
                </p>
                <div className="expertise-more">
                  <span>Explore</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="expertise-item">
              <div className="expertise-number">03</div>
              <div className="expertise-content">
                <h3 className="expertise-heading">Quality Assurance</h3>
                <p className="expertise-description">
                  Proficient in developing test cases, executing tests, and creating detailed test plans to ensure software reliability.
                </p>
                <div className="expertise-more">
                  <span>Explore</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="corner-decoration corner-tl"></div>
      <div className="corner-decoration corner-br"></div>
    </section>
  );
};

export default About;