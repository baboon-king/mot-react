import { createBrowserRouter } from "react-router-dom";
import { rootRoutes } from "./root";

export const router = createBrowserRouter(rootRoutes);

export type ErrorResponseDate = unknown;
export type ErrorResponseStatus = number | 404;
export type ErrorResponseStatusText = string | "Not Found";
export interface ErrorResponse extends Error {
  data?: ErrorResponseDate;
  status?: ErrorResponseStatus;
  statusText?: ErrorResponseStatusText;
}
