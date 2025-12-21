import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title animate-fadeIn">Contact Us</h1>
          <p className="page-subtitle animate-slideInLeft">
            Get in touch with us for appointments, inquiries, or feedback
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                We're here to help and answer any question you might have. 
                We look forward to hearing from you.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>A 7,8, Meena Wala -Sirsi Rd, Janakpuri II, Panchyawala<br />Jaipur, Rajasthan 302034</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>Main: <a href="tel:9610005141" style={{color: 'inherit'}}>96100 05141</a><br />Emergency: <a href="tel:9610005141" style={{color: 'inherit'}}>96100 05141</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p><a href="mailto:Pushpendrachouhan900@gmail.com" style={{color: 'inherit'}}>Pushpendrachouhan900@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Hours</h4>
                    <p>Emergency: 24/7<br />Outpatient: Mon-Fri 8AM-6PM<br />Saturday: 9AM-2PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder">
                <iframe 
                  src="https://maps.google.com/maps?q=26.9246065,75.7155826&hl=en&z=14&output=embed"
                  width="100%" 
                  height="250" 
                  style={{border:0, borderRadius: '8px'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p className="form-intro">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Department Contacts</h2>
            <p className="section-description">
              Direct lines to specific departments
            </p>
          </div>
          <div className="grid grid-3">
            <div className="department-card">
              <h4>Emergency Department</h4>
              <p>24/7 Emergency Services</p>
              <a href="tel:7850010759" className="department-phone">7850010759</a>
            </div>
            <div className="department-card">
              <h4>Appointments</h4>
              <p>Schedule your visit</p>
              <a href="tel:+15551234568" className="department-phone">96100 05141</a>
            </div>
            <div className="department-card">
              <h4>Patient Services</h4>
              <p>General inquiries</p>
              <a href="tel:+15551234567" className="department-phone">96100 05141</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
