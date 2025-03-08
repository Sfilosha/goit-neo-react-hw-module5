import React from "react";
import css from "./MovieCard.module.css";

function MovieCard({ data: { poster_path, original_title, release_date } }) {
  const defaultImg =
    "https://cdn.pixabay.com/photo/2017/01/25/17/35/camera-2008489_1280.png";

  return (
    <>
      <img
        className={css.coverImage}
        src={
          poster_path != null
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${defaultImg}`
        }
        alt=""
        aria-description={original_title}
      />

      <p className={css.movieTitle}>
        {original_title != "" ? original_title : "N/A"}
      </p>

      <p className={css.movieSubtitle}>
        {release_date != "" ? release_date.slice(0, 4) : "Uknown"}
      </p>
    </>
  );
}

export default MovieCard;

{
  /* <div className={css.cardWrapper}></div> */
}
