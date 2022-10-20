import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { ErrorPage } from "./components/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
        <h2>children page</h2>
        <Outlet />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>enter "page" / "page1" to address line </div>,
      },
      {
        path: "page",
        element: <div>page</div>,
      },
      {
        path: "page1",
        element: <div>page1</div>,
      },
    ],
  },
]);

const rootDom = document.getElementById("root")!;

const root = ReactDOM.createRoot(rootDom);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
