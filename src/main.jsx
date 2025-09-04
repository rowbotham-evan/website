// src/main.jsx
import "./index.css"; 
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/website"> 
    <MDXProvider>
      <App />
    </MDXProvider>
  </BrowserRouter>
);
