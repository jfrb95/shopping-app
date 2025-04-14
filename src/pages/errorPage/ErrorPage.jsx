import { Link, useRouteError } from "react-router-dom";
import styles from './ErrorPage.module.css';
import { Fragment } from "react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage}>
      <h1>Unexpected Error {error.status}</h1>
      <p>Sorry, there was an error with your request.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to='/'>Return home</Link>
    </div>
  )
}