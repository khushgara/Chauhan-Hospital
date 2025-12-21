import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import './Doctors.css';

import drMahendra from '../assets/dr-mahendra.jpg';
import drPushpendra from '../assets/dr-pushpendra.jpg';
import drRajkumar from '../assets/dr-rajkumar-v2.jpg';
import drMadhu from '../assets/dr-madhu.jpg';
import drShailendra from '../assets/dr-shailendra.jpg';

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

  const doctors = [
    {
      name: 'Dr. Mahendra Kumar Sharma',
      specialization: 'General Surgery',
      qualification: 'Senior Consultant Surgeon, Alumnus SMS Medical College',
      experience: '35+',
      image: drMahendra,
      description: 'Led by Dr. Mahendra Kumar Sharma, Senior Consultant Surgeon with 35+ years of experience. We offer safe, ethical, and advanced surgical care for elective and emergency cases, following strict safety protocols and patient-focused treatment.',
      expertise: [
        'Exploratory Laparotomy',
        'Appendectomy',
        'Laparoscopic Cholecystectomy',
        'Piles (Hemorrhoids) Surgery',
        'Fissure-in-Ano Surgery',
        'Hysteroscopic Surgery',
        'Trauma & Emergency Surgery'
      ]
    },
    {
      name: 'Dr. Pushpendra Singh Chauhan',
      specialization: 'Internal Medicine',
      qualification: 'MBBS, M.D (Medicine)',
      experience: '10+',
      image: drPushpendra,
      description: 'Dr. Pushpendra Singh Chauhan provides advanced, guideline-based medical treatment with a focus on accurate diagnosis, long-term disease control, and preventive healthcare. Known for ethical practice and comprehensive care.',
      expertise: [
        'Heart Disease Management',
        'Diabetes & Hypertension',
        'Thyroid Disorders',
        'Obesity & Lifestyle Diseases',
        'Gout & Rheumatoid Arthritis',
        'Infectious Diseases'
      ]
    },
    {
      name: 'Dr. Rajkumar',
      specialization: 'Urology',
      qualification: 'Consultant Urologist',
      experience: '12+',
      image: drRajkumar,
      description: 'Dr. Rajkumar is a skilled Urology specialist providing advanced diagnosis and treatment for kidney, bladder, prostate, and urinary tract disorders. He focuses on safe, effective, and patient-centric care.',
      expertise: [
        'Kidney Stone Treatment',
        'Prostate Disorders (BPH)',
        'Urinary Tract Infections (UTI)',
        'Bladder & Urinary Problems',
        'Minimally Invasive Urology'
      ]
    },
    {
      name: 'Dr. Madhu Chauhan',
      specialization: 'Critical Care & Emergency',
      qualification: 'Critical Care & Emergency In-Charge',
      experience: '10+',
      image: drMadhu,
      description: 'Dr. Madhu Chauhan leads the Critical Care and Emergency Department, providing 24×7 emergency management and intensive care services. She ensures rapid decision-making and patient safety.',
      expertise: [
        'Emergency Medicine',
        'Critical Care Management',
        'ICU & Ventilator Care',
        'Trauma Stabilization',
        'Acute Life-Saving Interventions'
      ]
    },
    {
      name: 'Dr. Shailendra Singh Chauhan',
      specialization: 'Critical Care & Trauma',
      qualification: 'IDDCM (Critical Care & Trauma)',
      experience: '8+',
      image: drShailendra,
      description: 'Dr. Shailendra Singh Chauhan is a specialist in Critical Care and Trauma management, dedicated to providing immediate and effective care for life-threatening conditions.',
      expertise: [
        'Trauma Management',
        'Advanced Critical Care',
        'Emergency Resuscitation',
        'Polytrauma Care'
      ]
    },
  ];

  const specializations = [
    'all',
    'General Surgery',
    'Internal Medicine',
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
