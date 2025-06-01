// src/pages/Quotes.jsx
import React from "react";
import Section from "../Section";
import { quotes } from "../quotes";
import theme from "../theme"; 

export default function Quotes() {
  return (
    <Section>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, fontFamily: theme.fonts.heading.family }}>
        Quotes. {/* Added period */}
      </h2>

      {quotes.map((q, i) => (
        <blockquote
          key={i}
          style={{
            // Increased bottom margin for more space after each quote block
            margin: "24px 0 40px 0", // Top: 24px, Right: 0, Bottom: 40px, Left: 0
            paddingLeft: 12,
            borderLeft: "4px solid #ddd",
          }}
        >
          <p style={{ fontStyle: "italic", margin: 0, fontSize: "1.25rem", fontFamily: theme.fonts.body.family }}>
            “{q.text}”
          </p>
          {q.author && (
            <footer
              style={{
                marginTop: 8,
                fontWeight: 700,
                fontStyle: "normal",
                textAlign: "left",
                fontSize: "0.9rem",
                fontFamily: theme.fonts.body.family,
              }}
            >
              — {q.author}
            </footer>
          )}
        </blockquote>
      ))}
    </Section>
  );
}