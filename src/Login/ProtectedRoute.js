import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./auth";

const ProtectedRoute = ({ children }) => {
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }
  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;