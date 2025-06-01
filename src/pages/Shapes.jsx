// src/pages/Shapes.jsx
import React from 'react';
import Section from '../Section'; // Assuming you have a Section component for consistent layout
import theme from '../theme'; // Assuming you have a theme file for consistent styling

export default function Shapes() {
  return (
    <Section>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, fontFamily: theme.fonts.heading.family }}>
        Shapes.
      </h2>
      <p style={{ fontFamily: theme.fonts.body.family, lineHeight: 1.6 }}>
        Under Construction!
      </p>
      {/* Add your shape rendering logic or components here */}
      <div style={{ marginTop: 40, padding: 20, border: '1px dashed #ccc', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: theme.fonts.body.family, color: '#666' }}>
      </div>
    </Section>
  );
}