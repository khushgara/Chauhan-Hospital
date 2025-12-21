import React from 'react';
import './SocialFloatingActions.css';

const SocialFloatingActions = () => {
  // Contact config
  const phoneNumber = '9610005141'; 
  const whatsappMessage = 'Hello! I would like to inquire about hospital services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Social links
  const instagramUrl = 'https://www.instagram.com/chrc_jaipur/';
  const facebookUrl = 'https://facebook.com';

  return (
    <div className="social-floating-actions">
      {/* WhatsApp (Main/Bottom) */}
      <a 
        href={whatsappUrl}
        className="social-float-btn social-btn-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="social-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.8.47 3.5 1.29 5L2 22l5.12-1.35c1.45.79 3.1 1.24 4.89 1.24 5.53 0 10.01-4.48 10.01-10.01S17.54 2 12.01 2zm5.98 13.98c-.25.7-1.42 1.28-1.95 1.3-.48.02-1.06-.15-3.62-1.2-3.15-1.3-5.2-4.66-5.35-4.86-.15-.2-1.28-1.7-1.28-3.24 0-1.54.8-2.3 1.12-2.63.28-.28.6-.35.8-.35.2 0 .4 0 .58.02.18.02.42-.08.65.48.25.58.85 2 .92 2.15.08.15.12.35.02.55-.1.2-.15.32-.3.5-.15.18-.32.4-.15.68.18.3.78 1.25 1.65 2.02 1.12.98 2.06 1.28 2.35 1.42.3.15.48.12.65-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.28.1 1.75.83 2.05.98.3.15.5.23.58.35.08.12.08.7-.18 1.4z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a 
        href={instagramUrl}
        className="social-float-btn social-btn-instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <svg viewBox="0 0 24 24" className="social-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
        </svg>
      </a>

      {/* Facebook */}
      <a 
        href={facebookUrl}
        className="social-float-btn social-btn-facebook"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Facebook"
      >
        <svg viewBox="0 0 24 24" className="social-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-1.75-.46-3-2.14-5-2.14-3.5 0-6 2.5-6 6v2H5v4h3v9h6v-9z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialFloatingActions;
