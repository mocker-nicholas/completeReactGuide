import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-demo-d7f50-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Request failed ):");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }, []);

  let content;

  if (!isLoading && error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>LOADING, LOADING, LOADING</p>;
  }

  if (!isLoading && movies.length === 0 && !error) {
    content = <p>FOUND NO MOVIES</p>;
  }

  if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-demo-d7f50-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
