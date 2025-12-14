import React from 'react';
import './SocialFloatingActions.css';

const SocialFloatingActions = () => {
  // Contact config
  const phoneNumber = '1234567890'; 
  const whatsappMessage = 'Hello! I would like to inquire about hospital services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Social links - Replace with actual URLs
  const instagramUrl = 'https://instagram.com';
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
        <svg viewBox="0 0 32 32" className="social-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.103c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.99-2.335-.298-.281-.547-.29-.817-.29a2.1 2.1 0 0 0-1.515.708c-.715.794-1.23 2.003-.52 3.9.489 1.304 1.71 3.251 4.545 4.975 1.583.963 2.479 1.05 2.924.973.551-.095 1.768-.96 1.768-1.748 0-.485.02-1.215-.175-1.359zM16.92 23.63a7.863 7.863 0 0 1-4.01-1.127l-3.52 1.134a.36.36 0 0 1-.462-.448l1.091-3.66a8.036 8.036 0 0 1-1.085-4.085 8.1 8.1 0 1 1 16.148 0 8.067 8.067 0 0 1-8.162 8.186zM28.006 4.994a16.273 16.273 0 0 0-22.626 23.4L.495 31.506c-.347.346-.576.082-.493-.38l1.458-4.887A16.27 16.27 0 1 0 28.006 4.995z"/>
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
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.059v.912h3.945l-.526 3.667h-3.419v8.004a12.078 12.078 0 0 1-1.896.205 11.29 11.29 0 0 1-2.948-.221z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialFloatingActions;
