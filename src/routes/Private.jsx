import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../../src/global/Context";

const Private = () => {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Private;
