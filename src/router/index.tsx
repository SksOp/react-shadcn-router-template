import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { paths } from "./paths";

const Home = React.lazy(() => import("@/pages/home"));
export default function Router() {
  return useRoutes([...root]);
}

const root = [
  {
    path: paths.root,
    element: <Home />,
  },
  {
    path: paths.login,
    element: <>Login</>,
  },
  {
    path: paths.logout,
    element: <>Logout</>,
  },
  { path: "*", element: <Navigate to="/404" replace /> },
];

export * from "./paths";
