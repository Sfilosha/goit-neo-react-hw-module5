import { Suspense, useEffect, useState } from "react";
import { getMovieByID } from "../api.js";
import { useParams, useLocation, Outlet, Link } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink.jsx";
import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard.jsx";
import MovieAdditionalCard from "../components/MovieAdditionalCard/MovieAdditionalCard.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
        <BackLink link={backLinkRef}>
          <ArrowBackIosIcon />
          Back
        </BackLink>
        <MovieDetailsCard details={movieDetails} />
        <MovieAdditionalCard />
      </section>
    </main>
  );
}

export default MovieDetailsPage;
