import { redirect, type RouteObject } from "react-router-dom";
import { WelcomeLayout } from "../layouts/WelcomeLayout";
import { Welcome1 } from "../pages/Welcome1";
import { Welcome2 } from "../pages/Welcome2";
import { Welcome3 } from "../pages/Welcome3";
import { Welcome4 } from "../pages/Welcome4";

export const welcomeRoute: RouteObject = {
  path: "welcome",
  element: <WelcomeLayout />,
  children: [
    {
      index: true,
      loader: () => {
        return redirect("/welcome/1");
      },
    },
    {
      path: "1",
      element: <Welcome1 />,
    },
    {
      path: "2",
      element: <Welcome2 />,
    },
    {
      path: "3",
      element: <Welcome3 />,
    },
    {
      path: "4",
      element: <Welcome4 />,
    },
  ],
};
