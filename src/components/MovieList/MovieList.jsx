import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire_Img from "../../assets/fire.png";
import MovieCard from "../MovieCard/MovieCard";
import { API_KEY } from "../../assets/ApiUtils";
import FilterGroup from "./FilterGroup";
import _ from "lodash";

const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filterMovies, setFilterMovies] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`,
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
    console.log(data);
  };

  const handleFilter = (rating) => {
    if (rating === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
      return;
    } else {
      setMinRating(rating);
      const filter_movie = movies.filter(
        (movie) => movie.vote_average >= rating,
      );
      setFilterMovies(filter_movie);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prevSort) => ({ ...prevSort, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      {/*Header */}
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}
          {""}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            handleFilter={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=" "
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=" "
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      {/*Movie Card*/}
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
