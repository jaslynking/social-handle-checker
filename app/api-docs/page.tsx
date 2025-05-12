"use client";

import { useEffect } from "react";
import Header from "../../components/Header";

export default function ApiDocs() {
  useEffect(() => {
    // Dynamically load Swagger UI
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js";
    script.async = true;
    script.onload = () => {
      window.ui = window.SwaggerUIBundle({
        url: "/swagger.json",
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [window.SwaggerUIBundle.presets.apis],
      });
    };
    document.body.appendChild(script);

    // Load Swagger UI CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css";
    document.head.appendChild(link);

    return () => {
      // Clean up
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">API Documentation</h1>
        <div id="swagger-ui" />
      </div>
    </div>
  );
}
