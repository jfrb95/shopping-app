import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  //&& in the following may have to be || instead

  return (
    <>
      <h1>Unexpected Error</h1>
      <p>Sorry, there was an error with your request.</p>
      <p>
        <i>{error.statusText && error.message}</i>
      </p>
    </>
  )
}