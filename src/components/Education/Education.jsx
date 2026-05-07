import React, { useEffect, useRef, useState } from 'react';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const educationData = [
    {
      degree: "Master of Business Administration",
      specialization: "Business Analyst",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai",
      period: "2022 – 2024",
      color: "#7c5cfc"
    },
    {
      degree: "Bachelor of Engineering",
      specialization: "Electronics and Communication Engineering",
      institution: "PSNA College of Engineering and Technology",
      location: "Dindigul",
      period: "2017 – 2021",
      color: "#a78bfa"
    },
    {
      degree: "Higher Secondary School Certificate",
      specialization: "Computer Science (PCM)",
      institution: "Velammal Matric Higher Secondary School",
      location: "Theni",
      period: "2015 – 2017",
      color: "#6366f1"
    },
    {
      degree: "Secondary School Certificate",
      specialization: "CBSE Board",
      institution: "Velammal Vidyalaya",
      location: "Theni",
      period: "2015",
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="education" className="education-section-v5" ref={sectionRef}>
      {/* Premium Dark Background with Multiple Layers */}
      <div className="edu5-bg-primary"></div>
      <div className="edu5-bg-gradient"></div>
      <div className="edu5-bg-noise"></div>
      <div className="edu5-bg-grid"></div>
      
      {/* 3D Floating Orbs */}
      <div className="edu5-orbs">
        <div className="edu5-orb edu5-orb1"></div>
        <div className="edu5-orb edu5-orb2"></div>
        <div className="edu5-orb edu5-orb3"></div>
        <div className="edu5-orb edu5-orb4"></div>
        <div className="edu5-orb edu5-orb5"></div>
      </div>
      
      {/* Twinkling Stars */}
      <div className="edu5-stars">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="edu5-star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`
          }}></div>
        ))}
      </div>
      
      {/* Animated Floating Particles with Trail */}
      <div className="edu5-particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="edu5-particle" style={{
            animationDelay: `${i * 0.15}s`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${7 + Math.random() * 12}s`,
            '--tx': `${(Math.random() - 0.5) * 200}px`,
            '--ty': `${(Math.random() - 0.5) * 200}px`
          }}></div>
        ))}
      </div>

      {/* Animated Scanning Lines */}
      <div className="edu5-scanlines">
        <div className="edu5-scan-horizontal"></div>
        <div className="edu5-scan-vertical"></div>
      </div>

      {/* Animated Gradient Border Lines */}
      <div className="edu5-border-lines">
        <div className="edu5-border-line edu5-border-top"></div>
        <div className="edu5-border-line edu5-border-bottom"></div>
      </div>

      <div className="edu5-container">
        <div className={`edu5-header ${isVisible ? 'animate' : ''}`}>
          <div className="edu5-header-glow-ring"></div>
          <h2 className="edu5-title">
            Education
            <span className="edu5-title-shine"></span>
            <span className="edu5-title-underline"></span>
          </h2>
          <p className="edu5-subtitle">
            Academic foundations that ground my technical expertise.
          </p>
          <div className="edu5-divider">
            <span className="edu5-divider-line"></span>
            <span className="edu5-divider-diamond"></span>
            <span className="edu5-divider-line"></span>
          </div>
        </div>

        <div className="edu5-list">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`edu5-item ${isVisible ? 'animate' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
              style={{ animationDelay: `${index * 0.12}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="edu5-item-marker">
                <div className="edu5-item-dot" style={{ background: edu.color }}>
                  <div className="edu5-dot-pulse" style={{ background: edu.color }}></div>
                  <div className="edu5-dot-glow" style={{ background: edu.color }}></div>
                </div>
                <div className="edu5-marker-line" style={{ background: edu.color }}></div>
              </div>
              <div className="edu5-item-content">
                <div className="edu5-content-wrapper">
                  <h3 className="edu5-degree">
                    <span className="edu5-degree-text">{edu.degree} - {edu.specialization}</span>
                    <span className="edu5-degree-bg"></span>
                  </h3>
                  <p className="edu5-institution">
                    <i className="edu5-location-icon">📍</i>
                    {edu.institution} - {edu.location}
                  </p>
                  <p className="edu5-period">
                    <i className="edu5-calendar-icon">📅</i>
                    {edu.period}
                  </p>
                </div>
                <div className="edu5-item-glow" style={{ background: `radial-gradient(circle at 100% 50%, ${edu.color}10, transparent)` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="edu5-scroll">
        <div className="edu5-scroll-ring"></div>
        <div className="edu5-scroll-mouse">
          <div className="edu5-scroll-wheel"></div>
        </div>
        <div className="edu5-scroll-arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="edu5-scroll-text">EXPLORE MORE</div>
      </div>
    </section>
  );
};

export default Education;