import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/globals.css";
import { Toaster } from "./components/ui/toaster";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App />
      <Toaster />
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
