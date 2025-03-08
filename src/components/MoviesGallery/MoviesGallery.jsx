import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MoviesGallery.module.css";
import { Link } from "react-router-dom";

function MoviesGallery({ movies, location }) {
  // console.log("MoviesGallery – movies: ", movies);
  return (
    <>
      <ul className={css.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieCard}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <MovieCard data={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesGallery;
