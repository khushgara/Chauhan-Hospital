
import React, { useState } from 'react';
import './About.css';
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';
import about3 from '../assets/about-3.jpg';
import about4 from '../assets/about-4.jpg';


const About = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: about1, alt: "Hospital Building" },
    { src: about2, alt: "Medical Facility" },
    { src: about3, alt: "Patient Care" },
    { src: about4, alt: "Medical Team" },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // AND I need to replace the Gallery section to use the click handlers.
  // AND I need to add the Lightbox modal at the end.
  
  // Since I can't do multiple replacements easily in one go if they are far apart without `multi_replace_file_content` which I SHOULD use here to be safe and clean.
  
  // I will Cancel this `replace_file_content` and use `multi_replace_file_content` instead.



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
    'General Medicine',
    'Orthopedics',
    'General Surgery',
    'Pediatrics',
    'Obstetrics & Gynecology',
    'Pharmacy',
    'Laboratory Services',
    'Dental & Cosmetic Care',
    'Critical Care & Trauma Center',
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title animate-fadeIn">About Chauhan Hospital</h1>
          <p className="page-subtitle animate-slideInLeft">
            Dedicated to Excellence in Healthcare Since 2001
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
                Established in 2001, Chauhan Hospital has been a pillar of healthcare in the community for over two decades. 
                What began with a vision to provide accessible and quality medical care has grown into a premier healthcare institution. 
                Our journey is marked by trust, dedication, and an unwavering commitment to patient well-being.
              </p>
              <p>
                From our humble beginnings, we have expanded our services to include specialized departments such as 
                Medicine, Orthopedics, General Surgery, and Pediatrics. Our facility now boasts a modern Pharmacy, 
                advanced Laboratory, and specialized units for Dental & Cosmetic care, as well as a fully equipped 
                Critical Care and Trauma center.
              </p>
              <p>
                Today, Chauhan Hospital stands as a symbol of excellence, combining experienced medical professionals 
                with compassionate care to serve thousands of families in Jaipur and surrounding areas.
              </p>
            </div>
            <div className="history-images-grid">
              <img src={about1} alt="Hospital Building" className="about-img main-img" />
              <div className="sub-images">
                <img src={about2} alt="Medical Facility" className="about-img" />
                <img src={about3} alt="Hospital Services" className="about-img" />
                <img src={about4} alt="Medical Team" className="about-img" />
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
            {[
              '24×7 Emergency Services',
              'Medical ICU, Neonatal ICU (NICU), Surgical ICU (SICU)',
              'Pediatric ICU (PICU) and Surgical ICU',
              'Digital X-Ray',
              '4D Sonography',
              'Dialysis',
              'Endoscopy',
              'Physiotherapy',
              'Cosmetology and Hair Transplant',
              'Dietician and Nutritionist',
              '24×7 Pharmacy',
              'Critical Care and Trauma'
            ].map((facility, index) => (
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

      {/* Government & Insurance Schemes */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Government & Insurance Schemes</h2>
            <p className="section-description">
              We accept various government schemes to make healthcare accessible
            </p>
          </div>
          <div className="grid grid-3 text-center">
            <div className="card">
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Ayushman Bharat</h3>
              <p>Health Scheme Accepted</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>RGHS</h3>
              <p>Rajasthan Government Health Scheme</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>TPA Approved</h3>
              <p>All TPA Approved Hospital</p>
            </div>
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

      {/* Gallery Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Gallery</h2>
            <p className="section-description">
              A glimpse into our world-class facilities and compassionate care
            </p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
            <button className="lightbox-nav prev" onClick={prevImage}>&#10094;</button>
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].alt} 
              className="lightbox-image"
            />
            <button className="lightbox-nav next" onClick={nextImage}>&#10095;</button>
            <div className="lightbox-caption">
              {galleryImages[currentImageIndex].alt} ({currentImageIndex + 1}/{galleryImages.length})
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
