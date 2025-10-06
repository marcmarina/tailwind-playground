import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex min-h-dvh justify-center bg-[#f3f0ec]">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position="right" />
        <App />
      </QueryClientProvider>
    </div>
  </StrictMode>,
);
