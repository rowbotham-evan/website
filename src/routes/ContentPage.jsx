import { useParams, Navigate } from "react-router-dom";
import { posts, projects, experiences } from "../contentRegistry";

const library = [...posts, ...projects, ...experiences];

/* -------------------------------------------------
   Renders any MDX page at /post/:slug
                          /project/:slug
                          /experience/:slug
   ------------------------------------------------- */
export default function ContentPage() {
  const { kind, slug } = useParams();
  const entry = library.find(e => e.kind === kind && e.slug === slug);

  if (!entry) return <Navigate to="/" replace />;  // simple 404 → home

  const MDX = entry.component;
  return (
    <main className="page">
      <MDX />
    </main>
  );
}
