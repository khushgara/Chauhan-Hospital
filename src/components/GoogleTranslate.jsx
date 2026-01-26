import React, { useEffect } from 'react';
import './GoogleTranslate.css';

const GoogleTranslate = ({ id = "google_translate_element" }) => {
  useEffect(() => {
    let intervalId = null;

    const checkAndInit = () => {
      // Check if library is loaded
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        // Check if element exists and is empty
        const element = document.getElementById(id);
        if (element && !element.innerHTML) {
          try {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                includedLanguages: 'en,hi',
                autoDisplay: false,
              },
              id
            );
          } catch (e) {
            console.error("Google Translate Init Error", e);
          }
        }
        return true; // Initialized or already exists
      }
      return false; // Not ready
    };

    // Try immediately
    if (!checkAndInit()) {
      // Poll if not ready
      intervalId = setInterval(() => {
        if (checkAndInit()) {
          clearInterval(intervalId);
        }
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [id]);

  return (
    <div id={id} className="google-translate-container"></div>
  );
};

export default GoogleTranslate;
