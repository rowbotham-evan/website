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
    const date  = meta.date  || "";
    const blurb = meta.blurb || "";
    const draft = meta.draft === true;

    return {
      kind,
      slug,
      route:     `/${kind}/${slug}`,
      component: mod.default,
      title,
      date,
      blurb,
      draft,
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
