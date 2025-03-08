import { getMovieById } from "../api.js";
import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";

function MoviePage() {
  const { id } = useParams();
  const movie = getMovieById(id);
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";

  return (
    <main>
      <section className="container">
        <BackLink to={backLinkHref}>Back to movies</BackLink>
        <img src="https://via.placeholder.com/960x240" alt="" />
        <div>
          <h2>
            movie - {movie.name} - {id}
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi nesciunt iusto dignissimos assumenda ab quae
            cupiditate a, sed reprehenderit? Deleniti optio quasi, amet natus
            reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Impedit suscipit quisquam incidunt
            commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
          </p>
        </div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
}

export default MoviePage;
