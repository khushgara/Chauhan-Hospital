import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { blogs } from '../data/blogs';
import './BlogSection.css';

const BlogSection = () => {
  // Display only the first 3 blogs on the home page
  const displayedBlogs = blogs.slice(0, 3);

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Latest Updates</h2>
          <p className="section-description">
            Stay informed with our latest health tips, medical news, and hospital updates
          </p>
        </div>
        
        <div className="grid grid-3">
          {displayedBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/blog" className="btn btn-primary btn-large">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
