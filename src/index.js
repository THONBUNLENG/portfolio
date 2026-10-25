import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Swallow the benign "ResizeObserver loop" error surfaced by react-parallax-tilt
// (and the CRA dev overlay) when large images resize.
const resizeObserverLoopErr = (e) => {
  if (
    e &&
    e.message &&
    e.message.includes("ResizeObserver loop")
  ) {
    e.stopPropagation();
    e.preventDefault();
  }
};
window.addEventListener("error", resizeObserverLoopErr);

const brokenImageHandler = (e) => {
  if (e && e.target && e.target.tagName === "IMG") {
    e.target.style.visibility = "hidden";
    e.target.setAttribute("alt", "");
  }
};
window.addEventListener("error", brokenImageHandler, true);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

