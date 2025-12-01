import React from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      {link && (
        <a href={link} className="service-link">
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ServiceCard;
