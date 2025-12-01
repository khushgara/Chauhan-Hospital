import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Excellence',
      description: 'Committed to providing the highest quality healthcare services.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      title: 'Compassion',
      description: 'Treating every patient with care, dignity, and respect.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in all we do.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: 'Teamwork',
      description: 'Collaborating to deliver comprehensive patient care.',
    },
  ];

  const facilities = [
    'State-of-the-art Operating Rooms',
    'Advanced Diagnostic Imaging',
    'Modern ICU and CCU Units',
    'Fully Equipped Emergency Department',
    'Comfortable Patient Rooms',
    'On-site Pharmacy',
    'Clinical Laboratory',
    'Rehabilitation Center',
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title animate-fadeIn">About MediCare Hospital</h1>
          <p className="page-subtitle animate-slideInLeft">
            Dedicated to Excellence in Healthcare Since 1999
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h2>Our Mission</h2>
              <p>
                To provide exceptional, patient-centered healthcare services that improve the 
                health and well-being of our community. We are committed to delivering 
                compassionate care with the highest standards of medical excellence.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the leading healthcare provider in the region, recognized for our 
                innovation, quality of care, and commitment to improving lives. We strive 
                to set new standards in medical excellence and patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <h2 className="section-title">Our History</h2>
              <p>
                Founded in 1999, MediCare Hospital has been serving the community for over 
                25 years. What started as a small clinic has grown into a comprehensive 
                healthcare facility with state-of-the-art equipment and a team of highly 
                skilled medical professionals.
              </p>
              <p>
                Throughout our journey, we have remained committed to our founding principles: 
                providing accessible, high-quality healthcare to all members of our community. 
                We have continuously invested in the latest medical technology and training 
                to ensure our patients receive the best possible care.
              </p>
              <p>
                Today, MediCare Hospital is proud to be a trusted healthcare partner for 
                thousands of families, offering a full range of medical services from 
                emergency care to specialized treatments.
              </p>
            </div>
            <div className="history-image">
              <div className="image-placeholder">
                <svg viewBox="0 0 400 300" fill="none">
                  <rect width="400" height="300" fill="url(#aboutGradient)" />
                  <circle cx="200" cy="150" r="80" fill="white" opacity="0.2" />
                  <path d="M200 110v80M160 150h80" stroke="white" strokeWidth="8" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="aboutGradient" x1="0" y1="0" x2="400" y2="300">
                      <stop offset="0%" stopColor="#0066cc" />
                      <stop offset="100%" stopColor="#00a8a8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-description">
              Modern infrastructure designed for optimal patient care
            </p>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Accreditations & Certifications</h2>
            <p className="section-description">
              Recognized for excellence in healthcare delivery
            </p>
          </div>
          <div className="accreditations">
            <div className="accreditation-badge">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <p>JCI Accredited</p>
            </div>
            <div className="accreditation-badge">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <p>ISO 9001:2015</p>
            </div>
            <div className="accreditation-badge">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <p>NABH Certified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
