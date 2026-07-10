import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire_Img from "../../assets/fire.png";
import MovieCard from "../MovieCard/MovieCard";
import { API_KEY } from "../../assets/ApiUtils";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(API_KEY);
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data);
  };
  return (
    <section className="movie_list">
      {/*Header */}
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular
          <img src={Fire_Img} alt="fire emoji" className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li className="movie_filter_list active">8+ Star</li>
            <li className="movie_filter_list">7+ Star</li>
            <li className="movie_filter_list">6+ Star</li>
          </ul>

          <select name=" " id=" " className="movie_sorting">
            <option value="newest">SortBy</option>
            <option value="oldest">Date</option>
            <option value="rating">Rating</option>
          </select>
          <select name=" " id=" " className="movie_sorting">
            <option value="newest">Ascending</option>
            <option value="oldest">Descending</option>
          </select>
        </div>
      </header>
      {/*Movie Card*/}
      <div className="movie_cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
