import React from "react";
import Moviecard from "../styles/moveCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
    </div>
  );
}
