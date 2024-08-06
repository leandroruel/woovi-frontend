import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const { token } = useAuth() || {};
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, redirect to the login page
      navigate("/login");
      return;
    }
  }, [token, navigate]);

  // If not authenticated, render null or a loading component
  if (!token) {
    return null;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};
