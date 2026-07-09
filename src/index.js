import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
