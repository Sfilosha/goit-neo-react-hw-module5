import { Suspense, useEffect, useState } from "react";
import { getMovieByID } from "../api.js";
import { useParams, useLocation, Outlet, Link } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink.jsx";
import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard.jsx";

function MovieDetailsPage() {
  const { movieId } = useParams();
  // console.log("movieID is: ", movieId);
  const [movieDetails, setMovieDetails] = useState([]);

  const location = useLocation();
  const backLinkRef = location.state ?? "/movies";

  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      const data = await getMovieByID(movieId);
      setMovieDetails(data);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <main>
      <section className="container">
        <BackLink link={backLinkRef}>Back to movies</BackLink>
        <img src="https://via.placeholder.com/960x240" alt="" />
        <h2>
          movie - {movieDetails.original_title} - {movieId}
        </h2>
        <br></br>
        <MovieDetailsCard details={movieDetails} />
        <Link className="link" to="cast">
          Cast
        </Link>
        <Link className="link" to="reviews">
          Reviews
        </Link>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
}

export default MovieDetailsPage;
