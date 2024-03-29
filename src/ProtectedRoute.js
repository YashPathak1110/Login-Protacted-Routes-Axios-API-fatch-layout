// ProtectedRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.root.isAuthenticated);

  return isAuthenticated ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
