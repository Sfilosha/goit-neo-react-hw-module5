import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar/NavBar";

const Home = lazy(() => import("./pages/Home"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const Movies = lazy(() => import("./pages/Movies"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/Movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
