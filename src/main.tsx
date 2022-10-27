import "@unocss/reset/normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "virtual:uno.css"; // https://github.com/unocss/unocss/tree/main/packages/vite#react
import { router } from "./router";

const rootDom = document.getElementById("root")!;

const root = ReactDOM.createRoot(rootDom);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
