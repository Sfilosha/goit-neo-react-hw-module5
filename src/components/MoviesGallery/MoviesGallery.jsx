import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MoviesGallery.module.css";

function MoviesGallery({ movies }) {
  console.log("MoviesGallery – movies: ", movies);
  return (
    <>
      <ul className={css.moviesList}>
        {movies.map((movie) => (
          <li className={css.movieCard} key={movie.id}>
            <MovieCard data={movie} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesGallery;
