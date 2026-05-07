import React, { useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Highlights", href: "#highlights" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section" ref={footerRef}>
      {/* Dark Background */}
      <div className="footer-bg"></div>
      <div className="footer-bg-gradient"></div>
      
      {/* Animated Particles */}
      <div className="footer-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="footer-particle" style={{
            animationDelay: `${i * 0.2}s`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 8}s`
          }}></div>
        ))}
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Left Section - Name & Title */}
          <div className="footer-brand">
            <h2 className="footer-name">Dravid Kumar M</h2>
            <p className="footer-title">Software Developer & Automation Engineer</p>
            <div className="footer-divider"></div>
            <p className="footer-copyright">
              © 2025 Dravid Kumar M. All rights reserved.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <span className="footer-contact-text">+91 83008 34860</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <span className="footer-contact-text">dravidkumar180@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <span className="footer-contact-text">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-line"></div>
          <p className="footer-bottom-text">
            Built with <span className="footer-heart">♥</span> by Dravid Kumar M
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;