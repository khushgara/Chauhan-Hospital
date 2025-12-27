import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { fetchBlogList, fetchBlogContent, extractExcerpt, processThumbnailUrl } from '../services/googleDriveService';
import './BlogSection.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

const BlogSection = () => {
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const files = await fetchBlogList();
        
        // Format to top 3
        const initialPosts = files.slice(0, 3).map(file => ({
          id: file.id,
          title: file.name,
          excerpt: "Loading preview...",
          date: new Date(file.createdTime).toLocaleDateString(),
          author: 'Chauhan Hospital',
          category: 'Health Blog',
          image: (file.description && file.description.startsWith('http')) ? processThumbnailUrl(file.description) : (file.thumbnailLink || DEFAULT_IMAGE)
        }));

        setDisplayedBlogs(initialPosts);

         // Fetch excerpts for these top 3
         const postsWithExcerpts = await Promise.all(initialPosts.map(async (post) => {
            if (post.excerpt && post.excerpt !== "Loading preview...") return post;

            try {
                const htmlContent = await fetchBlogContent(post.id);
                const dynamicExcerpt = extractExcerpt(htmlContent);
                return { ...post, excerpt: dynamicExcerpt || "Click 'Read Article' to view full content." };
            } catch (ignore) {
                return { ...post, excerpt: "Click 'Read Article' to view full content." };
            }
        }));

        setDisplayedBlogs(postsWithExcerpts);

      } catch (err) {
        console.error("Failed to load blogs for home section:", err);
        setError("Could not load latest updates.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <section className="blog-section">
        <div className="container text-center">
            <div className="loader" style={{margin: '0 auto'}}></div>
        </div>
      </section>
    );
  }

  if (error || displayedBlogs.length === 0) {
      if (error && error.includes("API not enabled")) return <section className="blog-section"><div className="container text-center text-danger">{error}</div></section>;
      return null;
  }

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
