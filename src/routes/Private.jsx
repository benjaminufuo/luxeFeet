import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { UserContext } from "../../src/global/Context";

const Private = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default Private;
