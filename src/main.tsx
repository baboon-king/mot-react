import "@unocss/reset/antfu.css";
import "@unocss/reset/normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css"; // https://github.com/unocss/unocss/tree/main/packages/vite#react
import { App } from "./App";

const rootDom = document.getElementById("root")!;

const root = ReactDOM.createRoot(rootDom);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
