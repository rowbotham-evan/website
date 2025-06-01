// src/components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';

export default function Card({ link, left, meta, cardBgColor }) {
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div
        style={{
          background: cardBgColor || theme.card,
          borderRadius: theme.radius,
          padding: 24, // This sets the consistent padding on all sides of the card.
          marginBottom: 28,
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.07)',
        }}
      >
        {/* This div will hold the 'left' content (thumbnail) and the 'meta' content.
            It acts as a single flex item that will take up the available space. */}
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {left && (
            <div style={{ marginRight: 20 }}> {/* Space between the thumbnail and the meta content. */}
              {left}
            </div>
          )}
          <div style={{ flex: 1 }}> {/* The meta content itself can grow to fill available space within this section. */}
            {meta}
          </div>
        </div>

        {/* The arrow will be the second flex item, aligned to the right. */}
        <div style={{ color: theme.accent, fontSize: 24, flexShrink: 0 }}>
          ↗︎
        </div>
      </div>
    </Link>
  );
}