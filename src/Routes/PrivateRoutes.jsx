import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <p>loading....</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/logIn"}></Navigate>;
  }
};

export default PrivateRoutes;
