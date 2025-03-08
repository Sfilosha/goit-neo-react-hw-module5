import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";
import MoviesGallery from "../components/MoviesGallery/MoviesGallery";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetching = async () => {
      const data = await getTrendingMovies();
      setTrending(data.results);
      // console.log("Results", data.results);
    };
    fetching();
  }, []);
  return (
    <main>
      <section className="container">
        <h1 className="h1">Trending Today</h1>
        <MoviesGallery movies={trending} location={location} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          laboriosam placeat incidunt rem illum animi nemo quibusdam quia
          voluptatum voluptate.
        </p>
      </section>
    </main>
  );
}
