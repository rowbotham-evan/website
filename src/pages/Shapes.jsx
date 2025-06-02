// src/pages/Shapes.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Section';
import theme from '../theme';

// This data should come from your contentRegistry or a dedicated shapesData file
// For demonstration, here's a placeholder example:
const shapesData = [
  // IMPORTANT: Prepend import.meta.env.BASE_URL to all image paths for public assets
  { id: '1', title: 'Hopf Fibration', image: import.meta.env.BASE_URL + 'images/hopf_fib.png', link: '/shapes/hopf' },
  { id: '2', title: 'Klein Bottle', image: import.meta.env.BASE_URL + 'images/klein_bottle.png', link: '/shapes/klein' },
  { id: '3', title: 'Möbius Strip', image: import.meta.env.BASE_URL + 'images/mobius_strip.png', link: '/shapes/mobius' },
  { id: '4', title: 'Toroidal Flow', image: import.meta.env.BASE_URL + 'images/torus_flow.gif', link: '/shapes/toroidal' },
  { id: '5', title: 'Sphere Eversion', image: import.meta.env.BASE_URL + 'images/sphere_eversion.png', link: '/shapes/sphere' },
  // Add more shapes as needed
];

function ShapeCard({ title, image, link }) {
  const imageBoxStyle = {
    width: '100%',
    maxWidth: '250px', // Explicit width for the image container
    height: '250px', // Explicit height for the image container
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '12px',
  };

  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '250px',
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          justifyItems: 'center',
          alignItems: 'start',
          maxWidth: theme.maxW,
          margin: '0 auto',
        }}
      >
        {shapesData.map(shape => (
          <ShapeCard key={shape.id} {...shape} />
        ))}
      </div>
    </Section>
  );
}