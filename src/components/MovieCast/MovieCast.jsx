import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api";
import css from "./MovieCast.module.css";
import Message from "../Message/Message";
import Loader from "../Loader/Loader";

function MovieCast() {
  const { movieId } = useParams();
  // console.log("movieID is: ", movieId);
  const [movieCast, setMovieCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(false);

  const defaultImg =
    "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_1280.png";

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);
    const fetchMovie = async () => {
      const data = await getMovieCast(movieId);
      data.cast.length != 0 ? setMovieCast(data.cast) : setMessage(true);
      setLoader(false);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <ul className={css.castList}>
        {loader && <Loader />}
        {movieCast.map((el) => (
          <li key={el.id} className={css.castCard}>
            <img
              className={css.castImage}
              src={
                el.profile_path != null
                  ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
                  : `${defaultImg}`
              }
              alt={el.name}
              aria-description={el.name}
            ></img>
            <p className={css.castName}>{el.name}</p>
            <p className={css.castRole}>{el.character}</p>
          </li>
        ))}
        {message && (
          <Message
            title={"No cast found"}
            message={"We don`t have a list of actors"}
          />
        )}
      </ul>
    </div>
  );
}

export default MovieCast;
