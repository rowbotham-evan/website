// src/contentRegistry.js
// Utility to humanize slug names (e.g. "my-essay-title" → "My Essay Title")
function humanizeSlug(slug) {
  return slug
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Build an index of every MDX file or folder under posts/, projects/, experiences/
function makeIndex(mods, kind) {
  return Object.entries(mods).map(([path, mod]) => {
    const slug = path
      .replace(/^\.\/[^/]+\//, "")
      .replace(/\/index\.mdx$|\.mdx$/, "");

    const meta = mod.meta || {};
    const title = meta.title || humanizeSlug(slug);
    const date = meta.date || "";
    const blurb = meta.blurb || "";
    const draft = meta.draft === true;
    let thumbnail = meta.thumbnail || ""; // Get thumbnail from meta

    // --- REFINED THUMBNAIL PATH LOGIC ---
    // Assuming thumbnail path in MDX meta is like "public/images/my-thumb.png"
    // Remove "public/" and then prepend BASE_URL for deployment.
    if (thumbnail.startsWith('public/')) {
        thumbnail = import.meta.env.BASE_URL + thumbnail.substring('public/'.length);
    } else if (thumbnail.startsWith('/')) {
        // Fallback for paths that start with '/', also prepend BASE_URL after removing the leading slash
        thumbnail = import.meta.env.BASE_URL + thumbnail.substring(1);
    }
    // If it's a relative path without public/ or / and it should be a public asset,
    // you might need another case, but "public/" or "/" is usually the convention.
    // Assuming all public assets will start with "public/" or "/" in MDX meta.
    // --- END REFINED THUMBNAIL PATH LOGIC ---


    return {
      kind,
      slug,
      route: `/${kind}/${slug}`,
      component: mod.default,
      title,
      date,
      blurb,
      draft,
      thumbnail, // Use the potentially modified thumbnail
      ...meta
    };
  });
}

export const posts = makeIndex(
  import.meta.glob("./posts/**/*.mdx", { eager: true }),
  "post"
);

export const experiences = makeIndex(
  import.meta.glob("./experiences/**/*.mdx", { eager: true }),
  "experience"
);

export const projects = makeIndex(
  import.meta.glob("./projects/**/*.mdx", { eager: true }),
  "project"
);