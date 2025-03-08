import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MoviesGallery.module.css";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

function MoviesGallery({ movies, location }) {
  return (
    <>
      <ul className={css.moviesList}>
        {movies.map((movie) => (
          <li key={nanoid()} className={css.movieCard}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
              className={css.link}
            >
              <MovieCard data={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesGallery;
