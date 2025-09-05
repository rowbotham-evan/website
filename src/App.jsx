// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav             from "./Nav";
import Home            from "./pages/Home";
import Blog            from "./pages/Blog";
import Experience      from "./pages/Experience";
import Projects        from "./pages/Projects";
import ProjectDetail   from "./pages/ProjectDetail";
import ContentDetail   from "./pages/ContentDetail";   // handles essays & experiences
import Quotes          from "./pages/Quotes";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Essays */}
        <Route path="/blog"        element={<Blog />} />
        <Route path="/post/:slug" element={<ContentDetail />} />

        {/* Experiences */}
        <Route path="/experience"        element={<Experience />} />
        <Route path="/experience/:slug" element={<ContentDetail />} />

        {/* Projects */}
        <Route path="/projects"      element={<Projects />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />

        {/* Quotes */}
        <Route path="/quotes" element={<Quotes />} />

      </Routes>
    </>
  );
}