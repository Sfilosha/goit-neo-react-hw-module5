import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <ClipLoader />
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
