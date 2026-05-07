import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
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

  const experiences = [
    {
      number: "01",
      title: "Software Developer - Full Stack",
      company: "@ The Stackly",
      location: "Bengaluru, Karnataka",
      period: "Jan 2026 – Present",
      description: "Currently working as a Software Developer specializing in full-stack development. Building modern, scalable web applications using React, Node.js, and cloud technologies. Lead frontend architecture decisions, mentor junior developers, and collaborate with cross-functional teams to deliver high-quality solutions.",
      achievements: ["Full-Stack Development", "API Architecture", "Team Leadership", "Cloud Deployment"],
      icon: "💻",
      color: "#7c5cfc"
    },
    {
      number: "02",
      title: "Business Development Officer",
      company: "@ Equitas Small Finance Bank",
      location: "Chennai, Tamil Nadu",
      period: "May 2025 – Dec 2025",
      description: "Worked as a Business Development Officer and Sales Officer, driving customer acquisition and relationship management. Helped increase sales by 20% and revenue by 30% through strategic client engagement and cross-selling banking products.",
      achievements: ["Client Acquisition", "Sales Strategy", "Relationship Management", "Revenue Growth"],
      icon: "📈",
      color: "#a78bfa"
    },
    {
      number: "03",
      title: "Python Developer Intern",
      company: "@ Uniq Technologies",
      location: "Remote",
      period: "Mar 2024 – Sep 2024",
      description: "Completed internship as a Python Developer, building web applications using Django framework. Developed multiple small-scale projects to solve real-world problems including automation scripts, data processing tools, and REST APIs.",
      achievements: ["Python Development", "Django Framework", "REST APIs", "Automation Scripts"],
      icon: "💻",
      color: "#6366f1"
    },
    {
      number: "04",
      title: "RPA Automation System Engineer",
      company: "@ Infosys Pvt Ltd",
      location: "Bengaluru, Karnataka",
      period: "Feb 2022 – Jan 2024",
      description: "Worked as an RPA Automation System Engineer on a USA client healthcare project. Built the first ERP Automation System, designed and implemented automated workflows for claims processing, patient data management, and compliance reporting. Improved efficiency by 70% and reduced manual effort significantly.",
      achievements: ["RPA Development", "Healthcare Automation", "ERP System", "Client Management"],
      icon: "🤖",
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="experience" className="experience-section-v3" ref={sectionRef}>
      {/* Premium Dark Background */}
      <div className="exp3-bg"></div>
      <div className="exp3-gradient-overlay"></div>
      
      {/* Animated Waves */}
      <div className="exp3-waves">
        <svg className="exp3-wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path className="exp3-wave-path exp3-wave1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path className="exp3-wave-path exp3-wave2" d="M0,256L48,250.7C96,245,192,235,288,234.7C384,235,480,245,576,240C672,235,768,213,864,208C960,203,1056,213,1152,218.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Animated Orbs */}
      <div className="exp3-orb-container">
        <div className="exp3-orb exp3-orb1"></div>
        <div className="exp3-orb exp3-orb2"></div>
        <div className="exp3-orb exp3-orb3"></div>
        <div className="exp3-orb exp3-orb4"></div>
      </div>
      
      {/* Floating Gradient Circles */}
      <div className="exp3-circles">
        <div className="exp3-circle"></div>
        <div className="exp3-circle"></div>
        <div className="exp3-circle"></div>
        <div className="exp3-circle"></div>
        <div className="exp3-circle"></div>
      </div>

      {/* Animated Lines */}
      <div className="exp3-lines">
        <div className="exp3-line"></div>
        <div className="exp3-line"></div>
        <div className="exp3-line"></div>
      </div>

      {/* Twinkling Stars */}
      <div className="exp3-stars">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="exp3-star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${2 + Math.random() * 2}px`,
            height: `${2 + Math.random() * 2}px`
          }}></div>
        ))}
      </div>

      <div className="exp3-container">
        <div className={`exp3-header ${isVisible ? 'animate' : ''}`}>
          <div className="exp3-header-glow"></div>
          <h2 className="exp3-title">
            <span className="exp3-title-main">Experience</span>
            <span className="exp3-title-shine"></span>
          </h2>
          <p className="exp3-subtitle">
            My professional journey and the roles that shaped my expertise.
          </p>
          <div className="exp3-underline"></div>
        </div>

        <div className="exp3-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`exp3-timeline-item ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Holographic Line */}
              <div className="exp3-timeline-hologram"></div>
              
              <div className="exp3-timeline-marker" style={{ background: exp.color }}>
                <div className="exp3-marker-pulse" style={{ background: exp.color }}></div>
                <div className="exp3-marker-icon">{exp.icon}</div>
              </div>
              
              <div className="exp3-timeline-content">
                <div className="exp3-content-header">
                  <div className="exp3-number" style={{ color: exp.color }}>{exp.number}</div>
                  <div className="exp3-period" style={{ background: exp.color }}>
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <h3 className="exp3-job-title">{exp.title}</h3>
                <div className="exp3-company-info">
                  <span className="exp3-company" style={{ color: exp.color }}>{exp.company}</span>
                  <span className="exp3-location">{exp.location}</span>
                </div>
                
                <p className="exp3-description">{exp.description}</p>
                
                <div className="exp3-skills">
                  {exp.achievements.map((achievement, i) => (
                    <span key={i} className="exp3-skill">
                      <span className="exp3-skill-dot" style={{ background: exp.color }}></span>
                      {achievement}
                    </span>
                  ))}
                </div>
                
                <div className="exp3-hover-line" style={{ background: exp.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="exp3-scroll">
        <div className="exp3-scroll-wheel">
          <div className="exp3-scroll-dot"></div>
        </div>
        <div className="exp3-scroll-text">SCROLL</div>
      </div>
    </section>
  );
};

export default Experience;