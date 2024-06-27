import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ErrorPage from "./error-page";
import Users from "./user/pages/Users";
import NewPitik from "./pitik/pages/NewPitik";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pitiks/:pitikId",
    element: <NewPitik />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
