
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBlogContent, fetchBlogMetadata } from '../services/googleDriveService';
import './BlogPost.css'; // We'll create this simple CSS

const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        // Fetch content and metadata in parallel for better speed
        const [htmlContent, metaData] = await Promise.all([
            fetchBlogContent(id),
            fetchBlogMetadata(id)
        ]);
        
        if (!htmlContent) throw new Error("Failed to load content");

        // Basic clean up of Google Docs inline styles that might break layout
        // For example, replacing default black color with inherit, or max-width issues
        // This is a naive cleanup, can be improved
        const cleanedContent = htmlContent
            .replace(/body \{.*?\}/g, '') // Remove body styles
            .replace(/max-width: /g, 'max-width: initial; --mw: ') // Reset max-width constraints from docs
            
        setContent(cleanedContent);
        setMeta(metaData);
      } catch (err) {
        console.error(err);
        setError("Could not load the blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="blog-post-loading container">
        <div className="loader"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-post-error container">
        <h2>Oops!</h2>
        <p>{error}</p>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
        <div className="blog-post-header">
            <div className="container">
                <Link to="/blog" className="back-link">← Back to Blog</Link>
                {meta && <h1 className="post-title">{meta.name}</h1>}
                {meta && (
                    <div className="post-meta">
                        <span>{new Date(meta.createdTime).toLocaleDateString()}</span>
                        {/* Add more meta info if available */}
                    </div>
                )}
            </div>
        </div>
        
        <div className="container">
            <article 
                className="blog-content-body"
                dangerouslySetInnerHTML={{ __html: content }} 
            />
        </div>
    </div>
  );
};

export default BlogPost;
