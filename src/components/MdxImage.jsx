// src/components/MdxImage.jsx
import React from 'react';

const MdxImage = ({ src, alt, ...props }) => {
  let finalSrc = src;
  const baseUrl = import.meta.env.BASE_URL;

  console.log("MdxImage DEBUG: src received:", src);
  console.log("MdxImage DEBUG: import.meta.env.BASE_URL:", baseUrl);

  // Check if it's an external URL (already absolute)
  if (src.startsWith('http://') || src.startsWith('https://')) {
    finalSrc = src;
  } else {
    // For local assets, ensure BASE_URL is prepended correctly.
    // Ensure baseUrl ends with a slash and src does NOT start with one.
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const normalizedSrc = src.startsWith('/') ? src.substring(1) : src; // Remove leading slash if present

    finalSrc = `${normalizedBaseUrl}${normalizedSrc}`;
  }

  console.log("MdxImage DEBUG: finalSrc calculated:", finalSrc);

  return <img src={finalSrc} alt={alt} {...props} />;
};

export default MdxImage;