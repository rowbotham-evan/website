// src/components/MdxImage.jsx
import React from 'react';

const MdxImage = ({ src, alt, ...props }) => {
  let finalSrc = src;
  const baseUrl = import.meta.env.BASE_URL || './';

  if (!/^https?:\/\//.test(src)) {
    // normalize so we don't double-slash
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const normalizedSrc  = src.startsWith('/')   ? src.slice(1) : src;
    finalSrc = normalizedBase + normalizedSrc;
  }

  return (
    <img
      src={finalSrc}
      alt={alt}
      loading="lazy"
      style={{ maxWidth: '100%', height: 'auto' }}
      {...props}
    />
  );
};

export default MdxImage;
