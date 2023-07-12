import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../redux/selectors";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
