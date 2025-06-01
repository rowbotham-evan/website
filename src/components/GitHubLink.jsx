// src/components/GitHubLink.jsx
import React from 'react';
import githubIcon from '../../public/images/github-icon.png'; // Adjust path if needed

/**
 * A reusable component for a clickable GitHub icon linking to a repository.
 * @param {string} repo - The GitHub repository string (e.g., "username/repo-name").
 * @param {number} [size=18] - The desired width and height of the icon in pixels.
 */
export default function GitHubLink({ repo, size = 18 }) {
  if (!repo) {
    return null;
  }

  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Repository"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <img
        src={githubIcon}
        alt="GitHub"
        style={{ width: size, height: size, objectFit: 'contain' }}
      />
    </a>
  );
}