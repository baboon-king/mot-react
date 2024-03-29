import { createHashRouter } from "react-router-dom";
import { rootRoutes } from "./root";

export type ErrorResponseDate = unknown;

export type ErrorResponseStatus = number | 404;

export type ErrorResponseStatusText = string | "Not Found";

export interface ErrorResponse extends Error {
  data?: ErrorResponseDate;
  status?: ErrorResponseStatus;
  statusText?: ErrorResponseStatusText;
}

export const router = createHashRouter(rootRoutes);
