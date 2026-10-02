import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Calculator } from "@/components/calculator";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="min-h-screen bg-background pb-24">
      <Calculator />
    </main>
  </StrictMode>,
);
