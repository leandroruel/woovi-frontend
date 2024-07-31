import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import '@/assets/css/globals.css'
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RouterProvider router={router} />
      <Toaster />
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
