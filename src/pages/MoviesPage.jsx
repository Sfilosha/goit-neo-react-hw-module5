import { useLocation, useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar/SearchBar.jsx";
import { getByQuery } from "../api.js";
import { useEffect, useState } from "react";
import Message from "../components/Message/Message.jsx";
import Loader from "../components/Loader/Loader.jsx";
import MoviesGallery from "../components/MoviesGallery/MoviesGallery.jsx";

export function MoviesPage() {
  const [queryValue, setQueryValue] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  // Location
  const location = useLocation();

  // Search Params
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  // console.log("searchParams: ", search);

  const handleSearch = (query) => {
    setQueryValue(query);
    setMoviesList([]);
    setSearchParams({ search: query });
  };

  useEffect(() => {
    if (!search) return;
    setQueryValue(search);
  }, [search]);

  const fetching = async (query) => {
    if (!query) return;
    try {
      setError(false);
      setLoader(true);
      setNothingFound(false);

      const fetchResult = await getByQuery(query); // Використовуй query
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

  useEffect(() => {
    fetching(queryValue); //
  }, [queryValue]);

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
