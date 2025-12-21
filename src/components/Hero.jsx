import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import logo from '../assets/LOGO.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fadeIn">
              Best Multispecialty Public Hospital in Jaipur
            </h1>
            <p className="hero-description animate-slideInLeft">
              Looking for a specialist hospital near me? Chauhan Hospitals is the best hospital near you in Jaipur, offering expert specialists, emergency care & multispecialty services.
            </p>
            <div className="hero-buttons animate-slideInLeft">
              <Link to="/appointments" className="btn btn-primary btn-large">
                Book Appointment
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large">
                Our Services
              </Link>
            </div>
            <div className="hero-features">
              <div className="hero-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>24/7 Emergency Care</span>
              </div>
              <div className="hero-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
                <span>Expert Doctors</span>
              </div>
              <div className="hero-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
                <span>Trusted Care</span>
              </div>
            </div>
          </div>
          <div className="hero-image animate-float">
            <div className="hero-image-card">
              {/* <svg viewBox="0 0 400 400" fill="none">
                <rect width="400" height="400" rx="20" fill="url(#heroGradient)"/>
                <circle cx="200" cy="180" r="60" fill="white" opacity="0.2"/>
                <path d="M200 140v80M160 180h80" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                <rect x="120" y="280" width="160" height="80" rx="10" fill="white" opacity="0.2"/>
                <defs>
                  <linearGradient id="heroGradient" x1="0" y1="0" x2="400" y2="400">
                    <stop offset="0%" stopColor="#0066cc"/>
                    <stop offset="100%" stopColor="#00a8a8"/>
                  </linearGradient>
                </defs>
              </svg> */}
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
