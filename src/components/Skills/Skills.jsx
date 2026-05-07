import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
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

  const skillCategories = [
    {
      number: "01",
      title: "Frontend Development",
      subtitle: "UI components & responsive design",
      skills: ["React.js", "HTML & CSS", "JavaScript", "TypeScript", "Bootstrap 5", "Tailwind CSS", "Responsive Design"],
      icon: "🎨",
      color: "#7c5cfc"
    },
    {
      number: "02",
      title: "Backend Development",
      subtitle: "APIs, servers & databases",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "GraphQL", "Firebase"],
      icon: "⚙️",
      color: "#a78bfa"
    },
    {
      number: "03",
      title: "Dev Tools & Platforms",
      subtitle: "Workflow, versioning & deployment",
      skills: ["Git & GitHub", "VS Code", "Docker", "Vercel", "Postman", "Linux CLI", "AWS", "Netlify"],
      icon: "🛠️",
      color: "#6366f1"
    },
    {
      number: "04",
      title: "Soft Skills & Collaboration",
      subtitle: "People, process & cross-team work",
      skills: ["Cross-functional collaboration", "Agile / Scrum", "Technical writing", "Problem solving", "Leadership", "Communication", "Time Management"],
      icon: "🤝",
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Dark Background Theme */}
      <div className="skills-bg-gradient"></div>
      <div className="skills-bg-noise"></div>
      <div className="skills-grid-overlay"></div>
      
      {/* Animated Orbs */}
      <div className="skills-orb orb1"></div>
      <div className="skills-orb orb2"></div>
      <div className="skills-orb orb3"></div>
      <div className="skills-orb orb4"></div>
      
      {/* Floating Particles */}
      <div className="skills-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{ 
            animationDelay: `${i * 0.3}s`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Animated Lines */}
      <div className="animated-lines">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      <div className="skills-container">
        <div className={`skills-header ${isVisible ? 'animate' : ''}`}>
          <div className="header-glow"></div>
          <span className="skills-badge">
            <span className="badge-icon">✨</span>
            MY EXPERTISE
            <span className="badge-sparkle"></span>
          </span>
          <h2 className="skills-title">Skills</h2>
          <p className="skills-subtitle">
            A structured view of core strengths across coordination, operations, reporting and productivity tools.
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-diamond"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category-card ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-glow" style={{ background: `radial-gradient(circle, ${category.color}20, transparent)` }}></div>
              
              <div className="card-header">
                <div className="card-number-wrapper">
                  <span className="card-number">{category.number}</span>
                  <div className="number-line"></div>
                </div>
                <div className="card-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-subtitle">{category.subtitle}</p>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag" style={{ '--i': skillIndex }}>
                      <span className="tag-icon">▹</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="card-progress" style={{ background: category.color }}></div>
              <div className="card-corner corner-tl"></div>
              <div className="card-corner corner-br"></div>
            </div>
          ))}
        </div>

        {/* Extra Skills Section */}
        <div className={`extra-skills ${isVisible ? 'animate' : ''}`}>
          <div className="extra-header">
            <span className="extra-badge">⚡ ADDITIONAL</span>
            <h3 className="extra-title">Other Technologies & Tools</h3>
          </div>
          <div className="extra-skills-grid">
            {["Python", "Java", "C#", "Django", "Flask", "TensorFlow", "Figma", "Jira", "Slack", "Notion", "Jenkins", "Kubernetes"].map((skill, i) => (
              <div key={i} className="extra-skill-item" style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="extra-skill-icon">✦</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Decoration */}
      <div className="skills-scroll-decoration">
        <div className="scroll-dot"></div>
        <div className="scroll-dot"></div>
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default Skills;