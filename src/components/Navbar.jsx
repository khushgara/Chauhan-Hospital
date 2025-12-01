import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                <path d="M20 10v20M10 20h20" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#0066cc" />
                    <stop offset="100%" stopColor="#00a8a8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="logo-text">MediCare Hospital</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar-menu desktop-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/doctors" className="nav-link">Doctors</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>

          {/* CTA Button */}
          <div className="navbar-actions desktop-actions">
            <Link to="/appointments" className="btn btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-menu-list">
            <li><Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className="mobile-nav-link" onClick={closeMenu}>About</Link></li>
            <li><Link to="/services" className="mobile-nav-link" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/doctors" className="mobile-nav-link" onClick={closeMenu}>Doctors</Link></li>
            <li><Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link></li>
            <li>
              <Link to="/appointments" className="btn btn-primary" onClick={closeMenu}>
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
