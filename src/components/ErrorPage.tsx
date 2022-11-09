import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "../router";
import { RedirectToWelcome1 } from "./RedirectToWelcome1";

export function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  if (error.status === 404) {
    return <RedirectToWelcome1 />;
  } else {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <h1>卧槽！</h1>
        <p>不好意思出现了一个错误</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }
}
