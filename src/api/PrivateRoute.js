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
        <Navigate to="/signin" {...alert("로그인 후 이용할 수 있습니다.")} />
    )
  );
};

export default PrivateRoute;
