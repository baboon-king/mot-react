import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { ErrorPage } from "./components/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/page",
    element: <div>page</div>,
  },
  {
    path: "/page1",
    element: <div>page1</div>,
  },
]);

const rootDom = document.getElementById("root")!;

const root = ReactDOM.createRoot(rootDom);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
