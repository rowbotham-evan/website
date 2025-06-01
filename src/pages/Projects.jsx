// src/pages/Projects.jsx
import React from "react";
import Section from "../Section";
import Card from "../components/Card";
import GitHubLink from "../components/GitHubLink";
import { projects } from "../contentRegistry";
import theme from "../theme";

function formatDate(dateStr = "") {
  if (!dateStr) return dateStr;
  if (/^\d{4}$/.test(dateStr)) return dateStr;
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function Projects() {
  return (
    <Section>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, fontFamily: theme.fonts.heading.family }}>
        Projects.
      </h2>

      {projects.map(p => (
        <Card
          key={p.slug}
          link={p.route}
          cardBgColor="#F0F0F0"
          left={
            p.thumbnail ? (
              <img
                src={p.thumbnail}
                alt={p.title}
                style={{
                  width: 60,
                  height: 60,
                  objectFit: "contain",
                  objectPosition: "center",
                  background: "#fff",
                  borderRadius: 4,
                }}
              />
            ) : (
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: "#d0d0d0",
                  borderRadius: 4,
                }}
              />
            )
          }
          meta={
            <div style={{ flexGrow: 1 }}>
              {/* Title + Theme badge inline */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <h3 style={{ margin: 0, fontSize: "1.25rem" }}>
                  {p.title}
                </h3>
                {p.theme && (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 8px",
                      fontSize: "0.75rem",
                      borderRadius: 4,
                      background: p.themeBg || "#e5e5e5",
                      color: p.themeColor || "#000",
                      fontWeight: 600,
                    }}
                  >
                    {p.theme}
                  </span>
                )}
              </div>

              {/* Date and GitHub icon inline */}
              <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 8 }}>
                {/* Changed order: GitHubLink comes before the date span */}
                <GitHubLink repo={p.githubRepo} size={18} /> {/* */}
                {p.date && (
                  <span style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#666" }}>
                    {formatDate(p.date)}
                  </span>
                )}
              </div>

              {p.blurb && (
                <p style={{ margin: "8px 0 0" }}>{p.blurb}</p>
              )}
            </div>
          }
        />
      ))}
    </Section>
  );
}