import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE3MTA2MGMxNWMyZWEzODQ2OTkyMWI1NjRiNWI0MiIsIm5iZiI6MTc0MTM3ODk0OS4yNzUsInN1YiI6IjY3Y2I1NTg1NDJjNzUyMTI1MmY1ODM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72-ygqM9VwCpXBfkQd_rLj9kbPS5-P3o8YIIa1iFT0g",
  },
};
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  console.log("getTrendingMovies:", data);
  return data;
};

export const getByQuery = async (query, page = 1) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&page=${page}`,
    options
  );
  console.log("getByQuery:", data);
  return data;
};

export const getMovieByID = async (movie_id) => {
  const { data } = await axios.get(`movie/${movie_id}`, options);
  console.log("getMovieByID:", data);
  return data;
};

export const getMovieCast = async (movie_id) => {
  const { data } = await axios.get(`movie/${movie_id}/credits`, options);
  console.log("getMovieCast:", data);
  return data;
};

export const getMovieReviews = async (movie_id) => {
  const { data } = await axios.get(`movie/${movie_id}/reviews`, options);
  console.log("getMovieReviews:", data);
  return data;
};

export default {
  getTrendingMovies,
  getByQuery,
  getMovieByID,
  getMovieCast,
  getMovieReviews,
};
