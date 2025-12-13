import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import ReviewsSection from '../components/ReviewsSection';
import StatsSection from '../components/StatsSection';
import BlogSection from '../components/BlogSection';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: 'Cardiology',
      description: 'Expert heart care with advanced diagnostic and treatment facilities.',
      link: '/services',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      title: 'Neurology',
      description: 'Comprehensive neurological care for brain and nervous system disorders.',
      link: '/services',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5.5 8.5L9 12l-3.5 3.5L2 12l3.5-3.5zM12 2l3.5 3.5L12 9 8.5 5.5 12 2zM18.5 8.5L22 12l-3.5 3.5L15 12l3.5-3.5zM12 15l3.5 3.5L12 22l-3.5-3.5L12 15z" />
        </svg>
      ),
      title: 'Orthopedics',
      description: 'Advanced bone and joint care with modern surgical techniques.',
      link: '/services',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      qualification: 'MD, FACC',
      experience: 15,
    },
    {
      name: 'Dr. Michael Chen',
      specialization: 'Neurologist',
      qualification: 'MD, PhD',
      experience: 12,
    },
    {
      name: 'Dr. Emily Williams',
      specialization: 'Orthopedic Surgeon',
      qualification: 'MD, FAAOS',
      experience: 18,
    },
  ];



  return (
    <div className="home-page">
      <Hero />
      
      <StatsSection />

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive healthcare services delivered with excellence and compassion
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary btn-large">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Meet Our Doctors</h2>
            <p className="section-description">
              Experienced healthcare professionals dedicated to your well-being
            </p>
          </div>
          <div className="grid grid-3">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/doctors" className="btn btn-primary btn-large">
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Emergency Banner */}
      <section className="emergency-banner">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                <path d="M12 8v4M12 16h.01" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="emergency-text">
              <h3>24/7 Emergency Services</h3>
              <p>Our emergency department is always ready to provide immediate care</p>
            </div>
            <a href="tel:108" className="btn btn-secondary btn-large">
              Call Emergency: 108
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
