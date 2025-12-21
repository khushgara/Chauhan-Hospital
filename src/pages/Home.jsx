import React, { useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import ReviewsSection from '../components/ReviewsSection';
import StatsSection from '../components/StatsSection';
import BlogSection from '../components/BlogSection';
import { Link } from 'react-router-dom';
import './Home.css';
import drMahendra from '../assets/dr-mahendra.jpg';
import drPushpendra from '../assets/dr-pushpendra.jpg';
import drRajkumar from '../assets/dr-rajkumar-v2.jpg';
 
const Home = () => {
  const [showSeoContent, setShowSeoContent] = useState(false);

  React.useEffect(() => {
    // Update Title
    document.title = "Public Hospital - #1 Multispecialty Hospital & Emergency Clinic in Jaipur | Chauhan Hospitals";

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
      name: 'Dr. Mahendra Kumar Sharma',
      specialization: 'General Surgery',
      qualification: 'Senior Consultant Surgeon',
      experience: '35+',
      image: drMahendra,
    },
    {
      name: 'Dr. Pushpendra Singh Chauhan',
      specialization: 'Internal Medicine',
      qualification: 'MBBS, M.D (Medicine)',
      experience: '10+',
      image: drPushpendra,
    },
    {
      name: 'Dr. Rajkumar',
      specialization: 'Urology',
      qualification: 'Consultant Urologist',
      experience: '12+',
      image: drRajkumar,
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
              <ServiceCard key={index} {...service} showReadMore={false} />
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

      {/* SEO Content Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="seo-content">
            <h2 className="section-title text-center mb-4">Chauhan Hospitals – Trusted Multispecialty Healthcare in Jaipur</h2>
            <p className="mb-4">
              In a situation when healthcare quality is a matter of concern, the right hospital at the right time is what really makes a difference. Chauhan Hospitals is a reliable multispecialty healthcare hospital in Jaipur, dedicated to providing medically advanced, affordable, and accessible healthcare to patients of all age groups. We, with competent doctors, advanced infrastructure, and patient-friendly services, intend to become the best hospital near me choice for families all over the city.
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
                <p className="mb-5 animate-fadeIn">
                  In case you are looking for a doctor's routine medical consultation, an emergency treatment, or specialized care, trust Chauhan Hospitals to be your healthcare partner.
                </p>

                <h2 className="section-title text-center mb-4 animate-fadeIn">Comprehensive Medical Services Under One Roof</h2>
                <p className="mb-4 animate-fadeIn">
                  Chauhan Hospitals provides a variety of medical services that are designed to fulfill healthcare requirements of the people in a normal day scenario and even cater to healthcare needs during critical medical situations. As a multispecialty hospital, we bring the team of specialists from different departments to work together for your diagnosis, treatment, and recovery without any hassle.
                </p>
                <p className="mb-3 animate-fadeIn">Our key medical services include:</p>
                <ul className="grid grid-2 mb-5 list-disc pl-5 animate-fadeIn">
                  <li>General Medicine & Preventive Care</li>
                  <li>Emergency & Trauma Services</li>
                  <li>Cardiology & Heart Care</li>
                  <li>Neurology & Brain Health</li>
                  <li>Cancer Diagnosis & Treatment</li>
                  <li>General & Advanced Surgery</li>
                  <li>Diagnostic & Imaging Services</li>
                </ul>
                <p className="mb-5 animate-fadeIn">
                  Patients finding the nearest hospital might as well put their trust in Chauhan Hospitals for getting timely care, accessing modern facilities, and receiving compassionate treatment at every step.
                </p>

                <h2 className="section-title text-center mb-4 animate-fadeIn">24×7 Emergency Care You Can Trust</h2>
                <p className="mb-5 animate-fadeIn">
                  Medical emergencies are unpredictable and can occur at any time. In such situations, Chauhan Hospitals as a 24/7 hospital near me is always available to provide emergency care that is facilitated by trained medical staff and the most essential life-saving equipment. Our emergency services are created with the aim to make a quick evaluation and instant treatment thus, cutting down on waiting time when a second is of great value. In case you need to find a public hospital near me with a reliable emergency department that meets high medical standards, you can definitely count on Chauhan Hospitals to be prompt and responsible in their response.
                </p>

                <h2 className="section-title text-center mb-4 animate-fadeIn">Experienced Doctors & Patient-Focused Care</h2>
                <p className="mb-5 animate-fadeIn">
                  At Chauhan Hospitals, our strength lies in our medical team. We are proud to have some of the best doctors in Jaipur, supported by skilled nurses and healthcare professionals who prioritize patient safety and comfort. From accurate diagnosis to personalized treatment plans, our doctors focus on long-term health outcomes, not just short-term relief. Many patients look up online for good doctors near me or top rated doctors near me. Our dedication to ethical practice, honesty, and patient instruction has been the main factors leading to community trust which we have been able to build over time.
                </p>

                <h2 className="section-title text-center mb-4 animate-fadeIn">Advanced Diagnostics & Modern Infrastructure</h2>
                <p className="mb-5 animate-fadeIn">
                  A precise diagnosis is the basis of a successful treatment. Chauhan Hospitals has modern diagnostic facilities with advanced imaging and laboratory services. Being one of the radiology hospitals in Jaipur, our diagnostic support is very accurate which will assist the doctors in making proper clinical decisions. The infrastructure that is clean and well-maintained takes care of safe and comfortable environment for patients and attendants, be it a short clinic visit or a longer hospital stay.
                </p>

                <h2 className="section-title text-center mb-4 animate-fadeIn">Easy Consultations & Doctor Appointments</h2>
                <p className="mb-5 animate-fadeIn">
                  Healthcare has to be easy and available to everyone. At Chauhan Hospitals, the patients can select the doctor for appointments and consultations, follow-ups, or specialist care very easily. Our system is made in such a way that it minimizes waiting time and makes the patient experience better whether you are coming for regular check-ups or specialized treatment. For those looking for a medical clinic near me that gives hospital-level care, Chauhan Hospitals is the one that offers both convenience and comprehensive treatment.
                </p>

                <h2 className="section-title text-center mb-4 animate-fadeIn">Specialized Care for Complex Conditions</h2>
                <p className="mb-5 animate-fadeIn">
                  We give the best care through various departments such as neurology, cardiology, and oncology. Nearby patients who need a neurologist can get expert neurological consultations with the full diagnostic support under one roof. The doctors' multidisciplinary approach leads to collaboration between specialists thus getting better outcomes in complex cases.
                </p>

                <h2 className="section-title text-center mb-4 animate-fadeIn">A Hospital Built on Trust & Community Care</h2>
                <p className="mb-5 animate-fadeIn">
                  Chauhan Hospitals is not merely a health care enterprise; it is a trust-based, ethical, and community service-oriented institution. We always strive to raise the standards of patient care and to embrace modern medical practices and thus making quality healthcare available to all. In case you are on the internet looking for the best hospital near me, the nearest hospital to me, or a trustworthy public hospital in my area, Chauhan Hospitals is the one for you, offering professionalism, empathy, and excellence as the main characteristics of its service.
                </p>

                <h3 className="text-xl font-bold text-center mb-3 animate-fadeIn">Your Health, Our Priority</h3>
                <p className="text-center animate-fadeIn">
                  From emergency services to specialized treatments, Chauhan Hospitals remains committed to delivering quality healthcare when you need it most. Visit us today and experience patient-first medical care in Jaipur.
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
            <a href="tel:7850010759" className="btn btn-secondary btn-large">
              Call Emergency: 7850010759
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
