import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";
import MoviesGallery from "../components/MoviesGallery/MoviesGallery";

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const data = await getTrendingMovies();
      setTrending(data.results);
      console.log("Results", data.results);
    };
    fetching();
  }, []);
  return (
    <main>
      <section className="container">
        <h1 className="h1">Trending Today</h1>
        <MoviesGallery movies={trending} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          laboriosam placeat incidunt rem illum animi nemo quibusdam quia
          voluptatum voluptate.
        </p>
      </section>
    </main>
  );
}
