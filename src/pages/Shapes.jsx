// src/pages/Shapes.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Section';
import theme from '../theme'; // Assuming you have a theme.js or similar for fonts, etc.

// This data should come from your contentRegistry or a dedicated shapesData file
// For demonstration, here's a placeholder example:
const shapesData = [
  { id: '1', title: 'Hopf Fibration', image: '/images/hopf_fib.png', link: '/shapes/hopf' },
  { id: '2', title: 'Klein Bottle', image: '/images/klein_bottle.png', link: '/shapes/klein' },
  { id: '3', title: 'Möbius Strip', image: '/images/mobius_strip.png', link: '/shapes/mobius' },
  { id: '4', title: 'Toroidal Flow', image: '/images/torus_flow.gif', link: '/shapes/toroidal' },
  { id: '5', title: 'Sphere Eversion', image: '/images/sphere_eversion.png', link: '/shapes/sphere' },
  // Add more shapes as needed
];

function ShapeCard({ title, image, link }) {
  const imageBoxStyle = {
    width: '100%',
    maxWidth: '250px', // Explicit width for the image container
    height: '250px',   // Explicit height for the image container
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent', // Set to transparent for no background
    // If you want a "floating" look without a visible box around the image,
    // you might want to remove or adjust the boxShadow if it's applied here or on the parent.
    // boxShadow: '0 2px 6px rgba(0,0,0,0.07)', // Consider commenting this out
  };

  const imageStyle = {
    width: '100%', // Makes the image fill the imageBox
    height: '100%', // Makes the image fill the imageBox
    objectFit: 'contain', // Ensures the entire image is visible, suitable for transparent backgrounds
    borderRadius: '12px', // Applies border radius to the image itself
  };

  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          // The max width of the card is now handled by the grid's cell size,
          // but you can keep this for internal consistency or if the title is very long.
          maxWidth: '250px',
          // No need for marginBottom here as grid gap handles spacing
        }}
      >
        <div style={imageBoxStyle}>
          <img
            src={image}
            alt={title}
            style={imageStyle}
          />
        </div>
        <h3 style={{ margin: '10px 0 0', fontSize: theme.fonts.heading.h3, fontFamily: theme.fonts.heading.family }}>
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function Shapes() {
  return (
    <Section>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, fontFamily: theme.fonts.heading.family }}>
        Shapes.
      </h2>

      {/* This container now uses CSS Grid for even spacing */}
      <div
        style={{
          display: 'grid', // Use CSS Grid
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Create responsive columns
          gap: '20px', // Consistent spacing between grid items
          justifyItems: 'center', // Center content horizontally within each grid cell
          alignItems: 'start', // Align content to the start vertically within each grid cell (optional, can be 'center' if you prefer)
          maxWidth: theme.maxW, // Keep consistent with your overall page width
          margin: '0 auto', // Center the grid container itself
        }}
      >
        {shapesData.map(shape => (
          <ShapeCard key={shape.id} {...shape} />
        ))}
      </div>
    </Section>
  );
}