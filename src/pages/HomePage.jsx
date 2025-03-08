import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";
import MoviesGallery from "../components/MoviesGallery/MoviesGallery";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoader(true);

    const fetching = async () => {
      const data = await getTrendingMovies();
      setTrending(data.results);
      setLoader(false);
    };
    fetching();
  }, []);

  return (
    <main>
      <section className="container">
        <h1 className="h1">Trending Today</h1>
        {loader && <Loader />}
        <MoviesGallery movies={trending} location={location} />
      </section>
    </main>
  );
}
