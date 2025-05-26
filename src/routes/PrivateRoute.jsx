import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  if (loading) {
    return <h1>Loading.........</h1>;
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;
