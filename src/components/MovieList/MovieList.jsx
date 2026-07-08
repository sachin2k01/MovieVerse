import React from "react";
import "./MovieList.css";
import Fire_Img from "../../assets/fire.png";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
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
        <MovieCard />
      </div>
    </section>
  );
};

export default MovieList;
