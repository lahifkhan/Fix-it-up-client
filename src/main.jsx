import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import { RouterProvider } from "react-router";
import { Router } from "./Routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
