// src/pages/ContentDetail.jsx
import React from "react";
import { useParams, useLocation, Navigate, Link } from "react-router-dom";
import { posts, experiences } from "../contentRegistry";
import theme from "../theme";
import { MDXProvider } from "@mdx-js/react";

function fmt(d = "") {
  if (!d) return "";
  if (d.includes("–")) {
    const [s, e] = d.split("–").map(t => t.trim());
    const cast = p => {
      const dt = new Date(p);
      return isNaN(dt)
        ? p
        : dt.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    };
    return `(${cast(s)} - ${cast(e)})`;
  }
  if (/^\d{4}$/.test(d)) return `(${d})`;
  const dt = new Date(d);
  return `(${
    isNaN(dt)
      ? d
      : dt.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  })`;
}

export default function ContentDetail() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const kind = pathname.startsWith("/post/") ? "post" : "experience";

  const entry = (kind === "post" ? posts : experiences).find(e => e.slug === slug);
  if (!entry) return <Navigate to={`/${kind}`} replace />;

  const MDX = entry.component;
  const backPath  = kind === "post" ? "/blog" : "/experience";
  const backLabel = kind === "post" ? "Essays" : "Experience";

  const title = kind === "experience" ? entry.role : entry.title;

  // Define components to override/style within MDX for this component
  const mdxComponents = {
    h1: (props) => <h1 {...props} style={{ ...props.style, fontFamily: theme.fonts.heading.family, fontSize: theme.fonts.heading.h1, margin: 0 }} />,
    h2: (props) => <h2 {...props} style={{ ...props.style, fontFamily: theme.fonts.heading.family, fontSize: theme.fonts.heading.h2, margin: 0 }} />,
    h3: (props) => <h3 {...props} style={{ ...props.style, fontFamily: theme.fonts.heading.family, fontSize: theme.fonts.heading.h3, margin: 0 }} />,
    p: (props) => <p {...props} style={{ ...props.style, fontFamily: theme.fonts.body.family }} />,
    li: (props) => <li {...props} style={{ ...props.style, fontFamily: theme.fonts.body.family }} />,
    a: (props) => (
      <a
        {...props}
        style={{
          color: "#0000FF", // Blue color
          textDecoration: "none", // Remove default underline
          cursor: "pointer", // Indicate it's clickable
          display: "inline-block", // Important for background/padding to work correctly with inline text
          paddingBottom: "3px", // Space for the ziggy squiggle below the text
          fontFamily: theme.fonts.body.family, // Apply body font to links as well

          // SQUIGGLY UNDERLINE STYLES - REVISED FOR UNIFORM REPEATING ZIG-ZAG
          // Stroke-width changed to '2' for better consistency and bolder look
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 5' preserveAspectRatio='xMidYMid meet'%3E%3Cpath d='M0,2.5 L10,0 L20,2.5' stroke='%230000FF' fill='none' stroke-width='2' /%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x", // Repeat horizontally
          backgroundPosition: "bottom center", // Position the squiggle at the very bottom
          backgroundSize: "20px 5px", // Set background size to exactly match the viewBox of the repeating pattern
        }}
      />
    ),
  };

  return (
    <article style={{ maxWidth: theme.maxW, margin: "80px auto", padding: "0 24px", fontFamily: theme.fonts.body.family }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <h1 style={{ margin: 0, fontSize: theme.fonts.heading.h2, fontFamily: theme.fonts.heading.family }}>{title}</h1>
        {entry.date && (
          <span style={{ fontStyle: "italic", color: "#666", fontSize: theme.fonts.body.small, fontFamily: theme.fonts.body.family }}>{fmt(entry.date)}</span>
        )}
      </div>

      {kind === "experience" && entry.company && (
        <p style={{ margin: "4px 0 24px", fontStyle: "italic", color: "#666", fontSize: theme.fonts.body.medium, fontFamily: theme.fonts.body.family }}>
          {entry.company}
        </p>
      )}

      {entry.blurb && (
        <p style={{ fontStyle: "italic", marginBottom: 24, fontSize: theme.fonts.body.large, fontFamily: theme.fonts.body.family }}>
          {entry.blurb}
        </p>
      )}

      <MDXProvider components={mdxComponents}>
        <MDX />
      </MDXProvider>

      <p style={{ marginTop: 48 }}>
        <Link to={backPath} style={{ color: theme.accent, textDecoration: "none", fontSize: theme.fonts.body.medium, fontFamily: theme.fonts.body.family }}>
          ← Back to {backLabel}
        </Link>
      </p>
    </article>
  );
}