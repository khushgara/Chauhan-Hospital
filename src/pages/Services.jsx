import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      category: 'cardiology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation.',
    },
    {
      category: 'neurology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      title: 'Neurology',
      description: 'Expert care for brain, spine, and nervous system disorders with advanced diagnostic capabilities.',
    },
    {
      category: 'orthopedics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5.5 8.5L9 12l-3.5 3.5L2 12l3.5-3.5zM12 2l3.5 3.5L12 9 8.5 5.5 12 2z" />
        </svg>
      ),
      title: 'Orthopedics',
      description: 'Advanced bone, joint, and musculoskeletal care with modern surgical techniques.',
    },
    {
      category: 'pediatrics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents with compassionate care.',
    },
    {
      category: 'emergency',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      ),
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response team and state-of-the-art trauma care.',
    },
    {
      category: 'radiology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      title: 'Radiology',
      description: 'Advanced imaging services including MRI, CT scan, X-ray, and ultrasound.',
    },
    {
      category: 'surgery',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: 'General Surgery',
      description: 'Comprehensive surgical services with minimally invasive techniques and expert surgeons.',
    },
    {
      category: 'maternity',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      title: 'Maternity & Obstetrics',
      description: 'Complete maternal and newborn care with modern delivery suites and NICU facilities.',
    },
    {
      category: 'oncology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: 'Oncology',
      description: 'Comprehensive cancer care with chemotherapy, radiation therapy, and supportive services.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'emergency', name: 'Emergency' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title animate-fadeIn">Our Medical Services</h1>
          <p className="page-subtitle animate-slideInLeft">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-3">
            {filteredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose MediCare?</h2>
            <p className="section-description">
              Excellence in healthcare delivery
            </p>
          </div>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Expert Medical Team</h3>
              <p>Highly qualified and experienced doctors across all specializations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3>Modern Equipment</h3>
              <p>State-of-the-art medical technology for accurate diagnosis and treatment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>24/7 Availability</h3>
              <p>Round-the-clock emergency services and patient care support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
