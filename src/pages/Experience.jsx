// src/pages/Experience.jsx
import React from "react";
import Section from "../Section";
import Card from "../components/Card";
import { experiences } from "../contentRegistry";
import theme from "../theme"; // Import theme to use font styles

function formatRange(r = "") {
  if (!r.includes("–")) return r;
  const [start, end] = r.split("–").map(s => s.trim());
  const fmt = [start, end].map(p => {
    const d = new Date(p);
    return isNaN(d)
      ? p
      : d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  });
  return fmt.join(" - ");
}

export default function Experience() {
  const list = experiences
    .filter(e => !e.draft)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, fontFamily: theme.fonts.heading.family }}>
        Experiences.
      </h2>

      {list.map(exp => (
        <Card
          key={exp.slug}
          link={exp.route}
          cardBgColor="#F0F0F0"
          left={null}
          meta={
            <div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                {exp.role} @ {exp.display_company || exp.company} {/* <--- MODIFIED LINE */}
              </h3>

              {exp.date && (
                <p style={{ margin: "4px 0 0", fontStyle: "italic", color: "#666" }}>
                  ({formatRange(exp.date)})
                </p>
              )}

              {exp.blurb && (
                <p style={{ margin: "8px 0 0", fontSize: 14 }}>
                  {exp.blurb}
                </p>
              )}
            </div>
          }
        />
      ))}
    </Section>
  );
}