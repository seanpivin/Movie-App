import { WatchedMovieListControler } from "./WatchedMovieListControler";

export function WatchedMovieList({ watched, onDeleteFromWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieListControler
          movie={movie}
          key={movie.imdbID}
          onDeleteFromWatched={onDeleteFromWatched}
        />
      ))}
    </ul>
  );
}
