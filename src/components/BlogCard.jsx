import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, excerpt, date, author, category, image }) => {
  return (
    <article className="blog-card">
      <div className="blog-image">
        <img src={image} alt={title} loading="lazy" />
        <span className="blog-category">{category}</span>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{date}</span>
          <span className="blog-author">{author}</span>
        </div>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>
        <div className="blog-footer">
          <a href="#" className="read-more" onClick={(e) => e.preventDefault()}>
            Read Article
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
