import React from 'react';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <header className="blog-header text-center">
        <div className="container">
          <h1>Health & Wellness Blog</h1>
          <p>Expert medical insights, health tips, and news from Chauhan Hospital</p>
        </div>
      </header>

      <section className="blog-grid-section">
        <div className="container">
          <div className="grid grid-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

          <div className="pagination">
            <a href="#" className="page-link disabled" onClick={(e) => e.preventDefault()}>&lt;</a>
            <a href="#" className="page-link active" onClick={(e) => e.preventDefault()}>1</a>
            <a href="#" className="page-link" onClick={(e) => e.preventDefault()}>2</a>
            <a href="#" className="page-link" onClick={(e) => e.preventDefault()}>3</a>
            <a href="#" className="page-link" onClick={(e) => e.preventDefault()}>&gt;</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
