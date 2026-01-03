import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import './Doctors.css';

// Images now imported in data/doctors.js

import { doctors } from '../data/doctors';

const Doctors = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  React.useEffect(() => {
    // Update Title
    document.title = "Top Rated Doctors & Medical Staff in Jaipur | Chauhan Hospitals";

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Find the best doctors in Jaipur at Chauhan Hospitals. Consult top doctors and top-rated medical doctors near you for trusted, expert healthcare.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }
  }, []);

  const specializations = [
    'all',
    'General Surgery',
    'Internal Medicine',
    'Oral & Cosmetic Surgeon',
    'Urology',
    'Critical Care & Emergency',
  ];

  const filteredDoctors = selectedSpecialization === 'all'
    ? doctors
    : doctors.filter(doctor => doctor.specialization === selectedSpecialization);

  return (
    <div className="doctors-page">
      {/* Hero Section */}
      <section className="doctors-hero">
        <div className="container">
          <h1 className="page-title animate-fadeIn">Meet The Best Doctors Near You at Chauhan Hospital</h1>
          <p className="page-subtitle animate-slideInLeft">
            Meet our experienced and dedicated healthcare professionals
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section">
        <div className="container">
          {/* Specialization Filter */}
          <div className="specialization-filter">
            <label htmlFor="specialization">Filter by Specialization:</label>
            <select
              id="specialization"
              className="form-select"
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec === 'all' ? 'All Specializations' : spec}
                </option>
              ))}
            </select>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-3">
            {filteredDoctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="no-results">
              <p>No doctors found for the selected specialization.</p>
            </div>
          )}
        </div>
      </section>




      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Medical Team</h2>
          <div className="grid grid-4 text-center">
            {[
              { name: 'Dr. Rajkumar', qualification: 'Consultant Urologist' },
              { name: 'Dr. Naveen', qualification: 'MBBS, MS (Orthopedics, Orthoscopy)' },

              { name: 'Dr. Madhu Chauhan', qualification: 'MBBS' }
            ].map((doc, index) => (
              <div key={index} className="medical-team-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}
              >
                {doc.image ? (
                   <img 
                    src={doc.image} 
                    alt={doc.name} 
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 1.5rem',
                      boxShadow: '0 4px 10px rgba(0,102,204,0.2)',
                      border: '3px solid white'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: '#0066cc',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(0,102,204,0.2)'
                  }}>
                    {doc.name.split(' ')[1][0]}
                  </div>
                )}
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '0.5rem', 
                  color: 'var(--text-dark)',
                  fontWeight: '600'
                }}>
                  {doc.name}
                </h3>
                <p style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '0.9rem', 
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {doc.qualification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="join-team-card">
            <div className="join-team-content">
              <h2>Join Our Medical Team</h2>
              <p>
                We are always looking for talented and compassionate healthcare professionals 
                to join our team. If you're passionate about making a difference in patients' 
                lives, we'd love to hear from you.
              </p>
              <Link to="/contact" className="btn btn-primary btn-large">
                View Career Opportunities
              </Link>
            </div>
            <div className="join-team-icon">
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="100" fill="url(#teamGradient)" />
                <path d="M100 60v80M60 100h80" stroke="white" strokeWidth="8" strokeLinecap="round" />
                <defs>
                  <linearGradient id="teamGradient" x1="0" y1="0" x2="200" y2="200">
                    <stop offset="0%" stopColor="#0066cc" />
                    <stop offset="100%" stopColor="#00a8a8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
