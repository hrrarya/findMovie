import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title text-center">{movie.Title}</h5>
        </div>
        <img src={movie.Poster} alt="" className="movie-poster" />
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};

export default Movie;
