


import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface PublicRouteProps {
  children: ReactNode;
}

// Redirect logged-in users away from auth pages
const PublicRoute = ({ children }: PublicRouteProps) => {
  const isLoggedIn = localStorage.getItem("user"); // check login
  return !isLoggedIn ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
