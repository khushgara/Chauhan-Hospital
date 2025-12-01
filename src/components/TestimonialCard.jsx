import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.css';

const TestimonialCard = ({ name, rating, testimonial, date, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="avatar-placeholder">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <div className="testimonial-rating">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={index < rating ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="testimonial-quote">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <p className="testimonial-text">{testimonial}</p>
      </div>
      {date && <p className="testimonial-date">{date}</p>}
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  testimonial: PropTypes.string.isRequired,
  date: PropTypes.string,
  image: PropTypes.string,
};

export default TestimonialCard;
