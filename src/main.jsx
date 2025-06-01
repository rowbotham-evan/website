// src/main.jsx   ← single entry file used by index.html
import ReactDOM        from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MDXProvider }   from "@mdx-js/react";
import App               from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MDXProvider>
      <App />
    </MDXProvider>
  </BrowserRouter>
);
