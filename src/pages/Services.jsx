import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showSeoContent, setShowSeoContent] = useState(false);

  React.useEffect(() => {
    // Update Title
    document.title = "Multispecialty Hospital in Jaipur - General, Emergency, Cardiology & Cancer Care | Chauhan Hospitals";

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Looking for a specialist hospital near me? Chauhan Hospitals is the best hospital near you in Jaipur, offering expert specialists, emergency care & multispecialty services.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }
  }, []);

  const services = [
    {
      category: 'medicine',
      title: 'Medicine and Diabetology',
      description: 'Comprehensive care for diabetes management and general medicine, focusing on long-term health and disease prevention.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      category: 'dermatology',
      title: 'Skin Diseases and Cosmetology',
      description: 'Advanced treatment for skin conditions and cosmetic procedures including hair transplants and aesthetic enhancements.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
    },
    {
      category: 'cardiology',
      title: 'Heart Diseases and Cardiology',
      description: 'Expert cardiac care tailored to heart diseases, ensuring great precision in diagnosis and rehabilitation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
    },
    {
      category: 'surgery',
      title: 'General and Laparoscopic Surgery',
      description: 'Minimally invasive and general surgical procedures performed by expert surgeons for faster recovery and better outcomes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
    },
    {
      category: 'gastro',
      title: 'Gastroenterology and Orthopedics',
      description: 'Specialized care for digestive system disorders and comprehensive orthopedic treatments for bone and joint health.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      category: 'ent',
      title: 'ENT (Ear, Nose, Throat)',
      description: 'Diagnosis and treatment for disorders related to the ear, nose, throat, and head & neck regions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a5 5 0 015 5v3a5 5 0 01-5 5 5 5 0 01-5-5V7a5 5 0 015-5z" />
          <path d="M19 11v2a7 7 0 01-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="8" y1="22" x2="16" y2="22" />
        </svg>
      ),
    },
    {
      category: 'nephrology',
      title: 'Nephrology and Urology',
      description: 'Comprehensive care for kidney diseases and urinary tract disorders, including dialysis services.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      ),
    },
    {
      category: 'gynecology',
      title: 'Obstetrics and Gynecology (Women’s Health)',
      description: 'Complete care for women’s health, including maternity services, gynecological surgeries, and reproductive health.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      category: 'pediatrics',
      title: 'Neonatology and Pediatrics',
      description: 'Specialized medical care for newborns, infants, children, and adolescents, including NICU and PICU facilities.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      category: 'physio',
      title: 'Physiotherapy',
      description: 'Rehabilitation services to restore movement and function through expert physical therapy and exercises.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      category: 'neurology',
      title: 'Neurology',
      description: 'Diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and nerves.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
    },
    {
      category: 'dental',
      title: 'Dental and Maxillofacial Surgery',
      description: 'Comprehensive dental care and surgical treatment for diseases, injuries, and defects of the face and jaws.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a4 4 0 00-4 4v9a4 4 0 008 0V6a4 4 0 00-4-4z" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
    {
      category: 'oncology',
      title: 'Cancer Care',
      description: 'Dedicated oncology services for cancer diagnosis, treatment planning, and compassionate care.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'medicine', name: 'Medicine' },
    { id: 'surgery', name: 'Surgery' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'specialty', name: 'Specialties' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title animate-fadeIn">Comprehensive Medical Services at Our Multispecialty Hospital in Jaipur</h1>
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
            <h2 className="section-title">Why Choose Chauhan Hospital?</h2>
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

      {/* SEO Content Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="seo-content">
            <h2 className="section-title text-center mb-4">Our Medical Services at Chauhan Hospitals</h2>
            <p className="mb-4">
              Chauhan Hospitals is a multi-specialty healthcare provider that people can rely on in Jaipur. The hospital offers advanced and comprehensive medical services in a single location. Our hospital, which is equipped with experienced doctors, the latest technology, and a care approach that puts the patient first, is made to satisfy both normal and emergency healthcare needs. As one of the top private hospitals in the area, we are committed to precision, safety, and compassionate care.
            </p>
            <p className="mb-4">
              Patients in need of a reliable medical centre near me can go to Chauhan Hospitals, which is a multi-disciplinary hospital offering a wide range of services from emergency care to advanced surgical and diagnostic services. If you require only preventive care or heavy medical treatment, our team will provide you with the consultation on time, doctor appointments scheduling will be easy and your healthcare experience will be flawless.
            </p>

            {!showSeoContent && (
              <div className="text-center mt-3">
                <button 
                  onClick={() => setShowSeoContent(true)}
                  className="btn btn-link text-primary font-weight-bold"
                  style={{ textDecoration: 'none', fontSize: '1.1rem' }}
                >
                  Read More
                </button>
              </div>
            )}

            {showSeoContent && (
              <>
                <h2 className="section-title text-center mb-4 mt-5 animate-fadeIn">Patient-Centered Healthcare You Can Trust</h2>
                <p className="mb-4 animate-fadeIn">
                  Chauhan Hospitals is a trustworthy medical service provider and is honest with its patients. Booking a doctor appointment, getting specialist consultations, and receiving coordinated care are some of the services that patients can avail themselves of without facing any delays. For those looking for the best private hospitals or a trustworthy medical centre near me, Chauhan Hospitals is a great option for quality healthcare.
                </p>
                <p className="mb-4 animate-fadeIn">
                  We are still Jaipur’s and the surrounding areas’ excellent and honest healthcare providers because we have modern infrastructure, skilled experts and a patient-oriented philosophy—making a positive difference in patient’s lives through our services.
                </p>

                <div className="text-center mt-4">
                  <button 
                    onClick={() => setShowSeoContent(false)}
                    className="btn btn-link text-secondary"
                    style={{ textDecoration: 'none' }}
                  >
                    Read Less
                  </button>
                </div>
              </>
            )}


          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
