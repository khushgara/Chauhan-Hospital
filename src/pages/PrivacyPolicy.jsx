import React, { useEffect } from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Chauhan Hospitals";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="last-updated">Last Updated: December 27, 2025</p>

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Chauhan Hospitals ("we," "our," or "us"). We are committed to protecting the privacy and security of your personal and medical information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our healthcare services, in compliance with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, age, gender, address, phone number, email address, and emergency contact details.</li>
            <li><strong>Medical Information:</strong> Medical history, prescriptions, diagnostic reports, treatment details, and other health-related information ("Sensitive Personal Data or Information").</li>
            <li><strong>Payment Information:</strong> Billing details, insurance information, and transaction history.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, and operating system when you visit our website.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide medical diagnosis, treatment, and patient care.</li>
            <li>To schedule appointments and send reminders.</li>
            <li>To process billing and insurance claims.</li>
            <li>To comply with legal and regulatory requirements.</li>
            <li>To improve our services and website functionality.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Disclosure of Information</h2>
          <p>We do not sell or rent your personal information. We may disclose your information to:</p>
          <ul>
            <li><strong>Healthcare Professionals:</strong> Doctors, nurses, and technicians involved in your care.</li>
            <li><strong>Third-Party Service Providers:</strong> Labs, pharmacies, and insurance companies as necessary for your treatment.</li>
            <li><strong>Legal Authorities:</strong> When required by law, court order, or government regulation.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security practices and procedures to protect your information from unauthorized access, loss, or misuse. However, no data transmission over the internet or electronic storage is completely secure.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and review your medical records (subject to hospital policy).</li>
            <li>Request corrections to your personal information.</li>
            <li>Withdraw consent for data processing (which may affect our ability to provide services).</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Grievance Officer</h2>
          <p>
            In accordance with the IT Act 2000, if you have any grievances regarding our privacy practices, please contact:
          </p>
          <address>
            <strong>Chauhan Hospital</strong><br />
            A 7,8, Meena Wala -Sirsi Rd, Janakpuri II, Panchyawala<br />
            Jaipur, Rajasthan 302034<br />
            Email: Chauhanhospital050@gmail.com<br />
            Phone: 96100 05141
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
