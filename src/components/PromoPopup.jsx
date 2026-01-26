import React, { useState, useEffect } from 'react';
import './PromoPopup.css';
import bannerImage from '../assets/health-camp-banner.jpg';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Show popup after a short delay, e.g., 2 seconds
    const timer = setTimeout(() => {
      // Check if already shown in session (optional, but good UX)
      // For now, let's show it every time or check localStorage
      const hasSeenPopup = sessionStorage.getItem('hasSeenHealthCampPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenHealthCampPopup', 'true');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwSVtfsgWlk8dXJWmUpeyCA6_DnopjraQIlM437bSvSZwk2pGltDksNUHDlScTSuE5pdA/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ ...formData, type: 'health_camp_enquiry' }),
        mode: "no-cors"
      });

      setStatus('success');
      setFormData({ name: '', phone: '', problem: '' });
      setTimeout(() => {
          setStatus('');
          closePopup();
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="promo-popup-overlay">
      <div className="promo-popup-content">
        <button className="close-popup-btn" onClick={closePopup}>&times;</button>
        
        <div className="popup-grid">
          <div className="popup-image-col">
            <img src={bannerImage} alt="Mega Health Camp" className="popup-banner-img" />
          </div>
          
          <div className="popup-form-col">
            <h2 className="popup-title">Mega Health Camp</h2>
            <p className="popup-dates">31 Jan & 01 Feb 2026</p>
            <p className="popup-subtitle">Free Checkups & Heavy Discounts on Operations</p>
            
            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="popup-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="popup-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="problem"
                  placeholder="Health Problem / Message"
                  value={formData.problem}
                  onChange={handleChange}
                  className="popup-input popup-textarea"
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary popup-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Book Free Checkup'}
              </button>

              {status === 'success' && (
                <p className="popup-message success">Registration Successful!</p>
              )}
              {status === 'error' && (
                <p className="popup-message error">Something went wrong. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
