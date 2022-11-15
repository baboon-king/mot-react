import { RouteObject } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { ValidateHasWelcomeRead } from "../components/ValidateHasWelcomeRead";
import { MainLayout } from "../layouts/MainLayout";
import { welcomeRoute } from "./welcome";

export const rootRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ValidateHasWelcomeRead />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <div>home</div>,
      },
      welcomeRoute,
    ],
  },
];
