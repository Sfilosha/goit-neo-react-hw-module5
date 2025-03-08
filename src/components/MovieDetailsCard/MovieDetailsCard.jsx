import React from "react";
import css from "./MovieDetailsCard.module.css";
import { nanoid } from "nanoid";

const defaultImg =
  "https://cdn.pixabay.com/photo/2017/01/25/17/35/camera-2008489_1280.png";

function MovieDetailsCard({
  details: {
    original_title,
    vote_average,
    poster_path,
    genres,
    overview,
    release_date,
    tagline,
    id,
  },
}) {
  return (
    <div>
      <ul className={css.cartWrapper}>
        <li className={css.coverWrapper} key={nanoid()}>
          <img
            className={css.coverImage}
            src={
              poster_path != null
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : `${defaultImg}`
            }
            alt=""
            aria-description={original_title}
          ></img>
        </li>
        <li className={css.detailsWrapper} key={nanoid()}>
          <p className={css.id}>ID: {id}</p>
          <h1 className={css.movieTitle}>{original_title}</h1>
          <h2 className={css.movieSubtitle}>
            {release_date != "" ? release_date?.slice(0, 4) : "Uknown"} •{" "}
            {tagline}
          </h2>
          <p className={css.movieScore}>User score: {vote_average}</p>
          <p className={css.movieOverivew}>{overview}</p>
          <ul className={css.genresWrapper}>
            {genres?.map((el) => (
              <li className={css.movieGenre} key={el.id}>
                {el.name}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MovieDetailsCard;
