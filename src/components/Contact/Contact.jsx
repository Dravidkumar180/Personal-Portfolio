import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    alert(`Thank you, ${formData.name}! Your message has been sent. I'll get back to you soon.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: "✉️", label: "Email", value: "dravidkumar180@gmail.com" },
    { icon: "📍", label: "Location", value: "Bengaluru, Karnataka, India" },
    { icon: "⏱️", label: "Response time", value: "Usually within 1–2 business days" },
    { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/dravid-kumar" },
    { icon: "💻", label: "GitHub", value: "github.com/dravidkumar180" }
  ];

  return (
    <section id="contact" className="contact-section-v2" ref={sectionRef}>
      {/* Premium Dark Background */}
      <div className="contact-bg"></div>
      <div className="contact-bg-gradient"></div>
      <div className="contact-bg-noise"></div>
      
      {/* Animated Orbs */}
      <div className="contact-orbs">
        <div className="contact-orb contact-orb1"></div>
        <div className="contact-orb contact-orb2"></div>
        <div className="contact-orb contact-orb3"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="contact-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="contact-particle" style={{
            animationDelay: `${i * 0.2}s`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Twinkling Stars */}
      <div className="contact-stars">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="contact-star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>

      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'animate' : ''}`}>
          <div className="contact-header-glow"></div>
          <h2 className="contact-title">GET IN TOUCH</h2>
          <p className="contact-subtitle">
            Let's turn a conversation into something meaningful. If you have an opportunity, 
            collaboration idea, or just want to say hello, send a message through the form 
            and it will reach the portfolio owner directly.
          </p>
          <div className="contact-divider"></div>
        </div>

        <div className="contact-grid">
          {/* Left Side - Contact Info */}
          <div className={`contact-info ${isVisible ? 'animate' : ''}`}>
            {contactInfo.map((info, index) => (
              <div key={index} className={`contact-info-card ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="contact-info-icon">{info.icon}</div>
                <div className="contact-info-details">
                  <h4 className="contact-info-label">{info.label}</h4>
                  <p className="contact-info-value">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className={`contact-form-wrapper ${isVisible ? 'animate' : ''}`}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="input-focus-line"></div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="input-focus-line"></div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  className="form-input" 
                  placeholder="Project, collaboration, or message subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <div className="input-focus-line"></div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  name="message" 
                  className="form-textarea" 
                  placeholder="Write your message here..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="input-focus-line"></div>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="contact-scroll">
        <div className="contact-scroll-line"></div>
        <div className="contact-scroll-text">CONNECT</div>
      </div>
    </section>
  );
};

export default Contact;