// src/main.tsx ou src/index.tsx
import "./i18n"; // precisa vir antes de ReactDOM.render
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-share.css";

import "./styles/global-style.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Elemento root não encontrado no DOM.");

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Suspense fallback={<div>Loading translations…</div>}>
      <App />
    </Suspense>
  </StrictMode>
);
