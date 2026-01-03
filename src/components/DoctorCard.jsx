
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './DoctorCard.css';

const DoctorCard = ({ id, name, specialization, qualification, experience, image, description, expertise }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="doctor-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        )}
      </div>
      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-specialization">{specialization}</p>
        
        <div className="doctor-details">
          <div className="doctor-detail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            <span>{qualification}</span>
          </div>
          {experience && (
            <div className="doctor-detail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{experience} years experience</span>
            </div>
          )}
        </div>

        {description && <p className="doctor-description">{description}</p>}

        {expertise && expertise.length > 0 && (
          <div className="doctor-expertise">
            <h4>Expertise:</h4>
            <ul>
              {expertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="card-actions" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <Link to={`/doctor/${id}`} className="btn btn-outline btn-small" style={{flex: 1, textAlign: 'center'}}>
            View Profile
          </Link>
          <Link to="/appointments" className="btn btn-primary btn-small doctor-btn" style={{flex: 1, textAlign: 'center'}}>
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  qualification: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default DoctorCard;
