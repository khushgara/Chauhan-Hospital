import React, { useEffect } from 'react';
import './LegalPages.css';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Chauhan Hospitals";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="page-title">Terms of Service</h1>
        <p className="last-updated">Last Updated: December 27, 2025</p>

        <section className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Chauhan Hospitals website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Medical Disclaimer</h2>
          <div className="alert-box warning">
            <strong>Important:</strong> The content on this website is for informational purposes only and is NOT a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition.
          </div>
        </section>

        <section className="legal-section">
          <h2>3. Emergency Disclaimer</h2>
          <p>
            <strong>IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, CALL OUR EMERGENCY NUMBER (7850010759) OR GO TO THE NEAREST EMERGENCY ROOM IMMEDIATELY.</strong> Do not rely on this website for immediate medical assistance.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Appointments and Cancellations</h2>
          <ul>
            <li>Appointments are subject to doctor availability.</li>
            <li>We request you to arrive at least 15 minutes before your scheduled time.</li>
            <li>If you need to cancel or reschedule, please contact us at least 24 hours in advance.</li>
            <li>The hospital reserves the right to reschedule appointments in case of emergency duties required by the doctor.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes. You are prohibited from:</p>
          <ul>
            <li>Providing false or misleading information.</li>
            <li>Interfering with the website's security or functionality.</li>
            <li>Harassing staff or other patients.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            Chauhan Hospitals shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our website or inability to use the services, to the fullest extent permitted by Indian law.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Service are governed by the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in Jaipur, Rajasthan.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Contact Information</h2>
          <p>For any questions regarding these terms, please contact us at:</p>
          <address>
            <strong>Chauhan Hospital</strong><br />
            Email: Chauhanhospital050@gmail.com<br />
            Phone: 96100 05141
          </address>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
