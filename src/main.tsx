import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { RedirectToWelcome1 } from "./components/RedirectToWelcome1";

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
            element: (
              <div>
                welcome1<NavLink to="/welcome/2"> next page</NavLink>
              </div>
            ),
          },
          {
            path: "2",
            element: (
              <div>
                welcome2<NavLink to="/welcome/3"> next page</NavLink>
              </div>
            ),
          },
          {
            path: "3",
            element: (
              <div>
                welcome3<NavLink to="/welcome/4"> next page</NavLink>
              </div>
            ),
          },
          {
            path: "4",
            element: (
              <div>
                welcome4<NavLink to="/welcome/1"> home</NavLink>
              </div>
            ),
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
