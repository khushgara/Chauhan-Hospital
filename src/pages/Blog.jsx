import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { fetchBlogList, fetchBlogContent, extractExcerpt, processThumbnailUrl } from '../services/googleDriveService';
import './Blog.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const files = await fetchBlogList();
        
        // Initial map with placeholder excerpt
        const initialPosts = files.map(file => ({
          id: file.id,
          title: file.name,
          excerpt: "Loading preview...",
          date: new Date(file.createdTime).toLocaleDateString(),
          author: 'Chauhan Hospital',
          category: 'Health Blog',
          // Use description field for custom image URL if provided, otherwise fallback to thumbnail or default
          image: (file.description && file.description.startsWith('http')) ? processThumbnailUrl(file.description) : (file.thumbnailLink || DEFAULT_IMAGE)
        }));

        setPosts(initialPosts);

        // Fetch excerpts in background
        // We do this after setting posts so user sees the list immediately
        const postsWithExcerpts = await Promise.all(initialPosts.map(async (post) => {
            // Check if description already has content to avoid fetch if possible
            if (post.excerpt && post.excerpt !== "Loading preview...") return post;

            try {
                const htmlContent = await fetchBlogContent(post.id);
                const dynamicExcerpt = extractExcerpt(htmlContent);
                return { ...post, excerpt: dynamicExcerpt || "Loading preview...", };
            } catch (ignore) {
                return { ...post, excerpt: "Click 'Read Article' to view full content." };
            }
        }));

        setPosts(postsWithExcerpts);

      } catch (err) {
        console.error("Failed to load blogs:", err);
        const errorMessage = err.message.includes("API not enabled") 
          ? "Google Drive API is not enabled. Please enable it in your Google Cloud Console." 
          : "Unable to load latest blogs. Please check back later.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

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
          {loading && (
            <div className="text-center" style={{ padding: '3rem' }}>
              <div className="loader" style={{ margin: '0 auto' }}></div>
              <p>Loading healthy tips...</p>
            </div>
          )}

          {error && (
            <div className="text-center error-message" style={{ padding: '3rem', color: 'red' }}>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center" style={{ padding: '3rem' }}>
              <p>No blog posts found. Please check back later!</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-3">
              {posts.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
