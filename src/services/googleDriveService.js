
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_DRIVE_FOLDER_ID;

const BASE_URL = 'https://www.googleapis.com/drive/v3/files';

/**
 * Fetches the list of Google Docs from the configured Drive folder.
 * Returns an array of file objects with id, name, createdTime, thumbnailLink, and description.
 */
export const fetchBlogList = async () => {
  if (!API_KEY || !FOLDER_ID) {
    console.error("Google Drive API Key or Folder ID is missing.");
    return [];
  }

  try {
    // Query to list files: inside folder, not trashed, and is a Google Doc
    const query = `'${FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.document' and trashed = false`;
    const fields = 'files(id, name, createdTime, thumbnailLink, description, mimeType)';
    
    const url = `${BASE_URL}?q=${encodeURIComponent(query)}&fields=${encodeURIComponent(fields)}&key=${API_KEY}`;
    
    const response = await fetch(url);
    
    if (response.status === 403) {
      throw new Error(`Google Drive API not enabled. Please enable it in Google Cloud Console.`);
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch blog list: ${response.statusText}`);
    }

    const data = await response.json();
    return data.files || [];
  } catch (error) {
    if (error.message.includes("Google Drive API not enabled")) {
        throw error;
    }
    console.error("Error fetching blog list from Google Drive:", error);
    return [];
  }
};

/**
 * Fetches the content of a specific Google Doc exported as HTML.
 * @param {string} fileId - The ID of the Google Doc.
 */
export const fetchBlogContent = async (fileId) => {
  if (!API_KEY) {
    console.error("Google Drive API Key is missing.");
    return null;
  }

  try {
    const url = `${BASE_URL}/${fileId}/export?mimeType=text/html&key=${API_KEY}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog content: ${response.statusText}`);
    }

    const htmlContent = await response.text();
    return htmlContent;
  } catch (error) {
    console.error("Error fetching blog content from Google Drive:", error);
    return null;
  }
};

/**
 * Fetches metadata for simple display if needed separately (optional)
 */
export const fetchBlogMetadata = async (fileId) => {
    if (!API_KEY) {
      console.error("Google Drive API Key is missing.");
      return null;
    }
  
    try {
      const fields = 'id, name, createdTime, thumbnailLink, description';
      const url = `${BASE_URL}/${fileId}?fields=${encodeURIComponent(fields)}&key=${API_KEY}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch blog metadata: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching blog metadata:", error);
      return null;
    }
  };

/**
 * Helper to extract plain text excerpt from HTML content.
 * Stops after approx 2 sentences or 200 chars.
 */
export const extractExcerpt = (htmlContent) => {
    if (!htmlContent) return "";
    
    // Create a DOM parser to handle the HTML string safely
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    // Remove style and script tags to avoid getting CSS/JS code in text
    const styleTags = doc.querySelectorAll('style, script, head, meta');
    styleTags.forEach(tag => tag.remove());
    
    // Get text content from body
    let text = doc.body.textContent || "";
    
    // Clean up extra whitespace and non-breaking spaces
    text = text.replace(/\s+/g, " ").trim();
    
    // Find cutting point (approx 2 sentences)
    // We look for the second period.
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
    
    if (sentences && sentences.length >= 2) {
        return sentences.slice(0, 2).join(" ");
    }
    
    // Fallback to character limit if sentence parsing fails or is too short
    if (text.length > 150) {
        return text.substring(0, 150) + "...";
    }
    
    return text;
};

/**
 * Helper to process image URLs. 
 * specific support for converting Google Drive sharing links to direct viewable links.
 */
export const processThumbnailUrl = (url) => {
    if (!url) return null;
    
    // Check if it's a Google Drive link
    if (url.includes('drive.google.com') && url.includes('/file/d/')) {
        // Extract File ID
        const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            // Return a direct viewable link using lh3.googleusercontent.com (Google's image CDN)
            // This is more reliable for <img> tags than the thumbnail endpoint
            return `https://lh3.googleusercontent.com/d/${match[1]}`;
        }
    }
    
    return url;
};
