import React from 'react';
import ReviewCard from './ReviewCard';
import { reviews } from '../data/reviews';

const ReviewsSection = () => {
  return (
    <section className="section" style={{ background: '#f9fafb' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Patient Reviews</h2>
          <p className="section-description">
            See what our patients are saying about their experience at Chauhan Hospital
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
            <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>4.8</span>
            <div className="review-stars" style={{ display: 'flex' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" width="20" height="20" fill="#fbbf24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span style={{ color: '#6b7280' }}>(138 Google Reviews)</span>
          </div>
        </div>
        
        <div className="grid grid-3">
          {reviews.slice(0, 3).map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a 
            href="https://g.co/kgs/izU62Jx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              border: '1px solid #d1d5db',
              color: '#374151'
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M21.35 11.1h-9.17v2.98h5.24c-.22 1.25-.91 2.32-1.94 3.02l3.14 2.44c1.84-1.7 2.9-4.2 2.9-7.03 0-.67-.06-1.32-.17-1.96h-0.01zM12.18 19.98c2.58 0 4.74-.85 6.32-2.31l-3.14-2.44c-1.22.82-2.9 1.15-4.48.56a5.53 5.53 0 0 1-3.32-7.51c.36-.88 1.05-1.58 1.93-1.94 1.58-.58 3.26-.26 4.48.56l2.16-2.16A8.52 8.52 0 0 0 4.14 8.79a8.55 8.55 0 0 0 1.96 8.87c.88.88 1.94 1.58 3.12 1.94.97.29 1.98.38 2.97.38z"/>
            </svg>
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
