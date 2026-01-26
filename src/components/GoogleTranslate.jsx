import React, { useEffect } from 'react';
import './GoogleTranslate.css';

const GoogleTranslate = ({ id = "google_translate_element" }) => {
  useEffect(() => {
    // Check if the Google Translate script is already loaded and the element exists
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      if (!document.getElementById(id).innerHTML) { // Only init if empty to avoid duplicates
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            includedLanguages: 'en,hi',
          },
          id
        );
      }
    }
  }, [id]);

  return (
    <div id={id} className="google-translate-container"></div>
  );
};

export default GoogleTranslate;
