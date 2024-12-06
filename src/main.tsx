import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-[#f3f0ec] min-h-dvh flex justify-center">
      <App />
    </div>
  </StrictMode>
);
