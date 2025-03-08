import React from "react";
import css from "./MovieCard.module.css";

function MovieCard({ data: { poster_path, original_title, release_date } }) {
  // console.log("poster_path: ", poster_path);
  // console.log("backdrop_path: ", backdrop_path);
  return (
    <div className={css.cardWrapper}>
      <ul className={css.cardItem}>
        <li className={css.coverWrapper}>
          <img
            className={css.coverImage}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            aria-description={original_title}
          />
        </li>
        <li>
          <p className={css.movieTitle}>
            {original_title != "" ? original_title : "N/A"}
          </p>
        </li>
        <li className={css.movieSubtitle}>
          <p>{release_date != "" ? release_date.slice(0, 4) : "Uknown"}</p>
        </li>
      </ul>
    </div>
  );
}

export default MovieCard;
