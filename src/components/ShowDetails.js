import React from "react";
import MovieCard from "./MovieCard";
import gif from "./loading.gif";
export default function ShowDetails({ movies, isLoading, setIsLoading }) {
  // console.log(movies);
  if (isLoading === true)
    return (
      <>
        <p className="No-movie">Please Wait Loading..</p>
        <img className="loading" src={gif} alt="" className="gif-file" />
      </>
    );
  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </>
  );
}
