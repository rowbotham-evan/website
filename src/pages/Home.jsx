// src/pages/Home.jsx
import React from 'react';
import theme from '../theme';
import { NavLink } from "react-router-dom";
import pfp from '/images/pfp.png';

// Import the new logo images
import xLogo from '/images/x_logo.png';
import linkedinLogo from '/images/linkedin_logo.png';

// Define individual constants for icon sizes
const X_ICON_SIZE = 40;        // Adjust this value for the X icon
const LINKEDIN_ICON_SIZE = 25; // Adjust this value for the LinkedIn icon

// Define constants for spacing
const GAP_NJ_NYC_TO_X = 1;   // Adjust this value for spacing between "NJ | NYC" and the X icon
const SOCIAL_ICON_GAP = -5;  // Adjust this value for spacing between social icons (can be negative)

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: '80px auto',
        padding: '0 24px',
        fontFamily: 'Inter, -apple-system, sans-serif',
        lineHeight: 1.6,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
        <img
          src={pfp}
          alt="Evan Rowbotham profile picture"
          style={{
            width: 112,
            height: 112,
            borderRadius: '50%',
            border: `5px solid ${theme.accent}`,
            objectFit: 'cover',
          }}
        />
        <div>
          <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800 }}>Evan Rowbotham</h1>
          <p style={{ margin: 0, color: '#555', display: 'flex', alignItems: 'center' }}>
            {/* Horizontal alignment at midpoints is handled by alignItems: 'center' on this parent <p> */}
            <span>NJ | NYC</span>

            {/* X (formerly Twitter) Logo Image - Add margin-left here */}
            <a
              href="https://x.com/evanrow_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '1em',
                marginLeft: GAP_NJ_NYC_TO_X, // Apply variable gap from "NJ | NYC"
              }}
            >
              <img
                src={xLogo}
                alt="X (Twitter) logo"
                style={{
                  width: X_ICON_SIZE,
                  height: X_ICON_SIZE,
                  verticalAlign: 'middle',
                  objectFit: 'contain',
                }}
              />
            </a>
            {/* LinkedIn Logo Image - Add margin-left for spacing from X icon */}
            <a
              href="https://www.linkedin.com/in/evan-rowbotham-091984250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '1em',
                marginLeft: SOCIAL_ICON_GAP, // Apply variable gap between X and LinkedIn
              }}
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn logo"
                style={{
                  width: LINKEDIN_ICON_SIZE,
                  height: LINKEDIN_ICON_SIZE,
                  verticalAlign: 'middle',
                  objectFit: 'contain',
                }}
              />
            </a>
          </p>
        </div>
      </div>

      <p>
        I was an applied math major at Florida State University until 2022. I just transferred to NYU as a mathematics major. (they don’t have applied)
        My interests are wide ranging, so it’s more accurate to say I just enjoy talking to thoughtful, committed, and resilient people who push themselves to constantly grow, refine their world views, and give to others. (I especially enjoy learning about other people’s cultures!)
        My most current side obsession is learning about the different "interpretations" (and thus different ontological commitments) of quantum mechanics. 
      </p>
      <p>
        Current fascination: competing ontologies in quantum mechanics.
      </p>
      <p style={{ marginTop: 24 }}>
        <NavLink to="https://calendly.com/rowbotham-evan/coffee-chat"
            style={{
              color: theme.accent,
              fontWeight: 600,
              textDecoration: 'none'
            }}>
          30-min coffee chat ↗︎
        </NavLink>
      </p>
    </div>
  );
}