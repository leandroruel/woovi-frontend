import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RelayEnvironmentProvider>
);
