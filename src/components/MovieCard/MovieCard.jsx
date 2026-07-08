import React from "react";
import "./MovieCard.css";

const MovieCard = () => {
  return <a href="#" className="movie_card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedK1S4T7FINgS5uMYlsXlRB9Q9C5gFFzxMJ-Y-3pXgg&s=10" alt="Movie Poster" className="movie_poster" />
    <h3 className="movie_title">Movie Title</h3>
    <p className="movie_description">Short description of the movie.</p>
  </a>;
};

export default MovieCard;
