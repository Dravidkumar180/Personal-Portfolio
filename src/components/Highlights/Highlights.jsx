import React, { useEffect, useRef, useState } from 'react';
import './Highlights.css';

const Highlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const highlights = [
    {
      number: "01",
      title: "Software Developer - Full Stack",
      role: "Currently working as a Frontend Developer",
      description: "Currently working as a Software Developer, specializing in full-stack development. Building modern, scalable web applications using React, Node.js, and cloud technologies.",
      skills: ["Full-Stack Development", "Frontend Development", "Database Management"],
      stats: [
        { label: "Projects Delivered", value: "15+", percent: 80 },
        { label: "Performance Gain", value: "40%", percent: 85 },
        { label: "Client Satisfaction", value: "98%", percent: 95 }
      ],
      icon: "💻",
      color: "#7c5cfc",
      gradient: "linear-gradient(135deg, #7c5cfc, #a78bfa)"
    },
    {
      number: "02",
      title: "Business Development Officer",
      role: "Sales & Customer Management",
      description: "Worked as a Business Development Officer and helped to increase sales by 20%, increasing revenue by 30%.",
      skills: ["Client Development", "Marketing Management", "Sales Strategy"],
      stats: [
        { label: "New Clients", value: "200+", percent: 85 },
        { label: "Revenue Growth", value: "30%", percent: 75 },
        { label: "Sales Increase", value: "20%", percent: 80 }
      ],
      icon: "📈",
      color: "#a78bfa",
      gradient: "linear-gradient(135deg, #a78bfa, #c4b5fd)"
    },
    {
      number: "03",
      title: "Python Developer Intern",
      role: "Frontend Development",
      description: "Completed internship as a Python Developer, building web applications with Django framework. Developed multiple projects to solve real-world problems.",
      skills: ["Python Development", "Automation Scripts", "Project Building"],
      stats: [
        { label: "Projects Built", value: "8+", percent: 70 },
        { label: "Time Saved", value: "50%", percent: 80 },
        { label: "Efficiency Gain", value: "65%", percent: 85 }
      ],
      icon: "💻",
      color: "#6366f1",
      gradient: "linear-gradient(135deg, #6366f1, #818cf8)"
    },
    {
      number: "04",
      title: "RPA Automation System Engineer",
      role: "Worked as an IT Systems Engineer",
      description: "Built the first ERP Automation System Engineered for a US-based client. Designed and implemented automation workflows for clients, improving efficiency and reducing manual effort.",
      skills: ["ERP Automation", "Client Management", "Workflow Design"],
      stats: [
        { label: "Processes Automated", value: "50+", percent: 75 },
        { label: "Efficiency Gain", value: "70%", percent: 90 },
        { label: "Manual Effort Reduced", value: "60%", percent: 85 }
      ],
      icon: "💻",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)"
    }
  ];

  return (
    <section id="highlights" className="highlights-section-v2" ref={sectionRef}>
      {/* Premium Dark Background Layers */}
      <div className="hl-bg-layer hl-bg-gradient-1"></div>
      <div className="hl-bg-layer hl-bg-gradient-2"></div>
      <div className="hl-bg-layer hl-bg-noise"></div>
      <div className="hl-bg-layer hl-bg-grid"></div>
      
      {/* Animated 3D Orbs */}
      <div className="hl-orb-container">
        <div className="hl-glow-orb hl-orb-primary"></div>
        <div className="hl-glow-orb hl-orb-secondary"></div>
        <div className="hl-glow-orb hl-orb-tertiary"></div>
        <div className="hl-glow-orb hl-orb-quaternary"></div>
      </div>
      
      {/* Twinkling Stars */}
      <div className="hl-stars-container">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="hl-star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}></div>
        ))}
      </div>
      
      {/* Floating Particles */}
      <div className="hl-particle-system">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="hl-tracer-particle" style={{
            animationDelay: `${i * 0.4}s`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="hl-container">
        <div className={`hl-header ${isVisible ? 'animate' : ''}`}>
          <div className="hl-header-glow-ring"></div>
          <span className="hl-badge">
            <span className="hl-badge-icon">🏆</span>
            KEY ACHIEVEMENTS
            <span className="hl-badge-sparkle"></span>
          </span>
          <h2 className="hl-title">
            <span className="hl-title-word">High</span>
            <span className="hl-title-word hl-title-highlight">lights</span>
          </h2>
          <p className="hl-subtitle">
            Key achievements and milestones that define my professional journey so far.
          </p>
          <div className="hl-title-decoration">
            <div className="hl-decoration-line"></div>
            <div className="hl-decoration-diamond"></div>
            <div className="hl-decoration-line"></div>
          </div>
        </div>

        <div className="hl-grid">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className={`hl-card ${isVisible ? 'animate' : ''} ${hoveredCard === index ? 'hovered' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="hl-card-bg-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${item.color}20, transparent 70%)` }}></div>
              <div className="hl-card-border-animation" style={{ background: item.gradient }}></div>
              
              <div className="hl-card-number" style={{ color: item.color }}>{item.number}</div>
              
              <div className="hl-card-icon-wrapper" style={{ background: `${item.color}10`, borderColor: `${item.color}30` }}>
                <div className="hl-card-icon" style={{ color: item.color }}>{item.icon}</div>
                <div className="hl-icon-pulse" style={{ background: item.color }}></div>
              </div>
              
              <h3 className="hl-card-title">{item.title}</h3>
              <p className="hl-card-role" style={{ color: item.color }}>{item.role}</p>
              <p className="hl-card-description">{item.description}</p>
              
              <div className="hl-skills-container">
                {item.skills.map((skill, i) => (
                  <span key={i} className="hl-skill-tag" style={{ borderColor: `${item.color}40` }}>
                    <span className="hl-skill-dot" style={{ background: item.color }}></span>
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="hl-stats-container">
                {item.stats.map((stat, i) => (
                  <div key={i} className="hl-stat-item">
                    <div className="hl-stat-header">
                      <span className="hl-stat-label">{stat.label}</span>
                      <span className="hl-stat-value" style={{ color: item.color }}>{stat.value}</span>
                    </div>
                    <div className="hl-progress-bar">
                      <div className="hl-progress-fill" style={{ 
                        width: isVisible ? `${stat.percent}%` : '0%',
                        background: item.gradient
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="hl-corner-accent hl-corner-tl" style={{ borderColor: item.color }}></div>
              <div className="hl-corner-accent hl-corner-br" style={{ borderColor: item.color }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="hl-scroll-indicator">
        <div className="hl-scroll-ring"></div>
        <div className="hl-scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Highlights;