import { RouteObject } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { RedirectToWelcome1 } from "../components/RedirectToWelcome1";
import { MainLayout } from "../layouts/MainLayout";
import { welcomeRoute } from "./welcome";

export const rootRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RedirectToWelcome1 />,
      },
      welcomeRoute,
    ],
  },
];
