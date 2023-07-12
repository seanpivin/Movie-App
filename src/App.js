import { useState } from "react";
import { useMovies } from "./useMovies";
import { useLocalStorage } from "./useLocalStorage";
import { Logo } from "./Logo";
import { NumResults } from "./NumResults";
import { Main } from "./Main";
import { Box } from "./Box";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import { Loader } from "./Loader";
import { ErrorMsg } from "./ErrorMsg";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { WachedSummary } from "./WachedSummary";
import { WatchedMovieList } from "./WatchedMovieList";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const KEY = "e4d2af3";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const { movies, isLoading, Error } = useMovies(query);

  const [watched, setWatched] = useLocalStorage([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovieDetails() {
    setSelectedId(null);
  }

  function handleAddToWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteFromWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !Error && (
            <MovieList movies={movies} onSelctMovie={handleSelectMovie} />
          )}
          {Error && <ErrorMsg message={Error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseSelectedMovieDetails={handleCloseMovieDetails}
              onHandleAddToWatched={handleAddToWatched}
              watched={watched}
            />
          ) : (
            <>
              <WachedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteFromWatched={handleDeleteFromWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
