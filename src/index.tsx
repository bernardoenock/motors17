import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Providers from "./Providers";
import ThemeProvider from "./Theme/ThemeProvider";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./Providers/Loading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <BrowserRouter>
          <Providers>
            <App />
          </Providers>
        </BrowserRouter>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>
);
