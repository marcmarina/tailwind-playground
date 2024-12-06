import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-gray-100 min-h-dvh flex justify-center">
      <App />
    </div>
  </StrictMode>
);
