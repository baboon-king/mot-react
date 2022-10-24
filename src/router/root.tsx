import { RouteObject } from "react-router-dom";
import { RedirectToWelcome1 } from "../components/RedirectToWelcome1";
import { MainLayout } from "../layouts/MainLayout";
import { welcomeRoute } from "./welcome";

export const rootRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RedirectToWelcome1 />,
    children: [
      {
        index: true,
        element: <RedirectToWelcome1 />,
      },
      welcomeRoute,
    ],
  },
];
