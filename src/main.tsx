import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./features/hero/Hero.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>
);
