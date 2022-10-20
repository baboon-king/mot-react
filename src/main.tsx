import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { RedirectToWelcome1 } from "./components/RedirectToWelcome1";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <RedirectToWelcome1 />,
    children: [
      {
        index: true,
        element: <RedirectToWelcome1 />,
      },
      {
        path: "welcome",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <RedirectToWelcome1 />,
          },
          {
            path: "1",
            element: <div>welcome1</div>,
          },
          {
            path: "2",
            element: <div>welcome2</div>,
          },
          {
            path: "3",
            element: <div>welcome3</div>,
          },
          {
            path: "4",
            element: <div>welcome4</div>,
          },
        ],
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
