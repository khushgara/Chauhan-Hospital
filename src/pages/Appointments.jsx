import React, { useState } from 'react';
import './Appointments.css';

const Appointments = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    department: '',
    doctor: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    insurance: '',
    insuranceId: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwSVtfsgWlk8dXJWmUpeyCA6_DnopjraQIlM437bSvSZwk2pGltDksNUHDlScTSuE5pdA/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.department) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ ...formData, type: 'booking' }),
        mode: "no-cors"
      });

      setStatus('success');
      // Reset form (optional, might want to keep some data or redirect)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        department: '',
        doctor: '',
        preferredDate: '',
        preferredTime: '',
        reason: '',
        insurance: '',
        insuranceId: '',
      });
      setTimeout(() => setStatus(''), 5000);

    } catch (error) {
       console.error("Error submitting form:", error);
       setStatus('error');
       setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="appointments-page">
      {/* Hero Section */}
      <section className="appointments-hero">
        <div className="container">
          <h1 className="page-title animate-fadeIn">Book an Appointment</h1>
          <p className="page-subtitle animate-slideInLeft">
            Schedule your visit with our expert medical team
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section">
        <div className="container container-narrow">
          <div className="appointment-card">
            <div className="appointment-header">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <h2>Appointment Details</h2>
              <p>Please fill in your information to book an appointment</p>
            </div>

            <form className="appointment-form" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-input"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-input"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      className="form-input"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="form-select"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="form-section">
                <h3>Appointment Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="department" className="form-label">
                      Department <span className="required">*</span>
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="form-select"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="radiology">Radiology</option>
                      <option value="surgery">General Surgery</option>
                      <option value="maternity">Maternity & Obstetrics</option>
                      <option value="oncology">Oncology</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="doctor" className="form-label">
                      Preferred Doctor
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      className="form-select"
                      value={formData.doctor}
                      onChange={handleChange}
                    >
                      <option value="">Any Available Doctor</option>
                      <option value="dr-johnson">Dr. Sarah Johnson</option>
                      <option value="dr-chen">Dr. Michael Chen</option>
                      <option value="dr-williams">Dr. Emily Williams</option>
                      <option value="dr-anderson">Dr. James Anderson</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredDate" className="form-label">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      className="form-input"
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredTime" className="form-label">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      className="form-select"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    >
                      <option value="">Select Time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 6PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reason" className="form-label">
                    Reason for Visit
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    className="form-textarea"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Please describe your symptoms or reason for visit..."
                  />
                </div>
              </div>

              {/* Insurance Information */}
              <div className="form-section">
                <h3>Insurance Information (Optional)</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="insurance" className="form-label">
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      id="insurance"
                      name="insurance"
                      className="form-input"
                      value={formData.insurance}
                      onChange={handleChange}
                      placeholder="e.g., Blue Cross, Aetna, etc."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="insuranceId" className="form-label">
                      Insurance ID
                    </label>
                    <input
                      type="text"
                      id="insuranceId"
                      name="insuranceId"
                      className="form-input"
                      value={formData.insuranceId}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={`btn btn-primary btn-large ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Booking...' : 'Book Appointment'}
              </button>

              {status === 'success' && (
                <div className="form-message success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Your appointment request has been submitted successfully! We'll contact you shortly to confirm.
                </div>
              )}

              {status === 'error' && (
                <div className="form-message error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Please fill in all required fields.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="emergency-notice">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              <path d="M12 8v4M12 16h.01" fill="none" stroke="white" strokeWidth="2" />
            </svg>
            <div>
              <h3>For Medical Emergencies</h3>
              <p>If you are experiencing a medical emergency, please call 7850010759 or visit our emergency department immediately.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
