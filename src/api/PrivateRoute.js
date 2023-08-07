import React from "react";
import { Navigate } from "react-router";
import Todo from "../pages/Todo";

const PrivateRoute = ({ authenticated, path, component: Component }) => {
  return authenticated ? (
    path != "todo" ? (
      <Navigate to="/todo" />
    ) : (
      Component
    )
  ) : (
    path != "todo" ? (
        Component
    ) : (
        <Navigate to="/signin" />
    )
  );
};

export default PrivateRoute;
