import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api";

function MovieCast() {
  const { movieId } = useParams();
  // console.log("movieID is: ", movieId);
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      const data = await getMovieCast(movieId);
      setMovieCast(data);
    };
    fetchMovie();
  }, [movieId]);

  return <div>Cast Goes Here</div>;
}

export default MovieCast;
