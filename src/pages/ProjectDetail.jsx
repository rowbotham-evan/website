// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { projects } from "../contentRegistry";
import theme from "../theme";
import { MDXProvider } from "@mdx-js/react";
import GitHubLink from "../components/GitHubLink";
import MdxImage from '../components/MdxImage'; // <--- IMPORT THE NEW COMPONENT

function formatDate(dateStr = "") {
  if (!dateStr) return "";
  if (/^\d{4}$/.test(dateStr)) return dateStr;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    console.warn(`Invalid date string: ${dateStr}`);
    return dateStr;
  }
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const entry = projects.find(p => p.slug === slug);
  if (!entry) return <Navigate to="/projects" replace />;

  const MDXContent = entry.component;

  const headerCardWidth = "700px";
  const headerCardMinHeight = "-1px";
  const headerCardPadding = "10px";
  const headerCardBorderColor = "#000000";
  const headerCardBackgroundColor = "#f9f9f9";
  const headerCardBorderRadius = "0px";
  const headerCardBoxShadow = "0 4px 8px rgba(0,0,0,0.08)";
  const imageSize = "200px";
  const imageMarginRight = "10px";
  const githubIconHeaderSize = 24;
  const thumbnailOffsetLeft = "20px";

  const getGitHubRepoPath = (fullUrl) => {
    if (!fullUrl) return null;
    try {
      const url = new URL(fullUrl);
      if (url.hostname === 'github.com') {
        const pathParts = url.pathname.split('/').filter(Boolean);
        if (pathParts.length >= 2) {
          return `${pathParts[0]}/${pathParts[1]}`;
        }
      }
    } catch (e) {
      if (fullUrl.includes('/')) {
          return fullUrl;
      }
      console.warn(`Invalid GitHub URL format in contentRegistry: ${fullUrl}`);
    }
    return null;
  };

  const githubRepoPath = getGitHubRepoPath(entry.githubRepo);

  const mdxComponents = {
    a: (props) => (
      <a
        {...props}
        style={{
          color: "#0000FF",
          textDecoration: "underline",
          cursor: "pointer",
          fontFamily: theme.fonts.body.family,
        }}
      />
    ),
    p: (props) => <p {...props} style={{ ...props.style, fontFamily: theme.fonts.body.family }} />,
    li: (props) => <li {...props} style={{ ...props.style, fontFamily: theme.fonts.body.family }} />,
    h1: (props) => <h1 {...props} style={{ ...props.style, fontFamily: theme.fonts.heading.family }} />,
    h2: (props) => <h2 {...props} style={{ ...props.style, fontFamily: theme.fonts.heading.family }} />,
    h3: (props) => <h3 {...props} style={{ ...props.style, fontFamily: theme.fonts.heading.family }} />,
    img: MdxImage, // <--- DIRECT ALL <img> TAGS TO YOUR NEW COMPONENT
  };

  return (
    <article style={{ maxWidth: theme.maxW, margin: "80px auto", padding: "0 24px", fontFamily: theme.fonts.body.family }}>
      <div style={{
        width: headerCardWidth,
        minHeight: headerCardMinHeight,
        padding: headerCardPadding,
        border: `1px solid ${headerCardBorderColor}`,
        borderRadius: headerCardBorderRadius,
        backgroundColor: headerCardBackgroundColor,
        boxShadow: headerCardBoxShadow,
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: theme.fonts.body.family,
        margin: "0 auto 20px auto",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: imageMarginRight,
          marginBottom: "10px",
          width: "100%",
          paddingLeft: thumbnailOffsetLeft,
        }}>
          {entry.thumbnail && (
            <img
              src={entry.thumbnail}
              alt={entry.title}
              style={{
                width:         imageSize,
                height:        imageSize,
                objectFit:     "contain",
                objectPosition: "center",
                borderRadius: 4,
                flexShrink: 0,
                verticalAlign: "middle"
              }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <h1 style={{ margin: 0, fontSize: theme.fonts.heading.h2, fontFamily: theme.fonts.heading.family }}>{entry.title}</h1>
              {entry.theme && (
                <span
                  style={{
                    padding:         "4px 8px",
                    fontSize:        theme.fonts.body.small,
                    borderRadius: 4,
                    background:      entry.themeBg      || "#e5e5e5",
                    color:           entry.themeColor || "#000",
                    fontWeight:      600,
                    fontFamily: theme.fonts.body.family,
                  }}
                >
                    {entry.theme}
                </span>
              )}
            </div>
            <div style={{
                marginTop: "4px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}>
              {githubRepoPath && (
                <GitHubLink repo={githubRepoPath} size={githubIconHeaderSize} />
              )}
              {entry.date && (
                <span style={{ fontStyle: "italic", color: "#666", fontSize: theme.fonts.body.small, fontFamily: theme.fonts.body.family }}>
                    {formatDate(entry.date)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {entry.blurb && (
        <p style={{ fontStyle: "italic", marginBottom: 24, fontSize: theme.fonts.body.large, fontFamily: theme.fonts.body.family }}>
            {entry.blurb}
        </p>
      )}

      <MDXProvider components={mdxComponents}>
        <MDXContent />
      </MDXProvider>

      <p style={{ marginTop: 40 }}>
        <Link to="/projects" style={{ color: theme.accent, textDecoration: "none", fontSize: theme.fonts.body.medium, fontFamily: theme.fonts.body.family }}>
            ← Back to Projects
        </Link>
      </p>
    </article>
  );
}