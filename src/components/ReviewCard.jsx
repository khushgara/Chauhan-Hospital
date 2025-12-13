import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ author_name, rating, relative_time_description, text, profile_photo_url }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="reviewer-info">
          <div className="reviewer-avatar">
            {profile_photo_url ? (
              <img src={profile_photo_url} alt={author_name} onError={(e) => {e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${author_name}&background=random`}} />
            ) : (
              <div className="avatar-placeholder">{author_name.charAt(0)}</div>
            )}
          </div>
          <div>
            <div className="reviewer-name">{author_name}</div>
            <div className="review-meta">
              <span className="review-date">{relative_time_description}</span>
            </div>
          </div>
        </div>
        <div className="google-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.225 -9.426 56.479 -10.686 57.329 L -10.686 60.325 L -6.82 60.325 C -4.56 58.235 -3.264 55.159 -3.264 51.509 Z" />
              <path fill="#34A853" d="M -14.754 63.239 C -11.516 63.239 -8.802 62.157 -6.816 60.329 L -10.682 57.329 C -11.764 58.047 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.615 C -23.498 60.531 -19.442 63.239 -14.754 63.239 Z" />
              <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.866 52.039 -21.866 51.239 C -21.866 50.439 -21.734 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.615 L -21.484 53.529 Z" />
              <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.424 44.599 -10.174 45.789 L -6.708 42.296 C -8.802 40.352 -11.516 39.239 -14.754 39.239 C -19.442 39.239 -23.498 41.935 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
            </g>
          </svg>
        </div>
      </div>
      
      <div className="review-stars">
        {[...Array(5)].map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className={`star-icon ${i < rating ? 'filled' : ''}`}>
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <div className="review-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
