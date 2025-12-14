import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // Replace with actual hospital number
  const phoneNumber = '1234567890'; 
  const message = 'Hello! I would like to inquire about hospital services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="whatsapp-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.103c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.99-2.335-.298-.281-.547-.29-.817-.29a2.1 2.1 0 0 0-1.515.708c-.715.794-1.23 2.003-.52 3.9.489 1.304 1.71 3.251 4.545 4.975 1.583.963 2.479 1.05 2.924.973.551-.095 1.768-.96 1.768-1.748 0-.485.02-1.215-.175-1.359zM16.92 23.63a7.863 7.863 0 0 1-4.01-1.127l-3.52 1.134a.36.36 0 0 1-.462-.448l1.091-3.66a8.036 8.036 0 0 1-1.085-4.085 8.1 8.1 0 1 1 16.148 0 8.067 8.067 0 0 1-8.162 8.186zM28.006 4.994a16.273 16.273 0 0 0-22.626 23.4L.495 31.506c-.347.346-.576.082-.493-.38l1.458-4.887A16.27 16.27 0 1 0 28.006 4.995z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
