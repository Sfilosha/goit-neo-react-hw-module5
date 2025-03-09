import { useLocation, useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar/SearchBar.jsx";
import { getByQuery } from "../api.js";
import { useEffect, useState } from "react";
import Message from "../components/Message/Message.jsx";
import Loader from "../components/Loader/Loader.jsx";
import MoviesGallery from "../components/MoviesGallery/MoviesGallery.jsx";

export function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  // Location
  const location = useLocation();

  // Search Params
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const handleSearch = (query) => {
    setMoviesList([]);
    setSearchParams({ search: query });
  };

  useEffect(() => {
    if (!search) return;

    const fetching = async () => {
      try {
        setError(false);
        setLoader(true);
        setNothingFound(false);

        const fetchResult = await getByQuery(search);
        setMoviesList((prevImg) => [...prevImg, ...fetchResult.results]);

        if (fetchResult.results.length === 0) {
          setNothingFound(true);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetching();
  }, [search]);

  return (
    <main>
      <section className="container">
        <SearchBar onSearch={handleSearch} />
        {loader && <Loader />}
        {moviesList.length > 0 && (
          <MoviesGallery
            movies={moviesList}
            location={`${location.pathname}${location.search}`}
          />
        )}
        {nothingFound && (
          <Message
            title={"Nothing found"}
            message={"But we have a lot of other films! Try find another one"}
          />
        )}
        {error && (
          <Message
            title={"Something went wrong"}
            message={
              "An error happened while searching. Please try again later."
            }
          />
        )}
      </section>
    </main>
  );
}

export default MoviesPage;
