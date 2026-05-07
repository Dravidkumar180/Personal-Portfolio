import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(name.toLowerCase());
    setMobileOpen(false);
  };

  const handleLogin = () => {
    alert('Login functionality - Connect your backend!');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      let current = 'home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActiveSection(current);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo Section */}
          <a className="nav-logo" href="#home" onClick={(e) => handleNavClick(e, '#home', 'Home')}>
            <div className="logo-wrapper">
              <div className="logo-ring"></div>
              <div className="logo-circle">
                <span className="logo-text">DK</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-center">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeSection === item.name.toLowerCase() ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
              >
                <span className="nav-link-text">{item.name}</span>
                <span className="nav-link-bg"></span>
              </a>
            ))}
          </div>

          {/* Right Section - Theme Toggle & Login */}
          <div className="nav-right">
            {/* <button className="theme-toggle-btn" onClick={toggleTheme}>
              <span className="theme-toggle-icon">
                {theme === 'dark' ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon"></i>
                )}
              </span>
              <span className="theme-toggle-text">
                {theme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>
             */}
            {/* <button className="login-btn" onClick={handleLogin}>
              <i className="fas fa-user-circle"></i>
              <span>Login</span>
            </button> */}
            
            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
              <div className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="mobile-logo">
            <div className="logo-circle small">DK</div>
            <span>Dravid Kumar</span>
          </div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="mobile-nav-links">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.name.toLowerCase() ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href, item.name)}
            >
              <span className="mobile-nav-icon">
                {item.name === 'Home' && <i className="fas fa-home"></i>}
                {item.name === 'About' && <i className="fas fa-user"></i>}
                {item.name === 'Skills' && <i className="fas fa-code"></i>}
                {item.name === 'Highlights' && <i className="fas fa-star"></i>}
                {item.name === 'Experience' && <i className="fas fa-briefcase"></i>}
                {item.name === 'Education' && <i className="fas fa-graduation-cap"></i>}
                {item.name === 'Certifications' && <i className="fas fa-certificate"></i>}
                {item.name === 'Contact' && <i className="fas fa-envelope"></i>}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
        <div className="mobile-nav-footer">
          <button className="mobile-login-btn" onClick={handleLogin}>
            <i className="fas fa-user-circle"></i>
            <span>Login</span>
          </button>
          <button className="mobile-theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <><i className="fas fa-sun"></i><span>Light Mode</span></>
            ) : (
              <><i className="fas fa-moon"></i><span>Dark Mode</span></>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;