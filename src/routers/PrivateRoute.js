import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  localStorage.setItem("lastPath", location.pathname);
  localStorage.setItem("lastSearch", location.search);

  console.log(location);

  return user.logged ? children : <Navigate to={"/lastPath/lastSearch"} />;
};
