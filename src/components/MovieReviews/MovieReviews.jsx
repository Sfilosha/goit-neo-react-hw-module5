import React, { useEffect, useState } from "react";
import { getMovieReviews } from "../../api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import Message from "../Message/Message";
import Loader from "../Loader/Loader";

function Reviews() {
  const { movieId } = useParams();
  // console.log("movieID is: ", movieId);
  const [movieReviews, setMovieReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(false);

  const defaultImg =
    "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_1280.png";

  useEffect(() => {
    if (!movieId) return;

    setLoader(true);
    const fetchReviews = async () => {
      const data = await getMovieReviews(movieId);
      data.results.length != 0
        ? setMovieReviews(data.results)
        : setMessage(true);
      setLoader(false);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {loader && <Loader />}
        {movieReviews.map((el) => (
          <li className={css.reviewCard} key={el.id}>
            <div className={css.cardHeader}>
              <img
                className={css.avatar}
                src={
                  el.author_details.avatar_path != null
                    ? `https://image.tmdb.org/t/p/w500/${el.author_details.avatar_path}`
                    : `${defaultImg}`
                }
              />
              <div className={css.userDetails}>
                <p className={css.reviewAuthor}>{el.author}</p>
                <p>Rating: {el.author_details.rating}</p>
              </div>
            </div>
            <p className={css.reviewText}>{el.content}</p>
          </li>
        ))}
      </ul>
      {message && (
        <Message
          title={"No reviews"}
          message={"This movie don`t have any reviews yet"}
        />
      )}
    </div>
  );
}

export default Reviews;
