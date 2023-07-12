import { Movie } from "./Movie";

export function MovieList({ movies, onSelctMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelctMovie={onSelctMovie} />
      ))}
    </ul>
  );
}
