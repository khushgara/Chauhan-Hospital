import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import './Doctors.css';

const Doctors = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiology',
      qualification: 'MD, FACC',
      experience: 15,
    },
    {
      name: 'Dr. Michael Chen',
      specialization: 'Neurology',
      qualification: 'MD, PhD',
      experience: 12,
    },
    {
      name: 'Dr. Emily Williams',
      specialization: 'Orthopedics',
      qualification: 'MD, FAAOS',
      experience: 18,
    },
    {
      name: 'Dr. James Anderson',
      specialization: 'Pediatrics',
      qualification: 'MD, FAAP',
      experience: 10,
    },
    {
      name: 'Dr. Lisa Martinez',
      specialization: 'Cardiology',
      qualification: 'MD, FACC',
      experience: 14,
    },
    {
      name: 'Dr. Robert Taylor',
      specialization: 'General Surgery',
      qualification: 'MD, FACS',
      experience: 20,
    },
    {
      name: 'Dr. Jennifer Lee',
      specialization: 'Obstetrics',
      qualification: 'MD, FACOG',
      experience: 13,
    },
    {
      name: 'Dr. David Brown',
      specialization: 'Oncology',
      qualification: 'MD, FASCO',
      experience: 16,
    },
    {
      name: 'Dr. Maria Garcia',
      specialization: 'Radiology',
      qualification: 'MD, FACR',
      experience: 11,
    },
  ];

  const specializations = [
    'all',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'General Surgery',
    'Obstetrics',
    'Oncology',
    'Radiology',
  ];

  const filteredDoctors = selectedSpecialization === 'all'
    ? doctors
    : doctors.filter(doctor => doctor.specialization === selectedSpecialization);

  return (
    <div className="doctors-page">
      {/* Hero Section */}
      <section className="doctors-hero">
        <div className="container">
          <h1 className="page-title animate-fadeIn">Our Medical Team</h1>
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
              <button className="btn btn-primary btn-large">
                View Career Opportunities
              </button>
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
