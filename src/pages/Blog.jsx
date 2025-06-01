import React from "react";
import Section from "../Section";
import Card from "../components/Card";
import { posts } from "../contentRegistry"; // Assuming essays are fetched as 'posts'
import theme from "../theme"; // Import theme to use font styles

function formatMonthYear(d = "") {
  if (/^\d{4}$/.test(d)) return d;
  const x = new Date(d);
  return isNaN(x)
    ? d
    : x.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function Blog() { // Or export default function Essays() if you rename the file
  const essays = posts
    .filter(p => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, fontFamily: theme.fonts.heading.family }}>
        Essays.
      </h2>

      {essays.map(e => (
        <Card
          key={e.slug}
          link={e.route}
          cardBgColor="#F0F0F0" // Added background color for the card
          left={null}
          meta={
            <div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                {e.title}
              </h3>

              {e.date && (
                <p style={{ margin: "4px 0 0", fontStyle: "italic", color: "#666" }}>
                  ({formatMonthYear(e.date)})
                </p>
              )}

              {e.blurb && (
                <p style={{ margin: "8px 0 0", fontSize: 14 }}>
                  {e.blurb}
                </p>
              )}
            </div>
          }
        />
      ))}
    </Section>
  );
}