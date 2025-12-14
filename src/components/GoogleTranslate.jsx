import React, { useEffect } from 'react';
import './GoogleTranslate.css';

const GoogleTranslate = () => {
  useEffect(() => {
    // Ensuring the Google Translate script re-initializes if needed
    // This is sometimes needed in SPA transitions, though globally loaded script usually handles it.
    // We check if the element exists and if the google object is available.
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        // Sometimes reloading the element is tricky with the global script
        // We rely on the global init for the first load.
    }
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
