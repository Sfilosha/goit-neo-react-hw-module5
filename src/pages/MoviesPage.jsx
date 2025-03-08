import { useLocation, useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar/SearchBar.jsx";
import { getByQuery } from "../api.js";
import { useEffect, useState } from "react";
import Message from "../components/Message/Message.jsx";
import Loader from "../components/Loader/Loader.jsx";
import MoviesGallery from "../components/MoviesGallery/MoviesGallery.jsx";
import LoadMore from "../components/LoadMore/LoadMore.jsx";

export function MoviesPage() {
  const [queryValue, setQueryValue] = useState("");
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  // Location
  const location = useLocation();

  // Search Params
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  // console.log("searchParams: ", search);

  const handleSearch = (query) => {
    setQueryValue(query);
    setPage(1);
    setMoviesList([]);
    setLoadMore(false);
    setSearchParams({ search: query });
    // setLoadMoreClicked(false);
  };

  useEffect(() => {
    // Check if there is a search query saved
    search ? setQueryValue(search) : null;
    // Check if there is a queryValue
    if (!queryValue) return;

    const fetching = async () => {
      try {
        setError(false);
        setLoader(true);
        setNothingFound(false);

        // Робимо запит та рендеримо галерею
        const fetchResult = await getByQuery(queryValue, page);
        console.log(fetchResult);
        setMoviesList((prevImg) => [...prevImg, ...fetchResult.results]);

        if (fetchResult.results.length === 0) {
          setNothingFound(true);
          return;
        }

        // Прибираємо Load More якщо результатів менше ніж perPage та якщо остання сторінка
        // fetchResult.results.length < perPage
        //   ? setLoadMore(false)
        //   : setLoadMore(true);
        page < fetchResult.total_pages ? setLoadMore(true) : setLoadMore(false);

        // Скролл по кліку на Load More із затримкою 250ms
        // if (isLoadMoreClicked) {
        //   setTimeout(() => {
        //     const item = refImage.current.getBoundingClientRect();
        //     // console.log("ImageCard item is:", item);
        //     window.scrollBy({ top: item.height * 3, behavior: "smooth" });
        //   }, 250);
        // }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetching();
  }, [queryValue, page]);

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
        {loadMore && <LoadMore />}
      </section>
    </main>
  );
}

export default MoviesPage;
