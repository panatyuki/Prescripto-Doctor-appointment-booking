import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.tsx";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AppContextProvider>
  </BrowserRouter>,
);

