import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

const MOVIE_API = "http://www.omdbapi.com/?s=man&apikey=b6e9d284";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API)
      .then(res => res.json())
      .then(jsonres => {
        setMovies(jsonres.Search);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    fetch(
      searchValue !== ""
        ? `http://www.omdbapi.com/?s=${searchValue}&apikey=b6e9d284`
        : `http://www.omdbapi.com/?s=man&apikey=b6e9d284`
    )
      .then(res => res.json())
      .then(jsonres => {
        setMovies(jsonres.Search);
        setLoading(false);
      });
  };
  const handleMovies = movies => {
    return loading ? (
      <span>loading...</span>
    ) : movies !== undefined ? (
      movies.map((movie, index) => <Movie key={index} movie={movie} />)
    ) : (
      <span>There is no movie</span>
    );
  };
  return (
    <div className="container">
      <Header appTitle="Find Movie" />
      <Search search={search} />
      <div className="row">{handleMovies(movies)}</div>
    </div>
  );
};

export default App;
