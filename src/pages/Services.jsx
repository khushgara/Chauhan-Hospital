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
      category: 'cardiology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: 'Cardiology Services',
      description: 'Heart care is a must that only experts and with great precision can provide. Chauhan Hospitals is ranked among the best cardiology hospitals in Jaipur. We are the source of the First Aid, treatment, and rehabilitation of cardiac diseases. Our cardiology unit makes available diagnostic tools like ECG, echocardiography, cardiac risk assessments and offers a variety of treatments including hypertension, coronary artery disease, and other cardiovascular conditions.',
    },
    {
      category: 'neurology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      title: 'Neurology & Neuroscience Care',
      description: 'Our neurology department provides professional treatment for ailments of the brain, spine, and nervous system. In the event that a patient is looking for a nearby neurologist, he or she can get not only expert consultations but also diagnostic support at Chauhan Hospitals. Furthermore, we act as an all-inclusive neuroscience clinic, using a multidisciplinary approach to treating migraine, epilepsy, stroke recovery, and nerve disorders.',
    },
    {
      category: 'orthopedics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5.5 8.5L9 12l-3.5 3.5L2 12l3.5-3.5zM12 2l3.5 3.5L12 9 8.5 5.5 12 2z" />
        </svg>
      ),
      title: 'Orthopedics & Bone Care',
      description: 'As a reliable orthopedics hospital, Chauhan Hospitals provides treatment for bone, joint, and musculoskeletal conditions. Our orthopedic specialists manage fractures, arthritis, sports injuries, back pain, and joint disorders using both conservative and surgical methods. We emphasize mobility restoration, pain management, and rehabilitation to help patients regain strength and independence.',
    },
    {
      category: 'pediatrics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: 'Pediatrics Care',
      description: 'Our pediatric department provides comprehensive care for infants, children, and adolescents. Whether it\'s routine vaccinations, growth monitoring, or treatment for acute and chronic illnesses, our specialists ensure your child receives the best medical attention in a comforting environment.',
    },
    {
      category: 'emergency',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      ),
      title: '24×7 Emergency Care',
      description: 'Medical emergencies can strike out of the blue. Chauhan Hospitals acts, technologically, as a 24/7 hospital near me, giving emergency services around the clock, with trained doctors, nursing staff, and essential life-saving equipment. Our emergency department is up to the point with trauma cases, accidents, acute illnesses, and urgent medical situations, offering speed and efficiency.',
    },
    {
      category: 'radiology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      title: 'Radiology & Diagnostic Services',
      description: 'Accurate diagnosis is what treatment effectively rests upon. Among few radiology hospitals in Jaipur that can be trusted, Chauhan Hospitals is definitely one of them, providing a full range of cutting edge imaging and diagnostic services. Our radiology department is equipped with the latest technology to provide precise imaging for various specialties, thus, enabling the diagnosis to be very fast and the treatment to be more effective.',
    },
    {
      category: 'surgery',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: 'General Surgery',
      description: 'Our general surgery department is equipped to offer surgical care to treat various kinds of diseases, using up-to-date methods and adhering to security measures. Our surgeons are tireless in their efforts to lessen the recovery period and bring about the best results in minor, as well as, complex operations. in addition, the pre-operative examination and post operative care are done accurately.',
    },
    {
      category: 'maternity',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      title: 'Maternity & Obstetrics Care',
      description: 'At Chauhan Hospitals, we provide one stop maternity and obstetric services for the women who come to us at any phase of their pregnancy. Our team is offering antenatal care, delivery services with an emphasis on the safety of mother and the baby, postnatal support, and gynecological consultations as well.',
    },
    {
      category: 'oncology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: 'Oncology & Cancer Care',
      description: 'Our oncology section provides humane and organized cancer care through early diagnosis, treatment planning, and persistent medical support. We are committed to patient education, symptom management, and coordinated care to accompany individuals and families all along the treatment process.',
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
