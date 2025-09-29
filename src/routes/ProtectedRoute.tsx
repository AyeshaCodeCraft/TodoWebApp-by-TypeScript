

import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

// Only renders children if user is logged in
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = localStorage.getItem("user"); // assuming you store logged-in user
  return isLoggedIn ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
