import React, { useEffect, useRef, useState } from 'react';
import './Certifications.css';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCert, setActiveCert] = useState(0);
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

  const certs = [
    {
      id: "DAIN4435",
      tag: "DATA ANALYTICS",
      tagColor: "#7c5cfc",
      title: "Data Analytics Internship",
      year: "2024",
      period: "November 18th - December 26th",
      organization: "NoviTech R&D Private Limited",
      name: "DRAVID KUMAR",
      body: "This is to certify that Mr. DRAVID KUMAR has successfully completed the one month internship in Data Analytics from November 18th to December 26th at NoviTech R&D Private Limited. During this internship, he demonstrated exceptional skills in data processing, analysis, and visualization techniques.",
      skills: ["Data Analytics", "Data Processing", "Data Visualization", "Statistical Analysis", "Python", "SQL"],
      credentialId: "DAIN4435",
      certificateUrl: "/dataAnalytics_certificate.pdf"
    }
  ];

  const handleViewCertificate = () => {
    // Create a temporary anchor element to trigger download/view
    const link = document.createElement('a');
    link.href = '/dataAnalytics_certificate.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="certifications-section-v2" ref={sectionRef}>
      {/* Premium Dark Background Layers */}
      <div className="cert-bg-primary"></div>
      <div className="cert-bg-gradient"></div>
      <div className="cert-bg-noise"></div>
      <div className="cert-bg-grid"></div>
      
      {/* Animated 3D Orbs */}
      <div className="cert-orbs">
        <div className="cert-orb cert-orb1"></div>
        <div className="cert-orb cert-orb2"></div>
        <div className="cert-orb cert-orb3"></div>
        <div className="cert-orb cert-orb4"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="cert-particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="cert-particle" style={{
            animationDelay: `${i * 0.15}s`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${7 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Twinkling Stars */}
      <div className="cert-stars">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="cert-star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${2 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      {/* Animated Scanning Lines */}
      <div className="cert-scanlines">
        <div className="cert-scan-horizontal"></div>
        <div className="cert-scan-vertical"></div>
      </div>

      <div className="cert-container">
        <div className={`cert-header ${isVisible ? 'animate' : ''}`}>
          <div className="cert-header-glow"></div>
          {/* <span className="cert-badge">
            <span className="cert-badge-icon">🏆</span>
            MY CREDENTIALS
            <span className="cert-badge-sparkle"></span>
            <span className="cert-badge-sparkle2"></span>
          </span> */}
          <h2 className="cert-title">
            <span className="cert-title-main">Certifications</span>
            <span className="cert-title-shine"></span>
          </h2>
          <p className="cert-subtitle">
            A modular certification layout designed to scale cleanly as new credentials are added over time.
          </p>
          <div className="cert-divider">
            <span className="cert-divider-line"></span>
            <span className="cert-divider-diamond"></span>
            <span className="cert-divider-line"></span>
          </div>
        </div>

        <div className="cert-layout">
          {/* Certificate List - Left Sidebar */}
          <div className={`cert-list ${isVisible ? 'animate' : ''}`}>
            {certs.map((cert, index) => (
              <div
                key={index}
                className={`cert-list-item ${activeCert === index ? 'active' : ''}`}
                onClick={() => setActiveCert(index)}
              >
                <div className="cert-list-tag" style={{ background: cert.tagColor }}>
                  {cert.tag}
                </div>
                <div className="cert-list-title">{cert.title}</div>
                <div className="cert-list-year">{cert.year}</div>
                <div className="cert-list-hover-effect" style={{ background: cert.tagColor }}></div>
                <div className="cert-list-glow" style={{ background: `radial-gradient(circle, ${cert.tagColor}20, transparent)` }}></div>
              </div>
            ))}
          </div>

          {/* Certificate Detail - Right Content */}
          <div className={`cert-detail ${isVisible ? 'animate' : ''}`}>
            {certs.map((cert, index) => (
              <div key={index} className={`cert-detail-content ${activeCert === index ? 'active' : ''}`}>
                {/* Certificate Badge */}
                <div className="cert-detail-header">
                  <span className="cert-detail-tag" style={{ background: cert.tagColor }}>
                    {cert.tag}
                  </span>
                  <span className="cert-detail-status">
                    <span className="status-dot"></span>
                    COMPLETED
                  </span>
                </div>
                
                {/* Year */}
                <div className="cert-detail-year">
                  <span className="year-icon">📅</span>
                  {cert.year}
                </div>
                
                {/* Period */}
                <div className="cert-detail-period">
                  <span className="period-icon">⏱️</span>
                  {cert.period}
                </div>
                
                {/* Title */}
                <h3 className="cert-detail-title">{cert.title}</h3>
                
                {/* Organization */}
                <div className="cert-detail-organization">
                  <span className="org-icon">🏢</span>
                  {cert.organization}
                </div>
                
                {/* Credential ID */}
                <div className="cert-detail-id">
                  <span className="id-icon">🆔</span>
                  Credential ID: {cert.credentialId}
                </div>
                
                {/* Certificate Recipient */}
                <div className="cert-detail-recipient">
                  <span className="recipient-icon">👨‍🎓</span>
                  Certified: <strong>{cert.name}</strong>
                </div>
                
                {/* Description */}
                <p className="cert-detail-body">{cert.body}</p>
                
                {/* Skills Tags */}
                <div className="cert-detail-skills">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-skill-tag">
                      <span className="skill-dot"></span>
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="cert-detail-actions">
                  <button className="cert-view-btn" onClick={handleViewCertificate}>
                    <span>View Certificate</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </button>
                  <span className="cert-credential-note">Credential available on request</span>
                </div>
                
                {/* Decorative Elements */}
                <div className="cert-detail-bg-pattern"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="cert-scroll">
        <div className="cert-scroll-ring"></div>
        <div className="cert-scroll-mouse">
          <div className="cert-scroll-wheel"></div>
        </div>
        <div className="cert-scroll-text">CERTIFICATIONS</div>
      </div>
    </section>
  );
};

export default Certifications;